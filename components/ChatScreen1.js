import React, { Component } from 'react';
import * as Font from 'expo-font';
import { View, Text,Image,KeyboardAvoidingView,SafeAreaView,StatusBar } from 'react-native';
import {GiftedChat,Bubble,InputToolbar,Send,Avatar} from 'react-native-gifted-chat'
import Axios from "axios";
import { AppLoading } from 'expo';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Button,Title,Icon,Row,Column} from 'native-base';
class ChatScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  state = {
    messages: [],
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../assets/Roboto-Bold.ttf'),
    });
    this.setState({ isReady: true });
  }
  genUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  renderInputToolbar(props) {
    return <InputToolbar {...props} containerStyle={{marginLeft: 15,marginRight: 15,borderRadius: 25,marginBottom:10,
      } }/>;
  }
  async onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages[0]),
    }))
    
    const data = await Axios.post("http://52.90.113.157:3000/api/chat",{
      
      message: messages[0].text,
      
    })
    
    
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, {text:data.data.ResultText,_id: this.genUuid() ,createdAt: new Date(),user: {id:this.genUuid(),avatar:require('../assets/robot.png')}}),
      }))

  }
  
  renderSend(props) {
    return (
      
      <Send {...props}>
          <Image

            source={require("../assets/send.png")}
            style={{alignItems:"center",alignSelf:"center",height:30,width:30,justifyContent:"center"}}
          />
      </Send>
    );
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#A5D076",
            marginBottom:25
           

           
          },
          left: {
            backgroundColor: "#EFEFEF",
            paddingBottom:20,
            marginBottom:30
           
            
          }
        }}
      />
    );
  }
  
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight,}}>
<KeyboardAvoidingView

keyboardVerticalOffset={Platform.select({android: 15})} style={{flex:1}}behavior={'padding'} >

            <Header style={{backgroundColor:'#fff',}}>

            
            <Left style={{flexDirection:"row",flex:1}}>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
            
            <Image
          style={{width: 20, height: 20}}
          source={require('../assets/back.png')}/>
            </Button></Left>
            <Body style={{flexDirection:'row',alignContent:"center",alignItems:"center",justifyContent:"center",flex:1}}>
            <Image
          style={{width: 30, height: 30,alignSelf:"center",alignContent:"center",justifyContent:"center"}}
          source={require('../assets/robot.png')}/>
            <Text style={{color:'black',fontFamily:'open-sans-bold',margin:6,alignSelf:"center",alignContent:"center",justifyContent:"center",fontWeight: 'bold',fontSize:18,}}>Assistente  </Text>
            
            </Body>
            
          
            <Right style={{flex:1}}>
            <Button transparent>
            <Image
          style={{width: 20, height: 20}}
          source={require('../assets/gear.png')}/></Button></Right>
            
            
          
          </Header>
          
          
          <GiftedChat style={{flex:8}}
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            renderBubble={this.renderBubble}
            user={{
              _id: 1,
            }}
            renderInputToolbar={this.renderInputToolbar}
          renderSend={this.renderSend}
          renderAvatarOnTop={true}
          alwaysShowSend={true}
          />
          </KeyboardAvoidingView>
          </SafeAreaView>
          
    );
  }
}

export default ChatScreen1;
