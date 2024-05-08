import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { RenderingSelectorComponent } from './components/rendering-selector/rendering-selector.component';
import { SetKeyComponent } from './components/set-key/set-key.component';
import { hasKeyGuard } from './guards/has-key.guard';
import { noKeyGuard } from './guards/no-key.guard';

const routes: Routes = [
  { path: 'set-key', component: SetKeyComponent, canActivate: [noKeyGuard] },
  {
    path: '',
    component: RenderingSelectorComponent,
    canActivate: [hasKeyGuard],
  },
  {
    path: 'csr',
    loadChildren: () =>
      import('./modules/clerk-csr/clerk-csr.module').then(
        (m) => m.ClerkCsrModule
      ),
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
