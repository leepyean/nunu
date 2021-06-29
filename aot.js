import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AotScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin,
            lit. "The Advancing Giants") is a Japanese manga series written and
            illustrated by Hajime Isayama. It is set in a world where humanity
            lives inside cities surrounded by three enormous walls that protect
            them from the gigantic man-eating humanoids referred to as Titans;
            the story follows Eren Yeager, who vows to exterminate the Titans
            after a Titan brings about the destruction of his hometown and the
            death of his mother. Attack on Titan was serialized in Kodansha's
            monthly Bessatsu Shōnen Magazine from September 2009 to April 2021,
            with its chapters collected in 34 tankōbon volumes.
          </Text>          
          <Text style={[styles.text, { marginTop: 8 }]}>
           An anime
            television series was produced by Wit Studio (seasons 1–3) and MAPPA
            (season 4). A 25-episode first season was broadcast from April to
            September 2013, followed by a 12-episode second season broadcast
            from April to June 2017. A 22-episode third season was broadcast in
            two parts, with the first 12 episodes airing from July to October
            2018 and the last 10 episodes airing from April to July 2019. A
            fourth and final season premiered in December 2020, airing 16
            episodes in its first part, with the remainder announced to air in
            early 2022.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('AotPlot')
        }}
        >
        <Text style={styles.buttonText}>Plot</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('AotChars')
        }}
        >
        <Text style={styles.buttonText}>Characters</Text>
        </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('AotSeasons')
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
  }
});
