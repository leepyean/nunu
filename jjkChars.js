import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class JJKChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/yuji.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yuji Itadori</Text>

          <Text style={styles.text}>
            A teenager athlete who joins his school's Occult Club to avoid the
            track team. After finding and opening a box containing a cursed
            charm resembling a rotting finger, his school is attacked by
            phantom-like creatures known as Curses. In order to protect his
            friends, he consumes the rotting finger and becomes possessed by a
            Curse known as Ryoumen Sukuna. Yuji later joins the Tokyo
            Prefectural Jujutsu High School under the tutelage of Satoru Gojo,
            where he is placed under a sort of death sentence, which has been
            suspended until he consumes all of Sukuna's fingers in order to kill
            himself and Sukuna at the same time.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/nobara.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kugisaki Nobara</Text>

          <Text style={styles.text}>
            A sorcerer studying in first year at the Tokyo Prefectural Jujutsu
            High School under the tutelage of Gojo. She transferred to the
            college so that she could move from the countryside without any
            expenses. She meets Yuji and Megumi during her first official
            mission as a sorcerer. Nobara uses a charm weapon hammer and nails
            infused with her curse power to exorcise Curses.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/megumi.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Fushiguro Megumi</Text>

          <Text style={styles.text}>
            A sorcerer studying in first year at the Tokyo Prefectural Jujutsu
            High School under the tutelage of Satoru. He meets Yuji when trying
            to locate a high-grade cursed charm talisman at his high school. He
            is the one that convinces Satoru to try to save Yuji from his
            execution after his possession by Sukuna. Megumi uses his curse
            power to create spirits (式神, Shikigami) out of his own shadows to
            exorcise Curses. He has been noted to have high potential as a
            sorcerer by several other powerful people, including Sukuna himself.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/panda.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Panda</Text>

          <Text style={styles.text}>
            A second year student at Tokyo Prefectural Jujutsu High School who
            takes part in the Sister School Exchange Event. Although having an
            appearance of a giant panda, he is actually a unique type of Cursed
            Corpse created by Masamichi Yaga, in which not only does Panda have
            sentience, but grows and matures as he ages. Also unique to him is
            having three "cores" (the 'heart' of a Cursed Corpse), which he can
            change back and forth to unlock various abilities.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/maki.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Maki Zen'in</Text>

          <Text style={styles.text}>
            A second year student at Tokyo Prefectural Jujutsu High School.
            Along with Toge and Panda, she recruits Megumi and Nobara (and later
            Yuji) to participate in the Sister School Exchange Event with Kyoto
            Prefectural Jujutsu High School. She comes from a prestigious
            sorceror clan and is poised to be the next heir as the head's eldest
            child, but due to her low Cursed Energy, she and her twin sister Mai
            were demoted to being the clan's servants. She later left the clan
            to attend Tokyo Prefectural Jujutsu High School and become a Jujutsu
            Sorceror. Having low Cursed Energy, Maki requires the use of glasses
            to see Curses and uses a variety of weapons as Cursed Tools.
            However, being born with a Heavenly Restriction (天与呪縛, Ten'yo
            Jubaku), she possesses superhuman physical prowess, which more than
            makes up for her lack of curse power.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/toge.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Inumaki Toge</Text>

          <Text style={styles.text}>
            A second year student at Tokyo Prefectural Jujutsu High School who
            takes part in the Sister School Exchange Event alongside Maki and
            Panda. He is seen with his mouth covered and speaks only in various
            ingredients of rice balls. This is due to his cursed power
            concentrated in his voice, creating various effects against Curses
            depending on how he speaks and uses his words.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/gojo.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Gojo Satoru</Text>

          <Text style={styles.text}>
            A sorcerer working as a teacher in the Tokyo Prefectural Jujutsu
            High School. He uses his curse power to control the space around him
            in innumerable ways. Even though his title of 'The Strongest' is
            self-proclaimed, most allies and enemies alike never actually
            dispute the title and generally consider him to be one of the most
            dangerous people alive. As a result, Satoru is widely respected by
            sorcerers and holds high influence in the sorcery world. He
            convinces his superiors at the college to keep Yuji Itadori alive
            until he consumes all of Sukuna's fingers. He teaches Yuji, Megumi
            Fushiguro, and Nobara Kugisaki.
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
  image: {
    width: RFValue(110),
    height: RFValue(110),
    marginLeft: 30,
    position: 'absolute',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  text: {
    fontFamily: 'Comic Sans Ms',
    fontStyle: 'italics',
    fontWeight: 'bold',
    alignContent: 'left',
    fontSize: RFValue(10),
    color: '#244f04',
    marginTop: RFValue(40),
  },
  charName: {
    fontSize: RFValue(20),
    fontFamily: 'Comic Sans Ms',
    fontWeight: 'bold',
    alignContent: 'center',
    color: '#99650c',
    marginLeft: RFValue(200),
  },
  button: {
    width: RFValue(280),
    height: RFValue(50),
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
});
