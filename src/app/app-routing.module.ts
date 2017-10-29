import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './container/home/home.component';
import { ChildComponent } from './container/child/child.component';
import { StoreComponent } from './container/store/store.component';
import { TeacherComponent } from './container/teacher/teacher.component';
import { RecordComponent } from './container/record/record.component';
import { TimerComponent } from './container/timer/timer.component';
import { LogComponent } from './container/log/log.component';
import { LoginComponent } from './container/login/login.component';
import { CarouselComponent } from './container/carousel/carousel.component';
import { AdminComponent } from './container/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'child', component: ChildComponent },
  { path: 'store', component: StoreComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'record', component: RecordComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'log', component: LogComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
