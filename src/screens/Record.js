import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import RecordScreen from 'react-native-record-screen';
import {PastRecordingsActions} from '../redux/PastRecordingsActions';
import {CurrentRecordActions} from '../redux/CurrentRecordActions';
import {connect} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var state_here = {};

function Record({dispatch}) {
  const [recordingMode, setRecordingMode] = useState(false);

  var recordings_here = state_here.PastRecordingsReducer.past_recordings;

  const toggleRecording = () => {
    setRecordingMode(!recordingMode);
  };

  function CleanUp() {
    RecordScreen.clean();
  }

  function StartRecord() {
    RecordScreen.startRecording({mic: false}).catch(error =>
      console.log(error),
    );
    console.log('starting record');
  }

  async function StopRecord() {
    const res = await RecordScreen.stopRecording().catch(error =>
      console.log(error),
    );
    if (res) {
      const url = res.result.outputURL;
      // console.log(url + 'url');
      dispatch(CurrentRecordActions(url));
    }
  }

  function RecordButton() {
    if (recordingMode) {
      return (
        <Button
          title="stop"
          icon={
            <Icon name="stop-circle" type="feather" size={15} color="#1C2125" />
          }
          titleStyle={styles.stop_button_title_style}
          buttonStyle={styles.stop_button_style}
          onPress={() => {
            toggleRecording();
            StopRecord();
            dispatch(PastRecordingsActions([...recordings_here, '/rofl']));
          }}
        />
      );
    } else {
      return (
        <Button
          title="start"
          icon={<Icon name="play" type="feather" size={15} color="#1C2125" />}
          titleStyle={styles.start_button_title_style}
          buttonStyle={styles.start_button_style}
          onPress={() => {
            toggleRecording();
            StartRecord();
          }}
        />
      );
    }
  }

  return (
    <View style={styles.overall_wrap}>
      <RecordButton />
    </View>
  );
}

const mapStateToProps = state => {
  state_here = state;
  return state_here;
};

export default connect(mapStateToProps)(Record);

const styles = StyleSheet.create({
  overall_wrap: {
    height: windowHeight * 0.2,
    width: windowWidth,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  stop_button_style: {
    backgroundColor: 'firebrick',
    elevation: 5,
    shadowColor: 'firebrick',
    width: windowWidth * 0.5,
    height: windowWidth * 0.15,
    borderRadius: windowWidth * 0.075,
  },
  start_button_style: {
    backgroundColor: 'springgreen',
    elevation: 10,
    shadowColor: 'springgreen',
    width: windowWidth * 0.5,
    height: windowWidth * 0.15,
    borderRadius: windowWidth * 0.075,
  },
  start_button_title_style: {
    color: '#1C2125',
    marginHorizontal: 5,
    fontFamily: 'sans-serif-medium',
  },
  stop_button_title_style: {
    color: '#1C2125',
    marginHorizontal: 5,
    fontFamily: 'sans-serif-medium',
  },
});
