/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text} from 'react-native';
import { style } from '../../config/theme/app-theme';

interface Proceso {
  press : ()=>any,
}

export const CalculatorProcesp = ({press}:Proceso) => {
  return (
    <Pressable style= {style.buttonProceso} onPress={()=>press()}>
        <Text style= {style.buttonProcesoColor}>PROCESO</Text>
    </Pressable>
  );
};
