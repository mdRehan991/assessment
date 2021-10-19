import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import UserInput from './UserInput';
import Password from './Password';
import UserButton from './UserButton';
import SocialButton from './SocialButton';

import RadioForm from 'react-native-simple-radio-button';

import CheckBoxx from '@react-native-community/checkbox';

const windowWidth = Dimensions.get('window').width;

const socialButtonData = [
  {
    path: {
      uri: 'https://img.icons8.com/color/48/000000/google-logo.png',
    },
    text: 'Sign in with Google',
    color: '#000',
    bgColor: '#fff',
  },
  {
    path: {
      uri: 'https://img.icons8.com/ios-filled/50/ffffff/facebook.png',
    },
    text: 'Sign in with Facebook',
    color: '#fff',
    bgColor: '#3a5992',
  },
  {
    path: {
      uri: 'https://img.icons8.com/ios-filled/50/ffffff/mac-os.png',
    },
    text: 'Sign in with Apple',
    color: '#fff',
    bgColor: '#000',
  },
];

const UserButtonData = {
  text: 'Sign In',
  color: '#fff',
  bgColor: '#000',
  fontsize: 18,
};

const radio_props = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
];

const Join = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <UserInput text="First Name" />
      <UserInput text="Last Name" />
      <UserInput text="Your Email" />
      <Password />
      <View style={styles.phoneContainerMain}>
        <View style={styles.phoneContainer}>
          <View style={styles.phoneView}>
            <Image
              style={styles.phoneImage}
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/square-world-flags/180/flag_us_america_united_states_square-512.png',
              }}
            />
            <Text>+1</Text>
            <Text style={styles.phoneText}>|</Text>
          </View>
          <View>
            <TextInput
              style={styles.phoneInput}
              placeholder="123456789"
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
        </View>
      </View>
      <View style={styles.radioContainer}>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          onPress={value => {}}
          formHorizontal={true}
          buttonColor={'#ffa21f'}
          buttonSize={10}
          style={styles.radio}
        />
      </View>
      <View style={styles.checkboxContainerMain}>
        <View style={styles.checkboxContainer}>
          <View>
            <CheckBoxx
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              boxType="square"
              animationDuration={0.2}
              onCheckColor="#4d4d4d"
              onFillColor="#ffe433"
              tintColor="#d9d9d9"
              onTintColor="#ffe433"
              style={styles.checkboxz}
            />
          </View>
          <View style={{width: windowWidth - 80}}>
            <Text>
              Be the First to know about new arrivals, sales & promos by
              submitting your email! You can opt out at any time. Privacy Policy
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 20}}>
        <UserButton data={UserButtonData} />
      </View>
      <View>
        <View style={styles.line}></View>
        <View style={styles.lineConatiner}>
          <Text style={styles.lineText}>or</Text>
        </View>
      </View>
      <View>
        <SocialButton data={socialButtonData[0]} />
        <SocialButton data={socialButtonData[1]} />
        <SocialButton data={socialButtonData[2]} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.fbText1}>Don't have an account?</Text>
          <Text style={styles.fbText2}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  phoneContainerMain: {
    alignItems: 'center',
    marginTop: 10,
  },

  phoneContainer: {
    flexDirection: 'row',
    width: windowWidth - 30,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },

  phoneView: {
    width: 140,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  phoneImage: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },

  phoneText: {
    fontSize: 25,
    fontWeight: '200',
    color: '#d9d9d9',
  },

  phoneInput: {
    width: windowWidth - 140,
    height: 50,
    fontSize: 15,
  },

  radioContainer: {
    width: 210,
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    justifyContent: 'center',
  },

  radio: {
    justifyContent: 'space-between',
  },

  checkboxContainerMain: {
      alignItems: 'center', 
      marginVertical: 10,
    },

    checkboxContainer: {
        flexDirection: 'row', 
        width: windowWidth - 30,
    },

    checkboxz: {
        height: 15,
    },

  line: {
    marginVertical: 40,
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
  },
  lineConatiner: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
    borderRadius: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 20,
    left: windowWidth / 2 - 20,
  },
  lineText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#8c8c8c',
  },

  footer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    width: windowWidth - 30,
    height: 70,
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#b3b3b3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fbText1: {
    color: '#808080',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 15,
  },
  fbText2: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default Join;
