import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DelusionPlot extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/yuta.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yuta Togashi</Text>

          <Text style={styles.text}>
            The narrator of the light novels, Yūta is a first-year high school
            student who used to be delusional, calling himself the "Dark Flame
            Master" while in junior high and becoming alienated from everyone as
            a result. He attempts to bury his past by enrolling in a high school
            far away from his junior high classmates. However, after
            encountering Rikka, his past delusions come back to haunt him. He
            ends up joining Rikka's club and becomes friends with Rikka's
            cohorts as well as school beauty Shinka Nibutani.LN 1 He and Rikka
            eventually become closer and start dating.[volume & issue needed] In
            the anime film, Yūta gives Rikka a ring to show "proof" that he will
            stay by her side. He and Satone Shichimiya were also classmates in
            junior high and she was the one who inspired him to become the "Dark
            Flame Master".LN 2
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/rikka.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Rikka Takanashi</Text>

          <Text style={styles.text}>
            Rikka is Yūta's classmate and neighbor residing above Yūta's
            apartment. She is an intensely delusional girl who believes herself
            to possess a "Wicked Eye" (邪王真眼, Jaō Shingan, lit. Tyrant's Eye
            of Truth), and as such always wears a medical patch over her right
            eye and wrapped bandages around her left arm, though she has no
            injuries to either. Despite being quite attached to Yūta, she is
            cautious of strangers and adopts a battle pose whenever she meets
            someone for the first time. Her fantasy weapon of choice is a frilly
            parasol which she wields as a sword. For her delusional operations,
            she often dresses in a mostly-black gothic dress. At school, she
            wears a uniform with a frilly skirt, long black knee socks, and
            shoes that sometimes function as roller shoes. She is also rather
            clumsy, often tripping over and forgetting things.LN 1 The origin of
            her delusions come from her father's death three years prior, where
            she was forced to live with her father's family until she moved in
            with her sister.Ep. 7-8[volume & issue needed]. They also come from
            Yūta himself, when she saw Yūta in his delusional phase at the
            balcony above Yūta's apartment.[volume & issue needed][clarification
            needed] They eventually become close and develop feelings for one
            another and start dating, but Rikka's delusions appear to keep their
            relationship from progressing.[volume & issue needed] A running gag
            in the series is that she visits Yūta by climbing down a balcony
            with a rope.LN 1
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/shinka.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Shinka Nibutani</Text>

          <Text style={styles.text}>
            Shinka is Yūta's classmate who is one of the most popular girls in
            the class. She is the class representative and a member of the
            cheerleading club. She wears a hairclip on her bangs. Although she
            is generally thought of a kind and gentle girl, Shinka is later
            revealed to be a former chūnibyō by the name of Morisummer
            (モリサマー, Morisamā) and had also chosen a different high school
            from her previous classmates to escape her past.[volume & issue
            needed] In the anime series, when she learns Sanae is in possession
            of the Mabinogion, a blog penned by Shinka during her chūnibyō
            phase, she joins Rikka's school club in order to try and retrieve
            it, but gives up when she learns that Sanae has kept multiple backup
            copies.Ep. 4 When out of the public eye, Shinka shows her true
            nature to be bit more bitter and easily irritable, particularly when
            dealing with Sanae,Ep. 5 but they eventually care for each
            other.[episode needed] She later quits the cheerleading club to
            focus more on making herself popular.Ep. 9
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/toka.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Toka Takanashi</Text>

          <Text style={styles.text}>
            An anime original character, Tōka is Rikka's older sister who
            supports her by working as a chef at a fine restaurant. She often
            has to put up with her younger sister's delusional antics, often
            punishing her by whacking her with a ladle.Ep. 2 She is also seen to
            be extremely acrobatic and flexible, which she attributes to being a
            rhythmic gymnast when she herself was in high school.Ep. 9 Rikka
            depicts her sister as a high priestess of evil and accuses Tōka of
            restraining her from her quest to reach the "Ethereal Horizon".Ep. 2
            In one instance, she was playing house with Yūta's little sister but
            had a negative outlook where they divorced.Ep. 5
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/satone.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Satone Shichimiya</Text>

          <Text style={styles.text}>
            Satone was Yūta's junior high school classmate, first appearing in
            the second light novel and the anime's second season.LN 2[episode
            needed] Although she considered Yūta to be her only true best
            friend, she ended up transferring schools without saying goodbye
            during their second junior high school year. She transferred to
            Shinka Nibutani's junior high school where they became close. She
            suffers from delusions and calls herself "Sophia Ring SP Saturn VII"
            (ソフィアリング・SP・サターン7世) and addresses Yūta with the
            nickname "Yūsha" (勇者, lit. "Hero"). Yūta and Shinka's delusions
            began with their admiration and mimicry of Satone's behavior. During
            her time with Yūta in junior high school, she developed feelings for
            him, but chose to stay as "Sophia Ring SP Saturn VII" and the
            "Magical Devil Girl" forever.LN 2[3]
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/sanae.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Sanae Dekomori</Text>

          <Text style={styles.text}>
            An anime original character, Sanae is Rikka's best friend. She is a
            third-year junior high student who has very long blonde elastic
            twintails that often prove to be more of a hindrance than a help.
            Like Rikka, she is extremely delusional and often indulges in
            fantasy with her.Ep. 3 However, unlike Rikka, she is a superb
            student who is at the top of her class and has already completed the
            entire junior-high mathematics curriculum.Ep. 5 She owns several
            copies of a spell book which is the remaining evidence of Shinka's
            delusional days. She is often at odds with Shinka, whom she does not
            believe to be the real Morisummer.Ep. 4 In the Japanese dub, she
            often ends her sentences with 'desu', emphasizing it to make it
            sound more like 'death'.Ep. 3 She dislikes milk and dairy products,
            even though she will attempt to drink it in order to grow taller.Ep.
            5-7 She is aware that her delusions are nothing more than
            delusions.Ep. 11 She comes from a very rich family and tends to
            behave normally around her classmates.[episode needed] She later
            promotes to the high school where Yūta and friends are
            studying.[episode needed]
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/kumin.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kumin Tsuyuri</Text>

          <Text style={styles.text}>
            An anime original character, Kumin is a carefree girl who is a year
            above Yūta and the others. She loves sleeping and often carrying
            around a pillow (or many) with her wherever she goes. In one extreme
            case, she is even shown sleeping in a full futon on school
            grounds.Ep. 2-3 Having been home-schooled before high school, she is
            very sheltered and conservative, lending her an old-fashioned
            ladylike demeanor which Makoto finds attractive.Ep. 7 Her own "Nap
            Club" is integrated into Rikka's social group for lack of
            members.Ep. 3 She earnestly attempts to understand Rikka and Sanae's
            delusional fantasies. She has a tendency to sleep-talk. She is also
            quite fond of cats and often naps curled up like a cat.Ep. 5
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('Delusions')
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
