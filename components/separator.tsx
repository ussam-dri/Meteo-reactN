import { cn } from "@/lib/utils";
import { Text, View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

type Props = ViewProps & {
  text: string;
};

export default function Separator({ text, className, ...props }: Props) {
  return <View className={cn("border-b border-muted p-4 mb-8", className)} {...props}>
    <Text className="absolute transform translate-y-1/2 left-1/2 top-1/2 bg-background py-2 px-4 text-muted web:transform-none web:px-0">{text}</Text>
  </View>
}