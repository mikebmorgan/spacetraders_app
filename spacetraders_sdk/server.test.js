// Import jest-fetch-mock at the top of your test file
const fetchMock = require('jest-fetch-mock');

// Import the fetchAgentInfo function
const { fetchAgentInfo } = require('./server');

// Mock the fetch function using fetchMock
global.fetch = fetchMock;

// Mock the agent class
class agent {
  constructor(symbol, headquarters, credits, startingFaction, shipCount) {
    this.symbol = symbol;
    this.headquarters = headquarters;
    this.credits = credits;
    this.startingFaction = startingFaction;
    this.shipCount = shipCount;
  }
}

// Mock the userBearerToken
const userBearerToken = 'mockedBearerToken';

describe('fetchAgentInfo', () => {
  it('should fetch and return agent data', async () => {

    // Mock the response data
    const mockResponse = {
      data: {
        symbol: 'A1',
        headquarters: 'HQ1',
        credits: 1000,
        startingFaction: 'Faction1',
        shipCount: 5
      }
    };

    // Set up fetchMock to respond with the mock data
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    // Call the fetchAgentInfo function
    let userAgent = await fetchAgentInfo(userBearerToken);

    // Assertions
    expect(fetchMock).toHaveBeenCalledWith('https://api.spacetraders.io/v2/my/agent', {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${userBearerToken}` }
    });

    // Ensure that the state.userAgent property is set correctly
    //expect(state.userAgent).toEqual(expect.any(agent));
    expect(userAgent.symbol).toBe(mockResponse.data.symbol);
    expect(userAgent.headquarters).toBe(mockResponse.data.headquarters);
    expect(userAgent.credits).toBe(mockResponse.data.credits);
    expect(userAgent.startingFaction).toBe(mockResponse.data.startingFaction);
    expect(userAgent.shipCount).toBe(mockResponse.data.shipCount);
  });

});
