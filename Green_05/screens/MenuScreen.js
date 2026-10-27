import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import MenuItem from '../components/MenuItem';
import Title from '../components/Title';
import Colors from '../constants/colors';

export default function MenuScreen({ restaurantName, menuItems, onHome }) {
  return (
    <View style={styles.screen} testID="restaurant-menu">
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.heading}>
            <Title testID="menu-title">Our Menu</Title>
            <Text style={styles.restaurantName} testID="menu-restaurant-name">{restaurantName}</Text>
          </View>
        }
        testID="menu-list"
      />
      {/* Keep Home outside the scrolling list so page navigation stays available. */}
      <View style={styles.footer}>
        <Pressable
          onPress={onHome}
          accessibilityRole="button"
          style={({ pressed }) => [styles.homeButton, pressed && styles.pressed]}
          testID="return-home"
        >
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  listContent: { width: '100%', maxWidth: 850, alignSelf: 'center', padding: 20, paddingBottom: 6 },
  heading: { marginBottom: 20 },
  restaurantName: { fontFamily: 'Barlow-Regular', fontSize: 18, lineHeight: 25, color: Colors.muted, textAlign: 'center', marginTop: 5 },
  footer: { borderTopWidth: 1, borderTopColor: Colors.border, padding: 16, backgroundColor: Colors.cream },
  homeButton: { width: '100%', maxWidth: 810, alignSelf: 'center', backgroundColor: Colors.teal, borderRadius: 12, minHeight: 54, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 18, paddingVertical: 12 },
  buttonText: { fontFamily: 'Barlow-SemiBold', fontSize: 20, lineHeight: 26, color: Colors.white },
  pressed: { opacity: 0.7 },
});
