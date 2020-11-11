import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const CardDisplay = ({result}) => { 

    return (
        <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
        </Text>
   
      </Card>
    )
}

export default CardDisplay