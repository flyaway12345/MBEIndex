import { Routes } from '@angular/router';
import { MbeIndexComponent } from './MBE index/mbe-index.component';

export const routes: Routes = [
  {path:'**', component: MbeIndexComponent}
];
