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

export interface MusicList {
  id: string;
  urlPath: string;
  title: string;
  releaseDate: string;
}

export interface Music {
  id: string;
  userId: string;
  songId: string;
  orderId: number;
  title: string;
  urlPath: string;
}
