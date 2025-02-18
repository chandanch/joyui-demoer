import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';

import ManageGrowthPlanner from './components/ManageGrowthPlanner';
import { Divider } from '@mui/joy';
// import PdfViewer from './components/PdfViewer';

function App() {
	return (
		<CssVarsProvider>
			<Typography
				level="h3"
				sx={{ textAlign: 'center' }}
				component={'h3'}
				color="primary"
			>
				RGM Planner App
			</Typography>
			<Divider orientation="horizontal" />
			<br />

			<br />

			<ManageGrowthPlanner />
			{/* <PdfViewer s3PresignedUrl={process.env.REACT_APP_DOC_URL} /> */}
		</CssVarsProvider>
	);
}

export default App;
