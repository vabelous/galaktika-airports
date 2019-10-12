import { NgModule } from '@angular/core';
import { FormatPhonePipe } from '@air-pipes/format-phone.pipe';
import { FormatPricePipe } from '@air-pipes/format-price.pipe';
import { HighlightPipe } from '@air-pipes/highlight.pipe';
import { FullTextSearchPipe } from '@air-pipes/full-text-search.pipe';
import { OderByPipe } from '@air-pipes/oder-by.pipe';

@NgModule({
	declarations: [
		FormatPhonePipe,
		FormatPricePipe,
		HighlightPipe,
		FullTextSearchPipe,
		OderByPipe,
	],
	exports: [
		FormatPhonePipe,
		FormatPricePipe,
		HighlightPipe,
		FullTextSearchPipe,
		OderByPipe,

	]
})
export class CommonPipeModule { }
