import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class JJKScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Jujutsu Kaisen[Jp. 1] is a Japanese manga series written and
            illustrated by Gege Akutami, serialized in Shueisha's Weekly Shōnen
            Jump since March 2018. The Jujutsu Kaisen chapters are collected and
            published by Shueisha, with sixteen tankōbon volumes released as of
            June 2021. The story follows high school student Yuji Itadori as he
            joins a secret organization of Jujutsu Sorcerers in order to kill a
            powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.
            Jujutsu Kaisen is a sequel to Akutami's Tokyo Metropolitan Curse
            Technical School, serialized in Shueisha's Jump GIGA from April to
            July 2017, later collected in a tankōbon volume, as Jujutsu Kaisen
            0, in December 2018.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Jujutsu Kaisen is licensed for English-language release in North
            America by Viz Media, who publishes the manga in print since
            December 2019. Shueisha publishes the series in English on the Manga
            Plus online platform. Two novels, written by Ballad Kitaguni, were
            published in May 2019 and January 2020, respectively. A 24-episode
            anime television series adaptation by MAPPA aired on MBS from
            October 2020 to March 2021. The anime is licensed by Crunchyroll for
            streaming outside of Asia, who premiered an English dub in November
            2020. The original soundtrack of the anime was released in April
            2021.
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('JJKP')
          }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('JJKC')
          }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            window.location.replace('https://animixplay.to/v1/jujutsu-kaisen-tv')
          }}>
            <Text style={styles.buttonText}>Go to episode list --></Text>
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
