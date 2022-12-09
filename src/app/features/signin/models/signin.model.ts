export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  jwtAccess: string;
  jwtRefresh?: string;
  userResponseDTO?: string;
}
