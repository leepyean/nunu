import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class BgsChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image            
            source={require('../assets/sakuta.png')}
            style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Sakuta Azusagawa</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Harboring a bad reputation after allegedly hospitalizing three
            people, Sakuta attempts to keep a low profile until his meeting with
            Mai prompts him to investigate Adolescence Syndrome. His sister
            Kaede's Adolescence Syndrome affected him as well, leading to him
            suffering three cuts to his chest. Sakuta's life changes when he
            meets Mai and helps her overcoming her Adolescence Syndrome, which
            leads him into getting involved with other girls that suffer the
            same condition. Sakuta is a nice and helpful person, but also very
            snarky. He's definitely blunt, honest and straightforward towards
            Mai, and prone to lewd jokes that even intimidate her, despite her
            tendency to tease the guy. Sakuta is a typically selfless light
            novel hero, and his Hero Syndrome is essentially a consequence of
            the Adolescence Syndrome that involved his sister Kaede first of
            all, and later all the other main girls of every arc.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/mai.png')}
          style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Mai Sakurajima</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Tired from the pressures of her acting work, Mai decides to take a
            hiatus but suddenly realizes people are unable to acknowledge her
            existence, except Sakuta, who agrees to help figure out what's
            happening, all while she continues to get closer to him. She first
            meets Sakuta at a library, while she was wearing a bunny girl outfit
            to test if people would notice her. As time passes, more people
            start forgetting about Mai's existence until Sakuta himself is left
            to remember. Sakuta is able to restore Mai's existence and
            everyone's memories of her when he declares his love to Mai in front
            of the entire school. After that, Sakuta and Mai attempt to start a
            relationship, which is made difficult given Mai's acting work.
            Later, Mai is infected by her half-sister Nodoka's Adolescence
            Syndrome, causing both girls to exchange physical appearances. It is
            only when Sakuta helps both sisters reconcile that they return to
            normal. Mai is the focal character of the first light novel.
            Personality wise, Mai is levelheaded, polite and very kind: she's
            helpful, denounces Sakuta's bad reputation as false and also has a
            very soft spot for Kaede. While she can be snarky, she's
            pure-hearted, and sometimes even shy around Sakuta's lewd jokes.
            Like Sakuta, she's also very selfless, sacrificing herself to save
            her boyfriend's life and becoming Shoko's heart donor.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/tomoe.png')}
          style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Tomoe Koga</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            The focal character of the second light novel, Tomoe is a first year
            student at Sakuta's high school. She initially meets Sakuta at a
            park while he was trying to help a young girl look for her mother,
            which leads Tomoe to accuse Sakuta of being a lolicon. She is very
            self conscious and asks Sakuta to be her pretend boyfriend so her
            friends wouldn’t say anything bad about her behind her back.
            However, crazy accusations start up about her and eventually falls
            in love with him after seeing him defend her. Unfortunately, Tomoe's
            feelings for Sakuta cause the last day of their relationship to
            repeat itself. Sakuta confronts Tomoe about her feelings, which she
            confesses but ultimately he turns her down. Even so, they agree to
            be friends.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/rio.png')}
          style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Rio Futaba</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            The focal character of the third light novel, Rio is the sole member
            of the science club at Sakuta and Mai's high school and one of
            Sakuta's only friends. She initially believed Adolescence Syndrome
            is a myth until she suffers it herself. Due to lacking confidence in
            her appearance, a clone of hers appears with a different personality
            and who posts suggestive pictures of herself online to punish
            herself. The two Rios merge into one person again when Sakuta helps
            them both accept themselves and the friendships they have made.
          </Text>
        </View>        

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/kaede.png')}
          style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kaede Azusagawa</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Sakuta's younger sister and another victim of Adolescence Syndrome,
            Kaede mysteriously began to suffer injuries after suffering online
            bullying and getting death threats on her cellphone that left her
            with a phobia of strangers. She only made a recovery after she
            stopped using social media or going to school. After that, she stays
            at Sakuta's apartment, with only her cat to keep her company. She is
            extremely fond of her brother and frequently climbs into bed with
            him while he is sleeping. It is later discovered that Kaede is
            suffering from dissociative disorder. She had forgotten who she was
            and became a completely different Kaede. She eventually regains her
            memories but forgets the events of the previous two years. Although
            Sakuta is saddened that the sister he has come to know has ceased to
            exist, he nevertheless accepts the return of his original sister and
            decides to help her regain her old life. Kaede is the focal
            character of the fifth light novel.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/shoko.png')}
          style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Shoko Makinohara</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            The focal character of the sixth and seventh light novels, Shoko has
            the same name as Sakuta's first crush. She is a shy middle school
            student who bumps into Sakuta during a rain storm. It is later
            revealed that she is the Shoko that Sakuta met during his episode,
            but had moved away to recover from a heart transplant. After Kaede
            regains her memories, Shoko appears to Sakuta again and helps him
            move past his grief after losing the Kaede he had come to know over
            the past 2 years. When Sakuta calms down, Shoko departs, but later
            returns and declares that she will be living in Sakuta's house for a
            period of time, much to the dismay of Mai. It is later revealed that
            there are 2 versions of Shoko in their timeline, and that the older
            version only exists because Sakuta will die in a car accident on
            Christmas day, resulting in his heart being donated to Shoko,
            allowing her to continue living, hence the reason behind Sakuta's
            scars. When Mai sacrifices herself to save Sakuta from the accident,
            Shoko helps Sakuta travel back in time to fix his mistake and save
            Mai. She also travels back to her elementary school timeline to mend
            the problem causing her Adolescence Syndrome, creating an alternate
            timeline where Sakuta and Mai never meet Shoko. They later reconcile
            when Sakuta sees Shoko by the beach and remembers all the memories
            the two of them shared from the previous timeline.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Bgs');
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
