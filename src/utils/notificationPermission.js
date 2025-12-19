import { PermissionsAndroid, Platform } from 'react-native';

export const requestNotificationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Notification permission granted');
        
      } else {
        console.log('Notification permission denied');
      }
    } catch (error) {
      console.log('Permission error:', error);
    }
  } else {
    // Android 12 and below
    console.log('Notification permission automatically granted');
  }
};
