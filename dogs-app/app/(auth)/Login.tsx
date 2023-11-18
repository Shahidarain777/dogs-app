import { Link } from "expo-router";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";

export default function Login() {
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
          }}
          source={require("../res/images/pngs/footprint_small.png")}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: colors["brown.900"],
          }}
        >
          LOG IN
        </Text>
        <View style={{ height: 40 }}></View>
        <View>
          <View
            style={{
              backgroundColor: colors["brown.200"],
              width: 240,
              padding: 10,
              borderRadius: 4,
              margin: 4,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 20 }}
              placeholder="Phone Number"
            />
          </View>
          <View
            style={{
              backgroundColor: colors["brown.200"],
              width: 240,
              padding: 10,
              borderRadius: 4,
              margin: 4,
              flexDirection: "row",
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 20 }}
              placeholder="Password"
            />
            <FontAwesome name={"eye"} color={"#444"} size={18} />
          </View>
          <Link href={{ pathname: "ForgotPassword" }} asChild>
            <Pressable>
              <Text style={{ textAlign: "right", fontSize: 8, padding: 10 }}>
                Forget password?
              </Text>
            </Pressable>
          </Link>
        </View>
        <View style={{ height: 38 }}></View>
        <Link href={{ pathname: "(tabs)" }} asChild>
          <Pressable>
            <PrimaryButton title="Login" />
          </Pressable>
        </Link>
        <View style={{ flexDirection: "row", padding: 16 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: colors["brown.900"],
            }}
          >
            Don’t have an account?
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: colors["brown.900"],
            }}
          >
            Create
          </Text>
        </View>
      </ScrollView>
      <Image
        style={{ alignSelf: "center", position: "absolute", bottom: 1 }}
        source={require("../res/images/pngs/footprint_large.png")}
      />
    </View>
  );
}
