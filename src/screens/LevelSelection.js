import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const LevelSelection = ({ onCancel, isVisible, onLevelSelected }) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Selecione o Nível</Text>
        <TouchableOpacity
          style={[styles.button, styles.bgVeryEasy]}
          onPress={() => onLevelSelected(0.05)}
        >
          <Text style={styles.buttonLabel}>Muito Fácil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bgEasy]}
          onPress={() => onLevelSelected(0.1)}
        >
          <Text style={styles.buttonLabel}>Fácil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bgNormal]}
          onPress={() => onLevelSelected(0.15)}
        >
          <Text style={styles.buttonLabel}>Intermediário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bgHard]}
          onPress={() => onLevelSelected(0.2)}
        >
          <Text style={styles.buttonLabel}>Difícil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bgVeryHard]}
          onPress={() => onLevelSelected(0.25)}
        >
          <Text style={styles.buttonLabel}>Muito Difícil</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default LevelSelection;

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgVeryEasy: {
    backgroundColor: '#add8e6',
    width: 150,
    alignItems: 'center',
  },
  bgEasy: {
    backgroundColor: '#49B65D',
    width: 150,
    alignItems: 'center',
  },
  bgNormal: {
    backgroundColor: '#ffa500',
    width: 150,
    alignItems: 'center',
  },
  bgHard: {
    backgroundColor: '#ff0000',
    width: 150,
    alignItems: 'center',
  },
  bgVeryHard: {
    backgroundColor: '#9400d3',
    width: 150,
    alignItems: 'center',
  },
});
