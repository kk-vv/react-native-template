import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { DefaultViewProps } from './ViewPropsExt';
import { AppColors } from '@/constants/Themes';

export const SafeContainer = ({ style, ...rest }: DefaultViewProps) => {
  return <SafeAreaView style={[{ flex: 1, backgroundColor: AppColors.background_white }, style]} {...rest} />
}

export const Container = ({ style, ...rest }: DefaultViewProps) => {
  return <View style={[{ flex: 1, backgroundColor: AppColors.background_white }, style]} {...rest} />

}