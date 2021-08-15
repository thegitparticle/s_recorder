import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Video from 'react-native-video';

var state_here = {};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Past() {
  var recordings_here = state_here.PastRecordingsReducer.past_recordings;

  var new_recording = state_here.CurrentRecordReducer.show;

  console.log(new_recording + 'new');

  const videoPlayRef = useRef(null);

  function ShowVideo() {
    if (new_recording.length > 6) {
      return (
        <Video
          source={{uri: new_recording}} // Can be a URL or a local file.
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

  if (new_recording.length === 0) {
    return (
      <View style={styles.overall_view}>
        <Text style={styles.empty_text}>no recodings yet</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.overall_view}>
        <Text style={styles.empty_text}>yes recodings</Text>
        <ShowVideo />
      </View>
    );
  }
}

const mapStateToProps = state => {
  state_here = state;
  return state_here;
};

export default connect(mapStateToProps)(Past);

const styles = StyleSheet.create({
  overall_view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty_text: {
    fontSize: 21,
    color: '#333',
    marginHorizontal: windowHeight * 0.1,
    marginTop: windowHeight * 0.05,
  },
  backgroundVideo: {
    width: 600,
    height: 600,
  },
});
