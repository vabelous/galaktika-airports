/**
 *
 * Интерфейс Маски поля ввода
 *
 * @param	mask 							// Массив строк или регулярных выражений (не обязательное свойство)
 * @param guide 						// Показать скрыть placeholder (не обязательное свойство)
 * @param placeholderChar 	// Placeholder (не обязательное свойство)
 * @param keepCharPositions // Смещать позиции при удалении (не обязательное свойство)
 * @param pipe 							// Фильтр (не обязательное свойство)
 * @param showMask 					// Показать / скрыть маску (не обязательное свойство)
 *
 */
declare interface MaskDTO {
	mask?: Array<string | RegExp>;
	guide?: boolean;
	placeholderChar?: string;
	keepCharPositions?: boolean;
	pipe?: any;
	showMask?: boolean;
	charPos?: number;
}
