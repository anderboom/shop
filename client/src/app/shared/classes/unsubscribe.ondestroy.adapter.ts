import {
  Injectable,
  OnDestroy,
} from '@angular/core';

import { SubSink } from 'subsink';

@Injectable()
export class UnsubscribeOnDestroyAdapter implements OnDestroy {
  subs = new SubSink();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
