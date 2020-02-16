import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faMinus, faStar } from '@fortawesome/free-solid-svg-icons';
import { RestuarantAppService } from '../services/restuarant-app.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  public subscribedValue: any;
  public faPlus = faPlus;
  public faMinus = faMinus;
  public faStar = faStar;
  public count = 0;

  constructor(private route: ActivatedRoute, private router: Router, public ser: RestuarantAppService) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.subscribedValue = this.router.getCurrentNavigation().extras.state.selectedRecipe;
        localStorage.setItem('subscribedValue', JSON.stringify(this.subscribedValue));
      }
    });

   }

  ngOnInit(): void {
    this.subscribedValue = JSON.parse(localStorage.getItem('subscribedValue'));
  }

  cartIncrement(){
    this.count++;
    this.ser.subscriber.next(this.count);
  }

  cartDecrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

}
