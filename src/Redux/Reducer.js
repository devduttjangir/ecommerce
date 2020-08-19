import { TAG_SELECTED, SHOW_LOGIN_SCREEN,SHOW_MESSAGES_SCREEN } from "./ActionType";
const initialState = {
  selectedCategory: "Entertainment",
  showLoginModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_SELECTED: {
      return { ...state, selectedCategory: action.payload };
    }
    case SHOW_LOGIN_SCREEN: {
      return { ...state, showLoginModal: action.payload };
    }
    case SHOW_MESSAGES_SCREEN:{
      return {...state,showMessagesModal:action.payload};
    }
    default:
      return state;
  }
};
export default reducer;
