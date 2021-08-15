import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import RecordScreen from 'react-native-record-screen';
import Video from 'react-native-video';
import Record from './Record';
import {connect} from 'react-redux';
import BottomSheet from '@gorhom/bottom-sheet';
import Past from './Past';

var state_here = {};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function AppHomePage() {
  const [recordedUrl, setRecordedUrl] = useState('');
  const videoPlayRef = useRef(null);
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

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
    console.log(res + 'res');
    if (res) {
      const url = res.result.outputURL;
      console.log(url + 'url');
      setRecordedUrl(url);
    }
  }

  function ShowVideo() {
    if (recordedUrl.length > 3) {
      return (
        <Video
          source={{uri: recordedUrl}} // Can be a URL or a local file.
          ref={videoPlayRef} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
      );
    } else {
      return <View />;
    }
  }

  return (
    <View style={styles.container_view}>
      <Text style={styles.default_text}>S Recorder</Text>
      <Text style={styles.default_text}>{recordedUrl}</Text>
      <View style={styles.button_view_wrap}>
        <Record />
      </View>
      <ShowVideo />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <Past />
        </View>
      </BottomSheet>
    </View>
  );
}

const mapStateToProps = state => {
  state_here = state;
  return state_here;
};

export default connect(mapStateToProps)(AppHomePage);

const styles = StyleSheet.create({
  container_view: {
    flex: 1,
    backgroundColor: '#1C2125',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  default_text: {
    fontSize: 21,
    color: '#CCCCCC',
    marginHorizontal: windowHeight * 0.1,
    marginTop: windowHeight * 0.05,
  },
  button_view_wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  backgroundVideo: {
    width: 600,
    height: 600,
  },
  record_button_container: {},
});
