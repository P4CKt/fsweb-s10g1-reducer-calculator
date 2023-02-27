import { ADD_ONE,APPLY_MEMORY, APPLY_NUMBER, CHANGE_OPERATION ,CLEAR_MEMORY,READ_MEMORY,CLEAR_DISPLAY} from './../actions';

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1*1 + num2*1;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    default:
      return;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case (APPLY_MEMORY):
      return ({
        ...state,
        memory: state.total
      });
    case (CLEAR_MEMORY):
      return ({
        ...state,
        memory: initialState.total
      });
    case (READ_MEMORY):
      return ({
        ...state,
        total: calculateResult( state.total,state.memory, state.operation)
      });
      case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload
      });
    case (CLEAR_DISPLAY):
      return ({
        ...state,
        total: initialState.total
      });

    default:
      return state;
  }
}

export default reducer;