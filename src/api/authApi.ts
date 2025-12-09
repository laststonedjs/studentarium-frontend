import { Alert } from "react-native";
import { API_BASE_URL } from "./config";

const BASE_URL = `${API_BASE_URL}/api/auth`; // backend URL

export const registerUser = async (
  email: string, 
  password: string,
  name: string,
  username: string,
  faculty: string,
  major: string | null,
  city: string | null
) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, username, faculty, major, city }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data.user; // [id, email, created_at, ...]
  } catch (error: any) {
    Alert.alert("Error", error.message);
    throw error;
  }
};

type LoginResponse = {
  user: {
    id: number;
    email: string;
  };
  token: string;
  message?: string;
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if(!response.ok) { throw new Error(data.message || "Login Failed")};

    return data as LoginResponse;
  } catch (error: any) {
    Alert.alert("Error", error.message);
    throw error;
  }
}