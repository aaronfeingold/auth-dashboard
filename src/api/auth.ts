// Mock Auth API
import type { User } from "../types/auth";

const MOCK_USER: User = {
  id: "1",
  email: "user@example.com",
  name: "Demo User",
};

export function login(
  email: string,
  password: string
): Promise<{ token: string; user: User }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        resolve({ token: "mock-token", user: MOCK_USER });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
}

export function logout(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export function getUser(token: string): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (token === "mock-token") {
        resolve(MOCK_USER);
      } else {
        resolve(null);
      }
    }, 500);
  });
}
