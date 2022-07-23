import React from "react";
import { Div } from "./styled";
import { Text, Button } from "react-native";
import Inputs from "../../components/inputs";
import {
useFonts,
Poppins_400Regular,
Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as Font from 'expo-font'
import { AppLoading } from "expo";

function Form({ navigation }) {

return (
<Div>
  <Text style={{fontFamily:'poppinsr', fontSize:16}}>Ei Estudante!</Text>
  <Text style={{fontFamily:'poppinsb', fontSize:20, marginBottom:20}}>Crie uma conta</Text>
  <Inputs place='Nome' iconeO='person' />
  <Inputs place="Matrícula" iconeMC='smart-card-outline'/>
  <Inputs place="Email" iconeF='mail'/>
  <Inputs place="Senha" iconeMC='lock-outline'/>
  <Inputs place="Confirmação de Senha" iconeMC='lock-plus-outline'/>
  <Text style={{marginTop:30}}></Text>
    <Button
    title='Registre-se'
    ></Button>
</Div>
);
}

export default Form;

