import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { ArticleComponent } from './article/article.component'

const routes: Routes = [
  { path: "", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "home", component: HomeComponent},
  { path: "article", component: ArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
