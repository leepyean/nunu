import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SilentVoiceScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            A Silent Voice (Japanese: 聲の形, Hepburn: Koe no Katachi) is a 2016
            Japanese animated teen psychological drama film produced by Kyoto
            Animation, directed by Naoko Yamada and written by Reiko Yoshida,
            featuring character designs by Futoshi Nishiya and music by Kensuke
            Ushio.[3] It is based on the manga of the same name written and
            illustrated by Yoshitoki Ōima. The film premiered in Japan on
            September 17, 2016, and worldwide between February and June 2017.
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('KnkPlot')
          }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('KnkChars')
          }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            window.location.replace('https://animixplay.to/v1/koe-no-katachi-movie')
          }}>
            <Text style={styles.buttonText}>Go to movie site --></Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('SearchAnime')
          }}>
            <Text style={styles.buttonText}>Search for other shows</Text>
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
    fontFamily: 'Georgia',
    fontStyle: 'italics',
    fontWeight: 'bold',
    alignContent: 'left',
    fontSize: RFValue(12),
    color: '#0743a3',
  },
});
