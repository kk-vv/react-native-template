import React from 'react'
import { Stack } from 'expo-router'
import { AppColors } from '@/constants/Themes'

export default function SignInLayout() {
  return <Stack screenOptions={{
    contentStyle: { backgroundColor: AppColors.background_white },
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: AppColors.text_black,
  }} />
}