import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ListAccount = props => {

  return (
    <FlatList
      listKey={props.keyz}
      scrollEnabled={false}
      data={props.data.list}
      keyExtractor={(x, i) => i}
      renderItem={({item}, i) => (
        <View style={styles.listMain}>
          <TouchableOpacity style={[styles.listContainerMain, styles.bgColor]}>
            <View style={styles.listContainer1}>
              <Image style={styles.listImage} source={item.path} />
              <Text>{item.text}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                {item.flag ? (
                  <Image style={styles.listImage} source={item.flag} />
                ) : null}
              </View>

              <View>
                {item.text1 ? (
                  <Text style={{marginRight: 15}}>{item.text1}</Text>
                ) : null}
              </View>

              <Image style={styles.listImage1} source={props.data.icon} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listMain: {
    alignItems: 'center',
  },

  listContainerMain: {
    width: windowWidth - 50,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listContainer1: {
    flexDirection: 'row',
  },

  listImage: {
    width: 18,
    height: 18,
    marginRight: 15,
  },

  listImage1: {
    width: 18,
    height: 18,
  },

  bgColor: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
});

export default ListAccount;
