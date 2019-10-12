import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const config: ExtraOptions = {
	useHash: true,
	enableTracing: false
};

const routes: Routes = [
	{
		path: 'authentication',
		loadChildren: () => import('./authentication/authentication.module').then(loaded => loaded.AuthenticationModule)
	},
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module').then(loaded => loaded.PagesModule)
	},
	{
		path: '',
		redirectTo: 'authentication/login',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'pages/error-404'
	}

];

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(routes,  config)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
