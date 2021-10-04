const initialState = {
    atm: {
      1: 0,
      "2": 0,
      "5":0,
      "10": 0,
      "20":0,
      "50": 0,
      "100": 0,
      "200":0,
      "500": 0,
      "2000": 0
    }
  };
  
  export const atmData = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "DEPOSITE":
        return {
          ...state,
          atm: { ...state.atm, ...action.payload }
        };
      case "WITHDRAW":
        return {
          ...state,
          atm: { ...state.atm, ...update(state.atm, action.payload) }
        };
      default:
        return state;
    }
  };
  
  const update = (state, amount) => {
    let notes = [2000, 500, 200, 100, 50, 20 , 10, 5, 2, 1];
    let noteCounter = Array(10).fill(0);
  
    for (let i = 0; i < 10; i++) {
      if (amount >= notes[i] && state[notes[i]]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
  
        amount = amount - noteCounter[i] * notes[i];
      }
    }
  
    let res = {};
    for (let i = 0; i < 10; i++) {
      res[notes[i]] = noteCounter[i];
    }
  
    Object.keys(state).forEach((item) => {
      state[item] = state[item] - res[item];
    });
  
    return state;
  };
  