import { Controller, Get, OperationId, Request, Route, Security, Tags } from 'tsoa';
import { AuthProvider, UserResponse } from '../../common/UserResponse';

@Route('user')
@Tags('user')
export class UserController extends Controller {
  /**
   * Returns information about the currently logged in user.
   */
  @Get()
  @Security('jwt')
  @OperationId('Get user info')
  public async getUser(@Request() request: Express.Request): Promise<UserResponse> {
    return {
      userId: 'userId',
      firstName: 'firstName',
      lastName: 'lastName',
      authProvider: AuthProvider.Google,
    };
  }
}
