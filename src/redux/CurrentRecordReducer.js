import {NEW_RECORDING} from './types';

const INITIAL_STATE = {
  show: '/lmao',
};

const CurrentRecordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_RECORDING:
      var show = action.payload;

      const newState = {show};

      return newState;
    default:
      return state;
  }
};

export default CurrentRecordReducer;
