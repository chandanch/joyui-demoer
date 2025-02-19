import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';

import ManageGrowthPlanner from './components/ManageGrowthPlanner';
import { Divider } from '@mui/joy';
import PlannerReport from './components/reports/PlannerReport';
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

			<ManageGrowthPlanner />
			{/* <PdfViewer s3PresignedUrl={process.env.REACT_APP_DOC_URL} /> */}
			<Typography
				level="h4"
				sx={{ textAlign: 'center' }}
				component={'h4'}
				color="primary"
			>
				Planner Report
			</Typography>
			<PlannerReport />
		</CssVarsProvider>
	);
}

export default App;
