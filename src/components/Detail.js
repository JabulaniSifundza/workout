import React, {useState, useEffect} from 'react';

import {Typography, Stack, Button} from '@mui/material';
import BodyPartImage from '../assests/icons/body-part.png';
import TargetImage from '../assests/icons/target.png';
import EquipmentImage from '../assests/icons/equipment.png';

const Detail = ({exerciseDetail})=>{
	const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail
	const extraDetail = [
		{
			icon: BodyPartImage,
			name: bodyPart
		},
		{
			icon: TargetImage,
			name: target
		},
		{
			icon: EquipmentImage,
			name: equipment
		}

	]
	return (
		<Stack gap="60px"
		sx={{flexDirection:{lg: 'row', p: '20px', alignItems: 'center'}}}>
			<img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
			<Stack
			sx={{
				gap:{lg: '35px', xs: '20px'}
			}}>
			<Typography variant="h3">
			{name}
			</Typography>
			<Typography variant="h6">
				{name} is great for targeting your {target}.
			</Typography>
			{
				extraDetail.map((item)=> (
					<Stack key={item.name}
					direction="row"
					gap="24px"
					alignItems="center">
					<Button sx={{
						background: '#FFF2DB',
						borderRadius: '50%',
						width: '100px',
						height: '100px'
					}}>
						<img src={item.icon} alt={bodyPart} style={{
							width: '50px',
							height: '50px'
						}}/>
					</Button>
					<Typography variant="h5" textTransform='capitalize'>
						{item.name}
					</Typography>
					</Stack>
				))
			}
			
			</Stack>
		</Stack>
	)
}

export default Detail;