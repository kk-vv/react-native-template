import React from 'react'
import { Stack } from 'expo-router'
import { AppColors } from 'constants/Themes'

export default function HomePageLayout() {
  return <Stack screenOptions={{
    title: 'Home',
    contentStyle: { backgroundColor: AppColors.background_white },
    headerTintColor: AppColors.text_black,
    headerBackButtonDisplayMode: 'minimal'
  }} />
}