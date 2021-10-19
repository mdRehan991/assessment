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

const SocialButton = props => {
  return (
    <View style={styles.containerMain}>
      <TouchableOpacity style={[styles.container, extra(props).bgColor]}>
        <Image style={styles.image} source={props.data.path} />
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
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 25,
  },
});

const extra = props =>
  StyleSheet.create({
    bgColor: {
      backgroundColor: props.data.bgColor,
    },
    text: {
      color: props.data.color,
      fontSize: 18,
    },
  });

export default SocialButton;
