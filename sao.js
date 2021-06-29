import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SaoScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Sword Art Online (Japanese: ソードアート・オンライン, Hepburn: Sōdo
            Āto Onrain) is a Japanese light novel series written by Reki
            Kawahara and illustrated by abec. The series takes place in the near
            future and focuses on protagonist Kazuto "Kirito" Kirigaya and Asuna
            Yuuki as they play through various virtual reality MMORPG worlds.
            Kawahara originally wrote the series as a web novel on his website
            from 2002 to 2008. The light novels began publication on ASCII Media
            Works' Dengeki Bunko imprint from April 10, 2009, with a spin-off
            series launching in October 2012. The series has spawned twelve
            manga adaptations published by ASCII Media Works and Kadokawa. The
            novels and the manga adaptations have been licensed for release in
            North America by Yen Press.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            An anime television series produced by A-1 Pictures, known simply as
            Sword Art Online, aired in Japan between July and December 2012,
            with a television film Sword Art Online: Extra Edition airing on
            December 31, 2013, and a second season, titled Sword Art Online II,
            airing between July and December 2014. An animated film titled Sword
            Art Online The Movie: Ordinal Scale, featuring an original story by
            Kawahara, premiered in Japan and Southeast Asia on February 18,
            2017, and was released in the United States on March 9, 2017. A
            spin-off anime series titled Sword Art Online Alternative Gun Gale
            Online premiered in April 2018, while a third season titled Sword
            Art Online: Alicization aired from October 2018 to September 2020.
            An anime film adaptation of Sword Art Online: Progressive titled
            Sword Art Online Progressive: Aria of a Starless Night is set to
            premiere in Q4 2021. A live-action series will be produced by
            Netflix. Six video games based on the series have been released for
            multiple consoles.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Sword Art Online has received widespread commercial success, with
            the light novels having over 26 million copies sold worldwide. The
            light novel series had good reviews, mainly on later arcs, while
            other series like Progressive were praised since the beginning. The
            anime series has received mixed to positive reviews, with praise for
            its animation, musical score and exploration of the psychological
            aspects of virtual reality, but criticisms for its pacing and
            writing.
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('SaoPlot')
          }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('SaoChars')
          }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('SaoSeasons')
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
