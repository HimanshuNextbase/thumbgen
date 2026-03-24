import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F11' }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Settings</Text>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View style={{ backgroundColor: '#1A1A1E', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: '#8B5CF6' }} />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Creator Account</Text>
                <Text style={{ color: '#F59E0B', fontSize: 14 }}>Pro Plan</Text>
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#8B5CF6', paddingVertical: 12, borderRadius: 12 }}>
              <Text style={{ color: 'white', fontWeight: '500', textAlign: 'center' }}>Manage Subscription</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View style={{ backgroundColor: '#1A1A1E', borderRadius: 16 }}>
            <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#2A2A2E' }}>
              <Text style={{ color: 'white' }}>Dark Mode</Text>
              <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#3A3A3E', true: '#8B5CF6' }} />
            </View>
            <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: 'white' }}>Notifications</Text>
              <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: '#3A3A3E', true: '#8B5CF6' }} />
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 32 }}>
          <Text style={{ color: '#6B7280', textAlign: 'center' }}>ThumbGen v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
