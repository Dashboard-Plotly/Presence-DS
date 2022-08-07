import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
  BackHandler,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import PressablesConf from "../../components/pressablesConf";
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// =========================================================
// GERAÇÃO DE CÓDIGO TURMA:
function codigo() {
    let codigo = '';
    do {
    codigo =  Math.random().toString(36).substring(2)   
    } while(codigo.length > 6)
    // console.log(codigo.toUpperCase());
    return codigo.toUpperCase();
}
// =========================================================


export default function MainProf({ navigation }) {

    const DADOS = [
    { key: "Fisica 1", turm: "A" },
    { key: "Fisica 2", turm: "B" },
    { key: "Fisica 3", turm: "C" },
    { key: "Fisica 4", turm: "D" },
    { key: "Fisica 5", turm: "E" },
    { key: "Fisica 6", turm: "F" },
    { key: "Fisica 7", turm: "G" },
    { key: "Fisica 8", turm: "H" },
    { key: "Fisica 9", turm: "I" },
    { key: "Fisica 10", turm: "J" },
    { key: "Fisica 11", turm: "K" },
    { key: "Fisica 12", turm: "L" },
    { key: "Fisica 13", turm: "M" },
  ];


    // =========================================================
    // ALERTA PARA FECHAR APLICATIVO:
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    //navigation.navigate('Login');
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);
    // =========================================================

    // =========================================================
    // DECLARAÇÃO DE STATES:
    const [modalActive2, setModalActive2] = useState(false)
    const [modalActive3, setModalActive3] = useState(false)
    const [materia, setMateria] = useState(null)
    const [nomeTurma, setNomeTurma] = useState(null)
    const [message, setMessage]=useState(null);
    // =========================================================

    // =========================================================
    // LÓGICA DE LOG-OUT:
    const handleCloseAndRoute = () => {
        setModalActive3(false);
        AsyncStorage.clear();
        navigation.navigate('Login')

    }
    // =========================================================

    // =========================================================
    // FUNÇÃO PARA ENVIO DE DADOS 'CRIAR TURMA' PARA O BACKEND:
    async function CriarTurma(){
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        if (materia != '' || nomeTurma != ''){
            let reqs = await fetch('http://192.168.0.10:3000/turmac', {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: null,
                    codigoTurma: codigo(),
                    curso: materia,
                    nomeTurma: nomeTurma,
                    professor: json.matricula,
                })
            });
            let res= await reqs.json();
            if(res === 'error'){
                setMessage('Preencha os Campos!');
                setTimeout(() => {
                    setMessage(null);
                }, 2000);
            }
            else{
                setMessage('Turma Criada!');
                setTimeout(() => {
                    setMessage(null);
                    setMateria(null);
                    setNomeTurma(null);
                    setModalActive3(false);
                }, 1000);
                
            }
        }
        else{
            setMessage('Preencha os Campos!');
                setTimeout(() => {
                    setMessage(null);
                }, 2000);
        }
    }
    // =========================================================

// =========================================================
// ARQUITETURA DA SCREEN DA APLICAÇÃO:
return (

      <SafeAreaView style={style.container}>
 
      <View style={style.logout}>
        <PressablesConf iconeLo="logout" click={() => setModalActive2(true)} />
      </View>
 
      <View style={style.header}>
        <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>
          {" "}
          Turmas Ministradas
        </Text>
      </View>


      <View style={style.lista}>
        <FlatList
          data={DADOS}
          renderItem={({ item }) => (
            <Pressable>
              <View style={style.turma}>
                <Text
                  style={{
                    fontFamily: "poppinsm",
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingTop: 18,
                  }}
                >
                 {item.key} - {item.turm}
                </Text>
              </View>
            </Pressable>
          )}
        ></FlatList>
      </View>

      <View style={style.botao}>
        <Pressables
          iconeFA5="users"
          texto="Criar uma turma"
          click={() => setModalActive3(true)}
        />
      </View>

      <Modal visible={modalActive2} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            start={[1.0, 0.5]}
            style={style.modal2}
            colors={["#2C5E7A", "#338995"]}
          >
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", paddingBottom: 50 }}
            >
              Deseja mesmo sair?
            </Text>
            <View style={style.alinhamento}>
              <PressablesModal
                texto="Sim"
                click={() => handleCloseAndRoute()}
              />
              <PressablesModal2
                texto="Não"
                click={() => setModalActive2(false)}
              />

            </View>
          </LinearGradient>
        </View>
      </Modal>

      <Modal visible={modalActive3} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal}
          >
            <IconX
              style={style.close}
              name="close-circle"
              size={30}
              onPress={() => setModalActive3(false)}
            />
            <View style={{alignItems: 'center'}}>
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", marginTop:5}}
            >
              Crie sua turma
            </Text>
            {message && (
                        <Text>{message}</Text>
                    )}
              <Inputs place="Matéria" iconeF="book" onChange={(text) => setMateria(text)} />
              <Inputs place="Turma" iconeO="people" onChange={(text) => setNomeTurma(text)} />
              </View>
              <View style={{marginTop:15}}>
                <PressablesModal
                  texto="Criar"
                 click={CriarTurma}
                />
              </View>
            
            
            
          </LinearGradient>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
// =========================================================

// =========================================================
// ESTILIZAÇÕES:
const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  header: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    flexDirection: "row",
    width: "100%",
    height: 110,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 110,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  turma: {
    height: 57,
    borderRadius: 16,
    width: 315,
    backgroundColor: "#D5E9E1",
    marginBottom: 15,
  },
  modal: {
    borderRadius: 22,
    width: 340,
    height: 265,
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: "#ffffff",
  },
  modal2: {
    width: 275,
    height: 173,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "space-around",
  },
  alinhamento: {
    position: 'absolute',
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lista: {
    marginTop: 110,
    marginBottom: 110,
  },
  logout:{
    position:"absolute",
      zIndex: 2,
      top: 55,
      right: 20,
  }
});