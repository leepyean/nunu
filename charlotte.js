import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CharlotteScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Charlotte is a 2015 Japanese anime television series produced by
          P.A.Works and Aniplex and directed by Yoshiyuki Asai. The anime aired
          13 episodes in Japan between July 5 and September 27, 2015. An
          original video animation episode was released in March 2016. Two manga
          series were serialized in ASCII Media Works' Dengeki G's Comic. The
          story takes place in an alternate reality where a small percentage of
          children manifest superhuman abilities upon reaching puberty. A focus
          is placed on Yuu Otosaka, a high school boy who awakens the ability to
          temporarily possess others, which brings him to the attention of Nao
          Tomori, the student council president of a school founded as a haven
          for children with such abilities.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          The story was originally conceived by Jun Maeda, who also wrote the
          screenplay and composed some of the music, with original character
          design by Na-Ga. Both Maeda and Na-Ga are from the visual novel brand
          Key, and Charlotte is the second original anime series created by Key
          following Angel Beats! in 2010. Maeda had thought up the concept for
          Charlotte long before he was approached in early 2012 to work on
          another anime series after Angel Beats!. Maeda narrowed down the
          number of main characters compared to Angel Beats! and attempted to
          put more of a focus on their behavior. Instead of employing the same
          staff that had worked on Angel Beats!, the aim for Charlotte was to
          bring together a staff that would add a new variety to the creative
          process to prevent being influenced by the work done on Angel Beats!.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          Charlotte was praised for its unpredictability and evocative moments,
          but its pacing and structure have been criticized as inefficient. It
          has been described as approachable for a wide audience and for defying
          the "moe anime" stereotype. Although the comedic elements have been
          called dumb and corny, they have overall been lauded for offering some
          relief from the serious moments, which one reviewer likened to a
          palate cleanser. P.A.Works' production was praised for its beautiful
          animation sequences and expressive cinematography.
        </Text>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('CHP')
        }}>
        <Text style={styles.buttonText}>Plot</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('CHC')
        }}>
        <Text style={styles.buttonText}>Characters</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          window.location.replace('https://animixplay.to/v1/charlotte')
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
    color: '#0743a3'
  }
});