import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GiftsComponent } from './gifts/gifts.component';


const routes: Routes = [

   {path:'',component:HomeComponent},
   {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent},
   {path:'gifts',component:GiftsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
