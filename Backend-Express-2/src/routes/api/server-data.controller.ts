import { Request, Response, response } from 'express';
import { AbstractController } from '../../models/server/controller';
import { Context } from '../../context';
import { ErrorCode } from '../../models/response/error-code';

export class ServerDataController extends AbstractController {
  private SUCCESS_SERVER_DATA_MSG = 'Successfully processed request to get server data';
  private FAILED_SERVER_DATA_MSG = 'Error occurred while processing request to get server data';

  constructor(private readonly context: Context) {
    super();
    this.router
      .get('/', this.retrieveServerData.bind(this));
    // define other endpoints here. eg: post('/', this.insertData.bind(this)), get('/:id', this.findDataByID.bind(this))
  }

  private async retrieveServerData(req: Request, res: Response) {


    try {
      this.context.logger.info('Received request to get server data');
      const serverData = await this.context.serverDataRepository.retrieveServerData();
      this.context.logger.info(this.SUCCESS_SERVER_DATA_MSG);
      res.status(ErrorCode.SUCCESS.valueOf()).send(super.buildResponse(ErrorCode.SUCCESS, this.SUCCESS_SERVER_DATA_MSG, serverData));
    } catch (err) {
      this.context.logger.info(this.FAILED_SERVER_DATA_MSG);
      res.status(ErrorCode.INTERNAL_SERVER_ERROR.valueOf()).send(super.buildResponse(ErrorCode.INTERNAL_SERVER_ERROR, this.FAILED_SERVER_DATA_MSG, undefined));
    }
  }
}
