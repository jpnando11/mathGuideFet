/* eslint-disable prettier/prettier */
import React from 'react';
import { View} from 'react-native';
import { style } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';
import { CalculatorProcesp } from '../components/CalculatorProcesp';
import { ModalProceso } from '../components/ModalProceso';
import { IsvisibleModal } from '../hooks/IsvisibleModal';
import { CaculatorResult } from '../components/CaculatorResult';



export const CalculatorScreen = () => {
    const {number,builderNumber,icono,buildSimbolo} = useCalculator();
    const {putVisible,visible} = IsvisibleModal();
    return (
    <View style={style.resultGeneral}>
        <CaculatorResult Number={number} icono={icono}/>
        <View style = {style.containerButton}>
            <ModalProceso Visible={visible} Press={()=>putVisible(false)} />
            <CalculatorProcesp press={()=>putVisible(true)}/>
        </View>
        <View style={style.row}>
            <CalculatorButton  label={ '(X)' } onPress={()=>{console.log('(X)');}} />
            <CalculatorButton  label={ '%' } onPress={()=>{console.log('%');}} />
            <CalculatorButton  label={ 'AC' } onPress={()=>{builderNumber('AC');}} />
            <CalculatorButton  label={ 'DEL' } onPress={()=>{console.log('DEL');}} />
            <CalculatorButton  label={ '/' } onPress={()=>{builderNumber('/');}} />
        </View>
        <View style={style.row}>
            <CalculatorButton  iconString="function-variant" onPress={()=>{buildSimbolo('function');}} />
            <CalculatorButton  label={ '<>' } onPress={()=>{console.log('<>');}} />
            <CalculatorButton  label={ 'rn' } onPress={()=>{console.log('rn');}} />
            <CalculatorButton  label={ 'N°' } onPress={()=>{console.log('N°');}} />
            <CalculatorButton  label={ '-' } onPress={()=>{console.log('-');}} />
        </View>
        <View style={style.row}>
            <CalculatorButton  label={ 'X^2' } onPress={()=>{builderNumber('^');}} />
            <CalculatorButton  label={ '7' } onPress={()=>{builderNumber('7');}} />
            <CalculatorButton  label={ '8' } onPress={()=>{builderNumber('8');}} />
            <CalculatorButton  label={ '9' } onPress={()=>{builderNumber('9');}} />
            <CalculatorButton  label={ 'X' } onPress={()=>{builderNumber('x');}} />
        </View>
        <View style={style.row}>
            <CalculatorButton  label={ 'Z' } onPress={()=>{console.log('Z');}} />
            <CalculatorButton  label={ '4' } onPress={()=>{builderNumber('4');}} />
            <CalculatorButton  label={ '5' } onPress={()=>{builderNumber('5');}} />
            <CalculatorButton  label={ '6' } onPress={()=>{builderNumber('6');}} />
            <CalculatorButton  label={ 'J' } onPress={()=>{console.log('J');}} />
        </View>
        <View style={style.row}>
            <CalculatorButton  label={ 'Y' } onPress={()=>{console.log('Y');}} />
            <CalculatorButton  label={ '1' } onPress={()=>{builderNumber('1');}} />
            <CalculatorButton  label={ '2' } onPress={()=>{builderNumber('2');}} />
            <CalculatorButton  label={ '3' } onPress={()=>{builderNumber('3');}} />
            <CalculatorButton  label={ '+' } onPress={()=>{builderNumber('+');}} />
        </View>
        <View style={[style.row, style.marginBotton]}>
            <CalculatorButton  label={ 'PI' } onPress={()=>{console.log('P');}} />
            <CalculatorButton  label={ 'E' } onPress={()=>{console.log('E');}} />
            <CalculatorButton  label={ '0' } onPress={()=>{builderNumber('0');}} />
            <CalculatorButton  label={ ',' } onPress={()=>{console.log(',');}} />
            <CalculatorButton  label={ '=' } onPress={()=>{console.log('=');}} />
        </View>
    </View>
    );
};
