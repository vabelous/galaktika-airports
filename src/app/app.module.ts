import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AuthenticationModule } from './authentication/authentication.module';
import { I18nModule } from '@air-modules/i18n.module';
import { PagesModule } from './pages/pages.module';


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
		// StoreModule.forRoot(reducers, {
		// 	metaReducers,
		// 	runtimeChecks: {
		// 		strictStateImmutability: true,
		// 		strictActionImmutability: true
		// 	}
		// })
	],
	providers: [],
	bootstrap: [AppComponent]
	})
export class AppModule { }
