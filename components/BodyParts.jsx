import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";

import { bodyParts } from "../constants";
import { useRouter } from "expo-router";

const BodyParts = () => {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercices
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} router={router} />
        )}
      />
    </View>
  );
};

export default BodyParts;

const BodyPartCard = ({ item, index, router }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end p-4 mb-4"
        onPress={() => router.push({ pathname: `/exercises`, params: item })}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />

        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide capitalize"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
