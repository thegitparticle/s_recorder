import {NEW_RECORDING} from './types';

export const CurrentRecordActions = new_record => {
  return dispatch => {
    dispatch({type: NEW_RECORDING, payload: new_record});
  };
};
