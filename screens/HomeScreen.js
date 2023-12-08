import { View, Text, Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	UserIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
    const navigation = useNavigation();

    {/*As soon as the screen mounts(it's visible) do something*/}
    useLayoutEffect(() => {
        {/*Hide the header to add a custom one*/}
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
	<SafeAreaView className="bg-white pt-5">

		{/* Header */}
		<View className="flex-row pb-3 items-center mx-4 space-x-2">
			<Image 
				source={{
					uri: 'https://links.papareact.com/wru',
				}}
				className="h-7 w-7 bg-gray-300 p-4 rounded-full"
			/>

			<View className="flex-1">
				<Text className="font-bold text-gray-400 text-xs"> Deliver Now!</Text>
				<Text className="font-bold text-xl"> Current Location
					<ChevronDownIcon size={20} color="#00CCBB" />
				</Text>
			</View>

			

			
		</View>

		{/* Search */}
		<View className="flex-row items-center space-x-2 pb-2 mx-4">
			<View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
				<MagnifyingGlassIcon size={20} color="gray" />
				<TextInput 
					placeholder='Restaurants and cuisines'
					keyboardType='default'
				/>
			</View>

			<AdjustmentsHorizontalIcon size={20} color="#00CCBB"/>
		</View>

		{/* Body */}
		<ScrollView 
			className="bg-gray-100"

		>
			{/* Categories */}
			<Categories />
			{/* Features */}
			<FeaturedRow 
				id="1"
				title="Featured"
				description="Paid placements from our partners"
			/> 
			<FeaturedRow 
				id="2"
				title="Tasty Discounts"
				description="Everyone has been enjoying these tasty discounts"
			/> 
			<FeaturedRow 
				id="3"
				title="Offers near you!"
				description="Why not support your local restaurant tonight!"
			/> 
		</ScrollView>

	</SafeAreaView>
  )
}

export default HomeScreen