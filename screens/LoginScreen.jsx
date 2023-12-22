import { View, Text, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import {BGImage, Logo} from "../assets"
import {UserTextInput} from '../components'

const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width)

  const [email, setEmail] = useState("")
  return (
    <View className="flex-1 items-center justify-start">
      <Image source={BGImage} resizeMode='cover' className="h-96" style={{width: screenWidth}} />

      {/* Main View */}

      <View className = "w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode='contain' />

        <Text className="py-2 text-primaryText text-xl font-semibold">
          Welcome Back
        </Text>

        <View className="w-full flex items-center justify-center">
          {/* alert */}
          {/* email */}
          <UserTextInput placeholder="Email" isPass={false} setStateValue={email} setStateFunction={setEmail}/>

          {/* password */}
          {/* login button */}
        </View>
      </View>
    </View>
  )
}

export default LoginScreen