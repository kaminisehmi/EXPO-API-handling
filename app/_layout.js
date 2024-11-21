import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="modal" options={{ presentation: "card" }} />
      <Stack.Screen name="(drawer)" options={{ title: "About" }} />
    </Stack>
  );
};

export default Layout;
