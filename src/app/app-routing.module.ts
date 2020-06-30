import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConversionFormComponent} from './views/conversion-form/conversion-form.component';
import {ConversionHistoryComponent} from './views/conversion-history/conversion-history.component';

const routes: Routes = [
  { path: 'form', component: ConversionFormComponent },
  { path: 'history', component: ConversionHistoryComponent },
  { path: '**', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
