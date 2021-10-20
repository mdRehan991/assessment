import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Screen from './Screen';
import Data from '../components/Data';
import {Data2} from '../components/Data';
import ListAccount from '../components/ListAccount';
import ZScrollView from '../components/ZScrollView';

const windowWidth = Dimensions.get('window').width;

const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeView}>
      <ZScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome!</Text>
          <View>
            <Modal
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}>
              <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View>
                    <Pressable
                      style={styles.crossButton}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.crossText}>X</Text>
                    </Pressable>
                    <Screen />
                  </View>
                </ScrollView>
              </SafeAreaView>
            </Modal>
            <Pressable
              style={styles.pressButton}
              onPress={() => setModalVisible(true)}>
              <Text>SIGN IN   |   JOIN</Text>
            </Pressable>
          </View>
          <View>
            <Image
              style={styles.headerImage}
              source={{
                uri: 'https://img.icons8.com/pastel-glyph/512/000000/person-male.png',
              }}
            />
          </View>
        </View>

        <View style={styles.line}></View>

        <View>
          <ListAccount data={Data} keyz={1} />
        </View>

        <View style={styles.line}></View>

        <View>
          <ListAccount data={Data2} keyz={2} />
        </View>

        <View>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.fbText1}>App Version4.0.6(1)</Text>
          </TouchableOpacity>
        </View>
      </ZScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#fff',
  },

  header: {
    height: 150,
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 15,
    marginLeft: 30,
  },

  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 0.6,
    borderColor: '#ffd11a',
    backgroundColor: '#fffae6',
    position: 'absolute',
    bottom: 10,
    right: 30,
  },

  pressButton: {
    width: 130,
    height: 30,
    marginLeft: 30,
    backgroundColor: '#fffae6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  crossButton: {
    alignItems: 'flex-end',
  },

  crossText: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 20,
  },

  line: {
    width: windowWidth,
    height: 10,
    backgroundColor: '#e6e6e6',
  },

  footerButton: {
    width: windowWidth,
    height: 70,
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 0.5,
    borderBottomColor: '#b3b3b3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fbText1: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Account;
