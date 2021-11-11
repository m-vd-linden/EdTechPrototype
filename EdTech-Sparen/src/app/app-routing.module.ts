import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: WrapperComponent,
    children: [{
      path: '',
      loadChildren: () => import('../app/components/wrapper/wrapper.module').then(m => m.WrapperModule)
    }],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
