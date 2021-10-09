import { createStore } from "redux";
import { hawkEyeReducer } from "./hawkEyeReducer";

export const store = createStore(hawkEyeReducer);