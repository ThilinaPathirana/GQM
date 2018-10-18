// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  consoleWarning: [{
    text: 'Welcome to Rubix developer console...!',
    style: 'color: blue; font-family: "Times New Roman", Times, serif; font-weight:bold; font-size: 2em',
  }],

  // Loglevels
  appLogLevel: 4,
  serverLogLevel: 0,
  enableRouteTracing: false,
  doNotRedirectToLoginOnReload: false,    // if this is true reloading rubix will not refirect to login page for reauthentication
  appVersion: 1.1815,    // require('../app-config.json').buildParams.version,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
