import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DitfScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Darling in the Franxx (Japanese: ダーリン・イン・ザ・フランキス,
            Hepburn: Dārin In Za Furankisu), abbreviated as DarliFra (ダリフラ,
            DariFura),[6] is a 2018 Japanese science fiction romance anime
            television series co-produced by A-1 Pictures and Trigger, and
            animated by Trigger and CloverWorks that premiered on January 13,
            2018.[7][8] The series was announced at Trigger's Anime Expo 2017
            panel in July 2017.[9] A manga adaptation by Kentaro Yabuki and
            another four-panel comic strip manga began serialization on January
            14, 2018.[10]
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Darling in the Franxx is set in a dystopian future where children
            are artificially created and indoctrinated solely to defend the
            remnants of civilization. The story follows a squad of ten pilots,
            particularly focusing on the partnership between Hiro, a former
            prodigy, and Zero Two, a hybrid human and elite pilot who aspires to
            become entirely human.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            The animation began international distribution simultaneously upon
            its domestic release. The streaming service Crunchyroll
            internationally simulcast the series, with Aniplus Asia simulcasting
            the series in Southeast Asia. Service partner Funimation began the
            dubbed release of the series on February 1, 2018.[11][12]
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('DitfPlot')
        }}>
        <Text style={styles.buttonText}>Plot</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('DitfChars')
        }}>
        <Text style={styles.buttonText}>Character</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          window.location.replace('https://animixplay.to/v1/darling-in-the-franxx')
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
