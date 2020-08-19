import { TAG_SELECTED, SHOW_LOGIN_SCREEN ,SHOW_MESSAGES_SCREEN} from "./ActionType";

export const tagSelected = (category) => ({
  type: TAG_SELECTED,
  payload: category,
});

export const showLoginScreen = (shouldShow) => ({
  type: SHOW_LOGIN_SCREEN,
  payload: shouldShow,
});

export const showMessagesScreen=(shouldShow)=>({
  type: SHOW_MESSAGES_SCREEN,
  payload:shouldShow,
})
