import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { Header } from "../components/header/Header";
import Typography from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";
import { useSelector } from "react-redux";

export const HistoryListScreen = () => {
  const history = useSelector((state) => state.numbers.history);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="History"></Header.Title>
      </Header>
      <FlatList
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}
            >
              <Typography fontSize={16}>{item.date}</Typography>
              <LottoNumberView numbers={item.numbers}></LottoNumberView>
            </View>
          );
        }}
        contentContainerStyle={{ paddingTop: 24, paddingBottom: 24 }}
        data={history}
        style={{ flex: 1 }}
      ></FlatList>
    </View>
  );
};
