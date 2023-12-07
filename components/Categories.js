import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

export class Categories extends Component {
  render() {
    return (
      <ScrollView 
      contentContainerStyle={{
        paddingHorizontal: 15,
        padding: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
        {/* Category card */}
        <CategoryCard 
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/800px-Sushi_platter.jpg" 
          title="Sushi" 
        />
        <CategoryCard 
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" 
          title="Pizza" 
        />
        <CategoryCard 
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kebab.JPG/1200px-Kebab.JPG" 
          title="Kebab" 
        />
        <CategoryCard 
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/800px-Sushi_platter.jpg" 
          title="Sushi" 
        />
        <CategoryCard 
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" 
          title="Pizza" 
        />
        <CategoryCard 
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kebab.JPG/1200px-Kebab.JPG" 
          title="Kebab" 
        />
      </ScrollView>
    )
  }
}

export default Categories 