import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'

export default class HeaderLogo extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.namaGambar}</Text>
                <Image
          style={styles.logo}
          source={{
            uri: this.props.namaGambar}}
        />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  