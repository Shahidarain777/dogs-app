import { Link } from "expo-router";
// import { useRef } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";

export default function Otp() {
  // const codeRef = useRef<CodeInput>(null);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: colors["yellow.200"] }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        <Image
          style={{
            alignSelf: "flex-start",
            position: "absolute",
            // height: 113,
            // width: 140,
          }}
          source={require("../res/images/pngs/footprint_small.png")}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: colors["brown.900"],
            fontFamily: "Unbounded",
            marginVertical: 10,
          }}
        >
          VERIFICATION CODE
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors["brown.900"],
            fontWeight: "400",
            fontFamily: "Unbounded",
            paddingHorizontal: 20,
          }}
        >
          A verification code has been sent to your phone number.
        </Text>
        <View style={{ height: 50 }}></View>
        <CodeInput
          // ref={codeRef}
          // secureTextEntry
          activeColor={colors["brown.900"]}
          inactiveColor={colors["brown.200"]}
          autoFocus={true}
          keyboardType="numeric"
          codeLength={4}
          className="border-circle"
          size={45}
          disableFullscreenUI={true}
          onFulfill={(isValid: any) => {
            console.log("isValid", isValid);
          }}
          containerStyle={{ marginVertical: 56 }}
          codeInputStyle={{
            borderWidth: 1,
            borderColor: colors["brown.900"],
            fontSize: 24,
            borderRadius: 6,
            height: 56,
            fontFamily: "Unbounded",
          }}
        />

        <Link href={{ pathname: "AddOwner" }} asChild>
          <Pressable>
            <PrimaryButton title="Confirm" />
          </Pressable>
        </Link>

        <View
          style={{
            flexDirection: "row",
            padding: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: colors["brown.900"],
              fontFamily: "Unbounded",
            }}
          >
            Didn’t receive the code?
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "800",
              color: colors["brown.900"],
              fontFamily: "Unbounded",
            }}
          >
            {" "}
            Resend
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: colors["brown.900"],
              fontFamily: "Unbounded",
            }}
          >
            {" "}
            (45s)
          </Text>
        </View>
      </ScrollView>
      <Image
        style={{ alignSelf: "center", position: "absolute", top: 650 }}
        source={require("../res/images/pngs/footprint_large.png")}
      />
    </View>
  );
}
