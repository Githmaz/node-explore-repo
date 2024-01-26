import { Context } from '../context';
import { AbstractController } from '../models/server/controller';
import { ApiController } from './api.controller';
import { DebugController } from './debug.controller';

export class RootController extends AbstractController {

  constructor(readonly context: Context) {
    super();

    this.router
      .use('/api', new ApiController(context).router)
      .use('/debug', new DebugController(context).router);
  }
}
