import FacebookIcon from "@/assets/icons/Facebook.png";
import GoogleIcon from "@/assets/icons/Google.png";
import BgImageDark from "@/assets/images/bg_auth_dark.png";
import BgImageLight from "@/assets/images/bg_auth_light.png";
import { AppButton } from "@/components/app/AppButton";
import { Input } from "@/components/Input";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { ColorSchemeName, Image, useColorScheme, View } from 'react-native';

function BgImageComponent() {
  const theme: ColorSchemeName = useColorScheme();
  return <Image source={theme === "dark" ? BgImageDark : BgImageLight} style={{ width: '100%', height: 300 }} />;
}
export default function LoginScreen() {
  return (
    <ParallaxScrollView
      HEADER_HEIGHT={300}
      headerImage={<BgImageComponent />}
      className="bg-background"
      contentContainerClassName="bg-background"
    >
      <View>
        <Text className="text-2xl font-bold text-center mb-8">
          Who Are You Sweet Heart?
        </Text>
        <View className="flex gap-4 mt-4">
          <Input placeholder="email or phone number" placeholderTextColor="gray" />
          <Input placeholder="password" placeholderTextColor="gray" />
        </View>
        <View className="mt-4">
          <AppButton variant="primary">Login</AppButton>
        </View>
        <View className="border-b border-gray-500 p-4 mb-8">
          <Text className="absolute transform translate-y-1/2 left-1/2 top-1/2 bg-background py-2 px-4 text-gray-500">Or</Text>
        </View>
        <View className="gap-4">
          <AppButton variant="outline" className="rounded-full flex flex-row gap-4">
            <Image source={GoogleIcon} width={40} height={40} />
            <Text>Continue With Google</Text>
          </AppButton>
          <AppButton variant="outline" className="rounded-full flex flex-row gap-4">
            <Image source={FacebookIcon} width={40} height={40} />
            <Text>Continue With Facebook</Text>
          </AppButton>
        </View>
        <View className="flex flex-row items-center justify-center mt-4">
          <Text className="text-center text-gray-500 dark:text-white text-xl">Don't have an account? </Text>
          <Link href="/register" className="text-accent font-bold text-xl">Sign Up</Link>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
