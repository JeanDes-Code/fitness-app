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

  const secondaryMusclesWithSpaces = item?.secondaryMuscles.replace(
    /,([^ ])/g,
    ", $1"
  );

  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40p]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* details */}
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="capitalize font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="capitalize text-neutral-700 tracking-wide"
        >
          Equipment :
          <Text className="capitalize text-neutral-800 font-bold">
            {" "}
            {item?.equipment}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="capitalize text-neutral-700 tracking-wide"
        >
          Secondary Muscles :
          <Text className="capitalize text-neutral-800 font-bold">
            {" "}
            {secondaryMusclesWithSpaces}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="capitalize text-neutral-700 tracking-wide"
        >
          Target :
          <Text className="capitalize text-neutral-800 font-bold">
            {" "}
            {item?.target}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3) }}
          className="capitalize font-semibold text-neutral-800 tracking-wide"
        >
          Instructions
        </Animated.Text>

        {item.instructions.split(".,").map((instruction, index) => (
          <Animated.Text
            entering={FadeInDown.delay(100 * (index + 6))
              .duration(300)
              .springify()}
            key={instruction}
            style={{ fontSize: hp(1.7) }}
            className=" text-neutral-800"
          >
            {instruction}
            {index !== item.instructions.split(".,").length - 1 && "."}
          </Animated.Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default exercisesDetails;
