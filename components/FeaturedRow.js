import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {

    return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="font-bold text-lg" >{title}</Text>
				<ArrowRightIcon color="#00CCBB" />
			</View>

			<Text className="text-xs text-gray-500 px-4">{description}</Text>

			<ScrollView
			horizontal
			contentContainerStyle={{
				paddingHorizontal: 15
			}}
			showsHorizontalScrollIndicator={false}
			className="pt-4"
			>
				{/* Restaurant Cards */}
				<RestaurantCard 
					id={123}
					imgUrl="https://links.papareact.com/wru"
					title="Sushi zushi"
					rating={4}
					genre="Japanese"
					address="123 Main st"
					shot_description="Sushi is good"
					dishes={[]}
					long={20}
					lat={11}
				/>
				<RestaurantCard 
					id={123}
					imgUrl="https://links.papareact.com/wru"
					title="Sushi zushi"
					rating={4}
					genre="Japanese"
					address="123 Main st"
					shot_description="Sushi is good"
					dishes={[]}
					long={20}
					lat={11}
				/>

			</ScrollView>
		</View>
    )
  
}

export default FeaturedRow