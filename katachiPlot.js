import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class KatachiPlot extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            Japanese high school student Shoya Ishida intends to kill himself,
            but he changes his mind at the last minute and decides to wrap up a
            loose end. It is revealed that, in sixth grade, a new student named
            Shoko Nishimiya joins Shoya's class and is revealed to be deaf. She
            tries to integrate with the class but ends up being an easy target
            for Shoya and his friends to bully. When word of the bullying
            reaches the principal, Shoya is singled out as the culprit by his
            teacher resulting in the class's bullying becoming directed toward
            him. Shoya blames Shoko, and the two get into a physical
            altercation. Shoko is subsequently transferred to another school and
            Shoya later finds a notebook Shoko left behind and keeps it.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Being outcast throughout middle school for his reputation as a
            bully, Shoya, now in highschool, is a depressed loner who is unable
            to look others in the eyes and envisions an "X" mark over people's
            faces. To wrap up his loose end, Shoya goes to return Shoko's
            notebook at the sign language center and apologize, but panics and
            asks to be friends instead. Shoko accepts his offer, leading Shoya
            to endeavor to make up for his bullying of Shoko. Tomohiro
            Nagatsuka, another loner, also befriends Shoya after he helps him
            out with a bully.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            One day, Shoya accidentally drops Shoko's notebook into a river; he
            then jumps in to retrieve it, which is prohibited. Yuzuru, Shoko's
            younger sister, takes a photo of Shoya jumping in and posts it
            online to get revenge on him, eventually leading to Shoya getting
            suspended. Shoya finds Yuzuru, who ran away from home, and brings
            her to stay at his house. When she leaves in the middle of the
            night, Shoya follows, and the two make up and become friends.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Shoya and Shoko reunite with Miyoko Sahara, a classmate from
            elementary school who was friendly to Shoko. Shoko later gives Shoya
            a gift and confesses her feelings for him, but because she tries to
            speak her affections rather than signing them out, Shoya mishears
            her.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Shoya invites Shoko to an amusement park with Tomohiro, Miyoko, Miki
            Kawai (another classmate from elementary school) and Satoshi Mashiba
            (Miki's friend). There, they are joined by another classmate from
            elementary school, Naoka Ueno, who drags Shoko into a ferris wheel.
            Naoka voices her feelings of hatred for Shoko, blaming her for
            creating a rift between her and Shoya, with whom she is infatuated.
            Yuzuru, who had been secretly recording the encounter, shows the
            video of this to Shoya. Desperate to remain blameless for her part
            in bullying Shoko following the leak, Miki exposes Shoya's past to
            the students who were oblivious to it. Later, she attempts to
            apologize to the group, but Shoya blows everyone off after Naoka
            remains dismissive.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Shoya learns Shoko and Yuzuru's grandmother has died recently. To
            cheer them up, Shoya takes them to the countryside and sees that
            Shoko blames herself for everything that has happened to him. Shoya
            decides to devote his entire social life to the sisters.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            During a fireworks festival, Shoko goes home under the guise of
            finishing homework. Shoya follows when Yuzuru asks him to get her
            camera. When he arrives, he finds Shoko standing on the balcony,
            about to commit suicide. Shoya succeeds in grabbing her and pulls
            her back up, but falls into the river below. He is rescued by his
            former best friends in elementary school but slips into a coma.
            Hoping to help Shoya, Shoko meets with each of the group members to
            explain her and Shoya's situations.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            One night, Shoko dreams about receiving a farewell visit from Shoya.
            Horrified, she runs to the bridge and collapses in tears. Shoya,
            awakening from his coma, stumbles to the bridge and finds her there.
            He apologizes for the way he treated her, asking her to stop blaming
            herself and admits that, while he once considered ending his own
            life, he has since decided against it. Shoya then asks her to help
            him continue to live, to which she agrees.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            When Shoya returns to school, he is reunited with his new friends
            and comes to understand how much his they still care for him. The
            friends go to the school festival together and Shoya finds he is
            finally able to look at other people's faces again as he envisions
            the "X" marks falling away. Looking around at his family and all the
            new friends he has made, Shoya starts tearing up, knowing he has
            finally redeemed himself.
          </Text>
        </View>
        
        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('SilentVoice')
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
