import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DitfPlot extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Pushed to the brink of extinction in a post apocalyptic world,
            humanity is under constant threat from giant creatures known as
            klaxosaurs (叫竜, kyoryū), which are sub-divided into at least four
            categories based on their size: "Conrad",[d] "Mohorovičić",[e]
            "Gutenberg"[f] and "(Super) Lehmann".[g] Pushed to the brink of
            annihilation, parasites are raised to pilot giant mecha known as
            Franxx[h] (フランキス, Furankisu) in boy-girl pairs. A male parasite
            is termed a "stamen" and a female parasite is referred to as a
            "pistil" (the male and female reproductive parts of a flower,
            respectively). Parasites are artificially-created and have short
            lifespans.
          </Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            A team of ten parasites is assigned to the experimental Squad 13 of
            Plantation 13. One of them, Hiro (Code:016), is a former
            pilot-candidate prodigy who can no longer synchronize with his
            partner and they both fail to complete the training program. While
            skipping his squad's graduation ceremony, Hiro encounters Zero Two
            (Code:002), an elite Franxx pilot with klaxosaur blood, red horns,
            and an infamous reputation as the "Partner Killer". It is rumored
            that Zero Two's partners are killed after pairing with her by the
            third time. Shortly after, a Klaxosaur attacks, disrupting Hiro's
            graduation ceremony and leaving Zero Two's partner killed in action.
            Despite the rumors, Hiro volunteers to become her new partner, or as
            Zero Two calls him, her "darling".
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Ditf');
            }}>
            <Text style={styles.buttonText}>Go Back</Text>
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
    fontFamily: 'Comic Sans Ms',
    fontStyle: 'italics',
    fontWeight: 'bold',
    alignContent: 'left',
    fontSize: RFValue(12),
    color: '#0743a3',
  },
});
