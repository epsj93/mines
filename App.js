import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Iniciando o Mines!</Text>
        <Text>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}{' '}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})