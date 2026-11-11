import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button,Text, TextInput, View, StyleSheet } from "react-native";

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState("Time to drink a glass of water!");
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // Request notification permissions on mount
  useEffect(()=>{
    async function requestPermissions(){
      const {status} = await Notifications.requestPermissionsAsync();
      if (status !== 'granted'){
        Alert.alert(
          'Permission required',
          'We need notification to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  },[]);

  //Schedule a notification
  async function scheduleReminder(){
    await Notifications.requestPermissionsAsync(); // Safe check just in case
    
    // Clear old ones first so they don't stack up
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Shedule the new notification
    await Notifications.scheduleNotificationAsync({
      content:{
        title:"Hydration Alert",  //
        body: message, //
        sound:true,  //
      },
      // Trigger the notification after the specified interval
      trigger:{
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes*60, //
        repeats: true
      },
    });

    //Update state and alert the user
    setIsReminding(true);
    Alert.alert("Set!",'Reminding you every ${intervalMinutes}minutes.');  //Alert the user
  }

  //Stop reminders
  async function stopReminder(){
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped","Reminders cancelled.");    
  }

  // Render the UI
  return (
    <View style={styles.container}>
      <Text style = {styles.emoji}>🥛</Text>
      
      <Text style = {styles.heading}>Add a Coustom Message</Text>

      <TextInput
      style = {styles.input}
      value = {message}
      onChangeText = {setMessage}
      placeholder = 'Enter your reminder message' />

      <Text style = {styles.label}> Set Interval (minutes)</Text>

      <TextInput
      style = {styles.input}
      value = {intervalMinutes.toString()}
      onChangeText = {(text) => 
        setIntervalMinutes(parseInt(text)||1)
      }
      keyboardType = "numeric" />

      <Text style = {styles.status}>
        Status: {isReminding ? 'Active 🟢':'Inactive 🔴'}
      </Text>

      <View style = {styles.button}>
        <Button
        title = "START REMINERS"
        onPress = {scheduleReminder}
        color = "#0EA5E9"
        />
      </View>
      <View style = {styles.button}>
        <Button
        title = "STOP REMINERS"
        onPress = {stopReminder}
        color = "#EF4444"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  emoji: {
    fontSize: 65,
    marginBottom: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  input: {
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
  },

  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 20,
  },

  button: {
    width: '75%',
    marginVertical: 5,
  },

});
