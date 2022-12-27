import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
`;

export const SearchArea = styled.View`
  background-color: #4eadbe;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  margin: 20px;
  margin-bottom: 0px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;
export const TextTitle = styled.Text`
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding-top: 60px;
  padding-bottom: 15px;
`;
