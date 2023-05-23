const mainModule = {
  state: {
    counter: 0,
    pokimons: [
      {
        name: "pica",
        age: 21,
        email: "dfiras@gmail.com",
        adress: "Amman Jordan",
      },
      {
        name: "shar",
        age: 22,
        email: "dfiras@gmail.com",
        adress: "Amman Jordan",
      },
      {
        name: "slow",
        age: 23,
        email: "dfiras@gmail.com",
        adress: "Amman Jordan",
      },
      {
        name: "me",
        age: 24,
        email: "dfiras@gmail.com",
        adress: "Amman Jordan",
      },
      {
        name: "test1",
        age: 25,
        email: "dfiras@gmail.com",
        adress: "Amman Jordan",
      },
      {
        name: "test2",
        age: 26,
        email: "dfiras@gmail.com",
        adress: "Amman Jordan",
      },
    ],
  },
  actions: {
    increaseCounterAction() {
      this.counter = this.counter + 1;
    },
    decreaseCounterAction() {
      this.counter = this.counter - 1;
    },
  },
  getters: {
    getCounter(state) {
      return state.counter * 2;
    },
    getPokimons(state) {
      return state.pokimons;
    },
  },
};

export default mainModule;
