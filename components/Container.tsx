import { SafeAreaView, View } from 'react-native';


export const SafeContainer = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className='flex flex-1 bg-white'>{children}</SafeAreaView>;
}

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <View className='flex flex-1 bg-white'>{children}</View>;
}