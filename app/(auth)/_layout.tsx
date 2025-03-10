import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const Layout = () => {
  return (
    <>
      <StatusBar barStyle={'default'} />
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Layout;
