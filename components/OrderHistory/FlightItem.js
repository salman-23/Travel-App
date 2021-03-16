import React from 'react';
import { Image } from 'react-native';
import { ListItem } from 'native-base';
import { ItemStyled } from './styles';

const FlightItem = ({ flight }) => {
	return (
		<ListItem>
			<Image
				style={{ width: 100, height: 100 }}
				source={{
					uri:
						'https://pbs.twimg.com/profile_images/895796663973023744/90KWQHzz.jpg',
				}}
			/>
			<ItemStyled>{flight.name}</ItemStyled>
		</ListItem>
	);
};

export default FlightItem;
