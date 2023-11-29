import { Link, router } from "expo-router";
import { useState } from "react";
import {

  ScrollView,

} from "react-native";

import NewPassword from "../(auth)/NewPassword";
import colors from "../res/colors";

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
