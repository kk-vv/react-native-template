import React from 'react'
import { Slot } from 'expo-router'
import { SessionProvider } from '@/biz/contexts/AuthContext'

export default function RootLayout() {

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  )
}