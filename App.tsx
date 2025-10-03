import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterScreen from './src/screens/RegisterScreen';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RegisterScreen />
    </SafeAreaView>
  );
}

export default App;