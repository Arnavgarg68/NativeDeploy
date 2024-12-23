import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Button,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
const App = () => {
  const [val, setVal] = useState(0);
  function chn() {
    setVal((pre) => pre + 1);
  }
  return (
    <View style={styles.main}>
    <View style={{marginTop:50}}>
      <Text style={styles.paragraph}>Push up counter</Text>
      <Text style={styles.paragraph}>count: {val}</Text>
    </View>
      <TouchableHighlight style={styles.pushBtn} onPress={chn}>
        <Text style={{textAlign:"center",fontSize:30,color:"white"}}>Push</Text>
      </TouchableHighlight>
      <Button title="reset" onPress={() => setVal(0)} />
      <StatusBar hidden={false} />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"space-between"
  },
  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pushBtn: {
    height: 200,
    width:200,
    borderRadius:"50%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue"
  },
});

export default App;
