import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SaoChars extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.subContainer}>
          <Image  source={require('../assets/kirito.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Kazuto "Kirito" Kirigaya</Text>

          <Text style={styles.text}>
            As the main protagonist of Sword Art Online, Kirito was chosen to be
            one of the one thousand beta testers for the closed beta of Sword
            Art Online, the first ever Virtual Reality Massively Multiplayer
            Online Role-Playing Game (VRMMORPG) for the NerveGear, and later
            joined the official version of the game where he became one of the
            10,000 players trapped in Sword Art Online. During the start of SAO,
            he befriended a girl named Asuna. During the 1st Floor Boss, as
            Illfang the Kobold Lord's weaponry and attack patterns differed from
            the beta, while the raid party relied on Argo's published beta test
            version of information about it, Diavel was killed by the monster
            while attempting to obtain the Last Attack bonus. Because of this,
            the hatred for beta testers resurfaced and threatened to go out of
            control. Kirito decided to end the tension by claiming that a
            majority of beta testers were inefficient and incapable players,
            while only a select few of the beta testers like himself resulted
            the creation of the category Beater and Kirito remained a solo
            player for majority of the game. For being the first player to
            defeat the 1st Floor Boss, Kirito received a black leather trench
            coat that becomes his trademark appearance for the rest of the
            series.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            During the time Kirito spent in SAO, Kirito joined a guild named the
            Moonlit Black Cats, but he kept his character's level a secret,
            which resulted in the entire guild being killed by monsters, which
            led to Kirito wallowing in his despair and self-loathing until he
            read the time delayed message Sachi left for him on Christmas Eve.
            This event kept Kirito from joining another guild. Kirito befriended
            a girl named Silica and helped her revive her pet Pina. Later,
            Kirito met a blacksmith named Lisbeth, who forged a new sword for
            Kirito after he unlocked a unique skill: Dual Blades, although he
            kept it hidden to avoid attention. However, he was forced to reveal
            it during 74th Floor Boss fight in order to save the people nearby
            as they couldn't leave by teleport crystal and defeating the boss.
            Later he was forced to join the Knight of Blood Oath after the
            revelation of his unique skill and accepted the duel against
            Heathcliff for allowing Asuna to go with him and lost. He soon begin
            to develop a relationship with Asuna and later married her in-game.
            Later, Kirito exposed Heathcliff as Kayaba after the 75th Floor
            Boss. He faced him in a one on one duel with a condition; to allow
            every player to logout if Kirito wins, and manages to defeat him
            ending SAO with a total of 6,147 survivors.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Despite the completion of SAO, Asuna remains unconscious and Kirito
            learned from Agil that Asuna is trapped in another virtual reality
            called Alfheim Online. Logging into Alfheim Online to rescue her,
            where he meets a player name Leafa, who is unknowingly, is his
            younger sister Suguha; who agrees to guide him to the head toward to
            the top of the giant World Tree, in order to get to Asuna. Arriving
            there and tried to get to the top of World Tree, but rescue by Leafa
            where he soon learns Leafa's identity as Suguha where Suguha reveals
            her feelings for him in the real world. Not knowing how to respond
            or comfort her, Kazuto tells her he will be waiting for her in game.
            When they meet up they engage in a fight which culminates with both
            of them letting down their guard expecting the other one to kill
            them, however that only leads to them hugging and apologizing to
            each other. Leafa lets go of her feelings for Kirito and after
            pulling herself together Leafa helps him rescue Asuna from the top
            of the world tree.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Eventually Kirito manages to reach to the top of the World Tree and
            see Asuna again where he was confronted by Sugou going by Oberon,
            binding them both with gravity magic. Oberon then stabbed Kirito
            with his sword, and then critically damaging Kirito by increasing
            Kirito's pain limit and impaling him. When the consciousness of
            Akihiko Kayaba reminded Kirito how he was defeated by Kirito's
            determination and give him his admin ID and password and remove
            Sugou's GM status, Kirito then blinds and dismembers him after
            setting Sugou's pain limit to the maximum declaring the pain was
            much more painful in SAO compared to ALO. After rescuing Asuna, he
            soon receives a program from Kayaba called the World Seed which
            revitalizes the VRMMORPG genre, after Kirito has it upload by Agil
            on the Internet.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Several months later, Kazuto is recruited by Kikuoka to investigate
            a serial killer known as Death Gun, a "player" in the game Gun Gale
            Online. GGO players are being killed by him in the game, which has
            led to their deaths in the real world. Kirito enters GGO and meets
            Sinon, who believes he's a girl due to his avatar, but she later
            discovers his true gender. Despite so, she continues to help Kirito
            prepare for the next Bullet of Bullets, which is where Death Gun is
            subjected to appear. However when the two first meet, Kirito
            discovers that Death Gun is a former member of Laughing Coffin. The
            BoB began, and Kirito learns of Sinon's past. After most of the
            other players have been taken out, Kirito and Sinon team-up to
            devise a plan to take down Death Gun. Kirito deduces Death Gun's
            method of killing and faces him in a battle, winning. He warns Sinon
            to be careful as he logs out. Once he did so, he rushed over to
            Shino Asada's (Sinon's real life identity) house and saves her from
            the Death Gun killer on the reality side, Kyoji Shinkawa. The two
            reconvene with Kikuoka, who then also discover that there was one
            last person in the Death Gun group... Atsushi Kanomoto, otherwise
            known as Johnny Black, and the last known surviving member of
            Laughing Coffin.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Later, Kazuto agrees to work with the company Rath in testing out
            their new full-dive system, the Soul Translator. The STL reads the
            Fluctlights in the human brain and transports them to a highly
            advanced AI world, the Underworld. In the Underworld, Kirito has no
            memories of reality while he dives, and cannot take any memories
            with him when he exits. After explaining the job to Asuna and Shino,
            he asks Asuna to go to America with him in an effort to witness the
            true embarking of full-dive technology, which she agreed. However,
            they are ambushed by Johnny Black, who puts Kirito into a coma.
            After being diagnosed with brain damage, Kazuto is taken by Kikuoka
            and the Japanese government to the Ocean Turtle, a base out at sea
            run by Rath. There, they put him into a dive into the Underworld
            with his memories of reality intact in order to buy them time for
            them to treat his brain damage.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            In the Underworld, Kirito grew up with his best friends Eugeo and
            Alice, and both him and Eugeo were tasked with the calling of
            cutting down the Gigas Cedar. However a trip to the End Mountains,
            resulted in Alice touching the Dark Territory, breaking the Taboo
            Index. Alice is subsequently taken away, and Kazuto awakens in
            reality. When he returns after his attack, he has his memories from
            reality intact and meets Eugeo. He helps Eugeo cut down the Gigas
            Cedar and the two depart for the Central Cathedral, where they both
            enroll in the Swordsman Academy in North Centoria. Several months
            in, the two prevent a rape on their pages and kill their abductors,
            which causes them to break the Taboo Index. The two are imprisoned,
            but escape and are saved by Cardinal, who gives them the skills and
            knowledge they need to take down the Integrity Knights, defeat
            Administrator, and fight the impending invasion by the Dark
            Territory. The two trek their way up the tower. They defeat
            Deusolbert, the Integrity Knight who took Alice away. They outsmart
            Linel and Fizel, the two youngest Integrity Knights. After defeating
            Fanatio, the two finally meet Alice, but Kirito and Alice are
            separated from Eugeo. After making his way to Quinella, Kirito is
            forced to fight Eugeo who had been corrupted to becoming an
            Integrity Knight. Kirito defeats him and returns him to his senses.
            However after a long battle with Quinella, Eugeo dies in Kirito's
            arms. Quinella attempts to escape to the real world by summoning a
            console that can contact Rath, but Chudeklin appeared and took her
            down with him, and they both perish. Kirito uses the console to
            contact Rath, but Rath was under attack, and Kirito's fluctlight
            became damaged.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Alice returned to Rulid Village with Kirito after the battle with
            Administrator, and took care of him. She notes that it was because
            of him, she hung up her sword. After the Dark Territory had begun
            their plans to attack the Human World, Alice is forced to go back to
            the front lines and took Kirito with her, leaving him in the care of
            Tiese and Ronye, who are both devastated to hear of Eugeo's death.
            He is later found and attacked by PoH during the Underworld War, but
            the memory fragments Eugeo left behind to him caused his fluctlight
            to be restored. Now awakened, Kirito forcingly logged out the
            remaining foreign players attacking Underworld and defeated PoH
            before going out with Asuna to rescue Alice.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/asuna.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Asuna Yuuki</Text>

          <Text style={styles.text}>
            The main heroine of Sword Art Online and main protagonist of the
            seventh volume, Asuna – who is 17 – is a friend and later to be
            girlfriend and the in-game wife of Kirito in Sword Art Online and
            Alfheim Online. The sub-leader of the Knights of the Blood Oath, a
            medium-sized guild acknowledged as the strongest guild in Aincrad.
            Being one of the few girls that play SAO and extremely attractive,
            she receives many invitations and proposals. Asuna is a
            strong-willed, and an accomplished player known in-game as "the
            Flash" for her extraordinary fast skills with the rapier. Later, she
            falls in love with Kirito and they marry in-game after saving him
            from being killed by Kuradeel. Towards the end of the SAO arc, she
            saves Kirito from a killing blow by Heathcliff at the cost of her
            life. However, her death was only in-game and she is shortly
            reunited with Kirito shortly after the death of Heathcliff.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Despite the completion of SAO, Asuna remains unconscious and is
            instead detained in another virtual reality called Alfheim Online.
            She is forced to play the role of «Titania the Queen of Fairies»,
            with Nobuyuki Sugou, the man responsible for imprisoning her,
            playing as Oberon, the Fairy King. This is done so that Sugou could
            marry Asuna in the real world, while she is unconscious and thus
            take over RCT Progress Inc. She attempts to escape the World Tree
            where she is imprisoned and manages to steal a GM card, and is
            caught, and sent back after two slime guards verify she is the
            captive. When Yui's voice is heard, she throws the GM card down to
            her. Upon being released, she creates two avatars for Alfheim, Asuna
            (the Undine Healer) and Erika (and the Sylph battle character), and
            went on to continue living together with Kirito. She enrolls at the
            SAO Survivor School with Kazuto Kirigaya in the real world after
            everything ended. In the real world, Asuna's parents want her to
            follow in their footsteps. However, after living in SAO and meeting
            Kirito, she gains a different perspective and looks back on her past
            with disgust. She officially becomes Kazuto's real-life girlfriend
            and dreams of marrying him and having a family with him in the
            future.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Asuna becomes a major character in Alicization. After Kirito
            disappears off the grid after Johnny Black's attack, Asuna discovers
            the existence of the Ocean Turtle and requested the help of Rinko
            Koujiro, who helped her get on board and convinced Kikuoka to let
            her stay. When the Dark Territory began their attack, Asuna logged
            into the Underworld under the super account, the Goddess of
            Creation, Stacia. Date of birth September 30, 2007
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/yui.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yui</Text>

          <Text style={styles.text}>
            Originally a side-story character in SAO, Yui later becomes an
            accompanying/support character in ALO. At first thought to be a lost
            child in SAO, she is an artificial intelligence. Her full
            designation is «Mental Health – Counselling Program», MHCP version
            1, codename, «Yui». Yui is shown to have a human form and a
            Navigation Pixie form where she is always barefoot in both forms.
            She was designed to monitor the emotions of players and appear at
            their sides to hear and help them out. However, since the moment
            everyone was imprisoned in Sword Art Online, she was forbidden to
            come in contact with the players and complete her prime directive.
            Unable to do anything but suffer as she monitored the emotions of
            the trapped players, she came upon Kirito and Asuna whose emotions
            stood out as a beacon of joy and peace in a sea of fear and despair.
            She sought them out, appearing to them as an amnesiac child whom
            they adopted. In the end she was nearly deleted by Cardinal, the
            management system of SAO, but is saved by Kirito by converting and
            storing her data into his own NerveGear. Yui later shows up in ALO
            as a Private Navigation Pixie and helps Kirito along with Leafa to
            find Asuna. She refers to Kirito as "Daddy" and Asuna as "Mommy" and
            gets very annoyed if any girl other than Asuna, Leafa or Sinon gets
            close to Kirito. Kirito uses his skills and resources in the real
            world to construct a device for Yui to view the real world even
            while she is in virtual reality and gives her the ability to
            communicate with them.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/klein.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Klein</Text>

          <Text style={styles.text}>
            A friendly player that meets Kirito at the start of the game, who
            quickly befriends and learns the basics from Kirito where he became
            one of the 10,000 players who were trapped in Sword Art Online.
            Kirito and Klein go their separate ways shortly after when Kirito
            leaves for another town to power level, while Klein remains behind
            to help out his less experienced friends, although he is concerned
            for Kirito due to his solitude and recklessness. Klein uses a katana
            to fight and later becomes a leader of his own guild, Fuurinkazan.
            He regularly meets with Kirito and his friends and occasionally
            joins them in quests in ALO, especially after the release of the
            World Seed.[2]
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/agil.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Agil</Text>

          <Text style={styles.text}>
            A bald, black axe wielder who owns a general shop in SAO, along with
            having a hand in Blacksmithing. Despite his intimidating appearance,
            he is kind-hearted and spent most of his earnings to help players in
            the middle floors. Kirito is a regular in his shop and they are
            friends. Agil runs a bar named "Dicey Café" in the real world, which
            was run by his wife during his two-year coma. The café later becomes
            Kazuto and company's meeting place in the real world.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/silica.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Silica</Text>

          <Text style={styles.text}>
            A side-story character in SAO. One of the rare beast tamers in the
            game. Very early in the game, she was able to tame a small dragon
            named Pina (ピナ), who is named after her real-life cat: this feat
            gave her immense fame, but she was just a mid-level player. Due to
            her fame, many tried to get on her good side, causing her to get a
            bit of an inflated head. She usually stays away from the males, who
            try to marry her (despite the fact that she's only 13) or make her
            their "mascot." After getting lost in a forest, Pina is killed
            trying to save Silica from a monster attack. Kirito rescued and
            helped Silica get the "Pneuma Flower", an item that can revive tamed
            beasts, as she resembled his sister. She gained feelings for him,
            but once she discovers his skills, she realized that they cannot be
            together in the game but promise to meet again. Keiko befriends Rika
            at SAO Survivor School. She joins Kirito and his friends in ALO
            right after they meet in the real world: they often go together in
            quests.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/lisbeth.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Lisbeth</Text>

          <Text style={styles.text}>
            A side-story character in SAO, who is a blacksmith with her own shop
            and takes great pride in her abilities. Lisbeth or "Liz" is a close
            friend of Asuna who recommended her to Kirito. Kirito commissioned
            Liz to forge a custom-made sword for him and accompanies her in a
            quest for the special ore required for the job. During the quest,
            she also develops feelings for Kirito. She is devastated when she
            finds out that Kirito is Asuna's crush. However, she finds some
            solace after Kirito thanks her for giving him a renewed
            determination to fight on and clear the game. She requests to be
            Kirito's exclusive blacksmith. Rika is almost very well teasing
            Asuna about her relationship with Kirito afterwards. At SAO Survivor
            School, she and Keiko get irritated when seeing Kazuto and Asuna
            together. Liz later becomes a regular player in ALO and frequently
            joins Kirito and his friends in quests and takes up the task of
            upgrading their equipment.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/suguha.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Suguha "Leafa" Kirigaya</Text>

          <Text style={styles.text}>
            Suguha, also known as Sugu; she is in actuality Kazuto's cousin, as
            her mother had been raising her sister's child from a young age
            after his parents died from an accident, though neither Suguha nor
            Kazuto knew about this until later.[8] She is a diligent worker and
            has been practicing kendo for 8 years, partially to escape the
            loneliness and isolation in her life.[9] After Kazuto Kirigaya (the
            name of Kirito in real life) gets trapped in Sword Art Online, she
            begins playing Alfheim Online as a Sylph in an attempt to try to
            understand him better, and it is at this time that she finds out
            they are cousins rather than siblings;[9] with her mother revealing
            to her that he is not her biological brother, but is actually her
            cousin and was adopted into their family when he was young. This
            causes Sugu to develop feelings for him that she doesn't really
            understand;[8] however, because he is trapped inside SAO, she never
            acts on them. That being said, when Kazuto awakens after his
            two-year ordeal, those feelings come back, but she realizes that he
            is already in love with someone else, namely Asuna.[9]
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Coincidentally, she meets Kazuto's avatar, Kirito, in Alfheim Online
            after he saves her from an attack by pk'ers player killers. Unaware
            of his true identity, she decides to help him on his quest to find
            somebody which eventually leads them to the world tree. After
            understanding the depth of Kazuto's love for Asuna, she resolves to
            give up on him and instead becomes attached to Kirito in ALO.
            However, when Kirito's true identity is revealed, she is heartbroken
            and the two of them have an awkward exchange in the real world where
            Sugu reveals her feelings for him. Not knowing how to respond or
            comfort her, Kazuto tells her he will be waiting for her in game.
            When they meet up they engage in a fight which culminates with both
            of them letting down their guard expecting the other one to kill
            them, however that only leads to them hugging and apologizing to
            each other. Leafa lets go of her feelings for Kirito and after
            pulling herself together she helps him rescue Asuna from the top of
            the world tree.[10] She regularly plays ALO together with Kirito,
            Asuna, Silica, Klein and the rest of their group. Leafa, Lisbeth and
            Silica also feature as protagonists in the spin-off manga series
            Sword Art Online: Girls' Ops, where they form a team with Kirito
            away on a study program and Asuna tied up in family affairs.[11]
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/sinon.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Shino "Sinon" Asada</Text>

          <Text style={styles.text}>
            Sinon is the main character of the Phantom Bullet Arc. When she was
            two years old, her father died in a car accident.[12] Nine years
            later, while at a post office, an armed robber attempted to shoot a
            pregnant woman, but lost control of the gun after Shino bit his
            hand. Afterwards, she shot him three times, killing him.[13] Since,
            she developed a fear of guns, entering panic attacks whenever one is
            visible. As a result, she is bullied at school by her peers, with a
            finger gun being enough to trigger her phobia.[14] To help ease her
            trauma, her friend Kyōji Shinkawa convinced her to play Gun Gale
            Online.[15] Known as Sinon in-game, her main weapon is the «PGM
            Ultima Ratio Hecate II» sniper rifle, which she earned after
            defeating a monster in a dungeon.[16]
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Shortly before the Bullet of Bullets (BoB) tournament, Sinon
            encounters Kirito, deciding to help him after believing he is female
            due to his avatar.[17] After Kirito's true gender was revealed, an
            angered Sinon[18] attempts to leave him, but they meet again during
            the BoB.[19] The two are confronted by Death Gun, who causes Sinon's
            PTSD to relapse when his weapon was revealed to be a Type 54 pistol,
            the same weapon she had used in the post office shooting.[20] She is
            rescued by Kirito and the two escape, though she is afraid to attack
            Death Gun.[21] With his help, Sinon overcomes her fear and the two
            defeat Death Gun.[22] Afterwards, the two end the tournament as
            co-winners after Sinon kills them both with a «Gift Grenade».[23]
            Upon exiting GGO, Shino is visited by Kyōji, who congratulates her
            on winning the BoB. However, angry at Kirito, he attacks her with
            intentions of raping and eventually killing her, revealing himself
            to be Death Gun's creator.[24] Shino manages to resist his attack
            and escape, but is stopped by Kyōji before she could exit the house;
            Kirito arrives and fights Kyōji, the latter eventually being knocked
            out by Shino throwing her stereo at him.[25]
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            After the Death Gun incident, Sinon seems to have gotten over her
            fear and is moving on from the incident, no longer vulnerable to her
            classmates' threats of using a gun on her. In Agil's café, Shino
            meets Asuna, Rika, and Sachie Osawa, a woman who had survived the
            post office incident, who convinces her that she had saved her and
            her daughter's life.[26] Sinon eventually decides to play ALfheim
            Online with Kirito and his friends. During her time with Kirito,
            Sinon develops romantic feelings for him, but decides not to pursue
            them due to her close friendship with his girlfriend, Asuna.
            However, she does on occasion, show Kirito her true feelings for
            him.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/zekken.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Yuuki "Zekken" Konno</Text>

          <Text style={styles.text}>
            One of the main characters from Volume 7. She was an Imp in ALO, she
            started dueling anyone promising an 11-hit Original Sword Skill
            (OSS) if she's defeated: due to her undefeated status she's given
            the title "Absolute Sword". Eventually Asuna fights her but loses.
            After the fight Yuuki asks her to help defeating the 27th Floor boss
            with her guild the "Sleeping Knights" in desire to etch all their
            names on the Monument of Swordsmen to make a memory. After certain
            events, which include the defeat of the boss it is revealed that
            Yuuki has HIV/AIDS and the guild members are patients in terminal
            state: to test the Medicuboid device, designed supposedly by Rinko
            Koujiro, in care for future patients. Yuuki forms a strong bond with
            Asuna, in reminder of her late elder twin sister Aiko Konno. With
            the time passing Yuuki's condition deteriorates and after she
            entrusts her OSS «Mother's Rosario» to Asuna before she dies
            peacefully in ALO, surrounded by over 1000 players from every tribe
            in the game, including her guild members, Asuna and her friends.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/eugeo.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Eugeo</Text>

          <Text style={styles.text}>
            A young lad who was also Kirito's "childhood friend" along with
            Alice in Underworld. He has his memories of Kirito purged, along
            with the rest of the villagers, but recovers them later on, to a
            certain degree. He has a strong desire to find Alice and in order to
            do so, Kirito teaches him his "Aincrad-style" sword skills. Eugeo
            became one of Kirito's loyal companions. He breaks the taboo index
            to save his disciples from rapists. After coming to a stalemate duel
            with Bercouli, Eugeo is captured by Quinella and turned into an
            Integrity Knight, becoming Eugeo Synthesis Thirty-Two
            (ユージオ・シンセシス・サーティツー, Yūjio Shinseshisu Sātitsū).
            Eugeo became freed from Quinella, but he was bisected by her and
            dies in front of a devastated Kirito. Eugeo tags alongside a young
            Alice in the afterlife. Amid the struggle with PoH in the
            Alicization – War of Underworld-arc, Eugeo's spirit restores a
            comatose Kirito to full health.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Image source={require('../assets/alice.png')} style={styles.image} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.charName}>Alice Zuberg</Text>

          <Text style={styles.text}>
            The mysterious girl who was Kirito's "childhood friend", along with
            Eugeo, in Underworld. She is captured and supposedly taken away to
            be executed by the Integrity Knights for breaking the rule by
            "entering" the Dark Territory. She contacted Kirito, in spirit form,
            as well as aided in Eugeo's healing, showing that she is still alive
            and remembered both of them. She also implored them to come to find
            her. It is later revealed that she had become an Integrity Knight in
            Volume 11 of the light novels. Her name as an Integrity Knight is
            Alice Synthesis Thirty (アリス・シンセシス・サーティ, Arisu
            Shinseshisu Sāti). Alice regained her memories and joined Kirito and
            Eugeo to defeat the Administrator, but she was unconscious and Eugeo
            was killed by the Administrator. Alice cares for the unconscious
            Kirito after the Administrator's death, she is reunited with her
            sister Selka and protect Kirito in a small house. Inspired by Kirito
            trying to save her village’s people despite his comatose state,
            Alice later participates in the war against Dark Territory. She got
            kidnapped by Gabriel Miller but rescued by Kirito and Asuna. She is
            brought to the real world in an android body and officially revealed
            to the world in a press conference organized by Rath. Like many
            other girls that Kirito has a connection with, Alice also develops
            feelings for Kirito and was shown to be jealous and protective
            towards him when Asuna entered the underworld and approached him.
            She and Asuna can be regarded as rivals for Kirito’s affection, but
            despite that they get along fairly well and are capable of working
            together in battle.
          </Text>
        </View>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('SAO')
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
