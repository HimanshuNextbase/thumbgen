import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F11' }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        
        <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>ThumbGen</Text>
              <Text style={{ color: '#9CA3AF', marginTop: 4 }}>AI thumbnails that get clicks</Text>
            </View>
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#8B5CF6' }} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <TouchableOpacity style={{ borderWidth: 2, borderStyle: 'dashed', borderColor: 'rgba(139,92,246,0.3)', borderRadius: 16, padding: 32, backgroundColor: 'rgba(139,92,246,0.05)' }}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(139,92,246,0.2)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Ionicons name="cloud-upload" size={32} color="#8B5CF6" />
              </View>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, marginBottom: 4 }}>Upload Video</Text>
              <Text style={{ color: '#9CA3AF', fontSize: 14 }}>Tap to select or drop video here</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 16 }}>Recent Thumbnails</Text>
          
          <View style={{ gap: 12 }}>
            <View style={{ backgroundColor: '#1A1A1E', borderRadius: 12, padding: 12, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 80, height: 48, borderRadius: 8, backgroundColor: '#8B5CF6', marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>How I Made $10K...</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                  <Text style={{ color: '#9CA3AF', fontSize: 12 }}>2 hours ago</Text>
                  <Text style={{ color: '#4B5563', marginHorizontal: 8 }}>•</Text>
                  <Ionicons name="trending-up" size={12} color="#22C55E" />
                  <Text style={{ color: '#22C55E', fontSize: 12, marginLeft: 4 }}>8.5% CTR</Text>
                </View>
              </View>
            </View>

            <View style={{ backgroundColor: '#1A1A1E', borderRadius: 12, padding: 12, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 80, height: 48, borderRadius: 8, backgroundColor: '#F59E0B', marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>10 Mistakes Beginners...</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                  <Text style={{ color: '#9CA3AF', fontSize: 12 }}>Yesterday</Text>
                  <Text style={{ color: '#4B5563', marginHorizontal: 8 }}>•</Text>
                  <Ionicons name="trending-up" size={12} color="#22C55E" />
                  <Text style={{ color: '#22C55E', fontSize: 12, marginLeft: 4 }}>12.3% CTR</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
          <View style={{ backgroundColor: '#8B5CF6', borderRadius: 16, padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Ionicons name="diamond" size={20} color="white" />
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>Pro Plan</Text>
            </View>
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 16 }}>Unlimited thumbnails & A/B testing</Text>
            <TouchableOpacity style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 999, alignSelf: 'flex-start' }}>
              <Text style={{ color: '#8B5CF6', fontWeight: '600' }}>Upgrade $9.99/mo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
