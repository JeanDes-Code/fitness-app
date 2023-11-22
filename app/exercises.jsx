import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { fetchExercicesByBodyPart } from "../api/exerciceDB";
import { demoExercises } from "../constants";
import ExerciseList from "../components/ExerciseList";

const Exercises = () => {
  const router = useRouter();

  const [exercices, setExercices] = useState([]);

  const item = useLocalSearchParams();
  const getExercices = async (bodyPart) => {
    let data = await fetchExercicesByBodyPart(bodyPart);

    if (data.length === 0) {
      data = demoExercises;
    }
    setExercices(data);
  };

  useEffect(() => {
    if (item) getExercices(item.name);
  }, [item]);

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{
          width: wp(100),
          height: hp(45),
        }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute rounded-full pr-1 items-center justify-center"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(3.8)} color="white" />
      </TouchableOpacity>

      {/* Exercices */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700 capitalize"
        >
          {item.name} exercices
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercices} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
