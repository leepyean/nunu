import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class JJKPlot extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Yuji Itadori is an unnaturally fit high school student living in
            Sendai with his grandfather. He regularly avoids the track team due
            to the time commitment required for it, despite his innate talent
            for the sport. Instead, he chooses to join the Occult Research Club;
            due to the freedom it allows him in attending, he goes to visit his
            dying grandfather in the hospital every day. On his deathbed, his
            grandfather instills two powerful messages within Yuji: "always help
            people" and "die surrounded by people". These two ideas seemingly
            stem from his grandfather's own regrets. After his grandfather's
            death, Yuji interprets these messages as one statement: everyone
            deserves "a proper death". He is then confronted by Megumi
            Fushiguro, a sorcerer who informs him of a high-grade cursed charm
            talisman at his school that Yuji recently made contact with. His
            friends at the Occult Club unsealed the talisman, a rotting finger,
            which attracted Curses to the school, creatures that are brought
            about through negative emotions and are strengthened by consuming
            magical powers present in sorcerers or such charms. Unable to defeat
            the Curses due to his lack of magical powers, Yuji swallows the
            finger to protect Megumi and his friends and becomes the host of
            Ryomen Sukuna, a powerful Curse. Due to Sukuna's evil nature, all
            sorcerers are required to exorcise him (and by extension, Yuji)
            immediately. However, despite being possessed, Yuji is still able to
            retain control over his body for the most part. Seeing this, Satoru
            Gojo, Megumi's teacher, decides to take him to the Tokyo Prefectural
            Jujutsu High School to propose a plan to his superiors: postpone
            Yuji's death sentence until he consumes all of Sukuna's fingers,
            allowing them to kill Sukuna once and for all.[3]
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('JJK')
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
