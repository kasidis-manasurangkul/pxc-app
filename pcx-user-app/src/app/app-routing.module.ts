import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';

const routes: Routes = [
    { path: '', redirectTo: 'recommendation', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'recommendation', component: RecommendationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
