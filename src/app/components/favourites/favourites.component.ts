import { Component, OnInit } from '@angular/core';
import { RestuarantAppService } from 'src/app/services/restuarant-app.service';
import { RestuarantObjectModel } from 'src/app/models/restuarant-api.model';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  public faShoppingBag = faShoppingBag;
  public message;
  public favouriteList: RestuarantObjectModel;
  public noOfItemsAddedToCart: any;

  constructor(private restuarantAppService: RestuarantAppService) {
   }



  ngOnInit(): void {
    this.favouriteList = new RestuarantObjectModel();
    this.favouriteList.recipes = [];
    this.getFavouritesListFromAPI();
  }

  getFavouritesListFromAPI() {
    this.restuarantAppService.getCategoryAndRecipeList().subscribe(
      (data) => {
        if (data) {
          this.favouriteList.recipes = data.recipes;
          this.favouriteList.recipes = this.favouriteList.recipes.filter(i => i.isFavourite === true);
        }
      }
    );
  }

  recieveMsg(event){
    this.noOfItemsAddedToCart = event;
  }

}
