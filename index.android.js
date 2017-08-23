import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Platform } from 'react-native';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';


export default class PushNotify extends Component {
  componentDidMount() {
    FCM.getFCMToken().then(token => {
      alert(token);
    });

    this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
      // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
      if (notif.local_notification) {
        //this is a local notification
      }
      if (notif.opened_from_tray) {
        //app is open/resumed because user clicked banner
      }
      await someAsyncCall();
    });
    
    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
      console.log(token)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Push Notify React Native With Firebase
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('PushNotify', () => PushNotify);
