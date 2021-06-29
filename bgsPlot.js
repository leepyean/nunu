import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class BgsPlot extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Sakuta Azusagawa's life takes a turn for the unexpected when he meets
          teenage actress Mai Sakurajima, dressed as a bunny girl, wandering
          through a library and not being noticed by anyone else there. Mai is
          intrigued that Sakuta is the only one who can see her, as other people
          are unable to see her, even when she is dressing normally or
          attempting to stay away from celebrity life. Calling this phenomenon
          "Adolescence Syndrome", Sakuta decides to solve this mystery, while
          continuing to get closer to Mai and meeting other girls who suffer
          from "Adolescence Syndrome" as well.
        </Text>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Bgs');
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
