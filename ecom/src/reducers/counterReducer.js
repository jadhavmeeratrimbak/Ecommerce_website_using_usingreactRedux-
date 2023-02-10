import * as actionTypes from "../action/action";

const counterReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case actionTypes.ADD_COUNTER:
      let prods = [...state, action.payload];
      newState = [...prods];
      return newState;

    case actionTypes.REDUCE_COUNTER:
      const index = state.map((item) => item.name).indexOf(action.name);

      newState = [...state.slice(0, index), ...state.slice(index + 1),
        ];
      return newState;
    
   

    default:
      return state;
  }
};

export default counterReducer;
