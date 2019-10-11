declare interface MaskDTO {
	mask: (string | RegExp)[];
	showMask?: boolean;
	keepCharPositions?: boolean;
	guide?: boolean;
	charPos?: number;
}
