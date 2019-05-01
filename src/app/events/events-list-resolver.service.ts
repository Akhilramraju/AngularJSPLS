import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service' 
import { map } from 'rxjs/operators'
@Injectable()
export class EventListResolver implements Resolve<any>{
     constructor(private eventService:EventService){

     }
     // subscribe returns subscription, pipe(map) returns the observable
    resolve(){
        return this.eventService.getEvents().pipe(map(events => events))
    }
}