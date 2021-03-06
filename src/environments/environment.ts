// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken:  'pk.eyJ1IjoiaW5zaWdodC1hY2NvdW50cyIsImEiOiJjaW43dnkzcHYwMDN6d3ZrbjJsdnAxcHAzIn0.pZoVAUzlkxtU7sGHG3MW2Q'
  },
  youtube: {
    apiKey: 'AIzaSyAPpx2k72uf7ilYxS_kURSTCLcCIr81yJc',
    clientId: '966693210085-qms9l7qrl2kjhhhk2j4ou5h1g10ke415.apps.googleusercontent.com'
  }
};

