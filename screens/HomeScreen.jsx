import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Logo } from "../assets"
import { TouchableOpacity } from 'react-native-web'

const HomeScreen = () => {
  const user = useSelector(state => state.user.user)
  console.log("Logged User:", user)
  return (
    <View className="flex-1">
      <SafeAreaView>
        <View className="w-full flex-row items-center justify-between px-4 py-2">
          <Image source={Logo} className="w-12 h-12" resizeMode="contain" />

          <TouchableOpacity className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
          <Image source={{uri: user?.profilePic}} className="w-full h-full " resizeMode="cover" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen