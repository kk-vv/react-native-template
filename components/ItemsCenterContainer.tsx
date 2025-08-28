
import { View } from "react-native"
import { DefaultViewProps } from "./ViewPropsExt"
import React from "react"

export function ItemsCenterContainer({ style, ...rest }: DefaultViewProps) {
  return <View style={[{ alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />
}