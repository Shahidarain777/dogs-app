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
import colors from "../res/colors";
import Registration from "./Registration";
export default function App() {
  return (
    <ScrollView
      style={{ backgroundColor: colors["yellow.200"] }}
      contentContainerStyle={styles.container}
    >
      <Registration />
      {/* <Image
        style={styles.logo}
        source={require("./res/images/bhairavan_logo.png")}
      />
      <View style={styles.login_container}>
        <Text style={styles.register}>Register</Text>
        <HorizontalSeparator />
        <Text style={styles.phone}>Phone Number</Text>
        <Image
          style={{ marginBottom: -2 }}
          source={require("./res/images/pngs/polygon_up.png")}
        />
        <HorizontalSeparator />

        <View style={styles.secondary_container}>
          <Text style={styles.what_is_your_phone}>
            What is your phone number?
          </Text>

          <View
            style={{ paddingVertical: 30, flexDirection: "row", width: "100%" }}
          >
            <SelectDropdown
              defaultButtonText=" "
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownStyle={{}}
              data={countries}
              buttonStyle={{
                padding: 10,
                marginHorizontal: 10,
                width: 100,
                borderRadius: 20,
                backgroundColor: colors["brown.200"],
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
            />

            <TextInput
              style={{
                backgroundColor: colors["brown.200"],
                fontSize: 20,
                height: 50,
                lineHeight: 50,
                flex: 1,
                borderRadius: 15,
                padding: 10,
                marginHorizontal: 10,
              }}
            />
          </View>

          <Pressable
            style={{
              backgroundColor: colors["yellow.500"],
              borderRadius: 20,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                padding: 10,
                color: colors["brown.900"],
              }}
            >
              SEND CONFIRMATION CODE
            </Text>
          </Pressable>
          <Text style={styles.singing}>
            By signing up you agree with Bhairavan
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text style={styles.terms}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.of}> of </Text>
            <TouchableOpacity>
              <Text style={styles.terms}>Terms of Service</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <Text style={styles.already}>Already have account? </Text>
            <TouchableOpacity>
              <Text style={{ ...styles.terms, fontSize: 12 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
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
