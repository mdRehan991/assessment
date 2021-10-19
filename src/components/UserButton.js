import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const UserButton = props => {
  return (
    <View style={styles.containerMain}>
      <TouchableOpacity style={[styles.container, extra(props).bgColor]}>
        <Text style={extra(props).text}>{props.data.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    alignItems: 'center',
    marginTop: 10,
  },
  container: {
    width: windowWidth - 30,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const extra = props =>
  StyleSheet.create({
    bgColor: {
      backgroundColor: props.data.bgColor,
    },
    text: {
      color: props.data.color,
      fontSize: props.data.fontsize,
    },
  });

export default UserButton;
