import { cn } from '@/lib/utils';
import { SafeAreaProvider, SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';


export default function Screen({ children, className, ...rest }: React.PropsWithChildren<SafeAreaViewProps>) {
  return (
    <SafeAreaProvider className='w-full h-full'>
      <SafeAreaView className={cn("h-full w-full", className)} {...rest}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
