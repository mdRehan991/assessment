import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SectionList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Realm from 'realm';
import {databaseOptions, insertNewEmployee} from '../realm/schema';
import Data from '../data/Data';

const Home = ({navigation}) => {
  const arrData = useSelector(state => state);

  const dispatch = useDispatch();
  const saveApi = val => dispatch({type: 'SAVE_API', payload: val});
  const updateOnLongpress = val =>
    dispatch({type: 'UPDATE_API_ON_LONGPRESS', payload: val});
  const deleteApi = val => dispatch({type: 'DELETE_API', payload: val});
  const reset = val => dispatch({type: 'RESET', payload: val});

  useEffect(() => {
    const getData = async () => {
      const realm = await Realm.open(databaseOptions);
      const data = realm.objects('User');
      if (data == '') {
        const resolve = await fetch('https://reqres.in/api/users');
        const userData = await resolve.json();
        const arr = userData.data.map(item => {
          const obj = {
            ...item,
            isSelected: false,
            index: -1,
            username: '',
          };
          insertNewEmployee(obj);
          return obj;
        });
        console.log(arr);
        saveApi(arr);
      } else {
        saveApi(JSON.parse(JSON.stringify(data)));
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressFunc = (item, index) => {
    if (item.isSelected) {
      deleteApi(index);
    } else {
      reset();
      navigation.navigate('Edit', {...item, index});
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={arrData}
        keyExtractor={(x, i) => i}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => onPressFunc(item, index)}
            onLongPress={() => updateOnLongpress({...item, index})}>
            {item.isSelected ? (
              <View style={styles.closeButtonContainer}>
                <Image
                  style={styles.closeButtonImage}
                  source={require('../assets/icons/closeButton.png')}
                />
              </View>
            ) : null}
            <Image style={styles.image} source={{uri: item.avatar}} />
            <Text style={styles.name}>{item.first_name}</Text>
            <Text style={styles.name}>{item.last_name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <SectionList
        sections={Data(arrData)}
        keyExtractor={(x, i) => i}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => onPressFunc(item, index)}
            onLongPress={() => updateOnLongpress({...item, index})}>
            {item.isSelected ? (
              <View style={styles.closeButtonContainer}>
                <Image
                  style={styles.closeButtonImage}
                  source={require('../assets/icons/closeButton.png')}
                />
              </View>
            ) : null}
            <Image style={styles.image} source={{uri: item.avatar}} />
            <Text style={styles.name}>{item.first_name}</Text>
            <Text style={styles.name}>{item.last_name}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flexGrow: 1,
    marginTop: 20,
  },
  container: {
    marginBottom: 20,
    marginHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  closeButtonImage: {
    width: 30,
    height: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#737373',
  },
  header: {
    fontSize: 35,
    fontWeight: '500',
    color: 'steelblue',
    marginVertical: 10,
    marginHorizontal: 40,
  },
});

export default Home;
