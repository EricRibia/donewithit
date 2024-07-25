import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useState} from "react";

export default function App() {
  const [numberOfLines, setNumberOfLines] = useState(1)
  let x:string = 'eric';

  const updateNumberOfLines = () => {
    if(numberOfLines === 1){
      setNumberOfLines(10)
    }else{
      setNumberOfLines(1)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
      <Text onPress={()=>updateNumberOfLines()} numberOfLines={numberOfLines} style={styles.text}>Hello Eric, let us see how text is wrapped around here and why because the text is quite long btw, let us see how text is wrapped around here and why because the text is quite long btw, let us see how text is wrapped around here and why because the text is quite long btw</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer:{
    padding: 10
  },
  text:{
      padding: 10,
      borderWidth: 1,
      borderColor: 'rgba(157,157,157,0.56)',
      borderRadius: 8,
  }
});
