import React, { useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import { SessionProvider } from '@/biz/contexts/AuthContext'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()
SplashScreen.setOptions({
  fade: true,
  duration: 250
})

export function Sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        console.log('Pre loading...')
        await Sleep(250)
        //await loadFonts()
        console.log('loaded')
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        await Sleep(250)
        await SplashScreen.hideAsync()
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  if (!appIsReady) {
    return null
  }
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  )
}