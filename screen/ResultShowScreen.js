import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultShowScreen({ route }) {
  const id = route.params.id;
  console.log(id);
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
     <Text style={styles.icon}> {
        result.is_closed ? (<AntDesign name="closecircleo" size={24} color="black" />):(
          <MaterialIcons name="restaurant" size={24} color="black" />

        )
      }</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    marginBottom: 15,
    alignSelf:"center",
    fontWeight: "bold",
  },
  image: {
    height:180,
    margin:10,
    borderRadius:10
  },phone:{
    color:"#CF8B82",
    alignSelf:"center",
    fontWeight: "bold",
  },icon:{
    alignSelf:"center",
  }
});
