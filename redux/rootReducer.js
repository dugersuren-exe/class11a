import { combineReducers } from "redux";

//import All reducers 
import  WordsReducer  from "./words/reducers";
import  PupilReducer  from "./pupil/reducers";
import DWordsReducer from "./dwords/reducers";

export default combineReducers({
  words: WordsReducer,
  Ugs:DWordsReducer,
  pupil:PupilReducer,
});
