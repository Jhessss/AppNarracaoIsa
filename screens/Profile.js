
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	Image,
	Switch,
} from 'react-native';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';

import { getAuth } from 'firebase/auth';
import { ref, update, onValue } from 'firebase/database';
import db from '../config';

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
	'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			isEnabled: false,
			light_theme: true,
			profile_image: '',
			name: '',
		};
	}



	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
		this.fetchUser();
	}

	async fetchUser() {
		let  name, image;
		const auth = getAuth();
		const userId = auth.currentUser.uid;

	
	render() {
		if (this.state.fontsLoaded) {
			SplashScreen.hideAsync();
			return (
				<View>
					<SafeAreaView style={styles.droidSafeArea} />
					<View style={styles.appTitle}>
						<View style={styles.appIcon}>
							<Image
								source={require('../assets/logo.png')}
								style={styles.iconImage}></Image>
						</View>
						<View style={styles.appTitleTextContainer}>
							<Text>
								Storytelling App
							</Text>
						</View>
					</View>
					<View style={styles.screenContainer}>
						<View style={styles.profileImageContainer}>
							<Image
								source={require('../assets/profile_img.png')}
								style={styles.profileImage}></Image>
							<Text>
								{this.state.name}
							</Text>
						</View>
					
						<View style={{ flex: 0.3 }} />
					</View>
					<View style={{ flex: 0.08 }} />
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#15193c',
	},
	containerLight: {
		flex: 1,
		backgroundColor: 'white',
	},
	droidSafeArea: {
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	appTitle: {
		flex: 0.07,
		flexDirection: 'row',
	},
	appIcon: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: 'center',
	},
	appTitleText: {
		color: 'white',
		fontSize: RFValue(28),
		fontFamily: 'Bubblegum-Sans',
	},
	appTitleTextLight: {
		color: 'black',
		fontSize: RFValue(28),
		fontFamily: 'Bubblegum-Sans',
	},
	screenContainer: {
		flex: 0.85,
	},
	profileImageContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileImage: {
		width: RFValue(140),
		height: RFValue(140),
		borderRadius: RFValue(70),
	},
	nameText: {
		color: 'white',
		fontSize: RFValue(40),
		fontFamily: 'Bubblegum-Sans',
		marginTop: RFValue(10),
	},
	nameTextLight: {
		color: 'black',
		fontSize: RFValue(40),
		fontFamily: 'Bubblegum-Sans',
		marginTop: RFValue(10),
	},
	themeContainer: {
		flex: 0.2,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: RFValue(20),
	},
	themeText: {
		color: 'white',
		fontSize: RFValue(30),
		fontFamily: 'Bubblegum-Sans',
		marginRight: RFValue(15),
	},
	themeTextLight: {
		color: 'black',
		fontSize: RFValue(30),
		fontFamily: 'Bubblegum-Sans',
		marginRight: RFValue(15),
	},
});
