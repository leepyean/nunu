import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DatePlot extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image source={require('../assets/shido.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Shido Itsuka</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            The protagonist of Date A Live. Shido is a kind-hearted and
            sympathetic young man who possesses a strange power that allows him
            to seal the powers of a Spirit in his body with a kiss; however, the
            seal will only work if the Spirit holds enough trust or affection
            toward him to allow it. This ability allows him to seal and contain
            99% of a Spirit's power. After sealing a Spirit's powers, there will
            be an invisible link connecting him and the Spirit, through which a
            portion of the sealed power will flow back to the Spirit if said
            Spirit's mental state becomes unstable, and back to Shido once the
            Spirit's mental state stabilizes. In volume 5, he discovers he can
            access the powers of the Spirits, including Tohka's Sandalphon,
            other than Kotori's healing flames that he has sealed. While Shido
            normally maintains a close bond with each of the Spirits he saves
            throughout the course of the series due to promises he has made, he
            is most often shown to be particularly closest to Tohka.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            After sealing the power of multiple Spirits, Shido's own power goes
            unstable in Volume 12, changing his personality and turning him into
            a threat. To restore Shido's normal self, Kotori and the other
            Spirits must come together to kiss him, so as to calm down his
            unbalanced sealed power, which will cause a disaster worse than what
            had happened 30 years ago. While having a completely different
            personality, Shido is conceited, displaying a dark demeanor and
            tends to 'impress' familiar people, by showcasing the powers of the
            Spirits he had sealed (In this case, the power belonging to Yoshino,
            Miku, Natsumi and Origami). Near the end of volume 12, during his
            date with Yoshino, DEM interfered and tried to capture Shido, but he
            destroyed the team of 20 Bandersnatch easily using a powerful spirit
            flash. Later, Shido's sealed powers went completely berserk during
            his date with Tohka due to the Second Spirit's noise calling out for
            him. Fortunately, Shido was saved by Phantom, who then weakened
            Shido's spirit barrier, so the Spirits can successfully break
            through to kiss him.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Assumed to have been abandoned by his birth mother, Shido lives with
            his foster sister Kotori. He has blue hair and brown eyes, and is in
            his second year in Raizen High School, class 2-4. He was in despair
            for a time after being abandoned and subsequently adopted, which
            made him sensitive to similar feelings from others and wanting to
            bring them out of it, fueling his desire to save the Spirits. He
            meets his real sister Mana Takamiya later in volume 3. In volume 7,
            Westcott briefly addresses him as Takamiya before switching back to
            Itsuka.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Volume 17 reveals more details about his origin: born Shinji
            Takamiya, he actually lived around the time the first spatial quake
            hit and met the First Spirit, a nameless entity in the form of a
            girl, whom he called Mio. Over time, Shinji taught her about the
            world and life and the two fell in love with each other; until
            Wescott attempted to capture Mio and killed Shinji in the process.
            In an attempt to bring him back to life, Mio absorbed Shinji's
            corpse into her body and recreated him as a human/Spirit hybrid,
            explaining Shido's ability to seal and manifest Spirit powers. As it
            turns out, Mio has been distributing Sephira crystals among humans
            to perfect and refine their powers so that, in time, Shido can
            obtain them and become a being of unlimited magical power like
            herself so they can be together for all eternity.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/tohka.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Tohka Yatogami</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Tohka is the first Spirit saved by Shido. She transfers into his
            class at the end of the first volume. Shido named her after the day
            of their first meeting, April 10th (though one kanji is different,
            the tenth day of a month is pronounced as Tohka). Reine later added
            the Yatogami surname for her. She has long dark purple hair and
            purple eyes. She is ignorant of the ways of the world, but
            nevertheless has a normal sense of embarrassment. As Shido was the
            first person to ever show kindness and acceptance towards her, Tohka
            develops strong feelings for him, which she is initially shown to be
            unable to understand when she gets jealous after seeing Shido
            accidentally kiss Yoshino. However, upon learning that Yoshino is a
            Spirit like herself, she decides to support Shido in his cause to
            save other Spirits such as Kurumi. She not only participates in
            battles at times, but even provides comfort and emotional support
            for Shido whenever he finds himself faced with a dilemma. As of
            volume 12, Tohka comes to fully realize that she is in love with
            Shido.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Tohka gets captured once by DEM Industries at the end of volume 6.
            Then in volume 7 upon seeing Shido ambushed and about to be killed
            by Ellen, she is filled with such despair that she underwent a
            transformation called Inversion, becoming noticeably far more
            hostile, and attacking everyone in sight, including Shido.
            Fortunately, Shido manages to bring Tohka back to her senses by
            kissing her. Westcott calls her Inverse state the Demon King, adding
            that this transformed state is the actual form of Spirits like her
            in the bordering dimension that they come from before manifesting in
            this world.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Her Angel is Sandalphon, which takes the form of a broadsword,
            usually with a throne that doubles as the scabbard, although at
            times it seems as though she can do just as much damage with or
            without it, using her hands to project dark energy spheres or bolts
            in order to slice through inanimate objects with ease. Her Astral
            Dress, Adonai Melek, consists of a purple ballgown. At full power
            she shatters the throne (volume 1) and combines the pieces with the
            sword turning the blade into Halvanhelev (the Last Sword)
            lengthening the blade several meters long, dramatically increasing
            her powers and can be charged to unleash an ultimate blow.
            Fortunately, the one time she used Halvanhelev Shido was able to
            stop and seal her before the unstable energy was unleashed. When she
            falls into utter despair, her Angel changes to Nahemah, the Qliphoth
            counterpart of Sandalphon and her Astral Dress becomes darker in
            color and more revealing. Her AST and Ratatoskr codename is
            'Princess'.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            source={require('../assets/kotori.png')}
            style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kotori Itsuka</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Kotori is Shido's foster sister and the commander of Ratatoskr. Her
            parents are also employees of Ratatoskr. Originally she was a human
            but gained the power of a Spirit five years ago, at the same time
            she was saved by Shido. There is no record of how Kotori obtained
            her Spirit powers; does not know why her and Shido's memories seem
            vague or missing from that crucial point. When her Spirit powers
            overwhelm her, she retains almost no memories of any events that
            transpire during that time. She temporarily takes back her powers
            from Shido to save him from Kurumi with her power being sealed by
            Shido once more later on. The reason another sealing was needed was
            because Kotori took all 100% of her power back breaking the Spirit
            Link between them that would cause her powers to return to Shido
            when she calmed down. At the second sealing, she and Shido both
            regain their lost memories of the first sealing: an entity called
            'Phantom' granted her Spirit powers when she was left alone at home
            and crying (with which she destroyed everything around her and
            nearly killed Shido), told her to kiss Shido if she wanted him to
            live (which was how Kotori knew about the method to seal a Spirit's
            powers, and also the ability to heal from serious injuries that
            Shido got from her), and afterwards stripped them of their memories
            of its existence, as well as the entire incident. This memory also
            disproves Origami's belief that Kotori was the one who killed her
            parents. Kotori is the first/third Spirit saved by Shido.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            She has long red hair, often in twin tails, and her eyes are red.
            She is almost always shown with a Chupa Chups lollipop in her mouth.
            She displays two very different characters, bordering on split
            personality. When she wears white ribbons in her hair, she is
            completely relaxed and peaceful and shows an immature, spoiled
            character that's always clinging to her brother. When on Ratatoskr's
            mothership, Fraxinus, or dealing with major situations, she switches
            to black ribbons taking on an arrogant, superior attitude to
            everyone including Shido, but nevertheless still cares deeply for
            him as shown on many occasions. This difference in character is
            revealed in volume 4 to be due to Shido giving Kotori black ribbons
            as a present for her ninth birthday after sealing her powers, and
            telling her to be strong as long as she wears them. However she is
            extremely weak to horror-related things, and reacts strongly to them
            regardless of character.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Her Angel is Camael, a halberd with a flame edge that is capable of
            changing shape to cannon that extends to her right elbow. The cannon
            takes some time to charge up and absorb Kotori's flames and has a
            devastating attack that blew a hole clean through Zaphkiel and
            almost killed Kurumi. Kotori with her powers has the ability to
            recover from severe injuries, which Shido is able to use
            unconsciously while her powers are sealed inside him. It’s
            represented by healing flames coming out of the wounds. Her Astral
            Dress, Elohim Gibor (meaning "Almighty God" in Hebrew), is a kimono
            which mainly consists of the colors pink and cream. In her Spirit
            form she also has horns growing on her head, with her black ribbons
            tied on them. Her irises are also a slightly brighter tint of pink
            in this state. Her AST codename is 'Efreet'.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            source={require('../assets/origami.png')}
            style={styles.image}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Origami Tobiichi</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Origami is a highly intelligent classmate of Shido who is athletic,
            "beautiful", and the most famous person in Shido's school. She is
            often described as doll-like in appearance with short white hair and
            blue-grey eyes. She somehow knew Shido from a time he had comforted
            her in a distress state that he just doesn't recall at all. She is
            the only human "girlfriend" of Shido, and out of all the other girls
            who like him, she is the most aggressive in her pursuit of him
            showing no bounds in her attempts to learn more about him, get
            closer to him, or even on trying to get more intimate with him. Her
            hatred of Spirits stems from a Spirit who killed her parents five
            years prior when it blasted her parents after they managed to escape
            their burning home. Due to this, she joined the AST, in which she
            holds the rank of Master Sergeant, in an attempt to find the Spirit
            supposedly responsible for the fire 'Efreet' and kill her. She
            managed to utilize the Ace CR-Unit 'White Licorice', when
            reluctantly believing Shido who tells her that while Kotori, who
            turns out to be Efreet, unintentionally started the fire, she did
            not kill Origami's parents and that there were several Spirits
            involved.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            This singular aim of revenge has enough drive within her to overcome
            her calm, calculating, and composed personality for her to go to the
            extent of disregarding orders and hysteria, getting her into trouble
            on more than one occasion. Notably, she was about to be discharged
            from the AST in volume 5 until Westcott intervened, after which her
            punishment was reduced to two months of not being allowed to use
            Realizers. At the end of volume 9, Origami left the AST to join DEM
            as a wizard, only for a short time.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            In volume 10, a corrupted Origami lured Shido into a trap and later
            attempted to kill the Spirits with him out of the way, but was
            eventually defeated by Tohka. Origami just then heard the noise of
            Phantom and is granted with the power of a Spirit. Unfazed, she
            persuaded Kurumi to send her to the past in an attempt to fend off
            Phantom who at the time she thought was the Spirit who caused her
            parents' deaths, five years prior. However, Origami was proven wrong
            just moments after she fended Phantom away, and the truth hit her
            very hard. Recognizing the extensive damage caused by Origami's
            light beams and remembering the silhouette of an angel, she realized
            who killed her parents—Origami herself. Upon returning from the past
            in an emotionless despair state, Origami started attacking the
            hospital, the Fraxinus and the surroundings where Shido and the
            other Spirits are at. Shido bent on reverting Origami to her normal
            self, now that she is beyond recovery. Requesting Kurumi's help, she
            and Shido trip to the past and comforted a young Origami who is in
            despair on losing her parents. At that moment, Shido and Kurumi
            realized that their actions have indirectly influence Origami's
            behavior in the future. During a second trip, he manages to save
            Origami's parents from her future self's attack, drastically
            altering Origami's future.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Here in the new timeline, Origami has long hair and a different
            personality as compared to her previous timeline self. The irony of
            fate is her parents still died due to a car accident. She also was
            an ex-AST member, but this time her reason for joining and leaving
            were different. Despite the time changed, Origami actually still
            manifests her Spirit power with all her previous timeline memories.
            Origami was invited by Shido to a date but turns into 'Devil' upon
            seeing Efreet's flames healing Shido's wound. With the help of the
            other Spirits, Shido managed to reach the inverse Origami who was
            fighting over the control of her body with her previous timeline
            self. Origami finally succeeded in gaining control over her body and
            broke free. Shido then took this chance to kiss Origami and sealed
            her power. At the end of the volume, Shido told Origami that he'll
            be depending on her (as part of the Spirit team) for any future
            incidents and she accepted with a smile. Since the beginning Origami
            only saw Shido as reliance on her emotions, but after he saves her
            she sincerely comes to love him and dreams of having a family with
            Shido. She becomes the eighth Spirit saved by Shido.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Her angel is Metatron which is a large crown that floats around her
            head, which can call out larger pieces of floating golden pillars
            that seem to resemble to a larger crown that surrounds her. Her
            powers are mainly the control of light energy. In her inverse form,
            her Astral Dress, Ehyeh, turns dark and becomes more revealing.
            Kotori called the inversed Origami a 'worst spirit' comparable to
            Kurumi. Her codename is 'Angel'.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/mio.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Mio Takamiya</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Mio is the "First Spirit" born when the 'Spirit Formula' gather all
            of the world's mana in a single location by the work of Isaac
            Westcott, Elliot Woodman, and Ellen Mathers, thirty years prior.
            However, her birth involuntarily caused the first spatial quake to
            occur, which destroyed a huge part of Eurasia. Mio had the mentality
            of an infant, and continuously fluctuated between reality and
            another dimension that was created as a result of her birth. Because
            of this, smaller spatial quake would happen every time she appeared
            in the world, which would ravage the world a few months after her
            birth. Her codename is 'Deus'.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            One day, she was approached by a boy named Shinji Takamiya, who gave
            the naked girl his jacket and decided to bring her home with him.
            Mio received her name of their first meeting, 30th. Shinji also gave
            her key insight on the concept of love. While living with Shinji and
            Mana, Mio quickly started to gain self-awareness of the real world
            by reading books, following the radio and watching television and
            cassettes. One time, Shinji took Mio around town and told her about
            everything that caught her attention. Mio was so overjoyed that she
            cried. Apparently, however, DEM uncovered Mio's location, forcing
            her to flee with Shinji. While running, Woodman appeared before
            them, but he allowed them to pass after asking Mio if she is happy
            being with Shinji. Despite this, Westcott revealed that he had
            abducted Mana but was willing to trade her for Mio. Denying him,
            Westcott shot Shinji in the chest using a gun. This caused Mio to
            finally realize how much Shinji meant to her and escaped. Her
            personality and demeanor change from very melancholic to extreme
            goal driven, including a willingness to sacrifice countless humans
            to achieve her wish.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Mio absorbed Shinji's corpse into her and recreates him by nurturing
            "Shido" in her womb before giving birth to him—becoming his new
            mother. Her plan was to entrust him with her power so that he could
            become her eternal lover. Since the body of a normal human is frail
            to accept all her power at once, Mio only gave Shido the power to
            take in the Spirit's power. Then, she divided her power, planting
            them like seeds into young girls in order for Shido to gradually
            take their powers one by one. However, humans were not compatible
            with the Qlipha Crystals she created, causing them to turn into
            monsters and go berserk. Therefore, Mio decided to reverse their
            properties, turning them into Sephira Crystals to make them more
            compatible, starting with Nia Honjou. Around this time, Mio
            successfully gave birth to Shido, and left him to be adopted by the
            Itsuka family.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            At some point, one of the berserk Spirits attacked a young Kurumi
            Tokisaki, though Mio managed to save her, still willing trick Kurumi
            into becoming a Spirit under the premise of being an ally of justice
            who was saving the world from Spirits. One day, however, Kurumi
            invited Mio over to her friend Sawa Yamauchi's place. This caused
            Mio to be caught in the act of removing the Qlipha Crystal from the
            body of the Efreet Spirit, who was revealed to be none other than
            Sawa. This revelation caused Kurumi to start transforming into her
            Inverse Form. However, much to Mio's surprise, Kurumi stopped her
            transformation by using her Fourth Bullet to reverse time and return
            to a moment before she started feeling overwhelmed by despair. Mio
            sincerely apologizes and states that she had no ill will towards
            Kurumi, but she cannot stop until she had entrusted her power to
            those chosen among humanity.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}></Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Date');
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
