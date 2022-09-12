import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Pressable, FlatList, ImageBackground} from "react-native";
import PressableBtnBack from "../../components/PressableBtnBack";
import PressableCircle from "../../components/pressableCircle";
import IconO from 'react-native-vector-icons/Octicons';
import IconLo from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import IconX from 'react-native-vector-icons/Ionicons';
import Inputs from "../../components/inputs";
import ProgressBarIP from "../../components/ProgressBarIP";
import IconCa from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ValidarChamada({ navigation }) {

  const handleCloseAndRoute = () => {
    setModalActive2(false);
    navigation.navigate('MainAlun')
  }

  const [modalActive3, setModalActive3] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive1, setModalActive1] = useState(false);
  const [turma, setTurma] = useState('Física 1 - A');
  const [faltas, setfaltas] = useState('2');

  const DADOS = [
    {ChamadaRealizada: '08 de Fevereiro'},
    {ChamadaRealizada: '12 de Abril'},
    {ChamadaRealizada: '01 de Junho'},
    {ChamadaRealizada: '04 de Junho'},
    {ChamadaRealizada: '10 de Novembro'},
    {ChamadaRealizada: '29 de Julho'},
    {ChamadaRealizada: '30 de Dezembro'},
    {ChamadaRealizada: '07 de Janeiro'},
  ];

  const options = [
    { label: 'Janeiro'},
    { label: 'Fevereiro'},
    { label: 'Março'},
    { label: 'Abril'},
    { label: 'Maio'},
    { label: 'Junho'},
    { label: 'Julho'},
    { label: 'Agosto'},
    { label: 'Setembro'},
    { label: 'Outubro'},
    { label: 'Novembro'},
    { label: 'Dezembro'},
];

  return (
    <ImageBackground source={require('../../assets/images/VetorChamada2.png')} resizeMode="cover">
      <SafeAreaView style={style.container}>

        {/* Header */}
        <View style={style.header}>
          <View>
            <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>{turma}</Text>
          </View>
          <View style={style.voltar}>
            <PressableBtnBack
              click={() => navigation.navigate("MainAlun")}
              iconeIo="chevron-back"
            />
          </View>
        </View>

        {/* Barra de progresso */}
        <View style={style.progress}>
            <ProgressBarIP titulo='Índice de Presença'/>
        </View>
        
        {/* FlatList dos meses */}
        <View  style={{marginTop: 100, marginBottom: 75, width:'100%' ,height:'100%', justifyContent: "space-around", alignItems: 'center'}}>
          <View style={{backgroundColor:'#F7F8F8', zIndex:2 , width:315, height:60, borderRadius:30, position:'absolute', marginTop:210, shadowColor: 'black',
                      shadowOpacity: 1,
                      shadowRadius: 4,
                      elevation: 2.0 }}>
            <View style={{width:286, display:"flex", justifyContent:'center', marginTop:10, marginLeft:15 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={options}
                horizontal
                renderItem={({item}) =>(
                <Pressable style={{ paddingRight:24 }} onPress={() => navigation.navigate('CriarChamada')}>
                  <View>
                    <LinearGradient
                      colors = {['#2C5E7A' , '#338995']}
                      start = {[1.0 , 0.5]}
                      style={{width:130, height:40, borderRadius:30,}}>
                      <View style={{flexDirection: "row", justifyContent:'center'}}>
                        <Text
                          style={{
                          fontFamily: "poppinsm",
                          fontSize: 14,
                          paddingTop: 10,
                          color:'#fff'
                        }}>
                          {item.label}
                        </Text>
                      </View>
                    </LinearGradient>
                  </View>
                </Pressable> )}>
              </FlatList>
            </View>
          </View>
          
          {/* FlatList das chamadas realizadas */}
          <View style={style.lista}> 
            <FlatList
              data={DADOS}
              renderItem={({ item }) => (
                <Pressable onPress={() => navigate.navigation('ValidarChamada')}>
                  <View style={style.alunos}>
                    <View style={{flexDirection: "row", justifyContent:'space-between'}}>
                      <IconCa style={{position:'absolute', alignSelf:'center', marginLeft:14, paddingTop:12, }} name='calendar-range-outline' size={18}/>
                      <Text
                        style={{
                          fontFamily: "poppinsm",
                          fontSize: 14,
                          paddingLeft: 38,
                          paddingTop: 18,
                        }}>
                          {item.ChamadaRealizada}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}>
            </FlatList>
          </View>
        </View>

        {/* Fotter */}
        <View style={style.footer}>
          <View style={{width: 24, height: 24,}}>
            <IconO style={{alignSelf: 'center', color: '#ADA4A5'}} name='megaphone' size={23.5} onPress={() => setModalActive1(true)}/>
          </View>
          <View style={{paddingBottom: 20}}>
            <PressableCircle
              click={() => navigation.navigate("MainProf")}
              iconeMCI="calendar-multiple-check"/>
          </View>
          <View style={{width: 27, height: 27}}>
            <IconLo style={{alignSelf: 'center', color: '#DB4E4E'}} name='logout' size={27} onPress={() => setModalActive2(true)}/>
          </View>
        </View>

        {/* -- Início dos Modais -- */}

        {/* Modal sair turma */}
        <Modal visible={modalActive2} animationType="fade" transparent={true}>
          <View style={style.fundoModal}>
            <LinearGradient
              colors={["#2C5E7A", "#338995"]}
              start={[1.0, 0.5]}
              style={style.modal2}>
              <Text style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", paddingBottom: 50 }}>
                Deseja sair dessa turma?
              </Text>
              <View style={style.alinhamento}>
                <PressablesModal
                  texto="Sim"
                  click={() => handleCloseAndRoute()}/>
                <PressablesModal2
                  texto="Não"
                  click={() => setModalActive2(false)}/>
              </View>
            </LinearGradient>
          </View>
        </Modal>

        {/* Modal nº de faltas */}
        <Modal visible={modalActive1} animationType="fade" transparent={true}>
          <View style={style.fundoModal}>
            <LinearGradient
              colors={["#2C5E7A", "#338995"]}
              start={[1.0, 0.5]}
              style={style.modal1}>
              <IconX
                style={style.close}
                name="close-circle"
                size={20}
                onPress={() => setModalActive1(false)}/>
              <Text style={{ fontFamily: "poppinsm", fontSize: 14, color: "white", alignSelf:'center', paddingTop:45, marginBottom:-5}}>Você possui</Text>
              <Text style={{ fontFamily: "poppinsm", fontSize: 48, color: "white", alignSelf:'center', marginBottom:-15 }}>{faltas}</Text>
              <Text style={{ fontFamily: "poppinsm", fontSize: 14, color: "white", alignSelf:'center'}}>Faltas!</Text>
            </LinearGradient>
          </View>
        </Modal>

        {/* Código chamada */}
        <Modal visible={modalActive3} animationType="fade" transparent={true}>
          <View style={style.fundoModal}>
            <LinearGradient
              colors={["#2C5E7A", "#338995"]}
              start={[1.0, 0.5]}
              style={style.modal}>
              <IconX
                style={style.close}
                name="close-circle"
                size={30}
                onPress={() => setModalActive3(false)}/>
              <Text style={{ fontFamily: "poppinsb", fontSize: 15, color: "white" }}>
                Insira o código da chamada
              </Text>
              <Inputs place="Código" iconeF="check" />
              <PressablesModal
                texto="Validar"
                click={() => setModalActive3(false)}/>
            </LinearGradient>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    width: "100%",
    height: 110,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  voltar: {
    position:"absolute",
    zIndex: 2,
    top: 55,
    left: 20,
  },
  code: {
    width: 319,
    height: 68,
    borderRadius: 20,
    backgroundColor: '#DFF5EB',
    position: 'absolute',
    top: 130,
  },
  footer:{
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    width: 450,
    height: 65,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0,
    borderRadius: 2,
    borderColor: 'rgba(221,221,221)',
    borderTopWidth: 0.2,
    shadowColor: 'rgb(221,221,221)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 0.3,
  },
  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },  
  modal1: {
    width: 148,
    height: 183,
    borderRadius: 22,
    alignItems: "center",
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
  close: {
    position: 'absolute',
    right: 15,
    top: 15,
    color: "#ffffff",
  },
  modal: {
    borderRadius: 22,
    padding: 35,
    width: 335,
    height: 220,
    alignItems: "center",
    justifyContent: "space-around",
  },
  progress:{
    width:345,
    position:'absolute',
    top:130,
  },
  alunos: {
    height: 57,
    borderRadius: 16,
    width: 315,
    backgroundColor: "#dff1f1",
    marginBottom: 15,
    shadowColor: 'rgb(221,221,221)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3.5, 
  },
  lista: {
    marginTop: 285,
    marginBottom: 150,
  },
});