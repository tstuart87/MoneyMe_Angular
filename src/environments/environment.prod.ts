export let APIURL = '';

switch (window.location.hostname) {
  case 'efamoneyme.herokuapp.com':
    APIURL = 'https://moneyme20191203011048.azurewebsites.net'
    break;
    default:
      APIURL = 'https://localhost:44325'
}

export const environment = {
  production: true
};
