export interface LoginResponse {
  id: string;
  username: string;
  playType: string;
  accessToken: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
