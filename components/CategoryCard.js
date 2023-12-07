import { Text, TouchableOpacity, Image} from 'react-native'
import React, { Component } from 'react'

const CategoryCard = ( props ) => {
  const categoryItems = props.data.map((item, i) => (
        <TouchableOpacity key={i} className="relative mr-2">
          <Image 
            source={{
              uri: item.imgUrl
            }}
            className="h-20 w-20 rounded"
          />
          <Text className="absolute bottom-1 left-1 text-white font-bold">{item.title}</Text>
        </TouchableOpacity>
    ));

    return <>{categoryItems}</>
}

export default CategoryCard