import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HeaderMenuButton from '../components/HeaderMenuButton';
import colors from '../constants/colors';
import TechNewsScreen from '../screens/TechNewsScreen';
import USNewsScreen from '../screens/USNewsScreen';
import WorldNewsScreen from '../screens/WorldNewsScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  USNews: 'flag-outline',
  WorldNews: 'earth-outline',
  TechNews: 'hardware-chip-outline',
};

export default function NewsTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="USNews"
      screenOptions={({ navigation, route }) => ({
        headerStyle: { backgroundColor: colors.navy },
        headerTintColor: colors.white,
        headerTitleStyle: { fontFamily: 'Barlow-SemiBold' },
        headerLeft: () => (
          <HeaderMenuButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        ),
        tabBarActiveTintColor: colors.navy,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontFamily: 'Barlow-SemiBold', fontSize: 12 },
        tabBarStyle: { backgroundColor: colors.white, borderTopColor: colors.border },
        sceneStyle: { backgroundColor: colors.cream },
        tabBarIcon: ({ color, size }) => <Ionicons name={tabIcons[route.name]} color={color} size={size} />,
      })}
    >
      <Tab.Screen name="USNews" component={USNewsScreen} options={{ title: 'US News' }} />
      <Tab.Screen name="WorldNews" component={WorldNewsScreen} options={{ title: 'World News' }} />
      <Tab.Screen name="TechNews" component={TechNewsScreen} options={{ title: 'Tech News' }} />
    </Tab.Navigator>
  );
}
