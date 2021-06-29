import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HyoukaScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Hyouka[2] (Japanese: 氷菓, Hepburn: Hyōka, lit. "Ice Cream") is a 2001
          Japanese mystery novel written by Honobu Yonezawa. It is the first
          volume of the Classic Literature Club (古典部, Koten-bu) series. Five
          additional volumes have been published between 2002 and 2016. A manga
          adaptation drawn by Taskohna began serialization in the March 2012
          issue of Kadokawa Shoten's Shōnen Ace. A 22-episode anime adaptation
          produced by Kyoto Animation and directed by Yasuhiro Takemoto aired
          from April 22 to September 16, 2012. A live-action film, Hyouka:
          Forbidden Secrets, directed by Mari Asato and starring Kento Yamazaki
          and Alice Hirose was released on November 3, 2017.[3][4]
        </Text>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('HP');
            }}>
            <Text style={styles.buttonText}>Plot</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('HC');
            }}>
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/v1/hyouka');
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
