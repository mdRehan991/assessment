import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import SignUp from '../components/SignUp';
import Join from '../components/Join';

const Screen = () => {
  const [state, setState] = useState({
    id: 1,
    a: styles.sign,
    b: null
  });

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, state.a]}
          onPress={() =>
            setState({id: 1, a: styles.sign, b: null})
          }>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, state.b]}
          onPress={() =>
            setState({id: 2, a: null, b: styles.sign})
          }>
          <Text style={styles.text}>Join</Text>
        </TouchableOpacity>
      </View>
      <View>{state.id === 1 ? <SignUp /> : <Join />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 45,
  },
  button: {
    height: 70,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },

  sign: {
    borderColor: '#e6b400',
    borderBottomWidth: 3,
  },
});

export default Screen;
