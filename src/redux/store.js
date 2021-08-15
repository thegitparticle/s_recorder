import {createStore, applyMiddleware, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import PastRecordingsReducer from './PastRecordingsReducer';
import thunk from 'redux-thunk';
import CurrentRecordReducer from './CurrentRecordReducer';

export const persistConfigPastRecordings = {
  key: 'past_recordings',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  PastRecordingsReducer: persistReducer(
    persistConfigPastRecordings,
    PastRecordingsReducer,
  ),
  CurrentRecordReducer,
});

export const storehere = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(storehere);
