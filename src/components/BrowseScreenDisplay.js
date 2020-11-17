import React from 'react'
import { Text, View, StyleSheet,Image} from "react-native"



const BrowseScreenDisplay = ({suggest}) =>{

    return (
        <View style={styles.viewStyle}>
            <Image style={styles.Image}/>
            <View>
            <Text style={styles.text1}>{suggest.date}</Text>
            <Text style={styles.text2}>{suggest.name}</Text>
            <Text>{suggest.location}</Text>
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