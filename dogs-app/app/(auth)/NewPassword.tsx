import { Link } from "expo-router";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";

export default function NewPassword() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: colors["yellow.200"] }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: colors["brown.900"],
          }}
        >
          New password
        </Text>
        <View style={{ height: 40 }}></View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>
            Enter New Password
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors["brown.200"],
              width: 240,
              padding: 10,
              borderRadius: 4,
              margin: 4,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 14 }}
              placeholder="8 symbols at least"
            />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "700", paddingTop: 10 }}>
            Confirm password
          </Text>

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: colors["brown.200"],
              width: 240,
              padding: 10,
              borderRadius: 4,
              margin: 4,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 14 }}
              placeholder="8 symbols at least"
            />
            <FontAwesome name={"eye"} color={"#444"} size={18} />
          </View>
        </View>
        <View style={{ height: 38 }}></View>
        <Link href={{ pathname: "Login" }} asChild>
          <Pressable>
            <PrimaryButton title="Submit" />
          </Pressable>
        </Link>
      </ScrollView>
      <Image
        style={{ alignSelf: "flex-end", position: "absolute", bottom: 0 }}
        source={require("../res/images/pngs/footprint_rotated.png")}
      />
    </View>
  );
}
