import React, { Component } from 'react';
import { View, Text,Image,KeyboardAvoidingView,SafeAreaView,StatusBar} from 'react-native';
import {GiftedChat,Bubble,InputToolbar,Send,Avatar} from 'react-native-gifted-chat'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Button,Title,Icon,Row,Column} from 'native-base';
class ChatScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
      state = {
        messages: [],
      }
      
      componentDidMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: '',
              },
            },
          ],
        })
      }
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
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
                marginBottom:5
               
                
              }
            }}
          />
        );
      }
      renderSend(props) {
        return (
          
          <Send {...props}>
              <Image
    
                source={require("../assets/send.png")}
                style={{alignItems:"center",alignSelf:"center",height:25,width:25,justifyContent:"center"}}
              />
          </Send>
        );
      }
      renderInputToolbar(props) {
        return <InputToolbar {...props} containerStyle={{marginLeft: 15,marginRight: 15,borderRadius: 25,marginBottom:15,marginBottom:15,
          } }/>;
      }
  render() {
    return (
      <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight,}}>
<KeyboardAvoidingView

keyboardVerticalOffset={Platform.select({android: 15})} style={{flex:1}}behavior={'padding'} >
        <View style={{flex:1,}}>
        <Header style={{backgroundColor:'#fff',height:50,width:'100%'}}>

        
        
        <Left style={{flex:1}}>
        <Button transparent onPress={()=>this.props.navigation.goBack()}>
        
        <Image
      style={{width: 20, height: 20,alignSelf:"center",alignContent:"center",justifyContent:"center"}}
      source={require('../assets/back.png')}/>
        </Button></Left>
        <Body style={{flex:1,flexDirection:'row'}}>
        <Image
      style={{width: 30, height: 30,alignSelf:"center",alignContent:"center",justifyContent:"center"}}
      source={require('../assets/user.png')}/>
        <Text style={{color:'black',margin:6,alignSelf:"center",alignContent:"center",justifyContent:"center",fontWeight:'bold',fontSize:18}}>Alexandre   </Text></Body>
      
      
        <Right style={{flex:1}}>
        <Button transparent>
        <Image
      style={{width: 20, height: 20}}
      source={require('../assets/gear.png')}/></Button></Right>
        
        
      
      </Header>
      <GiftedChat style={{paddingHorizontal: 20,}}
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
      /></View></KeyboardAvoidingView>
          </SafeAreaView>
    );
  }
}

export default ChatScreen2;
