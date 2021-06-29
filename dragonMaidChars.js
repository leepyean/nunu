import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DMChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/ko.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kobayashi</Text>

          <Text style={styles.text}>
            A normal programmer and office worker who suddenly finds herself
            living with a dragon after removing a divine sword from it on a
            drunken night. While typically stoic and kind-hearted, she can get
            wild when drunk. She will usually get hangovers resulting in the
            cast having to wait on her hand and foot. She has a particular
            fascination with maids.[6] She is occasionally mistaken as a boy,
            due to her lack of feminine features, particularly her flat chest.
            Her first name is unknown. In chapter 97 of the manga she finally
            confesses her feelings to Tohru, and the two begin dating.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/tohru.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Tohru</Text>

          <Text style={styles.text}>
            A female dragon of the Chaos faction who comes from another world
            called the dragon realm who is capable of using magic to perform
            such tasks as "perception-blocking", which causes people to simply
            overlook her, repairing damage she may have caused, or transforming
            between a dragon and a human. After her life is saved by Kobayashi,
            she falls in love with her and starts living in her flat as a
            maid.[6] She usually retains her horns when changing into human
            shape, and occasionally retains her tail. She is commonly mistaken
            for a cosplayer due to her appearance. A running gag involves her
            attempting to feed Kobayashi pieces of her tail (which she can
            regenerate) with her cooking as a sign of affection and a sign of
            love. In chapter 97 of the manga Kobaysahi finally confesses her
            feelings to Tohru, and the two begin dating.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/kanna.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kanna Kamui</Text>

          <Text style={styles.text}>
            Tohru's friend from the dragon realm who was exiled from her world
            for pulling too many pranks on other dragons and wound up living
            with Kobayashi as well. Although she is much older than she appears,
            she is very young by dragon standards, equivalent to a primary
            school student at Oborozuka Elementary School (朧ズカ 小学校,
            Oborozuka Shōgakkō), which she attends as a third grade student
            bearing Kobayashi's surname. She initially assumes that Kobayashi
            seduced Tohru into staying and wanted her to return to their
            original world. She grows increasingly attached to Kobayashi as the
            series progresses, viewing her as a mother figure. Kanna's basis and
            tribal attire are inspired by the culture of the indigenous natives
            of Hokkaido and claims to be from Ushishir. She bears feather-like
            horns and a thin tail ending in a bulb, and is capable of recharging
            her depleted magical energy with electricity. She is the crush of
            Riko Saikawa, which she reciprocates and the two state they want to
            marry each other.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('DM');
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
