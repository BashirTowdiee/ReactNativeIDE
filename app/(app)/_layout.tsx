import { Stack } from 'expo-router';
import { useTokens } from '../../design-system/tokens';
import { createStyles } from '../../design-system/styles';

export default function AppLayout() {
  const tokens = useTokens();
  const styles = createStyles(tokens);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: tokens.baseColors.white,
        },
        headerTintColor: tokens.baseColors.textColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: tokens.semanticColors.appBackgroundColor,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'itsumo benkyou' }} />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="story-list" options={{ title: 'Stories' }} />
      <Stack.Screen name="passage/[id]" options={{ title: 'Passage' }} />
      <Stack.Screen name="study/[id]" options={{ title: 'Study' }} />
    </Stack>
  );
}
