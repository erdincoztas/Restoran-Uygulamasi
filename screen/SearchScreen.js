import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import UseResult from "../hooks/UseResult";
import ResultList from "../components/ResultList";
import { useState } from "react";

export default function SearchScreen() {
  const [searchApi, results] = UseResult();
  const [term, setTerm] = useState("");

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermsChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {
        results.length==0 ? (
          <><Text>Ürün Bulunamadı.</Text></>
        ):(<><ResultList title="Ucuz Restoranlar" results={filterResultByPrice("₺")} />
        <ResultList
          title="Uygun Restoranlar"
          results={filterResultByPrice("₺₺")}
        />
        <ResultList
          title="Pahalı Restoranlar"
          results={filterResultByPrice("₺₺₺")}
        /></>)
      }
      
    </View>
  );
}

const styles = StyleSheet.create({});
