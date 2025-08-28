import { AppColors, AppFontSize, AppFontFamily } from '@/constants/Themes'
import { EmptyCallback } from '@/extensions/Callbacks'
import React from 'react'
import { Pressable } from 'react-native'
import { SingleLineText } from './AppText'
import { ItemsCenterContainer } from './ItemsCenterContainer'
import { DefaultViewProps } from './ViewPropsExt'

export type ThemeButtonProps = DefaultViewProps & {
  title: string
  titleColor?: string
  enabled?: boolean
  height?: number
  radius?: number
  tintColor?: string
  onPress: EmptyCallback
}

const AppButton: React.FC<ThemeButtonProps> = ({
  title,
  titleColor,
  enabled = true,
  height = 50,
  radius,
  tintColor,
  onPress,
  style,
  ...rest
}) => {
  return (
    <Pressable onPress={onPress} disabled={!enabled}>
      <ItemsCenterContainer style={[{ height: height, borderRadius: radius ? radius : height / 2, backgroundColor: tintColor ? tintColor : AppColors.background_black, opacity: enabled ? 1 : 0.2 }, style]} {...rest}>
        <SingleLineText style={{ color: titleColor ? titleColor : AppColors.text_white, fontSize: AppFontSize.title_18, fontFamily: AppFontFamily.medium }}>{title}</SingleLineText>
      </ItemsCenterContainer>
    </Pressable>
  )
}

export default AppButton