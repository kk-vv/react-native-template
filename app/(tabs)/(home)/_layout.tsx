import React from 'react'
import { Stack } from 'expo-router'
import { AppColors } from '@/constants/Themes'
import NavCopyTradingButton from '@/components/NavCopyTradingButton'
import SearchBarPlaceholder from '@/components/SearchBarPlaceholder'

export default function HomePageLayout() {
  return <Stack screenOptions={{
    title: '',
    headerLeft: (props) => { return <SearchBarPlaceholder onPress={() => { }} /> },
    headerRight: (props) => { return <NavCopyTradingButton onPress={() => { }} /> },
    contentStyle: { backgroundColor: AppColors.background_white },
    headerTintColor: AppColors.text_black,
    headerBackButtonDisplayMode: 'minimal',
    headerShadowVisible: false
  }} />
}