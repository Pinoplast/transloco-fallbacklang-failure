import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  dynamic = '🦄';
  key = 'home';
  param =  `scope: ": ClientK123456789101112131415;' '' ,.;[]}{ ' ;^)!!! - ClientK123456789101112131415;' '' ,.;[]}{ ' ;^)!!!"`;

  constructor(private service: TranslocoService) {
  }

}
