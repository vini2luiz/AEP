class DFA {
    currentState: number;
    acceptStates: Set<number>;
    transitionTable: { [key: string]: number };
  
    constructor() {
      this.currentState = 0;
      this.acceptStates = new Set([2]);
      this.transitionTable = {
        '0a': 1, '0b': 1, '0c': 1, '0d': 1, '0e': 1, '0f': 1, '0g': 1, '0h': 1, '0i': 1, '0j': 1,
        '0k': 1, '0l': 1, '0m': 1, '0n': 1, '0o': 1, '0p': 1, '0q': 1, '0r': 1, '0s': 1, '0t': 1,
        '0u': 1, '0v': 1, '0w': 1, '0x': 1, '0y': 1, '0z': 1,
        '1a': 1, '1b': 1, '1c': 1, '1d': 1, '1e': 1, '1f': 1, '1g': 1, '1h': 1, '1i': 1, '1j': 1,
        '1k': 1, '1l': 1, '1m': 1, '1n': 1, '1o': 1, '1p': 1, '1q': 1, '1r': 1, '1s': 1, '1t': 1,
        '1u': 1, '1v': 1, '1w': 1, '1x': 1, '1y': 1, '1z': 1,
        '1_': 2, '2a': 2, '2b': 2, '2c': 2, '2d': 2, '2e': 2, '2f': 2, '2g': 2, '2h': 2, '2i': 2,
        '2j': 2, '2k': 2, '2l': 2, '2m': 2, '2n': 2, '2o': 2, '2p': 2, '2q': 2, '2r': 2, '2s': 2,
        '2t': 2, '2u': 2, '2v': 2, '2w': 2, '2x': 2, '2y': 2, '2z': 2, '2_': 2
      };
    }
  
    transition(char: string): void {
      const key = `${this.currentState}${char}`;
      this.currentState = this.transitionTable[key] ?? 0;
    }
  
    validate(input: string): boolean {
      this.currentState = 0;
      for (const char of input) {
        this.transition(char);
      }
      return this.acceptStates.has(this.currentState);
    }
  }
  
  const dfa = new DFA();
  console.log(dfa.validate('username_123')); // true or false
  