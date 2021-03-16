import React from 'react';
import { Spinner, Button, Icon } from 'native-base';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { history } from '../../store/actions/authActions';
//Styles
import { AButton, ButtonText } from './styles';
const UserProfile = ({ navigation }) => {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.authReducer.profile);
	const loading = useSelector((state) => state.authReducer.loading);
	console.error(profile);
	if (loading) return <Spinner />;
	const handle = () => {
		dispatch(history());
		navigation.navigate('OrderHistory');
	};

	return (
		<>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerContent}>
						<Image
							style={styles.avatar}
							source={{
								uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
							}}
						/>

						<Text style={styles.name}>
							{profile.firstName} {profile.lastName}{' '}
						</Text>
						<Text style={styles.userInfo}>{profile.email} </Text>
						<Text style={styles.userInfo}>Florida </Text>
						<Button
							iconLeft
							light
							onPress={() => navigation.navigate('Signup')}
						>
							<Icon name="cog" />
							<Text>Edit </Text>
						</Button>
					</View>
				</View>

				<View style={styles.body}>
					<View style={styles.item}>
						<View style={styles.iconContent}>
							<Image
								style={styles.icon}
								source={{
									uri:
										'https://thumbs.dreamstime.com/b/untitled-passport-vector-icon-145316830.jpg',
								}}
							/>
						</View>
						<View style={styles.infoContent}>
							<Text style={styles.info}>{profile.passport}</Text>
						</View>
					</View>
					<AButton full light onPress={handle}>
						<ButtonText>Order History</ButtonText>
					</AButton>
				</View>
			</View>
		</>
	);
};

export default UserProfile;

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#DCDCDC',
	},
	headerContent: {
		padding: 30,
		alignItems: 'center',
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: 'white',
		marginBottom: 10,
	},
	name: {
		fontSize: 22,
		color: '#000000',
		fontWeight: '600',
	},
	userInfo: {
		fontSize: 16,
		color: '#778899',
		fontWeight: '600',
	},
	body: {
		backgroundColor: '#778899',
		height: 500,
		alignItems: 'center',
	},
	item: {
		flexDirection: 'row',
	},
	infoContent: {
		flex: 1,
		alignItems: 'flex-start',
		paddingLeft: 5,
	},
	iconContent: {
		flex: 1,
		alignItems: 'flex-end',
		paddingRight: 5,
	},
	icon: {
		width: 30,
		height: 30,
		marginTop: 20,
	},
	info: {
		fontSize: 18,
		marginTop: 20,
		color: '#FFFFFF',
	},
});
