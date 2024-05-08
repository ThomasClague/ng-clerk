import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';
import { CLERK_INITIALIZER } from 'projects/ng-clerk/src/lib/initializer';
import { CLERK_PUBLISHABLE_KEY } from 'projects/ng-clerk/src/lib/injectors/injection-token';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetKeyComponent } from './components/set-key/set-key.component';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HighlightModule, SetKeyComponent],
  providers: [
    {
      provide: CLERK_PUBLISHABLE_KEY,
      // In real application, replace useFactory with useValue and pass your publishable key
      // useValue: '',
      useFactory: (configService: ConfigService) => configService.getConfig(),
      deps: [ConfigService],
    },
    CLERK_INITIALIZER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
