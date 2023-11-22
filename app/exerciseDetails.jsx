import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

const exercisesDetails = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  return (
    <View>
      <Text>ExercisesDetails</Text>
    </View>
  );
};

export default exercisesDetails;
