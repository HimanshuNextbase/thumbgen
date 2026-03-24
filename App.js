import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={{ width: '100%' }}>
        <View style={{ padding: 20, marginTop: 50 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>ThumbGen</Text>
          <Text style={{ color: '#9CA3AF', marginTop: 8, fontSize: 16 }}>AI thumbnails that get clicks</Text>
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ borderWidth: 2, borderStyle: 'dashed', borderColor: 'rgba(139,92,246,0.3)', borderRadius: 16, padding: 40, backgroundColor: 'rgba(139,92,246,0.05)', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, marginBottom: 16 }}>☁️</Text>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, marginBottom: 4 }}>Upload Video</Text>
            <Text style={{ color: '#9CA3AF', fontSize: 14 }}>Tap to select or drop video here</Text>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 16 }}>Recent Thumbnails</Text>
          
          <View style={{ backgroundColor: '#1A1A1E', borderRadius: 12, padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <View style={{ width: 80, height: 48, borderRadius: 8, backgroundColor: '#8B5CF6', marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'white', fontWeight: '500' }}>How I Made $10K...</Text>
              <Text style={{ color: '#9CA3AF', fontSize: 12, marginTop: 4 }}>2 hours ago • 8.5% CTR</Text>
            </View>
          </View>

          <View style={{ backgroundColor: '#1A1A1E', borderRadius: 12, padding: 12, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 80, height: 48, borderRadius: 8, backgroundColor: '#F59E0B', marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'white', fontWeight: '500' }}>10 Mistakes Beginners...</Text>
              <Text style={{ color: '#9CA3AF', fontSize: 12, marginTop: 4 }}>Yesterday • 12.3% CTR</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ backgroundColor: '#8B5CF6', borderRadius: 16, padding: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>💎 Pro Plan</Text>
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 16 }}>Unlimited thumbnails & A/B testing</Text>
            <TouchableOpacity style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 999, alignSelf: 'flex-start' }}>
              <Text style={{ color: '#8B5CF6', fontWeight: '600' }}>Upgrade $9.99/mo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F11',
  },
});
