export const count = (state = 0, action) => {
  switch (action.type) {
    case "change":
      return action.payload;
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};
