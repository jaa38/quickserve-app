import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type Props = {
  name: string;
  onPress: () => void;
};

const ServiceCard = React.memo(({ name, onPress }: Props) => {
  console.log('Rendering:', name);

  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 16 }}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
});

export default ServiceCard;
