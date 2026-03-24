import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView,
  TextInput,
  Switch
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Screen Components
function HomeScreen() {
  return (
    <ScrollView style={styles.screenScroll} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>ThumbGen</Text>
        <Text style={styles.subtitle}>AI thumbnails that get clicks</Text>
      </View>

      <TouchableOpacity style={styles.uploadBox}>
        <Ionicons name="cloud-upload" size={40} color="#8B5CF6" />
        <Text style={styles.uploadTitle}>Upload Video</Text>
        <Text style={styles.uploadSubtitle}>Tap to select or drop video here</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Thumbnails</Text>
        
        <View style={styles.thumbCard}>
          <View style={[styles.thumbPreview, { backgroundColor: '#8B5CF6' }]} />
          <View style={styles.thumbInfo}>
            <Text style={styles.thumbTitle}>How I Made $10K...</Text>
            <Text style={styles.thumbMeta}>2 hours ago • 8.5% CTR</Text>
          </View>
        </View>

        <View style={styles.thumbCard}>
          <View style={[styles.thumbPreview, { backgroundColor: '#F59E0B' }]} />
          <View style={styles.thumbInfo}>
            <Text style={styles.thumbTitle}>10 Mistakes Beginners...</Text>
            <Text style={styles.thumbMeta}>Yesterday • 12.3% CTR</Text>
          </View>
        </View>
      </View>

      <View style={styles.proCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="diamond" size={24} color="white" />
          <Text style={styles.proTitle}>Pro Plan</Text>
        </View>
        <Text style={styles.proSubtitle}>Unlimited thumbnails & A/B testing</Text>
        <TouchableOpacity style={styles.proButton}>
          <Text style={styles.proButtonText}>Upgrade $9.99/mo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function EditorScreen() {
  return (
    <ScrollView style={styles.screenScroll} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Editor</Text>
        <Text style={styles.subtitle}>Customize your thumbnail</Text>
      </View>

      <View style={styles.editorPreview}>
        <View style={styles.thumbnailPreview}>
          <Text style={styles.previewText}>How I Made $10K in 30 Days</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
          <TouchableOpacity style={[styles.actionButton, { flex: 1 }]}>
            <Ionicons name="refresh" size={18} color="white" />
            <Text style={styles.actionButtonText}>Regenerate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { flex: 1, backgroundColor: '#25252A' }]}>
            <Ionicons name="color-wand" size={18} color="white" />
            <Text style={styles.actionButtonText}>Variations</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Thumbnail Text</Text>
        <TextInput
          style={styles.input}
          defaultValue="How I Made $10K in 30 Days"
          placeholderTextColor="#6B7280"
        />
      </View>

      <TouchableOpacity style={styles.exportButton}>
        <Ionicons name="download" size={20} color="white" />
        <Text style={styles.exportButtonText}>Export Thumbnail</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function TemplatesScreen() {
  const templates = [
    { name: 'Gaming Highlight', ctr: '12.5%', color: '#3B82F6' },
    { name: 'Tutorial Style', ctr: '10.2%', color: '#F59E0B' },
    { name: 'Review Format', ctr: '9.8%', color: '#10B981' },
    { name: 'Story Time', ctr: '11.3%', color: '#EC4899' },
  ];

  return (
    <ScrollView style={styles.screenScroll} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Templates</Text>
      </View>

      <View style={styles.templateGrid}>
        {templates.map((t) => (
          <TouchableOpacity key={t.name} style={styles.templateCard}>
            <View style={[styles.templatePreview, { backgroundColor: t.color }]} />
            <Text style={styles.templateName}>{t.name}</Text>
            <Text style={styles.templateCtr}>{t.ctr} avg CTR</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

function HistoryScreen() {
  const historyData = [
    { title: 'How I Made $10K...', time: 'Today', ctr: '8.5%', trend: 'up' },
    { title: '10 Mistakes Beginners...', time: 'Yesterday', ctr: '12.3%', trend: 'up' },
    { title: 'My Setup Tour 2024', time: '3 days ago', ctr: '6.8%', trend: 'down' },
  ];

  return (
    <ScrollView style={styles.screenScroll} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>History</Text>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#6B7280" />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search..." 
          placeholderTextColor="#6B7280"
        />
      </View>

      <View style={styles.section}>
        {historyData.map((item) => (
          <View key={item.title} style={styles.historyCard}>
            <View style={[styles.thumbPreview, { backgroundColor: '#8B5CF6' }]} />
            <View style={styles.thumbInfo}>
              <Text style={styles.thumbTitle}>{item.title}</Text>
              <Text style={styles.thumbMeta}>{item.time} • {item.ctr} CTR</Text>
            </View>
            <Ionicons 
              name={item.trend === 'up' ? 'trending-up' : 'trending-down'} 
              size={16} 
              color={item.trend === 'up' ? '#22C55E' : '#EF4444'} 
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView style={styles.screenScroll} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileRow}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.profileName}>Creator Account</Text>
            <Text style={styles.proBadge}>Pro Plan</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.manageButton}>
          <Text style={styles.manageButtonText}>Manage Subscription</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingsCard}>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch 
            value={darkMode} 
            onValueChange={setDarkMode}
            trackColor={{ false: '#3A3A3E', true: '#8B5CF6' }}
          />
        </View>
        <View style={[styles.settingRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch 
            value={notifications} 
            onValueChange={setNotifications}
            trackColor={{ false: '#3A3A3E', true: '#8B5CF6' }}
          />
        </View>
      </View>

      <Text style={styles.version}>ThumbGen v1.0.0</Text>
    </ScrollView>
  );
}

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { key: 'home', icon: 'home', label: 'Home' },
    { key: 'editor', icon: 'create', label: 'Editor' },
    { key: 'templates', icon: 'grid', label: 'Templates' },
    { key: 'history', icon: 'time', label: 'History' },
    { key: 'settings', icon: 'settings', label: 'Settings' },
  ];

  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen />;
      case 'editor': return <EditorScreen />;
      case 'templates': return <TemplatesScreen />;
      case 'history': return <HistoryScreen />;
      case 'settings': return <SettingsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>

      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabItem}
            onPress={() => setActiveTab(tab.key)}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={activeTab === tab.key ? '#8B5CF6' : '#6B7280'}
            />
            <Text style={[
              styles.tabLabel,
              activeTab === tab.key && { color: '#8B5CF6' }
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F11',
  },
  screenContainer: {
    flex: 1,
  },
  screenScroll: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: '#9CA3AF',
    marginTop: 4,
    fontSize: 16,
  },
  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1E',
    borderTopColor: '#2A2A2E',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 60,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 4,
  },
  // Home Screen
  uploadBox: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(139,92,246,0.3)',
    borderRadius: 16,
    padding: 40,
    backgroundColor: 'rgba(139,92,246,0.05)',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  uploadTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 16,
    marginBottom: 4,
  },
  uploadSubtitle: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  section: {
    padding: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  thumbCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  thumbPreview: {
    width: 80,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  thumbInfo: {
    flex: 1,
  },
  thumbTitle: {
    color: 'white',
    fontWeight: '500',
  },
  thumbMeta: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 4,
  },
  proCard: {
    backgroundColor: '#8B5CF6',
    borderRadius: 16,
    padding: 20,
    margin: 20,
    marginTop: 8,
    marginBottom: 32,
  },
  proTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  proSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 16,
  },
  proButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  proButtonText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  // Editor Screen
  editorPreview: {
    backgroundColor: '#1A1A1E',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
  },
  thumbnailPreview: {
    aspectRatio: 16/9,
    borderRadius: 12,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  actionButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 8,
  },
  label: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1A1A1E',
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#374151',
  },
  exportButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  exportButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 8,
  },
  // Templates Screen
  templateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    paddingTop: 8,
    gap: 12,
  },
  templateCard: {
    width: '47%',
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 12,
  },
  templatePreview: {
    aspectRatio: 16/9,
    borderRadius: 8,
    marginBottom: 8,
  },
  templateName: {
    color: 'white',
    fontWeight: '500',
  },
  templateCtr: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 4,
  },
  // History Screen
  searchBox: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    color: 'white',
  },
  historyCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  // Settings Screen
  profileCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#8B5CF6',
  },
  profileName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 12,
  },
  proBadge: {
    color: '#F59E0B',
    fontSize: 14,
    marginLeft: 12,
  },
  manageButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 12,
  },
  manageButtonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  settingsCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 16,
    marginHorizontal: 20,
  },
  settingRow: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2E',
  },
  settingLabel: {
    color: 'white',
  },
  version: {
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 32,
  },
});
