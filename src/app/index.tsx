import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // Request notification permissions on mount
  useEffect(() => {
    async function requestPermissions() {
      if (Platform.OS === 'web') return;
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  }, []);

  // Schedule a notification
  async function scheduleReminder() {
    if (Platform.OS === 'web') {
      Alert.alert(
        'Platform Notice',
        'Local notifications require a physical device (Android/iOS) running Expo Go.'
      );
      setIsReminding(true);
      return;
    }

    await Notifications.requestPermissionsAsync(); // Safe check just in case

    // Clear old ones first so they don't stack up
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Schedule the new notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '💧 Hydration Alert', // Notification title
        body: message, // Notification body
        sound: true, // Play sound when notification arrives
      },
      // Trigger the notification after the specified interval
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60, // Convert minutes to seconds
        repeats: true,
      },
    });

    // Update state and alert the user
    setIsReminding(true);
    Alert.alert('Set!', `Reminding you every ${intervalMinutes} minutes.`); // Alert the user
  }

  // Stop reminders
  async function stopReminder() {
    if (Platform.OS === 'web') {
      setIsReminding(false);
      Alert.alert('Stopped', 'Reminders cancelled.');
      return;
    }

    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert('Stopped', 'Reminders cancelled.');
  }

  // Render the UI
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥛</Text>

      <Text style={styles.heading}>Add a Custom Message</Text>

      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your reminder message"
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>

      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? 'Active 🟢' : 'Inactive 🔴'}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="START REMINDERS"
          onPress={scheduleReminder}
          color="#0EA5E9"
        />
        <View style={{ height: 10 }} />
        <Button
          title="STOP REMINDERS"
          onPress={stopReminder}
          color="#EF4444"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  emoji: {
    fontSize: 65,
    marginBottom: 20,
  },

  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#1E293B',
  },

  input: {
    width: '85%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    textAlign: 'center',
  },

  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
    color: '#1E293B',
  },

  buttonContainer: {
    width: '80%',
  },
});
