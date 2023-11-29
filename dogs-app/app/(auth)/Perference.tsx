import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import PrimaryButton from "../common/components/PrimaryButton";
import { Link } from "expo-router";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../res/colors";
const countries = ["Egypt", "Canada", "Australia", "Ireland"];
export default function Perference() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 24,
            color: colors["brown.900"],
            fontWeight: "bold",
            marginTop: 100,
            textAlign: "center",
          }}
        >
          Perference
        </Text>

        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 3, height: 150, width: 130 }}
              source={require("../res/images/pngs/play.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 0, height: 150, width: 130 }}
              source={require("../res/images/pngs/Mate.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 10, height: 150, width: 130 }}
              source={require("../res/images/pngs/Missing.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 10, height: 150, width: 130 }}
              source={require("../res/images/pngs/Adopt.png")}
            />
          </TouchableOpacity>
        </View>

        <Link href={{ pathname: "ProfileSetting" }} asChild>
          <Pressable>
            <PrimaryButton title="Next" />
          </Pressable>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors["yellow.200"],
    flex: 1,
    alignItems: "center",
  },
});
