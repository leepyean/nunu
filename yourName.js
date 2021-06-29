import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class YourNameScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Your Name (Japanese: 君の名は。, Hepburn: Kimi no Na wa) is a 2016
            Japanese animated romantic fantasy film produced by CoMix Wave Films
            and released by Toho. It depicts a high school boy in Tokyo and a
            high school girl in the Japanese countryside who suddenly and
            inexplicably begin to swap bodies.
          </Text>

          <Text style={[styles.text, { marginTop: 8}]}>
            The film was commissioned in 2014, written and directed by Makoto
            Shinkai. It features the voices of Ryunosuke Kamiki and Mone
            Kamishiraishi, with animation direction by Masashi Ando, character
            design by Masayoshi Tanaka, and its orchestral score and soundtrack
            composed by Radwimps. A light novel of the same name, also written
            by Shinkai, was published a month prior the film's premiere.
          </Text>

          <Text style={[styles.text, { marginTop: 8}]}>
            Your Name premiered at the 2016 Anime Expo in Los Angeles on July 3,
            2016, and was theatrically released in Japan on August 26, 2016, and
            in the United States on April 7, 2017. It received generally
            favorable reviews, with praise for the animation, music, and
            emotional weight. The film grossed over ¥41.44 billion (US$380.15
            million) worldwide.
          </Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            The film won Best Animated Feature Film at 49th Sitges Film
            Festival, the 2016 Los Angeles Film Critics Association Awards, and
            the 71st Mainichi Film Awards, and was nominated for Best Animation
            of the Year at the 40th Japan Academy Prize.[3] A live-action remake
            by Paramount Pictures set in the United States is currently in
            development.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('YourNamePlot')
        }}
        >
        <Text style={styles.buttonText}>Plot</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('YourNameChar')
        }}
        >
        <Text style={styles.buttonText}>Characters</Text>
        </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            window.location.replace('https://animixplay.to/v1/kimi-no-na-wa')
          }}>
            <Text style={styles.buttonText}>Go To Movie Site --></Text>
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
    color: '#0743a3'
  },
});
