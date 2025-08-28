import React from 'react'
import { router } from 'expo-router'
import { View } from 'react-native'
import AppButton from '@/components/AppButton'
import { Container } from '@/components/Container'

const HomePage = () => {
  return (
    <Container>
      <View className='flex flex-1 bg-appGreen justify-center gap-2 px-4'>
        <AppButton
          title='Push to Home detail page'
          onPress={() => {
            router.push('/detail')
          }} />
        <AppButton
          title='Push to Shared page'
          onPress={() => {
            router.push('/shared')
          }} />
      </View>
    </Container>
  )
}

export default HomePage