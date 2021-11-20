export const initialState = {
  data: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        data: state.data + action.payload,
      };

    case 'DECREMENT':
      return { ...state, data: state.data - action.payload };

    case 'CLEAR':
      return state;

    default:
      return state;
  }
};
