import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SignComponent } from './authentication/sign/sign.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { SingleMissionComponent } from './single-mission/single-mission.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreationComponent } from './missions/creation/creation.component';
import { UserCreationComponent } from './users/user-creation/user-creation.component';
import { UserProfilComponent } from './users/user-profil/user-profil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/dashboard', canActivate: [AuthGuardService], component: AdminDashboardComponent },
  { path: 'mission/creation', canActivate: [AuthGuardService], component: CreationComponent },
  { path: 'user/creation', component: UserCreationComponent },
  { path: 'user/profil', component: UserProfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign/:paramSign', component: SignComponent },
  { path: 'mission/:id', component: SingleMissionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
