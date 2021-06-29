import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HoriChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/hori.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kyoko Hori</Text>

          <Text style={styles.text}>
            Kyoko is a beautiful, bright, popular high school girl, but at home,
            she takes on a different look, dressing down and removing her
            makeup, tying her hair back, and doing housework while taking care
            of her little brother. She does not want her friends to see her in
            that state, but when Izumi Miyamura does, they agree to keep their
            real personas a secret.Ch. 1 She begins to have romantic feelings
            towards Miyamura. She heard his confession to her when she had a
            cold. They became a couple after she admits Izumi is her boyfriend
            when her father asked her when Izumi was present.Ch.23
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/izumi.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Izumi Miyamura</Text>

          <Text style={styles.text}>
            At school, Izumi appears to be a gloomy otaku fanboy with glasses
            and keeps to himself. However, outside of school, he is rather good
            looking and laid back, with a punk-styled look and nine piercings
            (four on each of his ears, and one on his lip),Web ch. 1 as well as
            tattoos.Web ch. 2 Despite his school appearance, he has only a
            casual interest in manga and has mediocre grades. His family runs a
            bakery.Web ch. 1 He accepted his lonely existence but upon learning
            that Kyoko does not mind how he looks, he slowly gained confidence
            and friends among his classmates. Unlike his gloomy image in school,
            Izumi's look outside school would have easily gained him popularity
            with his pretty face that he hides under glasses. Izumi grows his
            hair long to hide his ear piercings,Web ch. 1 and wears long-sleeved
            shirts to cover his tattoos.Web ch. 2 He finds Kyoko's real side to
            be cute, even when she gets angry.Web ch. 1,Ch. 1 He was fine with
            being friends but his honest attitude allows him to tell Kyoko the
            things he admires in her. They officially became a couple after
            Kyoko's dad asked Kyoko whether Izumi is her boyfriend.Ch.23
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/souta.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Souta Hori</Text>

          <Text style={styles.text}>
            Kyoko's little brother. After tripping and getting a nosebleed,
            Izumi brings Souta back to his home and where Souta constantly asks
            his sister to invite his new friend to come back. This gives Kyoko
            an excuse to hangout with Izumi after classes.Ch. 1
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/toru.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Toru Ishikawa</Text>

          <Text style={styles.text}>
            Toru likes Kyoko and befriends Izumi when he noticed the two are
            spending more and more time together. He learns of Izumi's secret
            about the tattoos and piercings. Toru confesses to Kyoko but is
            rejected.Web ch. 4 Izumi later considers him one of his friends.Web
            ch. 6
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/yuki.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yuki Yoshikawa</Text>

          <Text style={styles.text}>
            Kyoko's best friend; she was interested in Izumi when she
            accidentally saw him without glasses and did not recognize him. When
            she saw him again with Kyoko, Kyoko attempted to hide his secret
            between them by saying Izumi was her cousin.Web ch. 4 When Yuki met
            Izumi at Kyoko's home, he introduced himself as Konoha, after a
            manga character.Web ch. 6 Yuki has a crush on Konoha, but regards
            Izumi as an unattractive otaku.Web ch. 6
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>        

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('Hori')
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
