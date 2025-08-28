import { useSessionContext } from '@/biz/contexts/AuthContext'
import AppButton from '@/components/AppButton'
import { SafeContainer } from '@/components/Container'
import { SPACING } from '@/constants/Themes'
import { Stack } from 'expo-router'
import React from 'react'

const SignInPage = () => {
  const { onLogin } = useSessionContext()
  return (
    <SafeContainer style={{ justifyContent: 'center', marginHorizontal: SPACING.edge }}>
      <Stack.Screen options={{
        headerShown: false
      }} />
      <AppButton title='Login' onPress={onLogin} />
    </SafeContainer>
  )
}

export default SignInPage