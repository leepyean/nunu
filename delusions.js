import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DelusionsScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Love, Chunibyo & Other Delusions (Japanese: 中二病でも恋がしたい!,
            Hepburn: Chūnibyō demo Koi ga Shitai!, "Even with Eighth Grader
            Syndrome, I Want to Be in Love"), also known as Chū-2 for short, is
            a Japanese light novel series written by Torako, with illustrations
            provided by Nozomi Ōsaka. The work won an honorable mention in the
            Kyoto Animation Award competition in 2010, leading the company to
            assume its publication starting in June 2011. The series follows a
            high school boy named Yūta Togashi, who tries to discard his
            embarrassing past grandiose delusions, until he meets a girl named
            Rikka Takanashi, who exhibits her own signs of chūnibyō syndrome. As
            their relationship progresses, Yūta and Rikka form a club called the
            Far East Magical Napping Society Summer Thereof with classmates
            Shinka Nibutani, Kumin Tsuyuri and Sanae Dekomori, who each have
            their own unique delusional behaviors.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            A 12-episode anime adaptation by Kyoto Animation aired in Japan
            between October 4 and December 19, 2012, with six six-minute Lite
            episodes streamed on YouTube. The anime is licensed by Sentai
            Filmworks for release in North America. An animated film was
            released in September 2013, and a second anime season, Love,
            Chunibyo & Other Delusions -Heart Throb-, aired between January and
            March 2014. A second animated film featuring a new story, Love,
            Chunibyo & Other Delusions! Take on Me was released in 2018.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('DP')
        }}>
        <Text style={styles.buttonText}>Plot</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('DC')
        }}>
        <Text style={styles.buttonText}>Characters</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('TokaSeason')
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
