import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { enableProdMode } from '@angular/core';

// Plugin
import { ChartsModule } from 'ng2-charts';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';

// Service
import { CheckLoginService } from 'app/service/common/check-login.service';

// Component
import { AppComponent } from './app.component';
import { NavComponent } from './container/nav/nav.component';
import { HomeComponent } from './container/home/home.component';
import { TeacherComponent } from './container/teacher/teacher.component';
import { ChildComponent } from './container/child/child.component';
import { StoreComponent } from './container/store/store.component';
import { RecordComponent } from './container/record/record.component';
import { TimerComponent } from './container/timer/timer.component';
import { LogComponent } from './container/log/log.component';
import { LoginComponent } from './container/login/login.component';
import { CarouselComponent } from './container/carousel/carousel.component';
import { AdminComponent } from './container/admin/admin.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ChildComponent,
    StoreComponent,
    RecordComponent,
    TimerComponent,
    LogComponent,
    LoginComponent,
    TeacherComponent,
    CarouselComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot({
      // buttonsStyling: false,
      // customClass: 'modal-content',
      // confirmButtonClass: 'btn btn-lg btn-primary',
      // cancelButtonClass: 'btn btn-lg'
    }),
    NgxPaginationModule
  ],
  providers: [CheckLoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
