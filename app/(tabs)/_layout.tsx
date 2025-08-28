import { StyleSheet, View } from 'react-native'
import { Tabs } from 'expo-router'
import { AppText } from 'components/AppText'
import { AppColors, AppFontSize } from 'constants/Themes'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function TabLayout() {
  return <Tabs>
    <Tabs.Screen name='(home)' options={{
      tabBarLabel: ({ focused }) => {
        return (<AppText style={[styles.label, { color: focused ? AppColors.text_black : AppColors.text_gray }]}>Home</AppText>)
      },
      tabBarIcon: ({ focused, color, size }) => {
        return (<View style={styles.iconBox}><MaterialIcons name="home-filled" size={28} color={focused ? AppColors.text_black : AppColors.text_gray} /></View>)
      },
      headerShown: false
    }} />
    <Tabs.Screen name='(market)' options={{
      tabBarLabel: ({ focused }) => {
        return (<AppText style={[styles.label, { color: focused ? AppColors.text_black : AppColors.text_gray }]}>Market</AppText>)
      },
      tabBarIcon: ({ focused, color, size }) => {
        return (<View style={styles.iconBox}><MaterialIcons name="insights" size={28} color={focused ? AppColors.text_black : AppColors.text_gray} /></View>)
      },
      headerShown: false
    }} />
    <Tabs.Screen name='(positions)' options={{
      tabBarLabel: ({ focused }) => {
        return (<AppText style={[styles.label, { color: focused ? AppColors.text_black : AppColors.text_gray }]}>Positions</AppText>)
      },
      tabBarIcon: ({ focused, color, size }) => {
        return (<View style={styles.iconBox}><MaterialIcons name="list-alt" size={28} color={focused ? AppColors.text_black : AppColors.text_gray} /></View>)
      },
      headerShown: false
    }} />
    <Tabs.Screen name='(profile)' options={{
      tabBarLabel: ({ focused }) => {
        return (<AppText style={[styles.label, { color: focused ? AppColors.text_black : AppColors.text_gray }]}>Profile</AppText>)
      },
      tabBarIcon: ({ focused, color, size }) => {
        return (<View style={styles.iconBox}><MaterialCommunityIcons name="account" size={28} color={focused ? AppColors.text_black : AppColors.text_gray} /></View>)
      },
      headerShown: false
    }} />
  </Tabs>
}

const styles = StyleSheet.create({
  label: {
    fontSize: AppFontSize.hint_12,
  },
  iconBox: {
    marginBottom: -3
  }
})