import React, { useEffect, useState } from 'react';

const PdfViewer = ({ s3PresignedUrl }) => {
	const [pdfSrc, setPdfSrc] = useState('');

	useEffect(() => {
		let blobUrl = null; // To store the generated Blob URL

		const loadPdf = async () => {
			try {
				const response = await fetch(s3PresignedUrl, { mode: 'cors' });
				if (!response.ok) throw new Error('Failed to download PDF');

				const blob = await response.blob();
				blobUrl = URL.createObjectURL(blob);

				setPdfSrc(blobUrl);
			} catch (error) {
				console.error('Error loading PDF:', error);
			}
		};

		loadPdf();

		// Cleanup function to revoke Blob URL when component unmounts or URL changes
		return () => {
			if (blobUrl) {
				URL.revokeObjectURL(blobUrl);
			}
		};
	}, [s3PresignedUrl]); // ✅ Only depends on `s3PresignedUrl`, NOT `pdfSrc`

	return (
		<div>
			{pdfSrc ? (
				<embed
					src={pdfSrc}
					width="100%"
					height="600px"
					type="application/pdf"
				/>
			) : (
				<p>Loading PDF...</p>
			)}
		</div>
	);
};

export default PdfViewer;
