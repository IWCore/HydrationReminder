
import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        About This App
      </Text>

      <Text style={styles.description}>
        Hydration Reminder is a simple application
        designed to help users stay hydrated by
        sending regular water drinking reminders.
      </Text>

      <Text style={styles.subtitle}>
        Developed By
      </Text>

      <Text style={styles.name}>
        Your Name
      </Text>

      <Text style={styles.footer}>
        Mobile Application Development
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 25,
  },

  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 35,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    color: '#0EA5E9',
    fontWeight: 'bold',
  },

  footer: {
    fontSize: 13,
    color: '#888',
    marginTop: 40,
  },

});
