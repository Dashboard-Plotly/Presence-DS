import React from "react";
import { Div } from "./styled";
import { Text, View, StyleSheet } from "react-native";
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";
import InputsS from '../../components/inputsenha/index';

export default function Login({ navigation }) {

return (
<Div>
  <Text style={{fontFamily:'poppinsb', fontSize:20}}>Bem vindo,</Text>
  <Text style={{fontFamily:'poppinsr', fontSize:16, marginBottom:40}}>Estudante!</Text>
  <Inputs place='Matrícula' iconeF='mail' />
  <InputsS place="Senha" iconeMC='lock-outline'/>
  <Text style={{marginTop: 70}}> </Text>
  <Pressables iconeM='login' texto='Login' click={() => navigation.navigate('MainAlun')}/>
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:18}}>
    <View style={{flex: 1, height: 1 ,backgroundColor: '#DDDADA'}} />
      <View>
        <Text style={{width: 40, fontSize:12, textAlign: 'center', fontFamily:'poppinsr'}}>Ou</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: '#DDDADA'}} />
      </View>
      <View>
      </View>
      <Text style={{fontFamily:'poppinsr', fontSize:15, marginTop:18}}>Não tem uma conta ainda?
      <Text style={{color:'white'}}>.  .</Text>                    
        <Text style={styles.hypertexto} onPress={() => navigation.navigate('Form')}> 
          Registre-se 
        </Text> 
      </Text>
      
  
</Div>
);
}

const styles = StyleSheet.create({
  hypertexto: {
    color: '#0D5354',
  }
})

