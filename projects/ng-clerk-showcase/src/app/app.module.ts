import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { NgClerkSampleComponent } from '../../../ng-clerk/src/lib/sample.component';

import { CLERK_PUBLISHABLE_KEY } from 'projects/ng-clerk/src/lib/config/injection-token';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HighlightModule, NgClerkSampleComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: async () => await import('highlight.js'),
      },
    },
    { provide: CLERK_PUBLISHABLE_KEY, useValue: 'mykey' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
