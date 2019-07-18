import {Component, OnInit} from '@angular/core';
import {Category} from '../_model/category-model';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../_service/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  public categoryId: string;
  public category: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.categoryService.getById(this.categoryId).subscribe(
      res => {
        this.category = res;
      }
    );
  }

}
