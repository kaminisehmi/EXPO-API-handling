import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: "coral", width: 245 },
          drawerLabelStyle: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Drawer.Screen name="profile" />
        <Drawer.Screen name="inbox" />
        <Drawer.Screen name="spam" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
