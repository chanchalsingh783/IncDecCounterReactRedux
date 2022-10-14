import changeTheNumber from "./UpDown";
import multiplyTheNumber from "./multiply";

import { combineReducers } from "redux";
const rootReducers = combineReducers({
    changeTheNumber,
    multiplyTheNumber
});
export default rootReducers;