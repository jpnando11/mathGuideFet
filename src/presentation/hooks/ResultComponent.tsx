/* eslint-disable prettier/prettier */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../config/theme/app-theme';

export const ResultComponent = () => {
    const Componet = (icono:string)=>{
        return <Icon name={icono} size={80} color={colors.color}/>;
    };
    return {
        Componet,
    };
};

