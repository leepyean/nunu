import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InfoScreen from './screens/info';
import SearchScreen from './screens/searchscreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AotScreen from './screens/aot';
import TqqScreen from './screens/tqq';
import CharlotteScreen from './screens/charlotte';
import BgsScreen from './screens/bgsenpai';
import DateScreen from './screens/datealive';
import DelusionsScreen from './screens/delusions';
import DitfScreen from './screens/ditf';
import SaoScreen from './screens/sao';
import YourNameScreen from './screens/yourName';
import JJKScreen from './screens/jjk';
import SilentVoiceScreen from './screens/silentvoice';
import DMScreen from './screens/DM';
import HyoukaScreen from './screens/hyouka';
import HoriScreen from './screens/horimiya';

import AotPlot from './plot/aotPlot';
import BgsPlot from './plot/bgsPlot';
import TqqPlot from './plot/tqqPlot';
import YourNamePlot from './plot/yourNamePlot';
import DitfPlot from './plot/ditfPlot';
import SaoPlot from './plot/saoPlot';
import DMPlot from './plot/DMPlot';
import HoriPlot from './plot/horiPlot';
import KatachiPlot from './plot/katachiPlot';
import JJKPlot from './plot/jjkPlot';
import DelusionPlot from './plot/delusionPlot';
import CharlottePlot from './plot/charlottePlot';
import DatePlot from './plot/datePlot';
import HyoukaPlot from './plot/hyoukaPlot';

import AotChars from './characters/aotChar';
import BgsChars from './characters/bgsChar';
import TqqChars from './characters/tqqChar';
import YourNameChar from './characters/yourNameChars';
import DitfChars from './characters/ditfChars';
import SaoChars from './characters/saoChars';
import DMChars from './characters/dragonMaidChars';
import HoriChars from './characters/horiChars';
import KatachiChars from './characters/katachiChars';
import JJKChars from './characters/jjkChars';
import DelusionChars from './characters/delusionChars';
import CharlotteChars from './characters/charlotteChars';
import DateChars from './characters/dateChars';
import HyoukaChars from './characters/hyoukaChars';

import AotSeasons from './seasons/aotSeasons';
import TqqSeasons from './seasons/tqqSesons';
import SaoSeasons from './seasons/saoSeasons';
import DelusionSeasons from './seasons/delusionSeasons';
import DateSeasons from './seasons/dateSeasons';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  Info: { screen: InfoScreen },
  SearchAnime: { screen: SearchScreen },
  Aot: { screen: AotScreen },
  Tqq: { screen: TqqScreen },
  Charlotte: { screen: CharlotteScreen },
  Bgs: {screen: BgsScreen},
  Date: {screen: DateScreen},
  Delusions: {screen: DelusionsScreen},
  Ditf: {screen: DitfScreen},    
  SAO: {screen: SaoScreen},
  YourName: {screen: YourNameScreen},
  JJK: {screen: JJKScreen},
  SilentVoice: {screen: SilentVoiceScreen},
  DM: {screen: DMScreen},
  Hyouka: {screen: HyoukaScreen},
  Hori: {screen: HoriScreen},  
  AotPlot: {screen: AotPlot},
  BgsPlot: {screen: BgsPlot},
  TqqPlot: {screen: TqqPlot},
  YourNamePlot: {screen: YourNamePlot},
  DitfPlot: {screen: DitfPlot},
  SaoPlot: {screen: SaoPlot},
  DMP: {screen: DMPlot},
  HoriPlot: {screen: HoriPlot},
  KnkPlot: {screen: KatachiPlot},
  JJKP: {screen: JJKPlot},
  DP: {screen: DelusionPlot},
  CHP: {screen: CharlottePlot},
  DatePlot: {screen: DatePlot},
  HP: {screen: HyoukaPlot},

  AotChars: {screen: AotChars},
  BgsChars: {screen: BgsChars},
  TqqChars: {screen: TqqChars},
  YourNameChar: {screen: YourNameChar},
  DitfChars: {screen: DitfChars},
  SaoChars: {screen: SaoChars},
  DMC: {screen: DMChars},
  HoriChars: {screen: HoriChars},
  KnkChars: {screen: KatachiChars},
  JJKC: {screen: JJKChars},
  DC: {screen: DelusionChars},
  CHC: {screen: CharlotteChars},
  DateChars: {screen: DateChars},
  HC: {screen: HyoukaChars},
  
  AotSeasons: {screen: AotSeasons},
  TqqSeasons: {screen: TqqSeasons}, 
  SaoSeasons: {screen: SaoSeasons},
  TokaSeason: {screen: DelusionSeasons},
  DateSeason: {screen: DateSeasons},
});

const AppContainer = createAppContainer(SwitchNavigator);
