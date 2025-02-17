import React from 'react';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';

function ActionButton() {
	const buttonText = 'View Catalog Search';

	return (
		<Button variant="solid" fullWidth>
			{' '}
			{buttonText}{' '}
			<Chip color="primary" onClick={function () {}} variant="solid" />
		</Button>
	);
}

export default ActionButton;
