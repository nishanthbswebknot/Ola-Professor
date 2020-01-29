import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { render } from 'react-dom';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
export default class mainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isReady: false,
        };
      }
      async componentDidMount() {
       await Font.loadAsync({
          'open-sans-bold': require('../assets/Roboto-Bold.ttf'),
        });
        this.setState({ isReady: true });
      }
      
     render(){
      if (!this.state.isReady) {
        return <AppLoading />;
      }
  return (
    <View style={styles.container}>
     <Image
          style={{width: 350, height: 350,marginBottom:10}}
          source={require('../assets/coverpage.png')}
        />
        <Text style={{marginBottom:10,fontSize:35,alignItems: 'center',justifyContent: 'center',fontFamily: 'open-sans-bold'}}> Olá Professor </Text>
<Text style={{marginBottom:20,fontWeight:'bold',alignItems: 'center',justifyContent: 'center',}}>Escolha uma das opções abaixo</Text>
<View style={{flexDirection:"row",}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatScreen1')}style={{height:150,width:150,borderRadius: 5,borderColor:'#DADADA',backgroundColor:'#ffffff',borderWidth:1,alignItems: 'center',
    justifyContent: 'center',marginRight:15}}><Image  style={{width: 50, height: 50,alignItems: 'center',justifyContent: 'center',}} source={require('../assets/robot.png')}></Image><Text style={{fontWeight:'bold',paddingTop:20,alignItems: 'center',justifyContent: 'center'}}>Abrir o assistente </Text><Text style={{fontWeight:'bold',alignItems: 'center',justifyContent: 'center'}}>{""}virtual</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatScreen2')}style={{height:150,width:150,borderRadius:5,borderColor:'#DADADA',backgroundColor:'#ffffff',borderWidth:1,alignItems: 'center',
    justifyContent: 'center',}}><Image  style={{width: 50, height: 50,alignItems: 'center',justifyContent: 'center',}} source={require('../assets/consultor.png')}></Image><Text style={{fontWeight:'bold',paddingTop:20,alignItems: 'center',justifyContent: 'center'}}>Fale com um </Text><Text style={{fontWeight:'bold',alignItems: 'center',justifyContent: 'center'}}>consultor</Text></TouchableOpacity></View>
    </View>
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
  },
});
