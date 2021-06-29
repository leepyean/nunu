import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DatePlot extends React.Component {
  render() {
    return (
      <View>
        <Text style={[styles.text, { marginTop: 8 }]}>
          The series begins with a strange phenomenon called a "spatial quake"
          devastating the center of Eurasia, resulting in at least 150 million
          casualties. For the next 30 years, smaller spatial quakes plague the
          world on an irregular basis. In the present, Shido Itsuka, a seemingly
          ordinary high school student comes across a mysterious girl at the
          ground zero of a spatial quake. He learns from his adoptive sister
          Kotori that the girl is one of the "Spirits" from different dimensions
          who are the real cause of the spatial quakes that occur when they
          manifest themselves in the real world. He also learns that Kotori is
          the commander of the airship Fraxinus, crewed by the organization
          Ratatoskr and its parent company Asgard Electronics, and is recruited
          to make use of his mysterious ability to seal the Spirits' powers thus
          stopping them from being a threat to mankind. However, there is a
          catch: to seal a Spirit's power, he must make each Spirit fall in love
          with him and make her kiss him. Shido's intelligent classmate, Origami
          Tobiichi, is a sergeant of the AST (Anti-Spirit Team), a special unit
          designed to suppress the threat posed by Spirits. As Shido
          successfully keeps sealing more and more Spirits, he gains allies to
          help him with his dates with other Spirits. Shido also increases the
          competition among them for his attention and affection, much to his
          chagrin.
        </Text>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Date');
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
