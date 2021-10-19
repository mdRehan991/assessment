import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const UserInput = props => {
  return (
    <View style={styles.inputContainerMain}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={props.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerMain: {
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    width: windowWidth - 30,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  input: {
    width: windowWidth - 140,
    height: 50,
    marginLeft: 20,
    fontSize: 15,
  },
});

export default UserInput;
