import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';

const {width} = Dimensions.get('window');

const Edit = ({navigation, route}) => {
  const [state, setState] = useState({
    id: route.params.id,
    email: route.params.email,
    first_name: route.params.first_name,
    last_name: route.params.last_name,
    avatar: route.params.avatar,
    username: route.params.username,
    index: route.params.index,
    isSelected: route.params.isSelected,
  });
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();
  const updateApi = val => dispatch({type: 'UPDATE_API', payload: val});

  const saveFunction = () => {
    if (state.email !== '' && state.username !== '') {
      updateApi(state);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container1}>
        <View>
          <Image style={styles.image} source={{uri: state.avatar}} />
          <TouchableOpacity
            style={styles.editContainer}
            activeOpacity={0.8}
            onPress={() => setEditable(!editable)}>
            <Image
              style={styles.editImage}
              source={require('../assets/icons/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nameContainer}>
          <TextInput
            style={[
              styles.nameInput,
              styles.nameMargin,
              editable ? styles.nameBorder : null,
            ]}
            defaultValue={state.first_name}
            maxLength={10}
            editable={editable}
            onChangeText={val => setState({...state, first_name: val})}
          />
          <TextInput
            style={[styles.nameInput, editable ? styles.nameBorder : null]}
            defaultValue={state.last_name}
            maxLength={10}
            editable={editable}
            onChangeText={val => setState({...state, last_name: val})}
          />
        </View>
        <Text style={styles.text2}>Senior Designer</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          defaultValue={state.email}
          onChangeText={val => setState({...state, email: val})}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="@username"
          defaultValue={state.username}
          onChangeText={val => setState({...state, username: val})}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          defaultValue="@Ed1"
          secureTextEntry
        />
        <Text style={styles.label}>Birth Date (Optional)</Text>
        <View style={styles.birthDateContainer}>
          <TextInput style={styles.birthDateInput} defaultValue="14" />
          <TextInput style={styles.birthDateInput} defaultValue="April" />
          <TextInput style={styles.birthDateInput} defaultValue="1994" />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={saveFunction}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#3a85fd',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  editImage: {
    width: 18,
    height: 18,
  },
  nameContainer: {
    // width: width - 80,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  nameInput: {
    height: 30,
    fontSize: 25,
    fontWeight: '600',
  },
  nameMargin: {
    marginRight: 10,
  },
  nameBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  text2: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5,
    color: '#808080',
  },
  container2: {
    marginHorizontal: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#a6a6a6',
  },
  input: {
    height: 30,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  birthDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  birthDateInput: {
    width: width / 3 - 45,
    height: 30,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: '#ff8080',
    position: 'absolute',
    bottom: 90,
    right: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ff8080',
  },
});

export default Edit;
