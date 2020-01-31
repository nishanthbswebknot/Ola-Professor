import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView,StatusBar } from 'react-native';
import { render } from 'react-dom';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Dimensions, Platform, PixelRatio } from 'react-native';
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
export default class mainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isReady: false,
        };
      }
      async componentDidMount() {
       await Font.loadAsync({
          'Roboto': require('../assets/Roboto-Bold.ttf'),
        });
        this.setState({ isReady: true });
      }
      
     render(){
      if (!this.state.isReady) {
        return <AppLoading />;
      }
  return (
    <SafeAreaView style={styles.container}>
     <Image
          style={{width: "80%", height: "45%",marginBottom:10}}
          source={require('../assets/coverpage.png')}
        />
        <Text style={{marginBottom:10,fontSize:normalize(40),alignItems: 'center',justifyContent: 'center',fontFamily:'Roboto'}}> Olá Professor </Text>
<Text style={{marginBottom:20,fontWeight:'bold',alignItems: 'center',justifyContent: 'center',}}>          Escolha uma das opções abaixo           </Text>
<View style={{flexDirection:"row",}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatScreen1')}style={{height:"60%",width:"45%",borderRadius: 5,borderColor:'#DADADA',backgroundColor:'#ffffff',borderWidth:1,alignItems: 'center',
    justifyContent: 'center',marginRight:15,marginBottom:20}}><Image  style={{width: 50, height: 50,alignItems: 'center',justifyContent: 'center',}} source={require('../assets/robot.png')}></Image><Text style={{fontWeight:'bold',paddingTop:20,alignSelf:"center"}}> Abrir o assistente </Text><Text style={{fontWeight:'bold',alignItems: 'center',justifyContent: 'center'}}>{""}virtual</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatScreen2')}style={{height:"60%",width:"45%",borderRadius:5,borderColor:'#DADADA',backgroundColor:'#ffffff',borderWidth:1,alignItems: 'center',
    justifyContent: 'center',marginBottom:10}}><Image  style={{width: 50, height: 50,alignItems: 'center',justifyContent: 'center',}} source={require('../assets/consultor.png')}></Image><Text style={{fontWeight:'bold',paddingTop:20,alignItems: 'center',justifyContent: 'center',textAlign:"center"}}>Fale com um </Text><Text style={{fontWeight:'bold',alignItems: 'center',justifyContent: 'center'}}>consultor</Text></TouchableOpacity></View>
    </SafeAreaView>
  );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
    marginTop:StatusBar.currentHeight+1

  },
});
