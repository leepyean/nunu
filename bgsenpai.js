import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class BgsScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Rascal Does Not Dream of Bunny Girl Senpai,[a] known in Japan as
            Seishun Buta Yarō (Japanese: 青春ブタ野郎), is a Japanese light
            novel series written by Hajime Kamoshida and illustrated by Keiji
            Mizoguchi. ASCII Media Works have published eleven volumes since
            April 2014 under their Dengeki Bunko imprint. A manga adaptation
            with art by Tsugumi Nanamiya has been serialized in ASCII Media
            Works' seinen manga magazine Dengeki G's Comic since December 2015.
            An anime television series adaptation of the first five volumes by
            CloverWorks aired from October to December 2018. An anime film
            adaptation emphasizing series volumes six and seven titled Rascal
            Does Not Dream of a Dreaming Girl premiered in June 2019.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('BgsPlot');
            }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('BgsChars');
            }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace(
                'https://animixplay.to/v1/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai'
              );
            }}>
            <Text style={styles.buttonText}>Go To Episode List --></Text>
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
