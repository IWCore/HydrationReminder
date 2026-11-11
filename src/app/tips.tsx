import { StyleSheet, Text, View } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Hydrate? 🌊</Text>

      <Text style={styles.tip}>Boosts skin health and beauty</Text>

      <Text style={styles.tip}>Regulates body temperature</Text>

      <Text style={styles.tip}>Flushes body waste</Text>

      <Text style={styles.tip}>Maintains blood pressure</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 20,
  },

  tip: {
    fontSize: 15,
    color: '#64748B',
    marginVertical: 6,
    textAlign: 'center',
  },
});
