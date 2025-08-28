import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SharedPage = () => {
  return (
    < View className='flex flex-1 justify-center' >
      {/* use Nativewind className define styles */}
      <Stack.Screen options={{
        title: 'SharedPage'
      }} />
      {/* use style define styles */}
      <Text style={{ textAlign: 'center' }}>SharedPage</Text>
    </View >
  )
}

export default SharedPage