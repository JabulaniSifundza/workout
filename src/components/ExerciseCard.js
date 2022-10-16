import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

export const ExerciseCard = (exercise) =>{
	
	return (
		<Link className="exercise-card" to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name} Loading="lazy"/>
			<Stack
			direction="row">
				<Button sx={{
					ml: '21px',
					color: '#FFFFFF',
					background: '#FFA9A9',
					fontSize: '14px',
					borderRadius: '20px',
					texTransform: 'Capitalize'
				}}>{exercise.bodyPart}</Button>

				<Button sx={{
					ml: '21px',
					color: '#FFFFFF',
					background: '#AA0000',
					fontSize: '14px',
					borderRadius: '20px',
					texTransform: 'capitalize'
				}}>{exercise.target}</Button>
			</Stack>

			<Typography 
			ml="21px"
			color="#000000"
			fontSize="23px"
			fontWeight="bold"
			mt="11px"
			pb="10px"
			texTransform= "capitalize">
			{exercise.name}
			</Typography>
		</Link>

	)
}