import React, {useState} from 'react';
import { Text , View , StyleSheet, ScrollView} from 'react-native';
import BrowseDetail from '../components/BrowseDetail'
import BrowseByCategory from './BrowseByCategory';


const CategoryList = ()=> {
   const [category, setCategory] = useState ("")


    return ( 
        <View>
            <ScrollView
            horizontal={true}
            >
            <BrowseDetail
            title='Football'
            imageSource= {require('../Assets/football.jpg')}
            // category={title}
            // onPress={setCategory}
            />
              <BrowseDetail
            title='Comedy'
            imageSource= {require('../Assets/comedy.jpg')}
            />
              <BrowseDetail
            title='Venues'
            imageSource= {require('../Assets/stadiums.jpg')}
            />
              <BrowseDetail
            title='Basketball'
            imageSource= {require('../Assets/basektball.jpeg')}
            />
              <BrowseDetail
            title='Concerts'
            imageSource= {require('../Assets/concerts.jpeg')}
            />
              <BrowseDetail
            title='Theatre'
            imageSource= {require('../Assets/theatre.jpeg')}
            />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({ 

})

export default CategoryList