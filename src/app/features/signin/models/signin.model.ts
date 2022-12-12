export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  jwtAccess: string;
  jwtRefresh?: string;
  userResponseDTO: {
    id: string,
    image: string,
    name: string,
    email: string,
    birthday: string,
    gender: string,
    country: string,
    role: string
  };
}
