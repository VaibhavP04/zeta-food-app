import { Component, OnInit } from '@angular/core';
import { RestuarantAppService } from 'src/app/services/restuarant-app.service';
import { RestuarantObjectModel } from 'src/app/models/restuarant-api.model';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private restuarantAppService: RestuarantAppService) { }

  public favouriteList: RestuarantObjectModel;

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

}
