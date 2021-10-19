import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import UserInput from './UserInput';
import Password from './Password';
import UserButton from './UserButton';
import SocialButton from './SocialButton';

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

const UserButtonData = [
  {
    text: 'Forgot Password?',
    color: '#000',
    bgColor: '#fff',
    fontsize: 15,
  },
  {
    text: 'Sign In',
    color: '#fff',
    bgColor: '#000',
    fontsize: 18,
  },
];

const SignUp = () => {
  return (
    <View>
      <UserInput text="Your Email Address" />
      <Password />
      <UserButton data={UserButtonData[0]} />
      <UserButton data={UserButtonData[1]} />
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
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "#fff",
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

export default SignUp;
