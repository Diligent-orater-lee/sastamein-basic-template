import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-review-view',
  standalone: true,
  imports: [],
  templateUrl: './rating-review-view.component.html',
  styleUrl: './rating-review-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingReviewViewComponent implements OnInit {

  @Input() productRating: number = 0;
  @Input() reviewCount: number = 0;

  ngOnInit(): void { }

}
