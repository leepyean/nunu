import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DitfChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/02.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Zero Two</Text>

          <Text style={styles.text}>
            An elite pilot belonging to APE's special forces, Zero Two is a
            mysterious and rebellious girl often referred to as a monster due to
            her red horns and klaxosaur blood. She is also known as the "partner
            killer" as all partners who pilot Strelizia with her always die
            after riding three times with her at most, with Hiro being the only
            exception. She always refers to Hiro as her "darling". Her true age
            is unknown but her ultimate wish is to become fully human so she can
            reunite with an important person from her past, which turned out to
            be Hiro. Since she was a child, she was inspired by a book called
            “The Beast and the Prince”, which she notes is similar to the
            circumstances of her and Hiro. She begins creating her own version
            of the story, but intentionally leaves the last page blank because
            of the likelihood she may have to part ways with Hiro.
          </Text>
          <Text style={[styles.text, {marginTop:8}]}>
            She later finds out she is a clone of the Klaxosaur Princess created
            by Dr. Franxx. When Hiro is forced to link with the princess, Zero
            Two is able to mentally connect with Strelizia to save him and stop
            VIRM from destroying the planet but this left her body catatonic.
            Mentally, she continued fighting VIRM in a galactic battle in space.
            She and Hiro reconnect, allowing Zero Two to merge with Strelizia,
            becoming the Strelizia True Apus, and overpower the VIRM. She and
            Hiro then part ways with their friends but promise to return. In the
            final episode, Zero Two and Hiro are nearly defeated but they
            sacrifice themselves to destroy the VIRM home planet and free the
            souls trapped by VIRM. At some point in the future, they are
            reincarnated into two children.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/hiro.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Hiro</Text>

          <Text style={styles.text}>
            Once called a prodigy, he is now a dropout pilot cadet after
            "losing" his ability to synchronize with his partner in the Franxx.
            So far, he is the only male able to pilot Strelizia with Zero Two
            without taking damage. It is revealed that Hiro was once a leader
            among the children and the one responsible for naming them, as well
            as asking the adults a lot of questions, although they never give an
            answer; he also witnessed Zero Two undergoing painful testing and
            the two ran away together as children, even going as far as to make
            a promise to get married when they become adults. Before they were
            captured and separated, Hiro licked Zero Two's blood from a cut,
            affecting his aptitude performance and making him incompatible with
            anyone except for Zero Two. He also slowly grows horns and develops
            other klaxosaur characteristics. Their memories of each other were
            then erased.
          </Text>
          <Text style={[styles.text, {marginTop:8}]}>
            Although regarded as a genius, Hiro was looked down upon as a
            disappointment until he reunited with Zero Two and became the
            Strelizia's official stamen after being the only partner to survive
            riding with her three times. Hiro gradually recovered his memories
            of their past. Hiro admits to Zero Two that he has always been in
            love with her and they begin a relationship, as well as vowing to
            fulfill their promise. In the final battle against the klaxosaurs,
            Hiro is forcibly connected with the Klaxosaur Princess and finds out
            the true enemy is VIRM, led by Papa, which intends to destroy the
            planet if necessary to eliminate the klaxosaurs. Zero Two saves Hiro
            and they join forces with the klaxosaurs to force the VIRM to
            retreat. However, he finds that Zero Two is catatonic because she
            mentally linked with Strelizia to battle the VIRM in space. He makes
            the choice to join the battle to rescue her. After they reconnect,
            they overpower VIRM, who retreats again, and the two leave in a warp
            gate but promise to return to their friends. To defeat the VIRM and
            protect the future of their friends, they sacrifice themselves and
            detonate the VIRM home planet. At some point in the future, Hiro and
            Zero Two are reincarnated into two children who meet in the final
            episode.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/goro.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Goro</Text>

          <Text style={styles.text}>
            A level-headed and optimistic boy. He is Hiro and Ichigo's childhood
            friend. He has been in love with Ichigo since childhood when she
            helped defend him from bullies. However, he keeps this to himself
            due to her feelings for Hiro. He is considered as the second
            unofficial leader of the squad and is more mature than the other
            boys. He is deeply concerned for Hiro when he pairs up with Zero Two
            but shows support for their relationship as Hiro began smiling after
            meeting her. After the final battle, he travels the world to gather
            supplies needed to help the parasites survive. Ten years later, Goro
            and Ichigo are married and expecting their first child.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/ichigo.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Ichigo</Text>

          <Text style={styles.text}>
            The emotional and blunt leader of Squad 13. She is Hiro and Goro’s
            childhood friend. She has been in love with Hiro since they were
            children when he named her. She is concerned with his well-being due
            to the risks involved in being Zero Two's partner. She later behaves
            jealously as Hiro and Zero Two become romantically involved, but
            fearing Zero Two will devour Hiro's humanity, she separates Zero Two
            from Hiro. She confesses her love to him but he rejects her and she
            realizes his mind and heart are so captivated by Zero Two that there
            is no space for her. After this, she recognizes the two's importance
            to each other, and accepts their relationship. After she is kissed
            by Goro, she ends up entering in a relationship with him. Ten years
            later, they are married and expecting their first child.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/zorome.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Zorome</Text>

          <Text style={styles.text}>
            A loud, obnoxious, and somewhat lecherous boy. He greatly admires
            adults and aspires to become one someday. He has a disdain towards
            the "elites" with teen and single digit code numbers. He often
            argues with his partner, Miku, and serves as a comic relief for the
            squad. In the ten year timeskip, he and Miku become teachers for the
            new generation.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/miku2.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Miku</Text>

          <Text style={styles.text}>
            A loud, obnoxious, and direct girl. She is Kokoro’s childhood friend
            and Miku often clashes with her partner, Zorome, but cares deeply
            for him. While she is brash, she has a softer side and serves as a
            support system for her teammates. In the ten year timeskip, she and
            Zorome become teachers for the new generation.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/mitsuro.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Mitsuro</Text>

          <Text style={styles.text}>
            A quiet but cynical boy who has been with Hiro, Ichigo and Goro
            since childhood. He underwent a special, risky procedure to increase
            his abilities as a Parasite, but becomes disheartened upon knowing
            that Hiro forgot his promise to pilot a Franxx with him, unaware
            that Hiro's memories were erased. After discovering the truth, he
            became friendlier towards Hiro and the others. Later on he developed
            feelings for Kokoro and they began a romantic relationship. They got
            married but were captured by the APE and their memories of each
            other was altered. Mitsuru later learns Kokoro is pregnant with his
            child and he admits he wants her to keep the baby, to the point he
            gives up being a parasite to be a father to their child and he says
            she and their child are his reason to live. They reconcile and
            become a couple again. Their daughter, Ai, is later born. In the ten
            year timeskip, they are still happily married and have four
            children.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/kokoro.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kokoro</Text>

          <Text style={styles.text}>
            A meek yet kind-hearted girl who enjoys tending to the greenhouse in
            the Birdcage. After finding a baby book, she becomes fascinated with
            it and yearns to have a child to leave a mark for the future before
            she dies. She gets close to Mitsuru upon knowing his suffering and
            decides to become his partner. She falls in love with him and the
            two eventually began a romantic relationship and got married. Their
            memories of each other were erased by APE after being captured
            during their wedding. Kokoro later discovers she is pregnant and is
            faced with the choice of having an abortion or keeping the baby and
            lose her place as a parasite. However, hearing Mitsuru say he wants
            her to keep the baby and rebuild their relationship, they reconcile
            and become a couple again. She later gives birth to a girl named Ai.
            In the ten year timeskip, they are still happily married and have
            four children.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/fut.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Futoshi</Text>

          <Text style={styles.text}>
            A portly and kind boy, who eats constantly and is infatuated with
            his partner, Kokoro. He sees himself as her protector and wishes for
            her to be his partner forever. However, he gets devastated once
            Kokoro decides to become Mitsuru's partner instead. Although
            initially jealous of Mitsuru because of this, he accepts their
            relationship because he wishes to see them happy and he even acts as
            the priest at their wedding. In the ten year timeskip, he becomes a
            baker. He marries and has two children with a third on the way.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/ikuno.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Ikuno</Text>

          <Text style={styles.text}>
            A calm and insightful girl. She is the best friend of Ichigo and is
            one-sided in love with her. She used to be partners with Mitsuru,
            with whom she had a tumultuous partnership due to their mutual
            dislike of each other. After their synchronization is lost, she is
            paired with Futoshi. She later confesses her feelings to Ichigo but
            admits how shameful she feels about being attracted to girls and
            Ichigo comforts her. After the VIRM invades the planet, Ikuno
            overuses her strength and this permanently damages her health,
            including turning her hair white. In the final episodes she later
            works as a doctor and develops a cure for the accelerated aging
            process of the parasites, allowing them to properly grow into adults
            but is bedridden and sickly due to her keeping her accelerated aging
            process.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('Ditf')
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
