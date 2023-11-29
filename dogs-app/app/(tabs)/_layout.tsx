import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Pressable,
  useColorScheme,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import colors from "../res/colors";
import ProfileModal from "../../components/ProfileModel";
import { useState } from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [visible, setVisible] = useState(false);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors["brown.900"],
        tabBarInactiveTintColor: colors["brown.200"],
        tabBarLabelStyle: { fontFamily: "Unbounded" },
        tabBarStyle: {
          backgroundColor: colors["yellow.500"],
          borderTopWidth: 1,
          borderTopColor: colors["brown.900"],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: colors["yellow.200"],
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 1,
          },
          title: "Home",

          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{ marginRight: 20, alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: colors["yellow.500"],
                  height: 34,
                  width: 34,
                  borderWidth: 2,
                  borderRadius: 30,
                  paddingTop: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ marginTop: 0, height: 22, width: 22 }}
                  source={require("../res/images/pngs/black-foot.png")}
                />
              </View>
              <Text
                style={{
                  fontFamily: "Unbounded",
                  fontSize: 10,
                  fontWeight: "400",
                }}
              >
                Profile
              </Text>
              <ProfileModal
                visible={visible}
                onCancel={() => setVisible(!visible)}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <DrawerToggleButton tintColor={colors["brown.900"]} />
            // <Link href="/modal" asChild>
            //   <Pressable>
            //     {({ pressed }) => (
            //       <FontAwesome
            //         name="info-circle"
            //         size={25}
            //         color={Colors[colorScheme ?? "light"].text}
            //         style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            //       />
            //     )}
            //   </Pressable>
            // </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications ",
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings ",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: "Logout ",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="power-off" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
