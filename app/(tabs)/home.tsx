import Screen from "@/components/screen";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function HomeScreen() {
  return <Screen>
    <View className="flex flex-col items-center justify-center h-full bg-yellow-200">
      <Text className="text-2xl">home screen</Text>
    </View>
  </Screen>
}