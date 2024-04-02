/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, style } from '../../config/theme/app-theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    label?: String,
    iconString?:string,
    onPress: () => void,
}

export const CalculatorButton = ({label = '',iconString = '',onPress}:Props) => {
    const textButton = () =>{
        if (iconString !== ''){
            return <Icon name={iconString} size={30} color={colors.color} />;
        } else if (label !== '') {
            return <Text  style = {[style.buttonText]}>{label}</Text>;
        }
    };

    return (
    <Pressable style={({pressed})=>({
        ...style.button,
        backgroundColor: (pressed) ? colors.color : colors.colorBotton,
        color: (pressed) ? colors.colorBotton : colors.color,
        })}
        onPress={()=>onPress()}
        >
        {textButton()}
    </Pressable>
  );
};
