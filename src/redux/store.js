import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import PastRecordingsReducer from './PastRecordingsReducer';

export const persistConfigPastRecodings = {
  key: 'past_recordings',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  PastRecordingsReducer: persistReducer(
    persistConfigPastRecodings,
    PastRecordingsReducer,
  ),
});

export const storehere = createStore(rootReducer);
export const persistor = persistStore(storehere);
