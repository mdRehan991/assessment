import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Password = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  view: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  textinput: {
    width: windowWidth - 140,
    height: 50,
    marginLeft: 20,
    fontSize: 15,
  },
  buttonContainer: {
    justifyContent: 'center',
      marginRight: 20,
  },
});

export default Password;
