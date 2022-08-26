import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Field from './Field';

const MineField = ({ board }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return (
      <View key={r} style={{ flexDirection: 'row' }}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

export default MineField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
});
