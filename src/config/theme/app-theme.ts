/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const colors = {
    colorPrimario: '#FAFAFA',
    color: '#0C9F0F',
    colorSecundario: '#CACACA',
    colorBotton: '#FFFFFF',

};
const {height,width} = Dimensions.get('window');
export const style = StyleSheet.create({
    background: {
        flex : 1,
        backgroundColor: colors.colorPrimario,
    },
    margin: {
        margin:40,
    },
    marginBotton: {
        marginBottom:40,
    },
    resultGeneral:{
        flex:1,
        justifyContent:'flex-end',
        flexWrap:'nowrap',
    },
    textOperation:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight: '700',
        color: colors.color,
        fontSize:RFValue(40),
        alignSelf:'flex-end',
    },
    subResult:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight: '500',
        color: colors.colorSecundario,
        fontSize:RFValue(25),
        textAlign:'center',
    },
    button:{
        backgroundColor:colors.colorBotton,
        width:width * 0.14,
        height:height * 0.07,
        borderRadius: 10,
        elevation:3,
        marginHorizontal:10,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonProceso:{
        backgroundColor:colors.color,
        width:width * 0.9,
        height:height * 0.07,
        borderRadius:8,
        elevation:3,
        display:'flex',
        justifyContent:'center',

    },
    buttonProcesoColor:{
        fontSize:RFValue(20),
        alignSelf: 'center',
        fontWeight: '700',
        color: colors.colorBotton,
    },
    containerButton:{
        flexDirection:'row',
        justifyContent:'center',
    },
    buttonText:{
        color:colors.color,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: RFValue(20),
    },
    textPressed:{
        color:colors.colorBotton,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
    barra:{
        backgroundColor: colors.color,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
    },
    barraTexto: {
        color: colors.colorPrimario,
        fontSize: RFValue(15),
        fontWeight: 'bold',
    },
    textResult:{
        color:colors.color,
        fontSize:RFValue(15),
        textAlign:'center',
    },
    mainResult:{
        margin:40,
    },
    contenedorTextResult:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',

    },
    TextResultProceso:{
        flex: 1,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-around',

    },
});
