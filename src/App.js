import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';

import ActionButton from './components/ActionButton';
import ManageGrowthPlanner from './components/ManageGrowthPlanner';
import PdfViewer from './components/PdfViewer';

function App() {
	console.log(process.env.REACT_APP_DOC_URL);
	return (
		<CssVarsProvider>
			<h1> RGM Planner App</h1>
			<ActionButton />
			<br />

			<ManageGrowthPlanner />
			{/* <PdfViewer s3PresignedUrl={process.env.REACT_APP_DOC_URL} /> */}
		</CssVarsProvider>
	);
}

export default App;
