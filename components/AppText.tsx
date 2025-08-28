import { Text } from "react-native"
import { DefaultTextProps } from "./ViewPropsExt"
import { AppFontFamily, AppFontSize, AppColors } from "@/constants/Themes"
import React from "react"

export function AppText({
  style,
  ...rest
}: DefaultTextProps) {
  return (
    <Text style={[{ fontFamily: AppFontFamily.regular, fontSize: AppFontSize.body_14, color: AppColors.text_black }, style]} {...rest} />
  )
}

export function SingleLineText({
  style,
  ellipsizeMode = 'middle',
  numberOfLines = 1,
  ...rest
}: DefaultTextProps) {
  return (
    <AppText style={style} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}  {...rest} />
  )
}