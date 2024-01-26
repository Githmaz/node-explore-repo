import { AbstractController } from '../models/server/controller';
import { Context } from '../context';
import { Request, Response } from 'express';
import { ServerDataController } from './api/server-data.controller';
import { UserController } from './api/user-auth.controller';

export class ApiController extends AbstractController {

  constructor(readonly context: Context) {
    super();

    this.router
      .get('/', this.welcome.bind(this))
      .use('/server-data', new ServerDataController(context).router)
      .use('/user-auth',new UserController(context).router);
    // define other controllers here. eg: .use('/customer', new CustomerController(context).router)
  }

  private async welcome(req: Request, res: Response) {
    res.json({ message: `${this.context.config.app.name} v${this.context.config.app.version}` });
  }
}
