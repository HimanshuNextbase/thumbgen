import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function EditorScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F11' }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Editor</Text>
          <Text style={{ color: '#9CA3AF', marginTop: 4 }}>Customize your thumbnail</Text>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View style={{ backgroundColor: '#1A1A1E', borderRadius: 16, padding: 16 }}>
            <View style={{ aspectRatio: 16/9, borderRadius: 12, backgroundColor: '#8B5CF6', marginBottom: 16, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 16 }}>How I Made $10K in 30 Days</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity style={{ flex: 1, backgroundColor: '#8B5CF6', paddingVertical: 12, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="refresh" size={18} color="white" />
                <Text style={{ color: 'white', fontWeight: '500', marginLeft: 8 }}>Regenerate</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={{ flex: 1, backgroundColor: '#25252A', paddingVertical: 12, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="color-wand" size={18} color="white" />
                <Text style={{ color: 'white', fontWeight: '500', marginLeft: 8 }}>Variations</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 8 }}>Thumbnail Text</Text>
          <TextInput
            style={{ backgroundColor: '#1A1A1E', color: 'white', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, borderWidth: 1, borderColor: '#374151' }}
            defaultValue="How I Made $10K in 30 Days"
            placeholderTextColor="#6B7280"
          />
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 32 }}>
          <TouchableOpacity style={{ backgroundColor: '#8B5CF6', paddingVertical: 16, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="download" size={20} color="white" />
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 8 }}>Export Thumbnail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
