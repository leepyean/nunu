import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HyoukaPlot extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          At the request of his older sister, student Hotaro Oreki joins
          Kamiyama High School's Classic Literature Club to stop it from being
          abolished, joined by fellow members Eru Chitanda, Satoshi Fukube and
          Mayaka Ibara. The story is set in Kamiyama City, a fictional city in
          Gifu Prefecture that the author based on his real hometown of
          Takayama, also in Gifu. The fictional Kamiyama High School is based
          upon the real life Hida High School. They begin to solve various
          mysteries, both to help with their club and at Eru's requests.
        </Text>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Hyouka');
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
