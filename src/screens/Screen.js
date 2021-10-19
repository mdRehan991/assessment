import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import SignUp from '../components/SignUp';
import Join from '../components/Join';

const Screen = () => {
  const [state, setState] = useState(1);

  return (

    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => setState(1)}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setState(2)}>
          <Text style={styles.text}>Join</Text>
        </TouchableOpacity>
      </View>
      <View>{state === 1 ? <SignUp /> : <Join />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 45,
  },
  button: {
    height: 70,
    justifyContent: 'center',
    borderColor: "#e6b400",
    borderBottomWidth: 3,
  },
  text: {
    fontSize: 30,
  },
});

export default Screen;
