export interface User {
    id: string;
    username: string;
    email: string;
    password: string; // In a real application, avoid storing passwords in plain text
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}