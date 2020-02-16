import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { faSearch, faPlus, faMinus, faFilter } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import { RestuarantObjectModel } from 'src/app/models/restuarant-api.model';
import { RestuarantAppService } from 'src/app/services/restuarant-app.service';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  faSearch = faSearch;
  faFilter = faFilter;
  faPlus = faPlus;
  faMinus = faMinus;
  public categoryList: RestuarantObjectModel;
  public selectedArray = [];
  public searchText;
  public showBtn = false;
  public selectedIndex;
  @Input() Parent;
  @Output() public addToCartValue = new EventEmitter();
  @ViewChild('searchInpt', {static: true}) searchInpt: ElementRef;
  public filteredArray: any;
  constructor(private restuarantAppService: RestuarantAppService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.categoryList = new RestuarantObjectModel();
    this.categoryList.categories = [];
    this.getFavouritesListFromAPI();
  }

  getFavouritesListFromAPI() {
    this.restuarantAppService.getCategoryAndRecipeList().subscribe(
      (data) => {
        if (data) {
          this.categoryList = data;
          this.filteredArray = this.categoryList.recipes
          this.categoryList.recipes = this.categoryList.recipes.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        }
      }
    );
  }

  addToCart(getSelectedItem, index) {
    this.selectedIndex = index;
    this.selectedArray.push(getSelectedItem);
    this.addToCartValue.emit(this.selectedArray);
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
    this.showSuccess();
  }

  deleteCart(recipes) {
    const index = this.selectedArray.indexOf(recipes.name, 0);
    if (index === -1) {
      this.selectedArray.splice(index, 1);
    }
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
    this.deleteCartTostr();
  }

  filterCategories(filteredObj) {
    this.filteredArray = this.categoryList.recipes;
    this.filteredArray = this.categoryList.recipes.filter(
      book => book.category === filteredObj.name);
  }

  navigateToDetailPage(selectedRecipe) {
    const navigationExtras: NavigationExtras = {
      state: {
        selectedRecipe,
        cartAddedItem: this.selectedArray
      }
    }
    this.router.navigate(['/item-detail'], navigationExtras);
  }

  showSuccess() {
    this.toastr.success('Item added to cart');
  }

  deleteCartTostr() {
    this.toastr.success('Item deleted from the cart');
  }

}
