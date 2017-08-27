import React from 'react';
import { 
  TouchableHighlight, 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';

import { connect } from 'react-redux';
import Header from './components/Header';


const window = Dimensions.get('window');
const Main = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles


  return (
    <View  style={container}>
      <Header headerText={'Trucker Radio'} />
      <Image
        style={ styles.songImage }
        source={{uri: props.playerData.data.cover,
                      width: window.width - 30,
                      height: 300}}/>
      <Text style={ styles.songTitle }>
        { props.playerData.data.title }
      </Text>
      <Text style={ styles.artist }>
        { props.playerData.data.artist }
      </Text>
      <View style={ styles.sliderContainer }>
        <View style={ styles.timeInfo }>
          <Text style={ styles.time }>{ 0  }</Text>
          <Text style={ styles.timeRight }>- { '63:00' }</Text>
        </View>
        <Slider
          onSlidingStart={ () => {} }
          onSlidingComplete={ () => {} }
          onValueChange={ () => {} }
          minimumTrackTintColor='#851c44'
          style={ styles.slider }
          trackStyle={ styles.sliderTrack }
          thumbStyle={ styles.sliderThumb }
          value={ 0 }/>
      </View>
      <View style={ styles.controls }>
        <TouchableHighlight onPress={ () => {} }>
          <Icon style={ styles.back } name="ios-skip-backward" size={25} color="#87CEFA" />
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => {} }>
          <Icon style={ styles.play } name="ios-play" size={70} color="#87CEFA" />
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => {} }>
          <Icon style={ styles.forward } name="ios-skip-forward" size={25} color="#87CEFA" />
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => {} }>
          <View>
            <Icon style={ styles.likes } name={ props.playerData.data.is_liked ? "ios-thumbs-up" : "ios-thumbs-up-outline"} size={18} color="#000" />
            <Text style={ styles.likesText }>{props.playerData.data.likes}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  },
  mainContent: {
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  songImage: {
    marginBottom: 20,
  },
  songTitle: {
    color: "#000",
    fontFamily: "Helvetica Neue",
    marginBottom: 10,
    marginTop: 13,
    fontSize: 16,
    width: window.width - 100,
    textAlign: 'center',
  },
  artist: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  likes: {
    flexDirection: 'row',
    marginTop: 26,
  },
  likesText: {
    fontSize: 10,
  },
  sliderContainer: {
    width: window.width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#000',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#000',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#87CEFA',
    borderRadius: 10 / 2,
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

function mapStateToProps (state) {
  return {
    playerData: state.playerData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);