import { 
  Component, 
  HostBinding,
  Input 
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { EventRequest } from '../event-request/event-request.model';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent{
  @HostBinding('attr.class') cssClass = 'row';

  events : EventRequest[];

  constructor(
    private route: ActivatedRoute, 
    private formService: FormService){
      this.events = this.formService.getList();
  }


}
