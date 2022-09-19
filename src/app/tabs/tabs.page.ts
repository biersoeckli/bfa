import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isAdmin = false;
  badgeCount: number = 0;

  constructor(public basketService: BasketService,
    private userService: UserService) {
    this.basketService.basketSubject.subscribe(x => {
      if (x != null) {
        this.badgeCount = x.length;
      }
    });

    this.userService.isLoggedInUserInRole('bfa-admin').then(x => this.isAdmin = x);
  }

}
