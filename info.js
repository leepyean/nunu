import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import db from '../config';
import firebase from 'firebase'; 

export default class InfoScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  userSignUp = (email, password, confirmPassword) => {
    if (password != confirmPassword) {
      return alert("password doesn't  match/Check it");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users').add({
            email: this.state.email,
            password: this.state.password,
          });
          return alert('User Added Successfully', '', [
            {
              text: 'OK',
              //Pending
            },
          ]);
        });
    }
  };

  userLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {        
        this.props.navigation.navigate('SearchAnime')        
      });
      
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>AnimeLab</Text>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="enter email"
            keyboardType="email-address"
            onChangeText={(a) => {
              this.setState({
                email: a,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            placeholder="enter password"
            secureTextEntry={true}
            onChangeText={(a) => {
              this.setState({
                password: a,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            placeholder="confirm your password"
            secureTextEntry={true}
            onChangeText={(a) => {
              this.setState({
                confirmPassword: a,
              });
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(
                this.state.email,
                this.state.password,
                this.state.confirmPassword
              );
            }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="enter your email"
            keyboardType="email-address"
            onChangeText={(a) => {
              this.setState({
                email: a,
              });
            }}
            value={this.state.email}
          />

          <TextInput
            style={styles.loginBox}
            placeholder="enter your password"
            secureTextEntry={true}
            onChangeText={(a) => {
              this.setState({
                password: a,
              });
            }}
            value={this.state.password}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userLogin(this.state.email, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: '500',
    paddingBottom: 30,
    color: 'blue',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: 'white',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'purple',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
  },
  buttonText: {
    color: 'yellow',
    fontWeight: '400',
    fontSize: 20,
  },
});
