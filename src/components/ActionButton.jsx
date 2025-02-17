import React from 'react';
import Button from '@mui/joy/Button';

function ActionButton() {
	const buttonText = 'View Catalog Search';

	return (
		<Button variant="solid" fullWidth>
			{' '}
			{buttonText}{' '}
		</Button>
	);
}

export default ActionButton;
