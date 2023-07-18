const initialState = {
    count: 0,
    title: 'Increment/Decrement Calculator',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1,
        };
      case 'RESET':
        return {
          ...state,
          count: 0,
        };
    case 'SET_COUNT':
        return{
            ...state,
            count: Number(action.payload),
        }
      case 'SET_TITLE':
        return {
          ...state,
          title: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  