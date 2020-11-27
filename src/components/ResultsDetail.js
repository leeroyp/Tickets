import React from "react";
import { View, Image, Text, StyleSheet} from "react-native";




const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.viewStyle}>
        <View style={ styles.view1}>
        <Image style={styles.Image} style={styles.image} source={{uri: result._embedded.attractions[0].images[5].url}}/>
        </View>
        <View style={styles.view2}>
        <Text style={styles.text1}>{result.name}</Text>
        <Text style={styles.text2}>{result.name}</Text>
        <Text>Sunday, Nov 23 , 2020</Text>
        </View>
        <View style={styles.view3}>
       
        </View>
        </View>
)
}


const styles= StyleSheet.create({
viewStyle:{
    flexDirection: 'row'  
}, 
view1:{
  alignItems:'flex-start',
  padding: 2

},
view2:{
  paddingLeft:10
},
view3:{
  alignItems:'flex-end',
  padding: 2
},
image: {
    width: 75,
    height:75,
    borderRadius: 4,
    marginBottom:5
},
text1:{
    color: "blue", 
    fontWeight: "bold",
    fontSize: 12
},
text2:{
    fontWeight: "bold",
    fontSize:10

},

})

export default ResultsDetail;
