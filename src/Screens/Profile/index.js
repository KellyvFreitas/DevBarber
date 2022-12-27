import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, SearchArea, SearchInput, TextTitle} from './styles';
import Api from '../../Api';
import Account from '../../assets/account.svg';
export default () => {
  const navigation = useNavigation();

  const handleLogoutClick = async () => {
    await Api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <TextTitle>INFORMAÇÕES PESSOAIS</TextTitle>

      <SearchArea>
        <SearchInput
          placeholder="Maria Cecilia de Oliveira"
          placeholderTextColor="#FFFFFF"
          autoCapitalize="none"
          type="text"
          editable={false}
        />
      </SearchArea>

      <SearchArea>
        <SearchInput
          placeholder="Cecilia@hotmail.com"
          placeholderTextColor="#FFFFFF"
          autoCapitalize="none"
          type="text"
          editable={false}
        />
      </SearchArea>

      <SearchArea>
        <SearchInput
          placeholder="012.012.012-22"
          placeholderTextColor="#FFFFFF"
          autoCapitalize="none"
          type="text"
          editable={false}
        />
      </SearchArea>

      <SearchArea>
        <SearchInput
          placeholder="(88)8888-8888"
          placeholderTextColor="#FFFFFF"
          autoCapitalize="none"
          type="text"
          editable={false}
        />
      </SearchArea>
    </Container>
  );
};
