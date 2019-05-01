import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventService,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventRouteActivator,
  CreateEventComponent,
  EventListResolver
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';





 // import { EventThumbnailComponent } from './events/event-thumbnail.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component

    // EventThumbnailComponent
  ],
  providers: [EventService,ToastrService,EventRouteActivator,EventListResolver,AuthService,
  {provide:'canDeactivateCreateEvent', useValue: checkDirtyState
  }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
  return window.confirm('Do you want to continue?')
  return true
}