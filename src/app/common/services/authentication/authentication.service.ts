import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RestAPIService } from '@air-services/rest-api';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

	private baseUrl: string;

	constructor(
		private http: HttpClient,
		private restAPIService: RestAPIService
	) { this.baseUrl = '/api/authentication'; }

	/**
	 *
	 * Авторизация пользователя
	 *
	 * @param payload // RequestLoginParametrsDTO
	 *
	 */
	login(payload: RequestLoginParametrsDTO): Observable<MetaLoginDTO> {
		return this.http.post<MetaLoginDTO>(`${this.baseUrl}/login`, payload , {
			headers: this.restAPIService.getHttpHeadersFromObject({HideSpinner: 'true'}),
		});
	}

	/**
	 *
	 * Регистрация пользователя
	 *
	 * @param payload // RequestRegistrationParametrsDTO
	 *
	 */
	registration(payload: RequestRegistrationParametrsDTO): Observable<MetaRegistrationDTO> {
		return this.http.post<MetaRegistrationDTO>(`${this.baseUrl}/registration`, payload , {
			headers: this.restAPIService.getHttpHeadersFromObject({HideSpinner: 'true'}),
		});
	}

	/**
	 *
	 * Выход пользователя
	 *
	 */
	logout(): Observable<HttpResponseBase> {
		return this.http.post<HttpResponseBase>(`${this.baseUrl}/logout`, {}, {
			headers: this.restAPIService.getHttpHeadersFromObject({HideSpinner: 'true'}),
			observe: 'response',
			responseType: 'json'
		});
	}

}
