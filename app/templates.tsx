import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const templates = [
  { name: 'Gaming Highlight', ctr: '12.5%', color: '#3B82F6' },
  { name: 'Tutorial Style', ctr: '10.2%', color: '#F59E0B' },
  { name: 'Review Format', ctr: '9.8%', color: '#10B981' },
  { name: 'Story Time', ctr: '11.3%', color: '#EC4899' },
];

export default function TemplatesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F11' }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Templates</Text>
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 32 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {templates.map((t) => (
              <TouchableOpacity key={t.name} style={{ width: '47%', backgroundColor: '#1A1A1E', borderRadius: 12, padding: 12 }}>
                <View style={{ aspectRatio: 16/9, borderRadius: 8, marginBottom: 8, backgroundColor: t.color }} />
                <Text style={{ color: 'white', fontWeight: '500' }}>{t.name}</Text>
                <Text style={{ color: '#9CA3AF', fontSize: 12, marginTop: 4 }}>{t.ctr} avg CTR</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
