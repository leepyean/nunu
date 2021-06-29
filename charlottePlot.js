import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CharlottePlot extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Charlotte takes place in an alternate reality where a short-period
          comet called Charlotte passes near Earth once every 75 years. As this
          happens, it spreads dust onto the Earth, which causes a small
          percentage of preadolescent children who inhale the dust to manifest
          superhuman abilities upon reaching puberty. In Japan the story follows
          the protagonist Yuu Otosaka, a boy who awakens the ability to
          temporarily possess another person for five seconds. Although hoping
          to use his ability to fraudulently live a carefree high school life,
          he is unexpectedly exposed by Nao Tomori, a girl who can make herself
          invisible to a specific target. She forces him to transfer to
          Hoshinoumi Academy (星ノ海学園, Hoshinoumi Gakuen, "Sea of Stars
          Academy") and join its student council, of which she is the president.
          Also on the student council is Jōjirō Takajō, a boy who can move at
          uncontrollably high speeds. The student council's main objective is to
          ensure the safety of ability users from organizations who seek to
          exploit their powers. In doing so, the student council warns ability
          users of the potential danger of using their abilities openly. This
          leads the student council to Yusa Nishimori, a pop singer who has the
          ability to channel the spirits of the dead as a medium. Yusa's dead
          older sister Misa frequently makes use of this ability to freely
          possess her at any time, which allows Misa to use her own ability,
          pyrokinesis. Nao soon arranges for Yusa to transfer to Hoshinoumi
          Academy and join the student council.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          Yuu's younger sister Ayumi unexpectedly awakens an ability to cause
          anything around her to suddenly collapse, which results in her death.
          Yuu falls into a deep depression as a result and isolates himself, but
          Nao successfully manages to pull him out of his depression and gets
          him to return to the student council. While attending a concert of the
          post-rock band Zhiend with Nao, Yuu recollects previously suppressed
          memories of his older brother Shunsuke, who has the ability to time
          travel. Shunsuke had used this ability to establish Hoshinoumi Academy
          and an affiliated organization attempting to develop a vaccine to
          prevent children from developing abilities before they manifest, but
          his repeated use has left him blind. Yuu learns that the true nature
          of his ability enables him to steal another person's ability by
          possessing them. Yuu takes Shunsuke's ability to go back in time and
          ultimately prevent Ayumi's death by stealing her collapse ability
          before she can use it.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          Yuu's younger sister Ayumi unexpectedly awakens an ability to cause
          anything around her to suddenly collapse, which results in her death.
          Yuu falls into a deep depression as a result and isolates himself, but
          Nao successfully manages to pull him out of his depression and gets
          him to return to the student council. While attending a concert of the
          post-rock band Zhiend with Nao, Yuu recollects previously suppressed
          memories of his older brother Shunsuke, who has the ability to time
          travel. Shunsuke had used this ability to establish Hoshinoumi Academy
          and an affiliated organization attempting to develop a vaccine to
          prevent children from developing abilities before they manifest, but
          his repeated use has left him blind. Yuu learns that the true nature
          of his ability enables him to steal another person's ability by
          possessing them. Yuu takes Shunsuke's ability to go back in time and
          ultimately prevent Ayumi's death by stealing her collapse ability
          before she can use it.
        </Text>

        <View>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate('Charlotte')
        }}>
        <Text style={styles.buttonText}> Go Back</Text>
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
