import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

const StackLayout = () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#10101E",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        options={{ headerTitle: "Otp", headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        options={{ headerTitle: "Otp", headerShown: false }}
      />
      <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
      <Stack.Screen name="VerifyForgotOTP" options={{ headerShown: false }} />
      <Stack.Screen name="NewPassword" options={{ headerShown: false }} />
      <Stack.Screen
        name="NotificationServicesSettings"
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
				name="register"
				options={{
					headerTitle: 'Create account',
					headerRight: () => <Button title="Open" onPress={() => router.push('/modal')} />
				}}
			/> */}
    </Stack>
  );
};

export default StackLayout;
