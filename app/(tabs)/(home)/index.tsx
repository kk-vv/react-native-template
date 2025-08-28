import React from 'react'
import { Container } from 'components/Container'
import AppButton from 'components/AppButton'
import { router } from 'expo-router'
import { View } from 'react-native'
import { AppColors } from 'constants/Themes'

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