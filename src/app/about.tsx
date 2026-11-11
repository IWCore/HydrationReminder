import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>

      <Text style={styles.description}>
        Built for Mobile Application Development{'\n'}
        Lab 6. Demonstrates local notifications{'\n'}
        and Expo Router tab navigation.
      </Text>

      <Text style={styles.subtext}>
        Developed with React Native and Expo.
      </Text>
      <Text style={styles.author}>
        Created by Isimathi Wimuktha.
      </Text>
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

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },

  description: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },

  subtext: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 4,
  },

  author: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },
});
