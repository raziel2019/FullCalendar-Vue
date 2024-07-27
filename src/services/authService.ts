import apiClient from "@/api";

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

interface AuthResponse {
    message: string;
    user: string;
    token: string;
    status: string;
}

export const login = async (data: LoginData): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/login', data);
    return response.data;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/register', data);
    return response.data;
}; 