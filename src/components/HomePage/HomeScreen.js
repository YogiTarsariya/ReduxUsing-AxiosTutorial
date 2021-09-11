import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, Image } from 'react-native';
import { connect } from "react-redux";
import * as ProcessTypes from "../../common/constants/api/ProcessTypes";
import * as HomeScreenContainer from "../../common/containers/homescreen/HomeScreen";

const HomeScreen = props => {

     const [listOfRandomUser, setListOfRandomUser] = useState([]);

     // Call API
     useEffect(() => {
          props.fetchRandomUserApi()
     }, [])

     useEffect(() => {
		//RandomUser Response
		if (props.homescreen._fetchRandomUserProcess.status === ProcessTypes.SUCCESS) {
			//Success
			let userArray = []
			props.homescreen._fetchRandomUserProcess.data.results.map((userObject) => {
				userArray.push(userObject)
			})
			setListOfRandomUser(userArray)
			props.resetFetchRandomUserApi()
		}
		else if (props.homescreen._fetchRandomUserProcess.status === ProcessTypes.FAIL) {
               //Fail
			setListOfRandomUser([])
			props.resetFetchRandomUserApi()
		}
		
	}, [props.homescreen._fetchRandomUserProcess.status])

     const keyExtractor = (item, index) => index.toString();

     const renderUserCard = ({ item }) => {
		return (
			<View 
                    style={{ margin: 8, borderColor: 'red', borderRadius: 10, borderWidth: 1 }}>
				<View 
					style={{ flexDirection: 'row' }}>
					<Image 
						source={{ uri: item.picture.large }} 
						resizeMode={'contain'}
						style = {{height: 80, width: 80, margin: 5, borderRadius: 40, borderWidth: 1 }} />
					<View style={{ justifyContent: 'space-around' }}>
						<Text>
							{"Name:- " + item.name.title + " " + item.name.first + " " + item.name.last}
                    		</Text>
						<Text>
							{"Email:- " + item.email}
                    		</Text>
						<Text>
							{"Phone:- " + item.phone}
                    		</Text>
					</View>
				</View>
			</View>
		)
	}

	return (
          <View 
               style={{ flex: 1 }}>
               <FlatList
                    key={'_'}
				keyExtractor={keyExtractor}
                    data={listOfRandomUser}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    renderItem={({ item, index }) => renderUserCard({ item })} />
          </View>
     )
}

export default connect(HomeScreenContainer.mapStateToProps, HomeScreenContainer.mapDispatchToProps)(HomeScreen);