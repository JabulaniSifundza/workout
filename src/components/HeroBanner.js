import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import BannerHeroImg from '../assets/images/banner.png';

const HeroBanner = ()=>{
	return (
		<Box sx={{
			mt: {lg: '212px', xs: '70px'},
			ml: {sm: '50px'}
		}} position="relative" p="20px">
			<Typography color="#FF2625" 
			fontWeight="600"
			fontSize="26px">
				Fitness Club	
			</Typography>
			<Typography 
			fontWeight="700"
			sx={{
				fontSize: {lg: '44px', xs: '40px'}
			}}>
				Work, Sweat <br />
				REPEAT
			</Typography>
			<Typography 
			fontSize="22px"
			lineHeight="35px" mb={3}>
				View the most effective exercises
			</Typography>
			<Button variant="contained"
			color="error" href="#exercises" sx={{
				backgroundColor: "#FF2625",
				padding: "10px",
				borderRadius: '8px'
			}}>Explore Exercises</Button>

			<img src={BannerHeroImg} alt="Banner" className="hero-banner-img"/>
		</Box>
	)
}

export default HeroBanner;