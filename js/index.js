import * as server from '/spacetraders_sdk/server.js';

let bearerToken;

function forceGetBearerToken() {
  bearerToken = prompt('Please enter Bearer Token');
  if (!bearerToken) forceGetBearerToken();
}

$(document).ready(async function() {
  forceGetBearerToken();
  let header = document.createElement('space-traders-header', {is: 'space-traders-header'});
  let data = await server.fetchAgentInfo(bearerToken);
  Object.keys(data).forEach((key) => {
    header.setAttribute(key, data[key]);
  });
  $(document.body).append(header);
});