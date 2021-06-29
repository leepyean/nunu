import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AotSeasons extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace(
                'https://animixplay.to/v1/shingeki-no-kyojin'
              );
            }}>
            <Text style={styles.buttonText}>Season 1</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace(
                'https://animixplay.to/v1/shingeki-no-kyojin-season-2'
              );
            }}>
            <Text style={styles.buttonText}>Season 2</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace(
                'https://animixplay.to/v1/shingeki-no-kyojin-season-3'
              );
            }}>
            <Text style={styles.buttonText}>Season 3 part 1</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace(
                'https://animixplay.to/v1/shingeki-no-kyojin-season-3-part-2'
              );
            }}>
            <Text style={styles.buttonText}>Season 3 part 2</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace(
                'https://animixplay.to/v1/shingeki-no-kyojin-the-final-season'
              );
            }}>
            <Text style={styles.buttonText}>Season 4 part 1</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('Aot')
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
