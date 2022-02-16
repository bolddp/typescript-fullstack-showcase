import { Controller, Get, OperationId, Route, Tags } from 'tsoa';
import { AliveResponse } from '../../common/AliveResponse';

@Route('alive')
@Tags('alive')
export class AliveController extends Controller {
  /**
   * Returns the build number that the API is currently based on.
   */
  @Get()
  @OperationId('Ping')
  public async getAlive(): Promise<AliveResponse> {
    return {
      buildNumber: 'BUILD_NUMBER',
    };
  }
}
