import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class TqqPlot extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            High school student Futaro Uesugi is an academically gifted student
            that leads a difficult life—his mother has died, he has no friends,
            and on top of all that, his father has incurred a large amount of
            debt.
          </Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            An opportunity presents itself when the rich Nakano family transfers
            to his school. Futaro is promptly hired as a highly paid tutor.
            However, much to Futaro's dismay, he discovers that his five
            charges—identical quintuplet sisters of varied personalities—have no
            interest in studying at all and have abysmal grades. Some of the
            quintuplets are against having Futaro, whom they view as a stranger,
            in their apartment, but Futaro's diligent tenacity gradually
            convinces those girls to accept him and to improve their grades.
          </Text>

          <Text style={[styles.text, { marginTop: 8 }]}>
            Throughout the series, Futaro develops special relationships with
            each of the quintuplets. Through a flashforward, it is revealed that
            he eventually marries one of them, but her true identity is only
            revealed near the end of the series.
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
