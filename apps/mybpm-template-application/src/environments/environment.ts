// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfig } from '@ngx-kz/mybpm-models';

const WORK_PC = 'https://core2.mybpm.kz';
const LOCAL_PC = location.protocol + '//' + location.hostname + ':1313';
export const environment: EnvironmentConfig = {
  urlPrefix: WORK_PC,
  production: false,
  selenideTest: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
