import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class TqqScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            he Quintessential Quintuplets (Japanese: 五等分の花嫁, Hepburn:
            Go-Tōbun no Hanayome, lit. "Five Equal Bride(s)") is a Japanese
            manga series written and illustrated by Negi Haruba. It was
            serialized in Kodansha's Weekly Shōnen Magazine from August 2017 to
            February 2020. The series follows the daily life of a high school
            student Futaro Uesugi, who is hired as a private tutor for a group
            of identical quintuplets: Ichika, Nino, Miku, Yotsuba, and Itsuki
            Nakano. At the very beginning of the story, it is indicated Futaro
            will marry one of the Nakano Quintuplets but the identity of the
            bride is unknown until near the end of the story.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            The Quintessential Quintuplets (Japanese: 五等分の花嫁, Hepburn:
            Go-Tōbun no Hanayome, lit. "Five Equal Bride(s)") is a Japanese
            manga series written and illustrated by Negi Haruba. It was
            serialized in Kodansha's Weekly Shōnen Magazine from August 2017 to
            February 2020. The series follows the daily life of a high school
            student Futaro Uesugi, who is hired as a private tutor for a group
            of identical quintuplets: Ichika, Nino, Miku, Yotsuba, and Itsuki
            Nakano. At the very beginning of the story, it is indicated Futaro
            will marry one of the Nakano Quintuplets but the identity of the
            bride is unknown until near the end of the story.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            The series is published in English by Kodansha USA under the
            Kodansha Comics imprint. The anime series is licensed in North
            America under a Crunchyroll–Funimation partnership. An anime
            television series adaptation produced by Tezuka Productions aired
            from January to March 2019 on TBS and other channels. A second
            season produced by Bibury Animation Studios aired from January to
            March 2021. The second season's sequel will be released as a film in
            2022.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            The series is a commercial success, being the 5th best-selling manga
            in 2019, and the 3rd best-selling manga in the first half of 2020 in
            Japan. In 2019, the manga won the award for the shōnen category at
            the 43rd annual Kodansha Manga Awards.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('TqqPlot')
        }}
        >
        <Text style={styles.buttonText}>Plot</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('TqqChars')
        }}
        >
        <Text style={styles.buttonText}>Characters</Text>
        </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('TqqSeasons')
          }}>
            <Text style={styles.buttonText}>Go To Episode List --></Text>
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
