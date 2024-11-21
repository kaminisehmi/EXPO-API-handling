import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
const Index = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>List of the users</Text>
      <Link href="/details/1">User-1</Link>
      <Link href="/details/2">user-2</Link>
      <Link href="/details/3">user-3</Link>
    </View>
  );
};

export default Index;
