import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../components/header/Header";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";
import { createNewNumbers } from "../actions/lottoNumbers";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const onPressGetNumber = useCallback(() => {
    dispatch(createNewNumbers());
  });
  const numbers = useSelector((state) => state.numbers.currentNumber);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME"></Header.Title>
      </Header>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 12,
        }}
      >
        <View
          style={{
            height: 250,
            flexDirection: "column",
            paddingHorizontal: 24,
            backgroundColor: "white",
            borderColor: "gray",
          }}
        >
          {numbers.length === 6 && <LottoNumberView numbers={numbers} />}
        </View>
        <Spacer space={20}></Spacer>
        <Button onPress={onPressGetNumber}>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 24,
              alignItems: "center",
            }}
          >
            <Typography fontSize={18} color="white">
              로또 번호 추출하기
            </Typography>
          </View>
        </Button>
      </View>
    </View>
  );
};
