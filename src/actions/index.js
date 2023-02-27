export const APPLY_NUMBER = "APPLY_NUMBER";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const READ_MEMORY = "READ_MEMORY";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY="CLEAR_DISPLAY";
export const addMemory = (item) => {
  return ({ type: APPLY_MEMORY, payload: item });
}
export const addOne = () => {
  return ({ type: ADD_ONE});
}
export const clearDisplay = () => {
  return ({ type: CLEAR_DISPLAY});
}
export const clearMemory = (item) => {
  return ({ type: CLEAR_MEMORY, payload: item });
}
export const readMemory = () => {
  return ({ type: READ_MEMORY});
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperator = (operation) => {
  return ({ type: CHANGE_OPERATION, payload: operation });
}