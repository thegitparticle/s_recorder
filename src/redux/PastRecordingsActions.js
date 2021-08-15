import {ADD_RECORDING} from './types';

export const PastRecordingsActions = new_record => {
  return dispatch => {
    var res = new_record;
    dispatch({type: ADD_RECORDING, payload: res});
  };
};
