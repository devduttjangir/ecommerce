import { TAG_SELECTED } from "./ActionType";

export const tagSelected = (category) => ({
  type: TAG_SELECTED,
  payload: category,
});
