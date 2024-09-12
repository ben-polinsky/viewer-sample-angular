/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
// This file is replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.local.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authorization: {
    clientId: "spa-MIKi89nz6jpX8H5fz6IYcW978",
    scope: "itwin-platform",
    redirectUri: "https://viewersampleangular-dvlg--3000--28a8ce1b.local-credentialless.webcontainer.io/",
    postSignoutRedirectUri: "https://viewersampleangular-dvlg--3000--28a8ce1b.local-credentialless.webcontainer.io/",
    responseType: "code",
    authority: "https://ims.bentley.com"
  },
  iTwinId: "",
  iModelId: "",
  map: {
    bingKey: ""
  }
};