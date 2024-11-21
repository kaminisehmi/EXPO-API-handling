import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="user1" />
      <Stack.Screen name="user2" />
    </Stack>
  );
};

export default _layout;
