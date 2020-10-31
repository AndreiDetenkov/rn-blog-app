import React from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} onError={(error) => console.error(error)} />
    );
  }

  return (
    <View>
      <Text>app</Text>
    </View>
  );
}
