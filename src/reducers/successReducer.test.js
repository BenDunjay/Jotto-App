import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";

test("returns initial state of 'false' when no action is passed", () => {
  const state = successReducer(undefined, {});
  expect(state).toBe(false);
});

test("returns state of true upon receiving the action type 'CORRECT_GUESS'", () => {
  const state = successReducer(undefined, { type: actionTypes.CORRECT_GUESS }); // undefined means default state will be taken
  expect(state).toBe(true);
});
