import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCategory } from '../../../shared/interfaces';

@Component({
  selector: 'app-home-category-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-category-card.component.html',
  styleUrl: './home-category-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCategoryCardComponent implements OnInit {

  @Input() category!: ProductCategory;

  ngOnInit(): void { }

}
