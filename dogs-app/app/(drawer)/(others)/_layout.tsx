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
        name="Login2"
        options={{ headerTitle: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        options={{ headerTitle: "Login", headerShown: false }}
      />

      {/* <Stack.Screen
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
      <Stack.Screen name="AddOwner" options={{ headerShown: false }} />
      <Stack.Screen name="AddPicture" options={{ headerShown: false }} />
      <Stack.Screen name="AddGender" options={{ headerShown: false }} />
      <Stack.Screen name="DogAge" options={{ headerShown: false }} />
      <Stack.Screen name="Perference" options={{ headerShown: false }} />
      <Stack.Screen name="ProfileSetting" options={{ headerShown: false }} />

      <Stack.Screen
        name="NotificationServicesSettings"
        options={{ headerShown: false }}
      /> */}
    </Stack>
  );
};

export default StackLayout;
