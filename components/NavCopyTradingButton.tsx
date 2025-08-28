import React from 'react'
import { AppColors } from '@/constants/Themes'
import { EmptyCallback } from '@/extensions/Callbacks'
import AntDesign from '@expo/vector-icons/AntDesign'
import { ItemsCenterContainer } from './ItemsCenterContainer'
import { Platform } from 'react-native'

interface Props {
  onPress: EmptyCallback
}

const NavCopyTradingButton: React.FC<Props> = (props) => {
  return (
    <ItemsCenterContainer style={{ height: 36, width: 36, borderRadius: 18, backgroundColor: AppColors.background_black, marginRight: Platform.OS === 'web' ? 10 : undefined }}>
      <AntDesign name="plus" size={24} color="white" />
    </ItemsCenterContainer>
  )
}

export default NavCopyTradingButton