import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Chip from '@mui/joy/Chip';

function ManageGrowthPlanner() {
	return (
		<Sheet
			variant="outlined"
			sx={{
				width: '80%',
				mx: 'auto', // margin left & right
				my: 4, // margin top & bottom
				py: 3, // padding top & bottom
				px: 2, // padding left & right
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				borderRadius: 'sm',
				boxShadow: 'md',
			}}
		>
			<div>
				<Typography
					level="h2"
					sx={{ textAlign: 'center' }}
					component={'h2'}
				>
					Create Growth Planner
				</Typography>
			</div>
			<FormControl>
				<FormLabel>Growth Plan Name</FormLabel>
				<Input
					// html input attribute
					name="planName"
					type="text"
					placeholder="Enter Plan Name"
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Plan Categorical Summary</FormLabel>
				<Input
					name="categoricalSummary"
					type="text"
					placeholder="Categorical Summary"
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Field Observations </FormLabel>
				<Input
					type="text"
					name="observation"
					placeholder="Add observations"
				/>
			</FormControl>
			<Button sx={{ mt: 1 /* margin top */ }}>Create Plan!</Button>
			<Typography
				endDecorator={<Link href="/upload">Link Datasets here</Link>}
				fontSize="sm"
				sx={{ alignSelf: 'center' }}
			>
				<Chip color="primary" variant="solid">
					Custom Datasets?
				</Chip>
			</Typography>
		</Sheet>
	);
}

export default ManageGrowthPlanner;
