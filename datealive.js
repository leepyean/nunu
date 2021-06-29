import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DateScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Date A Live (Japanese: デート・ア・ライブ, Hepburn: Dēto A Raibu) is a
          Japanese light novel series written by Kōshi Tachibana and illustrated
          by Tsunako. Fujimi Shobo published 22 volumes from March 2011 to March
          2020 under their Fujimi Fantasia Bunko imprint. Yen Press holds the
          license to publish the light novel in English.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          Five manga were published by Kadokawa Shoten and Fujimi Shobo in
          Monthly Shōnen Ace and Monthly Dragon Age. An anime television series
          adaptation animated by AIC Plus+ aired between April and June 2013. A
          second season by Production IMS aired between April and June 2014. An
          original anime film, Date A Live Movie: Mayuri Judgement, was released
          in August 2015. A spin-off light novel series, Date A Live Fragment:
          Date A Bullet, began publication in March 2017. A third season by
          J.C.Staff aired between January and March 2019. A fourth season by
          Geek Toys is set to premiere in October 2021.
        </Text>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('DatePlot')
          }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('DateChars')
          }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('DateSeason')
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
