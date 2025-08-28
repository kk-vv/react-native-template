import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Container } from 'components/Container'

const HomeDetailPage = () => {
  return (
    <Container>
      <Stack.Screen options={{
        title: 'HomeDetail',
      }} />
      {/* use Nativewind className define styles */}
      <View className='flex flex-1 justify-center'>
        {/* use style define styles */}
        <Text style={{ textAlign: 'center' }}>HomeDetailPage</Text>
      </View>
    </Container>
  )
}

export default HomeDetailPage