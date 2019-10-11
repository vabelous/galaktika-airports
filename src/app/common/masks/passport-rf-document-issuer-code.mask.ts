export const MaskPassportRFDocumentIssuerCode: MaskDTO = {
	mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
	showMask: false,
	keepCharPositions: true,
	guide: true,
	charPos: 0
};
