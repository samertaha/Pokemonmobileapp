import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "../../.expo/types/router";

export default function Details() {
  const params = useLocalSearchParams();

  console.log("Params:", params);

  useEffect(() => {
    // You can use the params to fetch additional data if needed
  }, [params]);

  async function fetchPokemonByName(name: string) {
    // Fetch additional details about the Pokemon if needed
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      console.log("Fetched Pokemon Details:", data);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 16,
        padding: 20,
      }}
    ></ScrollView>
  );
}

const styles = StyleSheet.create({});
