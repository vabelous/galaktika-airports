import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './authentication/authentication.module';
import { I18nModule } from '@air-modules/i18n.module';
import { PagesModule } from './pages/pages.module';
import * as fromStore from '@air-common/state/index';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		I18nModule,
		PagesModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AuthenticationModule,
		StoreModule.forRoot(fromStore.reducers, {
		}),
		EffectsModule.forRoot(fromStore.effects),
		StoreRouterConnectingModule.forRoot({
			stateKey: 'router' // name of reducer key
		}),
		!environment.production
			? StoreDevtoolsModule.instrument({maxAge: 50})
			: [],
	],
	providers: [],
	bootstrap: [AppComponent]
	})
export class AppModule { }
