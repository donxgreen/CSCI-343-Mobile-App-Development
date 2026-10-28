import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import colors from '../constants/colors';
import BookmarksScreen from '../screens/BookmarksScreen';
import NewsTabNavigator from './NewsTabNavigator';

const Drawer = createDrawerNavigator();

export default function NewsDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="NewsTabs"
      screenOptions={{
        headerStyle: { backgroundColor: colors.navy },
        headerTintColor: colors.white,
        headerTitleStyle: { fontFamily: 'Barlow-SemiBold' },
        drawerStyle: { backgroundColor: colors.cream },
        drawerActiveBackgroundColor: colors.navy,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.ink,
        drawerLabelStyle: { fontFamily: 'Barlow-SemiBold', fontSize: 16 },
        sceneStyle: { backgroundColor: colors.cream },
      }}
    >
      <Drawer.Screen
        name="NewsTabs"
        component={NewsTabNavigator}
        options={{
          title: 'News',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="newspaper-outline" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: 'Bookmarked News',
          drawerIcon: ({ color, size }) => <Ionicons name="bookmark-outline" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}
