import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";

import PrimaryButton from "../common/components/PrimaryButton";
import { Link } from "expo-router";

import colors from "../res/colors";

export default function AddOwner() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{
            width: 100,
            alignSelf: "flex-end",
            position: "absolute",
            top: 150,
          }}
          source={require("../res/images/pngs/footprint_small.png")}
        />

        <Text
          style={{
            fontSize: 25,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 150,
          }}
        >
          Dog Owner Name?
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 4,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 22,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 50,
          }}
        >
          Whats is your dog's name?
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 4,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
            }}
          />
        </View>

        <View style={{ height: 20 }}></View>
        <Link href={{ pathname: "AddPicture" }} asChild>
          <Pressable>
            <PrimaryButton title="Next" />
          </Pressable>
        </Link>

        <View style={{ height: 20 }}></View>
        <Link href={{ pathname: "AddPicture" }} asChild>
          <Pressable>
            <PrimaryButton title="Don't have a dog" />
          </Pressable>
        </Link>
      </ScrollView>
      <Image
        style={{
          width: 100,
          alignSelf: "flex-end",
          position: "absolute",
          top: 450,
        }}
        source={require("../res/images/pngs/footprint_small.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["yellow.200"],
    flex: 1,
    alignItems: "center",
  },
});
