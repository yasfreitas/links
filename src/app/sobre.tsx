import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sobre!!!</Text>

      <Image style={styles.imagens}
        source={require('../../assets/carinhosa.jpg')}/>

      <Link style={styles.btn} href={"/"}>Início</Link>
      <Link style={styles.btn} href={"/contatos"}>Contatos</Link>

      <StatusBar style="auto" />
    </View>
  );
}

