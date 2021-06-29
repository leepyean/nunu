import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DelusionPlot extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Yūta Togashi is a boy who, during junior high school, suffered from
          "chūnibyō", believing that he possessed supernatural powers and
          calling himself the "Dark Flame Master", therefore alienating himself
          from his classmates. Finding his past embarrassing, Yūta attempts to
          start off high school where he does not know anyone, free from his old
          delusions. This proves to be difficult, however, as a delusional girl
          in his class, Rikka Takanashi, learns of Yūta's past and becomes
          interested in him.
        </Text>
        <Text style={[styles.text, { marginTop: 8 }]}>
          As the plot progresses, Rikka becomes more attached to Yūta, who,
          despite finding her delusions irritating and embarrassing, accepts
          her. He helps Rikka with a number of things, including founding and
          maintaining her club and tutoring her. The club in question, the
          "Far-East Magical Napping Society - Summer Thereof" also includes
          current chūnibyō Sanae Dekomori; former chūnibyō Shinka Nibutani; and
          the constantly sleeping Kumin Tsuyuri. When Yūta joins Rikka on her
          summer vacation, Yūta learns that two years prior, Rikka's father, to
          whom she was very close, died unexpectedly due to a terminal illness,
          causing her to fall into her delusions. After Yūta agrees to help
          Rikka search for the "Ethereal Horizon" (不可視境界線, Fukashi
          Kyōkaisen), which she believes will lead her to her father, she
          becomes romantically interested in him and vice versa.
        </Text>
        
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
    color: '#0743a3'
  },
});