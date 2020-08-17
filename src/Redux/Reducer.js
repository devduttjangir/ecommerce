import { TAG_SELECTED } from "./ActionType";
const initialState = {
  selectedCategory: "Entertainment",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TAG_SELECTED: {
      return { state, selectedCategory: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
