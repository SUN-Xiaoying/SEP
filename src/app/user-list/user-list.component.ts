import { 
  Component, 
  EventEmitter 
} from '@angular/core';

import {User} from '../user/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users:User[];


}