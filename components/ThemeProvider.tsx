import { useColorScheme } from "react-native";

export function ThemeProvider() {
  const colorScheme = useColorScheme() ?? 'light';

}