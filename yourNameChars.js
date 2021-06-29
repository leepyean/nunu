import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class YourNameChar extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/taki.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Taki Tachibana</Text>

          <Text style={styles.text}>
            A high school boy in Tokyo. He is a 17-year-old 11th grader
            attending Tokyo Metropolitan High School in the class next to Class
            C of the second year. He is a talented sketch artist and has
            aspirations to be an architect. He is short-tempered but
            well-meaning and kind. He spends time with Miki Okudera, working in
            a part-time job as a waiter at the Italian restaurant "Il Giardino
            delle Parole"[a]. A running gag in the film is that whenever Taki
            wakes up and realizes he has swapped bodies with Mitsuha that day,
            he immediately begins to fondle "his" breasts in amazement, only
            stopping once Mitsuha's sister, Yotsuha, sees her. Mitsuha teasingly
            calls him out for the habit when they meet in person for the first
            time during twilight. Taki later appeared in Shinkai's next film
            Weathering with You. Taki's birthday contradicts with the film's
            setting of 17 years old in the summer of his sophomore year, but
            according to Shinkai, "In their mind, they both kind of assumed that
            they were both born on December 1." He lives with his father, who
            works at Kasumigaseki; Shinkai states, "I think his mother divorced
            his father a few years ago."[7]
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/mitsuha.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Mitsuha Miyamizu</Text>

          <Text style={styles.text}>
            A high school girl dissatisfied with her life in Itomori, a
            mountainous and rural town of Gifu Prefecture. She is a 17-year-old
            student in her second year at Itomori High School, but in reality is
            three years older than Taki. Mitsuha is usually seen with her hair
            tied up with a dark red braided ribbon that she made by hand
            herself. She and her sister are maidens of the family shrine. After
            her mother died, her father abandoned the shrine to pursue politics.
            She lives with her maternal grandmother, Hitoha, and her younger
            sister, Yotsuha, who is in elementary school. Mitsuha wishes to have
            a better life in Tokyo, then having unavoidable encounters in the
            small town with her estranged father, the mayor, as well as her role
            as a shrine maiden (miko) in rituals for her mother's family shrine,
            including making kuchikamizake, an ancient, traditional way of
            making sake by chewing rice and spitting it back out to be fermented
            - all of which attracts mockery and disdain from her classmates.
            When switching bodies with Taki, Mitsuha forbids him from touching
            himself without permission. Mitsuha later appeared in Shinkai's next
            film Weathering with You.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/tessie.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Katsuhiko "Tessie" Teshigawara</Text>

          <Text style={styles.text}>
            One of Mitsuha's classmates; as of 2013, he is 17 years old[b] and
            has a crush on Mitsuha. His nickname is "Tessie" ("Tesshi" in the
            dub). He is the son of the president of a local construction
            company, Teshigawara Construction. He is a lover of the monthly
            occult magazine MU (ja) and a mechanical geek. He has a 50-50
            love/hate relationship with his hometown,[c] Itomori, and from his
            own perspective, he initiates concrete measures to improve the
            town's situation,[d] which earns him the sympathy of Taki
            (physically, Mitsuha).
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/sayaka.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Sayaka Natori</Text>

          <Text style={styles.text}>
            One of Mitsuha's classmates and her best friend; as of 2013, she is
            17 years old.[b] She has a calm but nervous personality and has a
            crush on Tessie. She is part of the school's radio broadcasting
            club, so she is tasked by Taki and Tessie with broadcasting the
            false emergency evacuation alert. Her sister, who works at the town
            hall, makes a brief appearance in the film.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/sukasa.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Tsukasa Fujii</Text>

          <Text style={styles.text}>
            A classmate and friend of Taki. He has a cool personality and, like
            Taki, is interested in architecture. He works part-time at the same
            restaurant as Taki and Takagi. He worries about Taki whenever
            Mitsuha inhabits his body.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/Shinta.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Shinta Takagi</Text>

          <Text style={styles.text}>
            A classmate and friend of Taki. He is optimistic and has a large,
            crisp figure with an athletic appearance. Like Taki, he is an
            aspiring architect. He works part-time at the same restaurant as
            Taki and Tsukasa.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/miki.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Miki Okudera</Text>

          <Text style={styles.text}>
            A university student, one of Taki's friends, and his co-worker at
            the Italian restaurant "Il Giardino delle Parole". She is a
            beautiful and fashionable college girl who is popular with male
            waiters. She develops closer feelings for Taki when Mitsuha inhabits
            his body. She is a smoker, which Tsukasa discovers when they spend a
            night together while accompanying Taki on his search for Mitsuha.
            She is more commonly referred to as Ms. Okudera (Okudera-senpai) by
            her colleagues. When she meets Taki in 2021 after a long time, she
            is wearing an engagement ring and tells him that she is getting
            married soon. According to Shinkai: "It's just a backstory, but I
            believe that Tsukasa is engaged to Okudera."[7] In the original
            novel, she is described as working at the Chiba branch of an apparel
            manufacturer as of 2021.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('YourName')
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
