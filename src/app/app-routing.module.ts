import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { ArticleComponent } from './article/article.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  { path: "", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "home", component: HomeComponent},
  { path: "article/:id", component: ArticleComponent},
  { path: "userlist", component: UserListComponent},
  { path: "user/:id", component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
