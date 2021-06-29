import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CharlotteChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/yuu.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yuu Otosaka</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Yuu is the protagonist of Charlotte. He develops a rude and
            narcissistic personality once he discovers he has the ability to
            take over another person's body for five seconds,ep 1 but the true
            nature of his ability enables him to steal someone's superhuman
            ability by possessing them.ep 9 Yuu is a first-year student at
            Hoshinoumi Academy, and he is forced to join its student council.
            Initially a fake honors student and chronic cheater,[5] Yuu is
            reluctant to use his ability to aide the student council,ep 2 but as
            time goes on, he becomes less narcissistic and much more selfless
            and caring towards others.ep 8 Over the course of the story, he
            becomes a fan of the post-rock band Zhiend and falls in love with
            Nao.ep 9, ep 12 After Yuu travels worldwide to steal every ability
            user's power to protect them from being exploited, the strain of it
            causes him to lose all of his past memories.ep 13 His older brother
            is Shunsuke and his younger sister is Ayumi.ep 1, ep 9
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/nao.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Nao Tomori</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Nao is a first-year student at Hoshinoumi Academy and is also its
            student council president.ep 1 She is a hardworking, intelligent,
            and shrewd girl, but is also narcissistic, self-righteous, and
            short-tempered.ep 2, ep 3 She has the ability to make herself
            invisible, but this is limited to one person of her choosing at a
            time.[5] She uses this ability to her advantage to attack others she
            believes deserve to be kicked, but this causes her to be shunned and
            bullied by her peers. Although she initially shows no attraction
            towards Yuu,ep 1 she eventually falls in love with him and stays by
            his side even after he loses all of his memories of her.ep 13 She is
            a fan of Zhiend, influenced by her older brother Kazuki (一希,
            Voiced by: Kazuyuki Okitsu (Japanese); Vic Mignogna (English)), who
            once had the ability to control air movements and vibrations, which
            he used when playing the guitar.ep 2
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/jojiro.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Jojiro Takajo</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Jōjirō is a first-year student at Hoshinoumi Academy and is a member
            of its student council. His ability enables him to move at very fast
            speeds, but he is not able to control where he stops, resulting in
            frequent injuries.ep 1 To counteract this, he wears protective gear
            under his clothes.[5] He is a huge fan of Yusa Nishimori and is
            extremely obsessed with her.ep 3
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/yusa.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yusa Nishimori</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Yusa, also known as "Yusarin", is a first-year student at Hoshinoumi
            Academy and is a member of its student council.ep 4 She has a bright
            and innocent personality that complements her popularity as a pop
            idol and lead singer of the band How-Low-Hello. Although her actual
            surname is Kurobane, she uses the stage surname Nishimori.ep 3 She
            has a series of "magic spells" derived from her time as a regular on
            a variety show.ep 4 She has the ability to channel the dead as a
            medium. However, she is initially not aware of this and only thinks
            that she is sleepwalking whenever she is possessed.ep 3
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/misa.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Misa Kurobane</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Misa is Yusa's deceased older sister by one year who died in an
            accident six months prior to the beginning of the story. Misa freely
            possess her at any time, represented by a change in Yusa's eye and
            hair color. While possessing Yusa, Misa is able to use her own
            ability, pyrokinesis. Misa has a tomboyish and ill-tempered
            personality, and she is not afraid to be violent against anyone
            looking to harm her sister.ep 3 She disappears after Yuu takes away
            Yusa's power.ep 12
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/ayumi.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Ayumi Otosaka</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Ayumi is Yuu and Shunsuke's energetic younger sister in junior high
            school.ep 1 She has an innocent personality and deeply cares for
            Yuu, providing moral support to him. Ayumi often cooks for Yuu and
            has a tendency to add pizza sauce to every food she makes, unaware
            that Yuu's modern tastes cannot handle the sweetness.ep 2, ep 3 She
            is a fan of the band How-Low-Hello and an avid admirer of Yusa.ep 6
            She eventually awakens an ability to cause anything around her to
            suddenly collapse, but this is stolen by Yuu to prevent her death.ep
            10
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Charlotte');
            }}>
            <Text style={styles.buttonText}> Go Back</Text>
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
