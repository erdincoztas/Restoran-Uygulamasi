import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({term,onTermsChange,onTermSubmit}) {
 
  return (
    <View style={styles.backroundStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={24}
        color="black"
      />
      <TextInput
        style={styles.textStyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermsChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backroundStyle: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    margin: 10,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
  },
  iconStyle: {
    marginHorizontal: 10,
    fontSize: 30,
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
  },
});
