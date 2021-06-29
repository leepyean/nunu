import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DMScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Miss Kobayashi's Dragon Maid (Japanese: 小林さんちのメイドラゴン,
            Hepburn: Kobayashi-san Chi no Meidoragon) is a Japanese manga series
            written and illustrated by Coolkyousinnjya. The series began
            serialization in Futabasha's Monthly Action magazine since May 2013
            and is licensed in North America by Seven Seas Entertainment. Four
            spin-off manga have also been serialized in Monthly Action. An anime
            television series adaptation by Kyoto Animation aired in Japan
            between January and April 2017. A second season titled Miss
            Kobayashi's Dragon Maid S is set to premiere in July 2021.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('DMP');
            }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('DMC');
            }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            window.location.replace('https://animixplay.to/v1/kobayashi-san-chi-no-maid-dragon')
          }}>
            <Text style={styles.buttonText}>Go to episode list --></Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SearchAnime');
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
