import { Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import seed from "@/lib/seed";

const Search = () => {
  const handleSeed = async () => {
    try {
      await seed();
      console.log("Seeding successful");
    } catch (error) {
      console.log("Failed to seed:", error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Search</Text>
      <Button title="Seed" onPress={handleSeed} />
    </SafeAreaView>
  );
};

export default Search;
