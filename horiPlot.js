import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HoriPlot extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Kyoko Hori is a bright and popular high school student, in contrast
            to her classmate Izumi Miyamura, a gloomy and seemingly nerdy,
            glasses-wearing boy. At home, Hori is a homebody who dresses down
            and looks after her younger brother Souta. She takes every attempt
            to hide this from her classmates. Once, Souta was assisted by
            someone with numerous earrings and tattoos, as well as a punk-styled
            look, when he came home with a nosebleed one day. The person
            recognizes her and introduces himself as Miyamura. They agree to
            keep their true identities concealed from their peers, but they
            begin to relate to each other as friends and then as a couple.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('Hori')
        }}>
        <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: RFValue(270),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(35),
    backgroundColor: '#3e7309',
    shadowColor: '#000',
    marginBottom: RFValue(30),
    marginLeft: RFValue(200),

    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    fontSize: RFValue(23),
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontFamily: 'Comic Sans Ms',
    fontStyle: 'italics',
    fontWeight: 'bold',
    alignContent: 'left',
    fontSize: RFValue(12),
    color: '#0743a3',
  },
});
