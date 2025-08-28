import { Text as DefaultText, View as DefaultView, type TextProps } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { type ComponentProps } from 'react'

export type DefaultTextProps = TextProps
export type DefaultViewProps = DefaultView['props']
export type DefaultViewStyleProps = DefaultView['props']['style']
// export type IconNameType = IconProps<ComponentProps<typeof Ionicons>['name']>
export type IconNameType = ComponentProps<typeof Ionicons>['name']