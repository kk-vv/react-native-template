import React from 'react'
import { useSessionContext } from '@/biz/contexts/AuthContext'
import AppButton from '@/components/AppButton'
import { Container } from '@/components/Container'
import { SPACING } from '@/constants/Themes'
import { Stack } from 'expo-router'

const ProfilePage = () => {
  const { onLogout } = useSessionContext()
  return (
    <Container style={{ justifyContent: 'center', marginHorizontal: SPACING.edge }}>
      <Stack.Screen options={{
        headerShown: false
      }} />
      <AppButton title='Logout' onPress={onLogout} />
    </Container>
  )
}

export default ProfilePage