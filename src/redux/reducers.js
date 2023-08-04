import { ADD_COMPONENT, REMOVE_COMPONENT } from "./actions";

const initialState = {
  selectedComponents: {
    CPU: null,
    Motherboard: null,
    RAM: null,
    PowerSupply: null,
    Storage: null,
    Monitor: null,
  },
};

const pcBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return {
        ...state,
        selectedComponents: {
          ...state.selectedComponents,
          [action.payload.category]: action.payload.component,
        },
      };
    case REMOVE_COMPONENT:
      return {
        ...state,
        selectedComponents: {
          ...state.selectedComponents,
          [action.payload.category]: null,
        },
      };
    default:
      return state;
  }
};

export default pcBuilderReducer;
