import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: '', component: PostsComponent },
  // { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostDetailComponent},
  { path: 'newpost', component: NewPostComponent, canActivate: [AuthenticationGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
