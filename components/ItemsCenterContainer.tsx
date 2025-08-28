
import { View } from "react-native"
import { DefaultViewProps } from "./ViewPropsExt"

export function ItemsCenterContainer({ style, ...rest }: DefaultViewProps) {
  return <View style={[{ alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />
}