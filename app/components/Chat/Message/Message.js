import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
  Composer,
  Actions,
} from 'react-native-gifted-chat';
import { Avatar } from 'react-native-elements';
import React, { useState, useCallback, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from './Header'
const Message = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{marginRight: 10, marginBottom: 10}}>
          <Icon name="send" size={24} color="red" />
        </View>
      </Send>
    );
  };
  const renderComposer = props => {
    return (
      <Composer
        {...props}
        textInputStyle={styles.composer}
        placeholder="Nhập tin nhắn..."
        //  onTextChanged={(text) => setText(text)}
        // text={text}
        // multiline={true}
      ></Composer>
    );
  };
  const renderActions = props => {
    return (
      <>
      <Actions
        {...props}
        icon={() => (
          <View style={{marginTop: -2,marginRight:-6 ,padding:0}}>
            <Icon name="attach" size={26} color="red" />
          </View>
        )}
      />
      <Actions
        {...props}
        options={{
          ['Chụp ảnh']: () => {},
          ['Thư viện']: () => {},
          ['Huỷ']: () => {},
        }}
        onSend={args => console.log('args')}
        icon={() => (
          <View style={{marginTop: -2,marginHorizontal:-6}}>
            <Icon name="image" size={26} color="red" />
          </View>
        )}
      />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderSend={renderSend} //tùy chỉnh cái nút send
         renderActions={renderActions} //Nút hành động tùy chỉnh ở bên trái của trình soạn tin nhắn
         renderComposer={renderComposer} // Trình soạn tin nhắn đầu vào văn bản tùy chỉnh
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  },
  body:{
    flex:1,
  },
  composer: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 0,
  },
})