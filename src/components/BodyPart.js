import React from 'react';
import {Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart})=>{
	return (
		<Stack 
		onClick={()=>{
			setBodyPart(item);
			window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
		}}
		type= "button"
		alignItems="center"
		justifyContent="center"
		className="bodyPart-card"
		sx={{
			borderTop: bodyPart === item ? '4px solid #FF2625': '',
			backgroundColor: '#FFF',
			borderBottomLeftRadius: '20px',
			cursor: 'pointer',
			gap: '48px',
			width: '270px',
			height: '280px'
		}}>

			<img src={Icon} alt="Dumbbell" style={{width: '40px', height: '40px'}}/>

			<Typography
			fontSize="24px"
			fontWeight="bold"
			color="#3A1212"
			textTransform="capitalize">
			{item}
			</Typography>

		</Stack>

	)

}

export default BodyPart;