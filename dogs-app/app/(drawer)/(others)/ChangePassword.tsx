import { Link, router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NewPassword from "../../(auth)/NewPassword";
import PrimaryButton from "../../common/components/PrimaryButton";
import colors from "../../res/colors";

export default function ChangePassword() {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <ScrollView
      style={{ backgroundColor: colors["yellow.200"] }}
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <NewPassword />
    </ScrollView>
  );
}
