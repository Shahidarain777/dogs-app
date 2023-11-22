import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../../constants/Colors";
import { DrawerToggleButton } from "@react-navigation/drawer";
import colors from "../../res/colors";

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

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors["brown.900"],
        tabBarInactiveTintColor: colors["brown.200"],
        tabBarLabelStyle: { fontFamily: "Unbounded" },
        tabBarStyle: {
          backgroundColor: colors["yellow.200"],
          borderTopWidth: 1,
          borderTopColor: colors["brown.900"],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
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
