import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class YourNamePlot extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Mitsuha Miyamizu is a high school girl living in the rural town of
            Itomori near Hida. Bored of the town, she wishes to be a Tokyo boy
            in her next life. She inexplicably begins to switch bodies
            intermittently with Taki Tachibana, a high school boy in Tokyo,
            waking up as the other person and having to live through their
            activities and social interactions for the day. The two initially
            believe these experiences to be vivid dreams, but eventually realize
            they can communicate with each other by leaving messages on paper,
            phones and sometimes on each other's skin. Mitsuha (in Taki's body)
            sets Taki up on a date with his coworker Miki Okudera, while Taki
            (in Mitsuha's body) causes Mitsuha to become popular at school. One
            day, Taki (in Mitsuha's body) accompanies Mitsuha's grandmother
            Hitoha and her sister Yotsuha to leave the ritual alcohol
            kuchikamizake, made by the sisters, as an offering at the Shinto
            shrine located on a mountaintop outside the town. It is believed to
            represent the body of the village guardian god ruling over human
            connections and time. Taki reads a note from Mitsuha about the comet
            Tiamat, expected to pass nearest to Earth on the day of the autumn
            festival. The next day, Taki wakes up in his body and goes on a date
            with Miki, who tells him she enjoyed the date but also that she can
            tell that he is preoccupied with thoughts of someone else. Taki
            attempts to call Mitsuha on the phone, but cannot reach her and
            finds the body-switching has ended.
          </Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Taki, Miki, and their friend Tsukasa travel to Gifu by train on a
            trip to Hida, though Taki does not know the name of the town,
            instead relying on sketches he has made of the surrounding landscape
            from memory. A restaurant owner in Hida recognizes the town in the
            sketch as Itomori, being originally from there. He takes Taki and
            his friends to the ruins of the town, which has been destroyed and
            where five hundred residents were killed when the comet Tiamat
            unexpectedly fragmented three years earlier. While gazing over the
            impact crater in disbelief, Taki observes Mitsuha's messages
            disappear from his phone and his memories of her begin to gradually
            fade. Taki finds Mitsuha's name in the record of fatalities, and he
            wonders if the body-switching was just a dream. While Miki and
            Tsukasa return to Tokyo, Taki journeys to the shrine, hoping to
            reconnect with Mitsuha and warn her about the comet. In the shrine,
            Taki drinks Mitsuha's kuchikamizake then lapses into a vision, where
            he glimpses Mitsuha's past. He also recalls that he had already
            encountered Mitsuha on a train three years earlier when she came to
            Tokyo in her own timeframe to find him, though Taki did not
            recognize her as the body-switching was yet to occur in his
            timeframe. Before leaving the train in embarrassment, Mitsuha had
            handed him her hair ribbon, which he has since worn on his wrist as
            a good-luck charm
          </Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Taki wakes up in Mitsuha's body at her house on the morning of the
            festival. Hitoha deduces what has happened and tells him the
            body-switching ability has passed down in her family as caretakers
            of the shrine. Taki convinces Tessie and Sayaka, two of Mitsuha's
            friends, to get the townspeople to evacuate Itomori, by disabling
            the electrical substation and broadcasting a false emergency alert.
            Taki heads to the shrine, realizing that Mitsuha must be in his body
            there, while Mitsuha wakes up in Taki's body. At the mountaintop
            during sunset, the two sense each other's presence, but are
            separated due to contrasting timeframes and cannot see each other.
            When twilight falls (referred to in the film as "magic hour" or
            kataware-doki),[note 1] they return to their own bodies and see each
            other in person. After Taki returns Mitsuha's ribbon, they attempt
            to write their names on each other's palm so that they will remember
            each other. Before Mitsuha can write hers, however, twilight passes
            and they revert to their respective timeframes. When the evacuation
            plan fails, Mitsuha has to convince her father Toshiki, the mayor of
            Itomori, to evacuate everyone. Before doing so, Mitsuha notices her
            memories of Taki are fading away and discovers he wrote "I love you"
            on her hand instead of his own name. The comet's fragments crash to
            Earth and destroy Itomori. Taki wakes up in his own timeframe
            remembering nothing.
          </Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Five years later, Taki has graduated from university and searches
            for a job. He senses that he lost something important that he cannot
            identify, and feels inexplicable interest in the events surrounding
            the comet, now eight years past. The town of Itomori had been
            destroyed; however, all of its people survived as they had evacuated
            just in time. Meanwhile, Mitsuha has since moved to Tokyo. Some time
            later, Taki and Mitsuha glimpse each other when their respective
            trains pass each other, and they are instantly drawn to seek one
            another. Each disembarks and races to find the other, finally
            meeting at the stairs of Suga Shrine [ja]. Taki calls out to
            Mitsuha, saying that he feels that he knows her, and she responds
            likewise. Having found what each had long searched for, they shed
            tears of happiness and simultaneously ask each other for their name.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('YourName');
            }}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: RFValue(270),
    height: RFValue(40),
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
  text: {
    fontFamily: 'Comic Sans Ms',
    fontStyle: 'italics',
    fontWeight: 'bold',
    alignContent: 'left',
    fontSize: RFValue(12),
    color: '#0743a3',
  },
});
