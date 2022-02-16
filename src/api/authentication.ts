import { Request } from 'express';
import { TokenInfo } from '../common/TokenInfo';

export const expressAuthentication = async (
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<TokenInfo> => {
  return {
    userId: 'userId',
    isValid: true,
    isExpired: false,
    scopes: [],
  };
};
