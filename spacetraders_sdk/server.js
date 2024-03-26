import { default as Agent } from './agent.js';

async function fetchAgentInfo(bearerToken){
  const url = 'https://api.spacetraders.io/v2/my/agent';
  const options = {
    method: 'GET',
    headers: {Accept: 'application/json', Authorization: `Bearer ${bearerToken}`}
  }

  const response = await fetch(url, options)
  const jsonResponse = await response.json()
  const data = jsonResponse.data

  let userAgent = new Agent(data.symbol, data.headquarters, data.credits, data.startingFaction, data.shipCount);

  return userAgent.getAllProperties();

}

export { fetchAgentInfo }
