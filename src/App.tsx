import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors, style} from './config/theme/app-theme';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';
import {PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={style.background}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.colorPrimario}
        />
        <CalculatorScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
