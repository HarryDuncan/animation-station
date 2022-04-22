import { combineReducers, Reducer } from "redux";
import digitalArtSlice from "./digital-art/digitalArt.slice";
import music from "./music/music.reducer";

export type IGlobalState = ReturnType<typeof rootReducer>;

const appReducer = combineReducers({
  music,
  digitalArtSlice,
});

export const rootReducer: Reducer<ReturnType<typeof appReducer>> = (
  state,
  action
) => {
  return appReducer(state, action);
};
