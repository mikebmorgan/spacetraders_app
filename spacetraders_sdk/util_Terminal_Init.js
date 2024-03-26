// Import the fetchAgentInfo function
const { fetchAgentInfo } = require('./server');

let userBearerToken = process.argv[2]
let state = {};

async function init(){
  state.userAgent = await fetchAgentInfo(userBearerToken)
  console.log(state.userAgent.getAllProperties());
}
init()
