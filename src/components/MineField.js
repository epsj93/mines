import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Field from './Field';

const MineField = ({ board, onOpenField, onSelectField }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => onOpenField(r, c)}
          onSelect={(e) => onSelectField(r, c)}
        />
      );
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
