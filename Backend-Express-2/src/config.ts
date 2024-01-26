import path from 'node:path';
import { ParsedArgs } from 'minimist';
import { name as appName, version as appVersion } from '../package.json';


export type EnvName = 'local' | 'dev' | 'test' | 'qa' | 'prod';

type EndpointType = {
  url: string;
  key?: string;
  originatingSystem?: string;
};

export interface Config {
  env: {
    name: EnvName;
  };
  app: {
    name: string;
    version: string;
    buildId?: string;
  };
  settings: {
    server: {
      hostName: string;
      port: number;
    };
    database: {
      name: string;
      hostname: string;
      username: string;
      password: string;
      requestTimeout: string;
    };
    azure: {
      clientId: string;
      appInsightsConnectionString: string;
      appConfigConnectionString: string;
    };
    useCache: boolean;
    logLevel: string;
  };
  paths: {
    root: string;
  };
}

export interface Args extends ParsedArgs {
  cache: boolean;
  local: boolean;
}

export function resolveConfig(args?: Args): Config {
  const envName = process.env.ENV_NAME as EnvName;
  console.log('eeee:', process.env.DB_USER);
  return {
    app: {
      name: appName,
      version: appVersion,
      buildId: process.env.BUILD_ID
    },
    env: {
      name: envName
    },
    settings: {
      server: {
        hostName: process.env.IP || '0.0.0.0',
        port: JSON.parse(process.env.PORT) || 8080,
      },
      database: {
        name: process.env.DB_NAME,
        hostname: process.env.DB_SERVER,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        requestTimeout: process.env.DB_REQUEST_TIMEOUT
      },
      azure: {
        clientId: process.env.AZURE_CLIENT_ID,
        appInsightsConnectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING || process.env.AD_APP_INSIGHTS_INSTRUMENT_KEY,
        appConfigConnectionString: process.env.AZURE_APP_CONFIG_CONNECTION_STRING,
      },
      useCache: args.cache,
      logLevel: process.env.LOG_LEVEL || 'debug',
    },
    paths: {
      root: path.resolve('.'),
    },
  };
}
