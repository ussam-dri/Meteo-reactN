import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';


type Props = ViewProps & PropsWithChildren<{
  HEADER_HEIGHT?: number;
  className?: string;
  contentContainerClassName?: string;
  headerImage: ReactElement;
}>;

export default function ParallaxScrollView({
  HEADER_HEIGHT = 250,
  children,
  className,
  contentContainerClassName,
  headerImage,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <View style={styles.container} className={className}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <Animated.View
          style={[
            styles.header,
            {
              height: HEADER_HEIGHT,
              backgroundColor: "transparent"
            },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
        <View style={styles.content} className={contentContainerClassName}>{children}</View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
