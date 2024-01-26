import { createLogger, format, transports, add } from 'winston';
import * as appInsights from 'applicationinsights';
import { Config } from '../config';

const { combine, timestamp } = format;

export function loggerFactory(config: Config) {
  return createLogger({
    defaultMeta: {
      component: 'Roamify - Backend'
    },
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      })
    ),
    transports: [
      new transports.Console({
        level: config.settings.logLevel,
        format: format.simple(),
        debugStdout: true,
      })
    ]
  });
}

export function addApplicationInsightsLogger(config: Config) {
  try {
    appInsights
      .setup(config.settings.azure.appInsightsConnectionString)
      .setAutoDependencyCorrelation(true)
      .setAutoCollectRequests(true)
      .setAutoCollectPerformance(true, true)
      .setAutoCollectExceptions(true)
      .setAutoCollectDependencies(true)
      .setAutoCollectConsole(true)
      .setUseDiskRetryCaching(true)
      .setSendLiveMetrics(false)
      .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
      .start();

    // add(new AzureApplicationInsightsLogger({ insights: appInsights }));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}
