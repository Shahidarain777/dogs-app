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
export default function DogAge() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 24,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 120,
          }}
        >
          What is dog's gender?
        </Text>

        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 13,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 13,
          }}
        >
          Select dog's gender
        </Text>

        <Image
          style={{ marginTop: 10, height: 130, width: 220 }}
          source={require("../res/images/pngs/footprint_group.png")}
        />

        <View style={{ flexDirection: "row", margin: 60 }}>
          <View
            style={{
              width: 130,
              height: 130,
              paddingLeft: 45,
              paddingTop: 30,
              borderRadius: 15,
              marginTop: 15,
              marginHorizontal: 10,
              borderWidth: 2,
            }}
          >
            <FontAwesome name={"venus"} color={"black"} size={50} />
          </View>

          <View style={{ flexDirection: "row", margin: 60 }}>
            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
                paddingLeft: 45,
                paddingTop: 30,
                borderRadius: 15,
                marginTop: 15,
                marginHorizontal: 10,
                borderWidth: 2,
              }}
            >
              <FontAwesome name={"venus"} color={"black"} size={50} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
                paddingLeft: 45,
                paddingTop: 30,
                borderRadius: 15,
                marginTop: 15,
                marginHorizontal: 10,
                borderWidth: 2,
              }}
            >
              <FontAwesome name={"mars"} color={"black"} size={50} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: 130,
              height: 130,
              paddingLeft: 45,
              paddingTop: 30,
              borderRadius: 15,
              marginTop: 15,
              marginHorizontal: 10,
              borderWidth: 2,
            }}
          >
            <FontAwesome name={"mars"} color={"black"} size={50} />
          </View>
        </View>

        <Link href={{ pathname: "Perference" }} asChild>
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
