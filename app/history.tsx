import { View, Text, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const historyData = [
  { title: 'How I Made $10K...', time: 'Today', ctr: '8.5%', trend: 'up' },
  { title: '10 Mistakes Beginners...', time: 'Yesterday', ctr: '12.3%', trend: 'up' },
  { title: 'My Setup Tour 2024', time: '3 days ago', ctr: '6.8%', trend: 'down' },
];

export default function HistoryScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F11' }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>History</Text>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
          <View style={{ backgroundColor: '#1A1A1E', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="search" size={20} color="#6B7280" />
            <TextInput style={{ flex: 1, marginLeft: 12, color: 'white' }} placeholder="Search..." placeholderTextColor="#6B7280" />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 32 }}>
          {historyData.map((item) => (
            <View key={item.title} style={{ backgroundColor: '#1A1A1E', borderRadius: 12, padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <View style={{ width: 80, height: 48, borderRadius: 8, backgroundColor: '#8B5CF6', marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>{item.title}</Text>
                <Text style={{ color: '#9CA3AF', fontSize: 12, marginTop: 4 }}>{item.time} • {item.ctr} CTR</Text>
              </View>
              <Ionicons name={item.trend === 'up' ? 'trending-up' : 'trending-down'} size={16} color={item.trend === 'up' ? '#22C55E' : '#EF4444'} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
