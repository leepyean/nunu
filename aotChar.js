import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AotChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require('../assets/ErenYeager.png')}
          />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Eren Yeager</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            The main protagonist of the series who, after witnessing his mother
            being devoured by a Titan, dedicates his life to their eradication.
            After graduating fifth in his cadet class, he is swallowed by a
            bearded Titan during his first mission in Trost.[vol. 1] However, he
            soon reappears as a 15-meter (49 ft) Titan who fights other Titans
            on equal ground.[vol. 1][vol. 2] His ability as a Titan makes him
            the target of multiple parties that include those who see him as a
            tool to eradicate the Titans, other humans who can become Titans,
            and those who perceive Eren as a rebellion-inducing threat to the
            status quo.[vol. 2,3] Placed into the Survey Corps' Special
            Operations Squad, he attempts to control his Titan-changing ability
            and discovers he has other abilities as well. In the final arc, Eren
            becomes the main antagonist,[1] believing that obliterating the
            nations outside the island is the only solution for the survival of
            Paradis and its people.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require('../assets/MikasaAckerman.png')}
          />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Mikasa Ackerman</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Mikasa is Eren's childhood friend who was taken in by his family.
            Though she was never officially adopted by the Jaeger family, she
            felt a strong sense of gratitude toward Eren's parents, though she
            never thought of them as her own. After she was orphaned by slave
            traders, Eren saved her life and gave her her iconic scarf. A
            normally quiet and withdrawn girl, she maintains a stoic expression
            except when it comes to Eren and her friends.[GB p. 36] As later
            revealed, Mikasa's father was a descendant of an Eldian bloodline
            that was modified to create super soldiers equal to a Titan in
            strength. When under duress, these genetically inherited abilities
            may allow a descendant access to their ancestors' battle experience.
            After Eren and his father discover The Ackermans' deaths during a
            routine doctor's visit, Eren tracks Mikasa to the trader's cabin.
            Mikasa's instincts are awakened when Eren urges her to 'fight back
            and live'.[ch. 6][ep 6] Because of this, and because of Eren's
            kindness in giving her a black (dark red in the anime) scarf which
            Mikasa treasures and wears her entire life, she feels compelled to
            protect and follow him at all costs, including joining him in the
            Survey Corps. She graduates from the Training Corps top of her
            class,[ch. 2] and is regarded by officers as an unprecedented genius
            and prodigy, easily worth a hundred men in battle.[vol. 3,4] Though
            technically half-blooded, she is the last known person of Asian
            descent residing in the Walls. A wrist tattoo inherited from her
            mother (which she keeps hidden from everyone except Eren) indicates
            that she is descended from the prominent Azumabito family
            (アズマビト家, Azumabito-ke), a cadet Shogun branch from the
            Oriental nation of Hizuru (ヒィズル, Hizuru), whose ancestors
            migrated from their native land to Paradis as honored
            ambassadors.[ch. 6][ep 6][GB p.39] While investigating the
            Volunteers alongside the Survey Corps, Eren tells Mikasa that he has
            always hated her for being a slave to her Ackerman blood. In turn,
            she becomes despondent and removes the black scarf off her neck.
            While still invested in Eren, Mikasa decides to join the alliance to
            stop Eren's planned genocide on the Marleyan enemies.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image style={styles.image} source={require('../assets/Armin.png')} />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Armin Arlert</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Armin is Eren's childhood friend who joins him in the Scouts to
            order to make a meaningful difference in the world, and to fulfill
            his dream of seeing the outside world.[ch. 84] When Armin was young,
            his parents tried to venture beyond the Wall by creating a hot air
            balloon but were found out and killed by the First Interior Squad,
            leaving Armin to be raised by his grandfather. Armin's grandfather
            secretly possessed an illegal book containing information about the
            world beyond the Walls, which Armin later found and read. Fascinated
            by descriptions of gigantic body of saltwater, fire water, land made
            of ice, and fields of sand, Armin showed it to his best friend Eren,
            kindling his desire to see the outside world. After the fall of Wall
            Maria, Armin's grandfather was sent along with 1/5 of the population
            (mostly Wall Maria refugees) on a high-risk operation to "reclaim
            Wall Maria" and died as a result, leaving Armin an orphan and the
            only survivor of his family. The expedition was, in reality, a
            scheme contrived by the Royal Government to cull the number of
            refugees and alleviate food shortages.
          </Text>
          <Text style={styles.text}>
            After joining the Training Corps with Eren and Mikasa, Armin
            initially has an inferiority complex, seeing how he falls short of
            his companions in combat and endurance. He often laments over his
            perceived cowardliness and dependence on his friends[ch. 11].
            However, he excels in academics[ch. 3], and his confidence slowly
            grows when he realizes he can use his brain and strategic abilities
            to help his friends.[ep 10] Despite his self-perceived shortcomings,
            he vigorously defends Eren when the military threatened them with
            cannon fire after it was revealed Eren was a Titan, and he brings
            Eren out of his feral Titan state following the latter's second full
            transformation where he attacks Mikasa[vol. 3]. Armin also impresses
            his superiors by correctly deducing the human identity of the Female
            Titan[ep 24][GB p. 40-43] and convinces Eren to overcome his
            hesitation to fight her during their confrontation in Stohess
            District inside Wall Sheena. Later chapters describe him as being
            intelligent, a talented tactician, a deep thinker with good
            judgement, level-headedness, and ability to think outside the
            box.[ch. 82] During a battle in Shinganshina, Armin comes up with a
            plan to capture Bertolt but is mortally wounded from the severe
            burns he sustained.[ch. 82] Levi saves Armin by injecting him with
            Titan serum, and Armin then acquires the Colossus Titan's power by
            eating Bertolt.[ch. 84] After investigating the Volunteers to learn
            Zeke and Eren's intentions, he is imprisoned in Shiganshina district
            by the Yeagerists. During the Marleyan ambush, he battles Pieck,
            before becoming horrified upon learning Eren's intentions to utilize
            the full rumbling. He later joins the alliance to stop Eren Yeager
            from destroying all life outside Paradis.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require('../assets/Reiner.png')}
          />
        </View>
        
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Reiner Braun</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Reiner is a member of the Marleyan military's Warrior Unit and is
            the holder of the Armored Titan (鎧の巨人, Yoroi no Kyojin).[vol.
            10-11] As the leader of the infiltration unit responsible for
            Marley's opening offensive against the Walls,[ch. 96] he serves as
            one of the main antagonists for the manga's first thirteen volumes
            (i.e. the anime's first and second seasons. Reiner is introduced as
            a cadet of the 104th Training Corps who graduates 2nd in his class.
            [ch. 2] Described by instructor Keith Shadis as being strong as an
            ox and a natural leader, he quickly earns the trust of the Survey
            Corps and infiltrates their ranks.[GB p.56-57]
          </Text>
          <Text style={styles.text}>
            As a child, Reiner joined Marley's Warrior Unit so he and his Eldian
            mother could become honorary Marleyans and be reunited with his
            Marleyan father. [ch. 96] Despite being rejected by his birth
            father, the fanatical patriotism instilled in him by his mother
            motivates him to move forward with his mission to capture the
            Founding Titan (aka: the "Coordinate") from Paradis Island.[ch. 95]
            When the group leader, Marcel, is unexpectedly eaten during their
            journey, Reiner assumes command over the remaining two Warriors,
            Annie and Bertholt. They flood Shiganshina with rampaging, 'Pure
            Titans' by destroying the outer gate of the District before breaking
            through the gate at Wall Maria.[ch. 96] They then disguise
            themselves as refugees and join the masses of people into Wall Rose
            before joining the military.[vol. 4] Unable to pinpoint the
            Coordinate's location, Reiner orchestrates an attack on Wall Rose to
            root out its holder.[ch. 97] Upon witnessing Eren transform into a
            titan during the ensuing battle of Trost, Reiner suspects him of
            possessing the Coordinate and tasks Annie with his capture.[ep
            16.5A] However, the plan ultimately ends in failure[ch. 30] and
            Annie is taken captive.[ch. 33] As Marley launches another offensive
            against Paradis, Reiner begs Eren to leave with him and Bertholt to
            prevent further bloodshed, after revealing themselves as the Armored
            and Colossal Titans. When Eren refuses, Reiner and Bertolt transform
            and attempt to extract him by force, managing to take him halfway
            through Wall Maria in the process. However, they are thwarted by the
            rest of the Survey Corps and are forced to retreat, taking with them
            fellow corps member Ymir instead. Reiner and Berthold regroup with
            Zeke Yeager, holder of the Beast Titan, and his forces consisting of
            Pure Titans. In the Battle of Shiganshina, Reiner is defeated and
            mutilated by the Survey Corps' newly developed 'Thunder Spear'
            before Zeke and his allies are able to rush him to safety.[ch. 82]
            In the Year 854, Reiner becomes disillusioned with Marley, and after
            learning he has to go back to Paradis, attempts suicide, but changes
            his mind after realizing he still has to care for the Warrior
            Candidates. Reiner battles Eren when the latter attacks Marley and
            stops him from killing Galliard.[ch. 104] He later plans a surprise
            ambush on Paradis with the goal of eating Eren, but fails, and is
            driven to complete despair when Eren begins the Rumbling. He is then
            invited by Connie and Gabi to join the alliance aiming to stop Eren
            from destroying all life outside Paradis.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require('../assets/Bertholdth.png')}
          />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Bertolt Hoover</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            A reserved member of 104th Training Corps who graduated 3rd in his
            class and open up around Reiner, Bertolt is described as having
            potential to master every skill he has been taught if he had the
            motivation for it.[ch. 2][ch. 18][vol. 5:profiles] Berholt is a
            member of the Warriors and part of Reiner's infiltration team to
            capture the Founding Titan.[volume & issue needed] He is also the
            holder of the Colossus Titan (超大型巨人, Chō-ōgata Kyojin, alt.
            "Colossal Titan"[ep 4]), becoming a skinless 60-meter (200 ft) Titan
            who can release hot steam to protect himself and repel his
            opponents.[ch. 44] Berholt used his Titan power to instigate the
            Wall Maria incident for his group's infiltration and later breach
            Wall Trost a few years later to force the Founding Titan's user into
            the open.[ch. 4][ch. 9][vol. 10-11]. The reason Berholt joined the
            Warriors was so his bedridden father can be provided medical care by
            the Marleyans, caring a cover story that he came from same village
            as Reiner.[vol. 4][GB p.58-59]. In Volume 12, Reiner hints that
            Bertolt is in love with Annie.[vol. 12] Bertolt is later forced to
            reveal his true allegiance after Reiner finally broke and exposed
            them. In a later battle at Shinganshina,[ch. 82] he is captured by
            Eren, and left to be eaten by Armin, who was injected with the Titan
            serum to have the former regain his human form.[ch. 83,84] After
            Reiner returned to Marley, he learned from his mother that Bertolt's
            father, content of his son's patriotic devotion to Marley,
            peacefully passed away during their mission.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require('../assets/Annie.png')}
          />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Annie LeonHart</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            An Eldian cadet of the Marleyan Warriors, Annie is introduced as a
            cadet in the 104th Training Corps, where she graduated ranking 4th
            in her class.[ch. 2] She has short blonde hair and is a
            small-statured loner who is skilled in melee combat,[ep 4][ch. 17]
            having been raised by her father to consider the world her
            enemy.[ch. 18][vol. 5:profile] Annie is later revealed to be a
            member of the Warriors and part of Reiner's infiltration team to
            capture the Founding Titan.[volume & issue needed] She is also the
            holder of the Female Titan (女型の巨人, Megata no Kyojin), a
            14-meter (46 ft) Titan with an unprecedented feminine body structure
            who can harden parts of her skin and quickly heal herself.[ep 18][ep
            20][ep 21][vol. 5,6] As a cadet, she teaches Eren some of her melee
            skills,[ch. 4] and later joins the Military Police,[ch. 3] where she
            is seen as the quiet girl.[vol. 8][GB p.54-55] Following the Battle
            of Trost after her group deduces Eren, Annie played a role in Marco
            Bott's death to conceal her group's cover while later using Marco's
            Gear to personally kill the captive Titans Sawney and Bean.[ep
            19][ep 23][vol. 8] Annie later assumes her Titan form to ambush the
            57th expedition to Wall Maria while searching for Eren, using the
            intel Reiner secretly gave her to briefly capture him while killing
            off Levi's special operations squad.[vol. 7] Annie is outed during
            the Stohess District storyline once Armin deduces that she killed
            Sonny and Bean. Following her defeat, Annie encases herself in
            crystal to prevent further probing as to her motives.[ep 24][vol.
            8][GB p.54-55] But Annie would later be revived a few years later
            when Eren used the Founding Titan's power to undo all hardened
            Titans on Paradis.[ch. 124]
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require('../assets/Zeke.png')}
          />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Zeke Yeager</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            The "warchief" of the Marley's Warrior Unit and the holder of the
            "Beast Titan". In his Titan form, Zeke is a 17-meter (56 ft) tall
            Bigfoot-like creature with long, thin arms which can be used to
            launch projectiles at long distances. Due to belonging to the royal
            Fritz bloodline, his spinal fluid can also be used to turn other
            Eldians into Titans completely under his control. Additionally, Zeke
            is a charismatic leader and proficient strategist who can utilize
            his subordinates' capabilities to deadly effect on the battlefield.
            He emerges as one of the series' main antagonists following his
            introduction in the manga's ninth volume (i.e. the beginning of the
            anime's second season). Zeke is Grisha Yeager's firstborn son with
            Dina Fritz, and Eren's older half-brother.[ch. 35] Indoctrinated
            since birth to become the Eldian Resistance's vanguard by
            infiltrating Marley's ranks, Zeke grew to resent his parents for
            consistently prioritizing their plans of Eldian restoration over his
            well-being. When he learns that the Marleyan authorities are rapidly
            closing in on the Eldian Restoration Movement, Zeke betrays his
            parents to save himself and conceal his identity as a descendant of
            Karl Fritz.[ch. 86] After inheriting the power of the Beast Titan
            (獣の巨人, Kemono no Kyojin), he resolves to seize the Founding
            Titan and use it to "save" the Eldian people from further
            persecution by sterilizing them. After becoming the Warrior Unit's
            leader, Zeke oversees the training of Bertholt, Reiner, and Annie
            before they are sent to seize the Founding Titan from Paradis.
            Following the trio's failure, he leads another Marleyan attack on
            Paradis. Upon infiltrating Wall Rose's interior, he transforms
            Ragako's residents into Titans before proceeding to terrorize the
            surrounding population [ch. 35] [GB p.135] Ultimately, Zeke makes
            contact with Reiner and Bertholt before conscripting them to take
            part in an ambush on the Survey Corps as they attempt to seal the
            breach to Wall Maria and reclaim the city of Shinganshina.[ch. 70]
            Once Eren seals Wall Maria's outer gate, Zeke cuts off part of the
            Survey Corps south of the inner gate while entrusting Reiner and
            Bertholt with eliminating the rest of the contingent within
            Shanginshina.[ch. 74] Despite all but destroying the Corps' existing
            roster, assuming Eren to be manipulated by their father, Zeke is
            forced to retreat after Reiner and Bertholt are defeated and he is
            nearly killed by Levi. During Paradis's five year period of peace,
            Zeke secretly defected to their side under false pretenses while
            convincing Marley's military leadership to resume their attack on
            the walls. After enlisting Eren to stage a surprise attack on
            international summit hosted by Marley to acquire the War Hammer
            Titan and decimate Marley's high command, Zeke is briefly detained
            by Paradis before he and Eren incite a rebellion that plunges the
            country into chaos. Though Zeke deceives Eren so he can enter the
            Coordinate and command Ymir to sterilize all Subjects of Ymir, he is
            horrified to realize that Eren manipulated their father through the
            Attack Titan. Lamenting his actions that costed people's lives, Zeke
            allows himself to be killed by Levi.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require('../assets/Levi.png')}
          />
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Levi Ackerman</Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            He is known as humanity's most powerful soldier and head of an elite
            squad in the Survey Corps. Hange remarks that he is a bit of a
            "clean freak".[26] While it is said that he is blunt and
            unapproachable, it is noted that he has a strong respect for
            authority, structure and discipline.[volume & issue needed] The side
            story Attack on Titan: No Regrets focuses on Levi's origins,
            revealing that he was part of a band of thieves using the Vertical
            Maneuvering Equipment to commit crimes before he is scouted by Erwin
            to join the army. Captain Kenny Ackerman later notes that the
            capture of Eren and Historia has to do with Levi, whom he refers to
            as "Levi Ackerman".[ch. 56] Kenny is later revealed to be Levi's
            maternal uncle, who raised him after his mother Kuchel's death.
            Lately, in the Attack On Titan manga, Levi is said to be a victim of
            an explosion engineered by Zeke Yeager (brother of Eren Jaeger). He
            was in a near-death state until Hange Zoe found him and escaped with
            his body later to make an alliance with Commander Theo Magath and
            Pieck Finger in order to take down Eren Jaeger. Eventually, Levi
            recovers and joins the others in battle, managing to kill Zeke,
            fulfilling his promise to Erwin in killing the Beast Titan.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Aot');
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
