import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HoriScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Hori-san to Miyamura-kun (堀さんと宮村くん, lit. "Hori and
            Miyamura") is a Japanese shōnen web manga series written and
            illustrated by Hiroki Adachi, under the pseudonym Hero. It was
            self-published on Hero's website, Dokkai Ahen, from February 2007 to
            December 2011 in a four-panel format. The series received a print
            publication by Square Enix, who compiled the chapters in ten volumes
            under its imprint Gangan Comics from October 2008 to December 2011.
            Additional side-story chapters were compiled as Hori-san to
            Miyamura-kun Omake (堀さんと宮村くん おまけ). Since 2012, Hori-san
            to Miyamura-kun was adapted into an original video animation series.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Daisuke Hagiwara adapted the manga under Hero's supervision under
            the title Horimiya (ホリミヤ), which was serialized in Monthly G
            Fantasy from October 2011 to March 2021,[1] and is published in
            English by Yen Press.[2] An anime television series adaptation of
            Horimiya by CloverWorks aired from January to April 2021. A live
            action and TV drama adaptation premiered in February 2021.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('HoriPlot');
            }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('HoriChars');
            }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            window.location.replace('https://animixplay.to/v1/horimiya')
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
