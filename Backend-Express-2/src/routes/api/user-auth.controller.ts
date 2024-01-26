import { Request, Response } from 'express';
import { AbstractController } from '../../models/server/controller';
import { Context } from '../../context';
import { ErrorCode } from '../../models/response/error-code';
import { User } from '../../models/entities/user-auth';

export class UserController extends AbstractController {
  private SUCCESS_REGISTER_MSG = 'User registration successful';
  private FAILED_REGISTER_MSG = 'Error occurred while registering user';

  constructor(private readonly context: Context) {
    super();
    this.router
      .post('/register', this.register.bind(this));
  }

  private async register(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      this.context.logger.info('Received request to register user');
      const user : User[] = await this.context.userRepository.createUser(email, password);
      this.context.logger.info(this.SUCCESS_REGISTER_MSG);
      res.status(ErrorCode.SUCCESS.valueOf()).send(super.buildResponse(ErrorCode.SUCCESS, this.SUCCESS_REGISTER_MSG, user));
    } catch (err) {
      this.context.logger.info(this.FAILED_REGISTER_MSG);
      res.status(ErrorCode.INTERNAL_SERVER_ERROR.valueOf()).send(super.buildResponse(ErrorCode.INTERNAL_SERVER_ERROR, this.FAILED_REGISTER_MSG, undefined));
    }
  }
}
