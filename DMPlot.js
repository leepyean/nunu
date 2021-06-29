import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DMPlot extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            As office worker and programmer Kobayashi gets ready for work, she
            is greeted by a large dragon right outside her front door. The
            dragon immediately transforms into a human girl in a maid outfit,
            and introduces herself as Tohru. It turns out, that during a drunken
            excursion into the mountains the night before, Kobayashi had
            encountered the dragon, who claimed to have come from another world.
            Subsequently, Kobayashi had removed a holy sword from Tohru's back,
            earning her gratitude. With Tohru having no place to stay, Kobayashi
            offers to let the dragon stay at her home and become her personal
            maid, to which she agrees.
          </Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Despite being efficient at housework, Tohru's unorthodox methods of
            housekeeping often end up scaring Kobayashi and bringing more
            trouble than help. Additionally, Tohru's presence attracts other
            dragons, gods, and mythical beings to her new home. One of these
            dragons, Kanna, shows up at Kobayashi's door, demanding that
            Kobayashi return Tohru to the other world. It is then revealed that
            she'd been exiled from the other world, and having nowhere else to
            stay, Kobayashi takes her in and becomes her guardian. As both Tohru
            and Kanna settle into the human world, Kobayashi starts to think of
            them as family.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('DM');
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
