import React from 'react';
import { Button, View } from 'react-native';
import { useAuth } from '../../hooks/auth';

interface ApiData {
  name: string;
  email: string;
  password: string;
}
const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
