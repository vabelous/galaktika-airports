/**
 *
 * Интерфей класса Аэропорт
 *
 * @param	id 						// Уникальный ключ записи в ХД
 * @param title 				// Наименование
 * @param adress 				// Адресс
 * @param isActive 			// Действующий / закрытый
 *
 */
declare interface AirportDTO {
	id: number;
	title: string;
	adress: AdressDTO;
	isActive: boolean;
}

declare interface AirportsDTO extends Array<AirportDTO> {}
