import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";



export default function ResultDetail({ result }) {
   
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 250,
            height: 120,
            borderRadius: 8,
            marginBottom: 5,
          }}
          source={result.image_url ? { uri: result.image_url } : null}
        />

        <Text style={styles.name}>{result.name}</Text>
        <Text>
          {result.rating} Yıldızlı Restoran, {result.review_count}{" "}
          Değerlendirme
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  
  name: {
    fontWeight: "bold",
  },
});
