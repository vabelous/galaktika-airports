export const MaskPhone: MaskDTO = {
	mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
	showMask: false,
	keepCharPositions: true,
	guide: true,
	charPos: 4
};
