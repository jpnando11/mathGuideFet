/* eslint-disable prettier/prettier */
import {useState} from 'react';

export const useCalculator = ()=>{
    const [number, setNumber] = useState('');
    const [icono, setIcono] = useState('');



    const builderNumber = (numberString:string)=>{
        if (numberString === 'AC') {
            setNumber('');
            setIcono('');
        } else {
            setNumber(number + numberString );
            console.log(numberString);
            if (numberString === '^') {
            }
        }
    };

    const buildSimbolo = (iconoString:string)=>{
        setIcono(iconoString);

    };

    return {
        number,
        icono,
        builderNumber,
        buildSimbolo,
    };
};
