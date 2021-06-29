import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SaoPlot extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          n 2022, a virtual reality massively multiplayer online role-playing
          game (VRMMORPG) called Sword Art Online (SAO) is released. With the
          NerveGear, a helmet that stimulates the user's five senses via their
          brain, players can experience and control their in-game characters
          with their minds. Both the game and the NerveGear were created by
          Akihiko Kayaba.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          On November 6, 10,000 players log into SAO's mainframe cyberspace for
          the first time, only to discover that they are unable to log out.
          Kayaba appears and tells the players that they must beat all 100
          floors of Aincrad, a steel castle which is the setting of SAO if they
          wish to be free. He also states that those who suffer in-game deaths
          or forcibly remove the NerveGear out-of-game will suffer real-life
          deaths.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          One of the players named Kazuto "Kirito" Kirigaya, is one of 1,000
          testers in the game's previous closed beta. With the advantage of
          previous VR gaming experience and a drive to protect other beta
          testers from discrimination, he isolates himself from the greater
          groups and plays the game alone, bearing the mantle of "beater", a
          portmanteau of "beta tester" and "cheater". As the players progress
          through the game Kirito eventually befriends a young girl named Asuna
          Yuuki, forming a relationship with and later marrying her in-game.
          After the duo discover the identity of Kayaba's secret ID, who was
          playing as the leader of the guild Asuna joined in, they confront and
          destroy him, freeing themselves and the other players from the game.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          In the real world, Kazuto discovers that 300 SAO players, including
          Asuna, remain trapped in their NerveGear. As he goes to the hospital
          to see Asuna, he meets Asuna's father Shouzou Yuuki who is asked by an
          associate of his, Nobuyuki Sugou, to make a decision, which Sugou
          later reveals to be his marriage with Asuna, angering Kazuto. Several
          months later, he is informed by Agil, another SAO survivor, that a
          figure similar to Asuna was spotted on "The World Tree" in another
          VRMMORPG cyberspace called Alfheim Online (ALO). Assisted in-game by
          his cousin Suguha "Leafa" Kirigaya and Yui, a navigation pixie
          (originally an AI from SAO), he quickly learns that the trapped
          players in ALO are part of a plan conceived by Sugou to perform
          illegal experiments on their minds. The goal is to create the perfect
          mind-control for financial gain and to subjugate Asuna, whom he
          intends to marry in the real world, to assume control of her family's
          corporation. Kirito eventually stops the experiment and rescues the
          remaining 300 SAO players, foiling Sugou's plans. Before leaving ALO
          to see Asuna, Kayaba, who has uploaded his mind to the Internet using
          an experimental and destructively high-power version of NerveGear at
          the cost of his life, entrusts Kirito with The Seed – a package
          program designed to create virtual worlds. Kazuto eventually reunites
          with Asuna in the real world and The Seed is released onto the
          Internet, reviving Aincrad as other VRMMORPGs begin to thrive.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          One year after the events of SAO, at the prompting of a government
          official investigating strange occurrences in VR, Kazuto takes on a
          job to investigate a series of murders involving another VRMMORPG
          called Gun Gale Online (GGO), the AmuSphere (the successor of the
          NerveGear), and a player called Death Gun. Aided by a female player
          named Shino "Sinon" Asada, he participates in a gunfight tournament
          called the Bullet of Bullets (BoB) and discovers the truth behind the
          murders, which originated with a player who participated in a
          player-killing guild in SAO. Through his and Sinon's efforts, two
          suspects are captured, though the third suspect, Johnny Black,
          escapes.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          Kazuto is later recruited to test an experimental FullDive machine,
          Soul Translator (STL), which has an interface far more realistic and
          complex than the previous machine he had played, to help develop
          artificial intelligence for RATH, research, and development
          organization under the Ministry of Defense (MOD), named A.L.I.C.E. He
          tests the STL by entering virtual reality cyberspace created with The
          Seed package, named Underworld (UW). In the UW, the flow of time
          proceeds a thousand times faster than in the real world, and Kirito's
          memories of what happens inside are restricted. However, when Black
          ambushes and injures Kazuto with suxamethonium chloride, RATH recovers
          Kazuto and places him back into the STL to preserve his mind while
          attempts are made to save him. During his time in Underworld, Kirito
          befriends Eugeo, a carver in a small village of Rulid, and helps him
          on a journey to save Alice Zuberg, his friend who was taken by a group
          of highly skilled warriors known as the Integrity Knights for
          accidentally breaking a rule of the Axiom Church, the leaders of the
          Human Empire. He and Eugeo soon find themselves uncovering the secrets
          of the Axiom Church, led by a woman only known as "The Pontifex", and
          the true purpose of Underworld itself, while unbeknownst to them, a
          war against the opposing Dark Territory brewing on the horizon.
          Meanwhile, in the real world, conflict escalates as American forces
          raid RATH's facility in the Ocean Turtle in an effort to take
          A.L.I.C.E. for purposes unknown. Two of the attackers - Gabriel Miller
          and Vassago Cassals - take control of two Dark Territory characters as
          they unite the Dark Territory's giants, goblins, ogres, orcs, dark
          knights, dark mages, and pugilists to aid them. With help from all his
          friends, Kirito manages to stop the attackers as well as foreign
          players lured by Vassago, and safely extract A.L.I.C.E. from UW, who
          gains a physical body - with Miller and Vassago being killed in the
          process.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          One month later, Kirito and the others have their accounts forcibly
          migrated to Unital Ring, a new VRMMORPG which incorporates locations
          from all the other environments they previously visited, and
          investigate the cause while meeting some familiar faces.
        </Text>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SAO');
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
