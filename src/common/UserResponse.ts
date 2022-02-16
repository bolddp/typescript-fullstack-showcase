export enum AuthProvider {
  UserNameAndPassword = 'UserNameAndPassword',
  Facebook = 'Facebook',
  Google = 'Google',
}

export interface UserResponse {
  userId: string;
  firstName: string;
  lastName: string;
  authProvider: AuthProvider;
}
