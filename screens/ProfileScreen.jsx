import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1 items-center justify-start mt-10">
        {/* Icons */}

        <View className="w-full flex-row items-center justify-between px-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name='chevron-left' size={32} color={"#555"} />

            </TouchableOpacity>

            <TouchableOpacity>
                <Entypo name='dots-three-vertical' size={24} color={"#555"} />
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default ProfileScreen