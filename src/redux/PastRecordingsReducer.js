import {ADD_RECORDING} from './types';

const INITIAL_STATE = {
  past_recordings: ['/lol'],
};

const PastRecordingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case ADD_RECORDING:
      var past_recordings = action.payload;

      const newState = {past_recordings};

      return newState;
    default:
      return state;
  }
};

export default PastRecordingsReducer;
