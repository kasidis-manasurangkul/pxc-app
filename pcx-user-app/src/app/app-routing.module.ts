import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';
import { LibraryComponent } from './pages/library/library.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: 'recommendation', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'settings', component: SettingsComponent},
    { path: 'recommendation', component: RecommendationComponent},
    { path: 'library', component: LibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
