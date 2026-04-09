export interface UserData {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  cart: CartItemData[];
}

export interface CartItemData {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

const API_URL = "https://e-commerce-server-group1.onrender.com/api";

// This variable "handles" the data so the UI doesn't crash
let usersCache: UserData[] = [];

// This function pulls data from the server and updates our local variable
async function sync() {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (response.ok) {
      usersCache = await response.json();
    }
  } catch (e) {
    console.error("Server connection failed");
  }
}

// Start syncing as soon as the file is loaded
sync();

// --- USER OPERATIONS ---

export function getAllUsers(): UserData[] {
  return usersCache; 
}

export function getUserById(userId: string): UserData | null {
  return usersCache.find(u => u.id === userId) || null;
}

export function getUserByEmail(email: string): UserData | null {
  return usersCache.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export function getUserByUsername(username: string): UserData | null {
  return usersCache.find(u => u.username.toLowerCase() === username.toLowerCase()) || null;
}

export async function createUser(username: string, email: string, password: string) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });
  const newUser = await res.json();
  if (newUser) {
    usersCache.push(newUser);
    return newUser;
  }
  return null;
}

export function authenticateUser(email: string, password: string): UserData | null {
  return usersCache.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password) || null;
}

export async function updateUser(userId: string, updates: Partial<UserData>) {
  await fetch(`${API_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  await sync();
  return true;
}

export async function deleteUser(userId: string) {
  await fetch(`${API_URL}/users/${userId}`, { method: 'DELETE' });
  usersCache = usersCache.filter(u => u.id !== userId);
  return true;
}

// --- CART OPERATIONS ---

export function getUserCart(userId: string): CartItemData[] {
  const user = getUserById(userId);
  return user ? user.cart : [];
}

export async function addToUserCart(userId: string, item: CartItemData) {
  await fetch(`${API_URL}/users/${userId}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  await sync();
  return true;
}

// RESTORING MISSING EXPORT
export async function removeFromUserCart(userId: string, itemId: number) {
  await fetch(`${API_URL}/users/${userId}/cart/${itemId}`, { method: 'DELETE' });
  await sync();
  return true;
}

// RESTORING MISSING EXPORT
export async function updateCartItemQuantity(userId: string, itemId: number, quantity: number) {
  await fetch(`${API_URL}/users/${userId}/cart/${itemId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity }),
  });
  await sync();
  return true;
}

export async function clearUserCart(userId: string) {
  await fetch(`${API_URL}/users/${userId}/cart`, { method: 'DELETE' });
  await sync();
  return true;
}

// --- DEBUG & SETUP ---

export async function clearDatabase() {
  await fetch(`${API_URL}/database/clear`, { method: 'POST' });
  usersCache = [];
}

export function getDatabase() {
  return { users: usersCache, version: "1.0.0" };
}