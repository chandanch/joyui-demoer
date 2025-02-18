import React from 'react';
import Grid from '@mui/joy/Grid';

import Table from '@mui/joy/Table';
import { CombinedPlanReport } from './CombinedPlanReport';

function PlannerReport() {
	return (
		<Grid
			container
			spacing={2}
			sx={{ display: 'flex', flexDirection: 'row' }}
		>
			<Grid xs={6}>
				<Table aria-label="basic table">
					<thead>
						<tr>
							<th style={{ width: '40%' }}>Filament</th>
							<th>Growth Sprout</th>
							<th>Deviation</th>
							<th>Distribution</th>
							<th>Linear Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Tactical</td>
							<td>159</td>
							<td>6</td>
							<td>24</td>
							<td>4</td>
						</tr>
						<tr>
							<td>Teciet Mean</td>
							<td>237</td>
							<td>9</td>
							<td>37</td>
							<td>4.3</td>
						</tr>
						<tr>
							<td>Synopsis</td>
							<td>262</td>
							<td>16</td>
							<td>24</td>
							<td>6</td>
						</tr>
						<tr>
							<td>Board Members</td>
							<td>305</td>
							<td>3.7</td>
							<td>67</td>
							<td>4.3</td>
						</tr>
						<tr>
							<td>Planning Grouping</td>
							<td>356</td>
							<td>16</td>
							<td>49</td>
							<td>3.9</td>
						</tr>
					</tbody>
				</Table>
			</Grid>
			<Grid xs={6}>
				<CombinedPlanReport />
			</Grid>
		</Grid>
	);
}

export default PlannerReport;
