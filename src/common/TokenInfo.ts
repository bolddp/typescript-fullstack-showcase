export interface TokenInfo {
  userId: string;
  isValid: boolean;
  isExpired: boolean;
  scopes?: string[];
}
