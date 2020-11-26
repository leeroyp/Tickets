import React from 'react'
import { Text, View, StyleSheet,Image, Button} from "react-native"



const BrowseScreenDisplay = ({suggest}) =>{

    return (
        <View style={styles.viewStyle}>
            <View>
            <Image style={styles.Image} style={styles.image} source={{uri: result._embedded.attractions[0].images[5].url}}/>
            </View>
            <View>
            <Text style={styles.text1}>{result.name}</Text>
            <Text style={styles.text2}>{result.name}</Text>
            <Text>Sunday, Nov 23 , 2020</Text>
            </View>
            <View>
            <Button title="Find"/>
            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    viewStyle:{
        flexDirection: 'row'  
    }, 
    image: {
        width: 75,
        height:75,
        borderRadius: 4,
        marginBottom:5
    },
    text1:{
        color: "blue", 
        fontWeight: "bold"
    },
    text2:{
        fontWeight: "bold"
    },

})

export default BrowseScreenDisplay