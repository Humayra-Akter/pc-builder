export const ADD_COMPONENT = "ADD_COMPONENT";
export const REMOVE_COMPONENT = "REMOVE_COMPONENT";

export const addComponent = (category, component) => ({
  type: ADD_COMPONENT,
  payload: { category, component },
});

export const removeComponent = (category) => ({
  type: REMOVE_COMPONENT,
  payload: { category },
});
