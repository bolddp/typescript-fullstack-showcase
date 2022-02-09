import { Controller, Get, Route } from 'tsoa';
import { AliveResponse } from '../../common/AliveResponse';

@Route('alive')
export class AliveController extends Controller {
  @Get()
  public async getAlive(): Promise<AliveResponse> {
    return {
      buildNumber: 'BUILD_NUMBER',
    };
  }
}
