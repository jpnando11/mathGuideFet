/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { style } from '../../config/theme/app-theme';
import { Text } from 'react-native-paper';
import { ResultComponent } from '../hooks/ResultComponent';
import { Integrales } from '../hooks/Integrales';

interface InterfaceResult {
    Number:string,
    icono?:string,
}

export const CaculatorResult = ({Number,icono = ''}:InterfaceResult) => {
    const {Componet} = ResultComponent();
    let derivada = '';
    if (icono !== '') {
      derivada = ' dx';
    }
    const {integralConstante} = Integrales();
  return (
    <View style={style.mainResult}>
        <View style={style.contenedorTextResult}>
            {Componet(icono)}
            <Text style={style.textOperation}>{Number + derivada}</Text>
        </View>
        <Text style={{...style.subResult, display: (Number === '') ? 'none' : 'flex'}}>{integralConstante(Number)}</Text>
    </View>
  );
};

