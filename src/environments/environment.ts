// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import { RequestHeader } from 'src/app/shared/models/http/requestHeader.model';
import { TokenRequestHeader } from 'src/app/shared/models/http/tokenRequestHeader.model';

// The list of file replacements can be found in `angular.json`.
const TOKEN_HEADER: TokenRequestHeader = {
  Accept: 'application/json',
  'api-token':
    'MIODaCVkGeXtl-sbwd5g9BUrLg15J26jZ8asDeOSMfPcOR0P149RNys04UWXP6VtiJc',
  'user-email': 'eyx60181@cuoly.com',
};

function getHeader(authToken: string): RequestHeader {
  return {
    Authorization: 'Bearer ' + authToken,
    Accept: 'application/json',
  };
}

export const environment = {
  production: false,

  AUTH_TOKEN: '',

  GET_TOKEN_URL: 'https://www.universal-tutorial.com/api/getaccesstoken',
  GET_TOKEN_REQUEST_HEADER: TOKEN_HEADER,

  GET_REQUEST_HEADER: (authToken: string) => getHeader(authToken),

  GET_COUNTRIES_URL: 'https://www.universal-tutorial.com/api/countries',
  POST_COUNTRIES_URL: '',

  GET_STATES_URL: 'https://www.universal-tutorial.com/api/states/',

  POST_STATES_URL: '',

  GET_CITIES_URL: 'https://www.universal-tutorial.com/api/cities/',
  POST_CITIES_URL: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
