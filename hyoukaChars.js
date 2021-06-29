import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HyoukaChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/oreki.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Hotaro Oreki</Text>

          <Text style={styles.text}>
            The main protagonist of Hyouka, he is a pragmatic boy who lives by
            "If I don't have to do something, I won't, but if I have to, I'll do
            it quickly." He only joins the Classic Literature Club at the
            request of his older sister, Tomoe Oreki, to stop it from being
            dissolved. He says that he doesn't like to waste energy, but if
            given a mystery to consider, he will see it through until it is
            solved with his brilliant logical deductions. However, he does not
            like to be told about his talent for deductions and continues to
            claim that he was "just lucky". To him, Eru is "someone he can't
            ignore," hinting that he may have feelings for her. At her urging,
            he soon finds himself more involved with high school life.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/eru.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Eru Chitanda</Text>

          <Text style={styles.text}>
            An inquisitive girl who joins the Classic Literature Club. Eru's
            catchphrase is "I'm curious!" ("I have to know!" in the English
            dub). Although her memory is excellent and she earns top grades in
            school, she is also easily distracted and relies on Oreki's
            reasoning abilities. An energetic girl, she is well-versed in the
            town traditions and etiquette, having come from a lineage of wealthy
            farmers. Whenever a mystery is brought to her attention, she is
            unable to stop thinking about it. She holds great admiration for
            Oreki, for whom it is hinted that she has developed feelings. She
            often praises Oreki for his deductive talent and ability to solve
            almost any problem.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/satoshi.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Satoshi Fukube</Text>

          <Text style={styles.text}>
            Hotaro's classmate who joins the Classic Literature Club with him.
            He is proud of his impressive memory, referring to himself as a
            human "database", and wears a perpetual grin. Although he always
            urges Oreki to participate more in life, it is revealed that he is
            also secretly jealous of Oreki for his critical reasoning abilities.
            He mocks Oreki when he performs an energy-consuming task. He calls
            Mayaka Ibara by her first name, which indicates the two are close.
            Later on, Satoshi reveals that he does have feelings for Mayaka, but
            doesn't want to become "obsessed" with her. He begins to date Mayaka
            in the spring of their second year.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/mayaka.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Mayaka Ibara</Text>

          <Text style={styles.text}>
            The fourth member of the Classic Literature Club; she joined after
            the other three. She and the boys attended the same middle school.
            She doesn't get along well with Hotaro though their relationship
            starts to improve after she befriends Eru. Mayaka has a passion for
            drawing manga and is also a member of the school's manga club,
            though she is extremely reluctant about expressing the fact, often
            shushing others when mentioning the word "cosplay". Mayaka has long
            harbored romantic feelings towards Satoshi, who has always treated
            her in a frivolous way. She later begins to date Satoshi. She refers
            to Satoshi as Fuku-chan.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('Hyouka')
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
