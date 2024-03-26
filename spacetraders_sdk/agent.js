class Agent {
  #symbol;
  #headquarters;
  #credits;
  #startingFaction;
  #shipCount;

  constructor(symbol, headquarters, credits, startingFaction, shipCount) {
    this.#symbol = symbol;
    this.#headquarters = headquarters;
    this.#credits = credits;
    this.#startingFaction = startingFaction;
    this.#shipCount = shipCount;
  }

  get symbol() {
    return this.#symbol;
  }

  set symbol(newSymbol) {
    this.#symbol = newSymbol;
  }

  get headquarters() {
    return this.#headquarters;
  }

  set headquarters(newHeadquarters) {
    this.#headquarters = newHeadquarters;
  }

  get credits() {
    return this.#credits;
  }

  set credits(newCredits) {
    this.#credits = newCredits;
  }

  get startingFaction() {
    return this.#startingFaction;
  }

  set startingFaction(newStartingFaction) {
    this.#startingFaction = newStartingFaction;
  }

  get shipCount() {
    return this.#shipCount;
  }

  set shipCount(newShipCount) {
    this.#shipCount = newShipCount;
  }

  getAllProperties() {
    return {
      symbol: this.#symbol,
      headquarters: this.#headquarters,
      credits: this.#credits,
      startingFaction: this.#startingFaction,
      shipCount: this.#shipCount
    };
  }
}

export default Agent;
