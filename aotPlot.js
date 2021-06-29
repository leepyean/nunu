import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AotPlot extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          The story revolves around a boy named Eren Yeager, who lives in the
          town of Shiganshina, located on the outermost of three circular walls
          protecting humanity from Titans. In the year 845, the wall is breached
          by two new types of Titans, named the Colossus Titan and the Armored
          Titan. During the incident, Eren's mother is eaten by a Titan while
          Eren escapes. He swears revenge on all Titans and enlists in the
          military along with his childhood friends, Mikasa Ackerman and Armin
          Arlert.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          During their first battle, Eren learns that he has the mysterious
          ability to turn himself into a sentient Titan, which draws the
          attention of the Survey Corps, who intends to use his newfound power
          to reclaim Wall Maria. As the battle against the Titans intensifies,
          Eren and his companions fight to defend their land while uncovering
          the mysteries about the Titans, their own civilization, and what lies
          beyond the walls.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          Eventually, Eren and those in the military alongside him discover they
          are not the only humans left alive. They are part of a race called
          Eldians, who have been exiled behind the walls for past crimes against
          another race, the Marleyans. What they previously believed to be the
          entire world is merely a small, isolated island named Paradis. Led by
          Eren Yeager and his commanding officers, the Eldians begin to wage war
          against the global fleet assembled by the Marleyans to destroy
          Paradis. Eren unleashes the Rumbling, an event which unshackles the
          millions of colossal Titans hidden inside the walls of Paradis, in an
          attempt to destroy the world and thus create eternal peace for the
          Eldians.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          With the help of the Marleyan Titan shifters, the Survey Corps stop
          the Rumbling, which has already wiped out eighty percent of humanity.
          Mikasa kills Eren, ending the power of the Titans permanently. Three
          years later, the world prepares for war between the island's
          inhabitants and the remaining countries, but Armin has hope that peace
          negotiations led by Queen Historia will be successful. Some time
          afterwards, a modernized Paradis is bombed from above and destroyed in
          the war, with the tree containing the original power of the Titans
          having regrown in the center of the rubble.
        </Text>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('Aot')
          }}
          >    
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
    color: '#0743a3'
  },
});
