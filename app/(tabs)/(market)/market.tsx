import { View, Text } from 'react-native'
import React from 'react'
import AppButton from 'components/AppButton'
import { Container } from 'components/Container'
import { router } from 'expo-router'

const MarketPage = () => {
  return (
    <Container>
      <View className='flex flex-1 justify-center gap-2 px-4'>
        <AppButton
          title='Push to Shared page'
          onPress={() => {
            router.push('/shared')
          }} />
      </View>
    </Container>
  )
}

export default MarketPage