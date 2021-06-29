import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SaoSeasons extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/v1/sword-art-online');
            }}>
            <Text style={styles.buttonText}>Sword Art Online</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/anime/20021/Sword_Art_Online__Extra_Edition');
            }}>
            <Text style={styles.buttonText}>Movie: Sao Extra Edition</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/anime/21881/Sword_Art_Online_II');
            }}>
            <Text style={styles.buttonText}>Sword Art Online 2</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/v1/sword-art-online-alternative-gun-gale-online');
            }}>
            <Text style={styles.buttonText}>Sao Alternative: Gun Gale Online</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/v1/sword-art-online-movie-ordinal-scale');
            }}>
            <Text style={styles.buttonText}>Movie: Sao Ordinal Scale</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/v1/sword-art-online-alicization');
            }}>
            <Text style={styles.buttonText}>Sao Alicization</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/v1/sword-art-online-alicization-war-of-underworld');
            }}>
            <Text style={styles.buttonText}>
              Sao Alicization: War Of UnderWorld
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.replace('https://animixplay.to/v1/sword-art-online-alicization-war-of-underworld-2nd-season');
            }}>
            <Text style={styles.buttonText}>
              Sao Alicization: War Of UnderWorld part 2
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate('Sao')
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
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#fff',
  },
});
