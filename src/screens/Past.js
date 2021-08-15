import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';

var state_here = {};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Past() {
  if (state_here.PastRecordingsReducer.past_recordings.length > 0) {
    return (
      <View style={styles.overall_view}>
        <Text style={styles.empty_text}>no recodings yet</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.overall_view}>
        <Text style={styles.empty_text}>yes recodings</Text>
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
});
