import { Platform, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import { AppColors } from '@/constants/Themes'
import { EmptyCallback } from '@/extensions/Callbacks'
import { SingleLineText } from './AppText'
import AntDesign from '@expo/vector-icons/AntDesign'

interface Props {
  onPress: EmptyCallback
}

const SearchBarPlaceholder: React.FC<Props> = (props) => {
  const screenWidth = useWindowDimensions().width
  return (
    <Pressable
      style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, marginLeft: Platform.OS === 'web' ? 10 : undefined, width: screenWidth - 80, backgroundColor: AppColors.background_gray, height: 36, borderRadius: 18 }}
      onPress={props.onPress}
    >
      <AntDesign name="search1" size={20} color={AppColors.background_black} style={{ opacity: 0.5 }} />
      <SingleLineText style={{ opacity: 0.5 }}> Search</SingleLineText>
    </Pressable >
  )
}

export default SearchBarPlaceholder