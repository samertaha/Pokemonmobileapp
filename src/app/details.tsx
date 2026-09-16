import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();

  console.log(params.name);

  useEffect(() => {
    // You can use the params to fetch additional data if needed
  }, []);

  async function fetchPokemonByName(name: string) {
    // try {
    //} catch (error) {}
  }

  return (
    <>
      <Stack.Screen options={{ title: params.name as string }} />
      <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: 16,
        }}
      >
        {/* <Text>{params.name}</Text> */}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{params.name}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
