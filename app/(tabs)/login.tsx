import BgImage from "@/assets/images/bg_auth.png";
import { AppButton } from "@/components/app/AppButton";
import { Input } from "@/components/Input";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from "@/components/ThemedView";
import { Image, Text, View } from 'react-native';

function BgImageComponent() {
  return <Image source={BgImage} style={{ width: '100%', height: 300 }} />;
}
export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      HEADER_HEIGHT={300}
      headerBackgroundColor={{
        light: "white",
        dark: 'black',
      }}
      headerImage={<BgImageComponent />}
    >
      <ThemedView className="p">
        <Text className="text-3xl font-bold text-center">
          Who Are You Sweet Heart?
        </Text>
        <View className="flex gap-4 mt-4">
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="email" />
          <Input placeholder="email" />
          <Input placeholder="email" />
          <Input placeholder="email" />
        </View>
        <View className="mt-4">
          <AppButton variant="default">login</AppButton>
        </View>

      </ThemedView>
    </ParallaxScrollView>
  );
}
