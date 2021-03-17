import React from 'react';
//Styling
import {
	HomeBackground,
	TopStyling,
	BottomStyling,
	ButtonStyled,
} from './styles';
//Components

const Home = ({ navigation }) => {
	return (
		<HomeBackground
			source={{
				uri:
					'https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80',
			}}
		>
			<TopStyling></TopStyling>
			<BottomStyling>
				<ButtonStyled onPress={() => navigation.navigate('FlightSearch')}>
					Take a look at our flights
				</ButtonStyled>
			</BottomStyling>
		</HomeBackground>
	);
};

export default Home;
