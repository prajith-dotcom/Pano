import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'pan-custom-dashboard',
  templateUrl: './pan-custom-dashboard.component.html',
  styleUrls: ['./pan-custom-dashboard.component.scss'],
})
export class PanCustomDashboardComponent implements OnInit {
  user = UserService.isLoggedIn();

  constructor() { }

  ngOnInit() {
  }

}
