/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { style } from '../../config/theme/app-theme';

interface InterfaceModal {
  Visible:boolean,
  Press : ()=>any,
}

export const ModalProceso = ( {Visible,Press}:InterfaceModal) => {
  return (
    <Modal animationType="slide" transparent={false} visible={Visible}>
        <View style= {style.background}>
            <View style = {style.barra}>
              <Text style={style.barraTexto}>PROCESO</Text>
              <Pressable onPress={()=>Press()}><Text style={style.barraTexto}>X</Text></Pressable>
            </View>
            <View style={style.TextResultProceso}>
              <Text style={style.textResult}>Aplica la regla de la potencia</Text>
              <Text style={style.textResult}>Reemplaza las integrales ya resuelta</Text>
              <Text style={style.textResult}>El problema esta Resuelto</Text>
            </View>
        </View>
    </Modal>
  );
};


