export interface LoginData {
  login: string;
  password: string;
  ipAddress?: string | null;
  userAgent?: string | null;
}

export interface RefreshTokenData {
  oldRefreshToken: string;
  ipAddress?: string | null;
  userAgent?: string | null;
}
