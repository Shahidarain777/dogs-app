import {
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from "../res/colors";
import Login from "./Login";
export default function App() {
  return (
    <ScrollView
      style={{ backgroundColor: colors["yellow.200"] }}
      contentContainerStyle={styles.container}
    >
      <Login />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["yellow.200"],
    flex: 1,
    // alignItems: "center",
  },
  logo: {
    marginTop: 40,
    marginBottom: 20,
  },
  login_container: {
    flex: 1,
    backgroundColor: colors["brown.900"],
    width: "100%",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,

    alignItems: "center",
  },
  register: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: "600",
    fontSize: 32,
    color: colors["yellow.200"],
  },

  phone: {
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 10,
    color: colors["yellow.200"],
  },

  secondary_container: {
    paddingVertical: 30,
    alignItems: "center",
  },

  what_is_your_phone: {
    fontSize: 15,
    fontWeight: "600",
    color: colors["yellow.200"],
  },
  singing: {
    fontSize: 12,
    color: colors["yellow.200"],
    fontWeight: "300",
    paddingTop: 20,
    paddingBottom: 4,
  },
  already: {
    fontSize: 13,
    color: colors["yellow.200"],
    fontWeight: "500",
  },
  terms: {
    fontSize: 10,
    fontWeight: "700",
    color: colors["yellow.500"],
  },
  of: {
    fontSize: 10,
    fontWeight: "400",
    color: colors["yellow.200"],
  },
});
