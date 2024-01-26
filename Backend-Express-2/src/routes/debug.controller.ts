import { AbstractController } from '../models/server/controller';
import { Context } from '../context';
import { deleteKeys } from '../utils/data-utils';

const BLACKLISTED_ENV_CONFIG_KEYS = [
  'paths',
  'settings.azure.appInsightsConnectionString',
  'settings.azure.appConfigConnectionString',
  'settings.database.username',
  'settings.database.password',
];

export class DebugController extends AbstractController {

  constructor(readonly context: Context) {
    super();

    this.router
      .get('/', (req, res) => {
        const exposedConfig = deleteKeys(this.context.config, BLACKLISTED_ENV_CONFIG_KEYS);
        res.status(200).json(exposedConfig).end();
      });
  }
}
