import { Link } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";

export default function ForgotPassword() {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingTop: 100 }}
      style={{ flex: 1, backgroundColor: colors["yellow.200"] }}
    >
      <Text
        style={{
          fontSize: 24,
          color: colors["brown.900"],
          fontWeight: "700",
          fontFamily: "Unbounded",
        }}
      >
        Forgot Password?
      </Text>
      <View
        style={{
          backgroundColor: colors["yellow.500"],
          width: 200,
          height: 200,
          justifyContent: "center",
          borderRadius: 100,
          margin: 40,
        }}
      >
        <Image
          style={{ marginBottom: 20 }}
          source={require("../res/images/bhairavan_logo.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          color: colors["brown.900"],
          fontWeight: "600",
          fontFamily: "Unbounded",
        }}
      >
        Enter the phone number associated with your account.
      </Text>

      <View
        style={{
          borderBottomColor: colors["brown.900"],
          borderBottomWidth: 1,
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter Phone Number"
          style={{
            width: 220,
            fontSize: 14,
            padding: 10,
            color: colors["brown.900"],
            textAlign: "center",
            fontFamily: "Unbounded",
          }}
        />
      </View>
      <View style={{ height: 20 }}></View>
      <Link href={{ pathname: "VerifyForgotOTP" }} asChild>
        <Pressable>
          <PrimaryButton title="Send" />
        </Pressable>
      </Link>
    </ScrollView>
  );
}
