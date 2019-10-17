/**
 *
 *  Параметрв для передачи в метод
 * 	Login
 *
 * @param username        	// Имя пользователя
 * @param password    			// Пароль пользователя
 *
 */
declare interface RequestLoginParametrsDTO {
	username: string;
	password: string;
}

/**
 *
 *  Метаданные возвращаемые методом
 * 	Login
 *
 * @param access_token        	// Access token
 * @param refresh_token    			// Refresh token
 *
 */
declare interface MetaLoginDTO {
	access_token: string;
	refresh_token: string;
}

/**
 *
 *  Параметрв для передачи в метод
 * 	Registration
 *
 * @param username        	// Имя пользователя
 * @param password    			// Пароль пользователя
 *
 */
declare interface RequestRegistrationParametrsDTO {
	username: string;
	password: string;
}

/**
 *
 *  Метаданные возвращаемые методом
 * 	Registration
 *
 * @param access_token        	// Access token
 * @param refresh_token    			// Refresh token
 *
 */
declare interface MetaRegistrationDTO {
	access_token: string;
	refresh_token: string;
}
