import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class TqqChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/fuutarou.png')}
          style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Fuutarou Uesugi</Text>

          <Text style={styles.text}>
            A blunt, friendless highschool student that is very academically
            gifted, Fuutarou lives with his sister and father in a small
            apartment. He is serious and dedicated to his efforts in helping the
            Nakano sisters improve their grades. He likes dishes that Raiha
            cooks, but hates raw fish. His favorite drink is barley tea, his
            favorite animals are gorillas and his daily convention is storing
            one coin.[a] In his student handbook he keeps a photo of a girl he
            met in Kyoto while he was in sixth grade, who was his inspiration to
            study. It is later revealed that she is one of the Nakano
            Quintuplets. He was once a rather hot-headed kid who used to play
            pranks to get other kids' attention, but following the encounter
            with one of the Quintuplets he decided to change and devote himself
            to studying, so that he could be someone who would "be needed" by
            someone special; in fact, this mentality of his led him to believe
            that relationship are worst disgrace an high-school student can
            encounter since it would divert his attention from building a
            career, however following his continuous interactions with the
            quints he begins to open up his heart and change his mind,
            questioning his feelings more and more, to the point where he
            realises that not meeting the 5 girls wouldn't have given him the
            possibility to move on from his status quo; all of this culminates
            with him being able to fall in love and confess to his future bride.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/ichika.png')}
          style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Ichika Nakano</Text>

          <Text style={styles.text}>
            The eldest sister, she has short hair without any accessories, with
            her trademark being her earing on her right ear. Ichika acts like a
            responsible older sister - she's caring, thoughtful and wise. She
            enjoys sleeping and her room is incredibly messy. She aspires to
            become a movie actress and dedicates most of her time and resources
            to do so, to the point of having to quit schooling in order to focus
            on her acting career. She likes salted fish but hates mushrooms. Her
            favorite drink is frappuccino, her favorite animals are hippos, her
            favorite TV program type is drama, her best subject is mathematics,
            and her daily hobby is jogging.[a] She falls in love with Futaro and
            wanted to confess to him, but hearing Nino confessing to Futaro
            prevented her from doing so. As she grew to accept she wanted Futaro
            for herself, she started using underhanded methods to get closer to
            him and sabotage her sisters in the process. She used Miku's
            disguised as a way to "cheat" her way into his heart, almost
            sabotaging Miku's chances to confess in the process. It's revealed
            that she met Futaro 5 years before the start of the story: after
            Futaro and the girl from the photo (Yotsuba) had spent the entire
            day together and both went to the inn the quintuplets were staying
            at, she was interested in him and played cards with him while
            Yotsuba was gone, with Futaro himself unaware that he was
            interacting with another quintuplet. She had forgotten about this
            exchange until they reunited years later, when he put a blond wig as
            a disguise, resembling the way he looked years ago. After getting
            called out by Futaro on her schemes and realizing the error of her
            ways, she helps Miku properly confess to Futaro and decides to stop
            pursuing her love towards him, lying to him that their moments
            together were all "lies". She becomes his guide on his path to
            accept he was in love and becomes the first quintuplet in knowing
            his choice. After Futaro's choice at the end of the school festival,
            she congratulates him and pushes him to be more open with his
            feelings. 5 years later, she becomes a famous actress around the
            world.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/nino.png')}
          style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Nino Nakano</Text>

          <Text style={styles.text}>
            The second sister, she has very long hair with two butterfly-style
            accessories on the sides. Due to her poor eyesight, she has been
            wearing contact lenses for the past three years but still takes five
            minutes to put them in. Although she is caring and playful with her
            sisters, she shows a grumpy and somewhat aggressive personality to
            outsiders. She likes pancakes, but hates tsukemono. Her favorite
            drink is warm water, her favorite animals are rabbits, her favorite
            TV program type is variety shows, her best subject is English, and
            her daily convention is putting on a facial mask and doing yoga.[a]
            She is also fashionable and skilled at cooking, hinted to have
            dreams of becoming a chef. She views Futaro as an interloper to the
            sisters' unique relationship and has gone to extreme, sometimes
            illegal lengths to ban him from their apartment. She's afraid to be
            left behind and desires to find her own path, but she's afraid to
            let go of the past and the dynamic she had with her sisters since
            they were kids; her problems with Futaro comes from the very fact
            that she sees him as the one changing the status quo she had grown
            accustomed to, which sometimes generates conflict between her and
            her sisters. However, she starts seeing Futaro as someone who
            respects her feelings and one who desires to see the Nakano
            quintuplets together as a family, melting her heart. After coming to
            terms with her past fear of losing her sisters because of each of
            them taking different life routes, cutting her hair shoulder-length,
            and after fully realizing her feelings, she becomes the first
            quintuplet to successfully confess to Futaro, taking a
            straight-forward approach on her love towards him ever since in
            order to gain his affection, often clashing with the third sister,
            Miku, acting like rivals. After Futaro's choice at the end of the
            school festival, she becomes upset with Yotsuba's consideration of
            her feelings as she sees it as pity. After a heartfelt exchange, she
            accepts Yotsuba's resolve, acknowledging her as a rival and warns
            that she will take any chance on taking Futaro away if their
            relationship ever falls apart. Five years later, she opens the
            Nakano Bakery shop with Miku, borrowing the place of the former
            Uesugi restaurant.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/miku.png')}
          style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Miku Nakano</Text>

          <Text style={styles.text}>
            The third sister, she has medium-length hair, "emotionless" eyes and
            normally a specific pair of headphones around her neck. She has a
            quiet and passive personality, few friends, and interest in warlords
            of specific eras of Japanese history. She likes matcha, but hates
            chocolates. Her favorite drink is green tea, her favorite animals
            are hedgehogs, her favorite TV program type is documentary, her best
            subject is social science, and her daily convention is
            divination.[a] She seems to be the first one to fall in love with
            Futaro. Her cooking skills are abysmal, but after Futaro said that
            he preferred girls who can cook, she began focusing to improve that
            talent. While taking confidence in her pursuit of Futaro, after
            seeing her sisters one by one starting to pursue his affection as
            well, made her shyness bloom, even more, seeing her sisters as
            better candidates for his love and grew scared of "playing fair"
            against them who had a more aggressive approach. She manages to
            successfully confess to Futaro the second time, though she leaves it
            vague to make him embarrassed. After this, she regains her
            confidence and goes for a more assertive/aggressive approach similar
            to Nino's. She decides to pursue culinary arts after realizing she
            likes to "make stuff", regardless if it is for Futaro's sake or not.
            After Futaro's choice at the end of the school festival, she
            counsels Yotsuba into accepting the other sisters' frustration and
            anger and that she should pursue her own happiness. She ultimately
            realizes that despite not being Futaro's choice, she is happy that
            she has become a unique individual and takes pride in it. 5 years
            later she opens the Nakano Bakery shop with Nino, borrowing the
            place of the former Uesugi restaurant.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/yotsuba.png')}
          style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yotsuba Nakano</Text>

          <Text style={styles.text}>
            The fourth sister, she has medium-length hair and a ribbon styled
            into two vertical "ears". Always cheerful, friendly and good at
            sports, her constantly active personality can annoy others. She
            likes citrus unshiu, but hates bell peppers. She likes watching
            anime and loves drinking carbonated fruit juice. Her favorite
            animals are camels, her best subject is Japanese, and her daily
            convention is watering plants.[a] She has received 0% scores on
            school tests. Her actions usually suggest either a complete absence
            of thought or unconscious intricate plans far beyond anything the
            other characters could imagine. She is the only one to immediately
            accept Futaro as their tutor. She's supportive and always looking
            out for other people, especially her sisters and Futaro. She has a
            bad habit of putting others' needs above her own. Later it's
            revealed that she's the girl from the photo, the one Futaro met 5
            years before the start of the story during a school trip at Kyoto.
            She met him by coincidence, getting him out of a complicated
            situation and spent the rest of the day together. Connecting after
            enjoying their adventure during the day, both promised to improve
            their grades in order to apply to highly profitable jobs and make
            their respective families have a better lifestyle, specifically
            Raiha for Futaro and Rena for Yotsuba. However, due to her own low
            self-confidence and identity issues while growing up, as well as
            Rena's death soon after the Kyoto trip, she slowly started growing
            distant from her sisters, seeing them getting slightly better grades
            than her with little effort while she studied hard with unsuccessful
            results, frustration building on her. She then decides to focus on
            clubs and develop her athletic abilities, dropping studying
            completely as she lost her resolve, changing her mindset from
            self-improvement to competition for recognition above her sisters
            and be recognized as the superior of the sisters. That ultimately
            costs her getting expelled from her previous school, but her sisters
            refuse to leave her alone and follow her. Therefore, her selfish
            mind view was shattered and developed a selfless devotion towards
            them and started to prioritize their own happiness and desires over
            her own. She refuses to tell Futaro who she is after meeting with
            him at the start of the story because she views herself as a failure
            due to not being able to fulfill the promise they made and decides
            to support him on his school and love life, ignoring her own
            feelings for him when she sees her sisters slowly falling for him
            and actively pursuing his love. However, her subtle yet meaningful
            support throughout the series ends up getting noticed by Futaro,
            ultimately leading to him falling in love with her and choosing her
            at the end of the school festival. Initially she refuses and runs
            away, but after hearing Futaro's confession, she becomes unable to
            hold her feelings down and confesses her love. After the school
            festival, she decides that before dating Futaro she needed to talk
            with her sisters about their feelings and her own, especially Nino
            and Miku. After coming to terms that she can pursue her own
            happiness, she accepts both Futaro's re-confession and proposal and
            they become a couple. Five years later, she lives together with
            Futaro at Tokyo and celebrates her wedding ceremony. In the final
            chapter, it's revealed she is the one who kissed Futaro under the
            bell while disguised as Itsuki, event which Futaro in the future
            narrates as the moment he started seeing his bride as "special".
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image 
          source={require('../assets/itsuki.png')}
          style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Itsuki Nakano</Text>

          <Text style={styles.text}>
            The fifth and the youngest sister, she has an expressive ahoge, long
            hair with two twirling "streams" and two stars beside her eyes. Her
            blood type is A. She has a two-faced personality; she's always
            friendly with acquaintances and classmates but Futaro's presence
            immediately puts her in attack mode due to his past insults. She
            loves to eat food and studies seriously, even though her methods
            need improvement. She likes meat and curry but hates umeboshi. Her
            favorite animal is the kangaroo. Her favorite TV program type is
            wasei-eigo. Her best subject is science and her daily convention is
            exercising abdominal muscles and doing yoga.[a] Ever since she was
            little, she was close to her mother, Rena. After her death, she
            decided to cope with her loss by trying to replace Rena as the
            mother-figure of the quintuplets, with unsuccessful results. This
            makes her act properly towards others and is strict with her sisters
            at times, taking her mother's advice seriously, whether it's about
            how they should act with each other or how they should be careful
            when picking their romantic partner. After thinking about what to do
            with her career path, she decides to follow her mother's footsteps
            and become a teacher, despite her low grades. During one point of
            the series, she dresses as the girl from the photo, nicknaming
            herself "Rena" (after her mother) and meeting with Futaro in the
            present in order to sever ties with him and forcing him to move on
            from their promise. Later (after the reveal that "Rena"/Itsuki was
            not the girl from the photo) it's revealed that she was asked by
            Yotsuba (the girl from the photo) to perform this task, as she
            herself isn't good with disguises and doesn't want her identity
            revealed to Futaro and felt their promise was holding him back from
            enjoying his school life like a normal student. However, later in
            the series, Itsuki felt she couldn't keep the secret hidden much
            longer as she thought of it as unfair to both Yotsuba and Futaro and
            decided to dress as "Rena" on her own once again to make Futaro
            remember who he met, only for her advances to be rejected by him,
            who had since figured out the girl of the photo was one of the
            quintuplets, though not exactly which one, and he was sick of
            playing along with their tricks. After Futaro makes his choice,
            Itsuki goes under a brief period of self-doubt, unable to
            congratulate him on his decision and realizes her hidden feelings
            for him. However, after overhearing Yotsuba and Nino's discussion,
            she decides to let go of those feelings by realizing that "a
            fruitless love can also be beautiful", deciding to treasure her
            memories with Futaro instead. 5 years later, she becomes a teacher.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Tqq');
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
