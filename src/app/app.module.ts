import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  EventsListComponent,
  EventService,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventRouteActivator,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  
} from './events/index';
import { DurationPipe } from './events/shared/duration.pipe'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
// import { CollapsibleWellComponent } from './common/collapsible-well.component';
// import { TOASTR_TOKEN,Toastr } from './common/toastr.service';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent,SimpleModalComponent, ModalTriggerDirective} from './common/index';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

declare let toastr : Toastr;
declare let jQuery: Object;
// let toastr:Toastr = window['toastr'];
// let jQuery = window['$'];
 // import { EventThumbnailComponent } from './events/event-thumbnail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    ModalTriggerDirective,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe

    // EventThumbnailComponent
  ],
  providers: [EventService,

    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue:jQuery},EventRouteActivator,EventListResolver,AuthService,
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