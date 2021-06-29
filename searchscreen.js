import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/Quintuplets.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Quintessential Quintuplets</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Tqq');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/AttackTitan.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Attack On Titan</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Aot');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/Charlotte.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Charlotte</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Charlotte');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/MaiSakuraJima.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Bunny Girl Senpai</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Bgs');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/DateALive.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Date A Live</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Date');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/Delusions.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Chunibyo Demo Koga Shitai</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Delusions');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/Ditf.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Darling in the Franxx</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Ditf');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>            

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/SwordArtOnline.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Sword Art Online</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('SAO');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/YourName.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Your Name</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('YourName');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/JujutsuKaisen.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Jujutsu Kaisen</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('JJK');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/SilentVoice.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>A Silent Voice</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('SilentVoice');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/Dm.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Dragon Maid</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('DM');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/Horimiya.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Horimiya</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Hori');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/Hyouka.png')}
                />
              </View>
              <View style={styles.subContainer2}>
                <Text style={styles.text}>Hyouka</Text>
              </View>
              <View style={styles.subContainer3}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Hyouka');
                  }}>
                  <Text style={styles.buttonText}>Watch</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: RFValue(120),
    height: RFValue(120),
    marginLeft: 30,
    position: 'absolute',
  },
  text: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    marginLeft: 70,
    fontFamily: 'Comic Sans Ms',
    marginTop: 35,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
  },
  subContainer2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer3: {
    flex: 1,
    marginLeft: RFValue(570),
    alignItems: 'right',
  },
  button: {
    width: RFValue(80),
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(35),
    backgroundColor: '#1b51cf',
    shadowColor: '#000',
    marginBottom: RFValue(30),

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
  container: {
    flex: 1,
    marginTop: 20,
  },
});
