import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { BGImage, Logo } from "../assets";
import { UserTextInput } from "../components";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-96"
        style={{ width: screenWidth }}
      />

      {/* Main View */}

      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />

        <Text className="py-2 text-primaryText text-xl font-semibold">
          Welcome Back
        </Text>

        <View className="w-full flex items-center justify-center">
          {/* alert */}
          {/* email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={setEmail}
          />

          {/* password */}
          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStateValue={setEmail}
          />

          {/* login button */}

          <TouchableOpacity className="w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>

          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText">
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text className="text-base font-semibold text-primaryBold">
                Create Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
