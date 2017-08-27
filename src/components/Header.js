import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> { headerText } </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB8C44',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    width: window.width
  },
  textStyle: {
    fontSize: 20,
    color: '#FFF'
  }
};

export default Header;