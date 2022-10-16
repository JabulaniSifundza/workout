import React from 'react';
import {Stack} from '@mui/material';
import {InfinitySpin} from 'react-loader-spinner';

export const Loader = ()=>{
	return (
		<Stack 
		direction="row"
		alignItems="center"
		justifyContent="center"
		width="100%"
		>
			<InfinitySpin color="gray"/>

		</Stack>
	)
}