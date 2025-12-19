import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { requestNotificationPermission } from './src/utils/notificationPermission';

const App = () => {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Push Notification Demo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
