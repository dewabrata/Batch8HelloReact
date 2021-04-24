import React, { Component } from 'react'
import { Text, View,Button ,StyleSheet,TextInput,Image} from 'react-native'
import HeaderLogo from './HeaderLogo'


export default class JuaracodingHome extends Component {


   constructor(props){
    super(props);
    this.state = {url:"http://"};
    
   }


    render() {
        return (
            <View style={styles.container}>
            <HeaderLogo namaGambar={this.state.url} namaSaya="dewa"/>
            
            
                <Text>Url Gambar</Text>
                <TextInput value={this.state.url} onChangeText ={(text)=>{this.setState({url:text})}}/>
            
                <Button
                      title="Get Image"
                      style={styles.bigBlue}
                      accessibilityLabel="Belajar Button"
                      onPress={()=>{
                        this.setState({url:"dewabrata"});
                      }}
                />
            </View>
            
            
        )
    }
}


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });
  
  