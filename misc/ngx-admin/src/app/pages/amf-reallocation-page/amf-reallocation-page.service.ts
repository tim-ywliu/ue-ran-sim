import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
} from '@angular/core';

@Injectable()
export class AMFReallocationPageService {
    factoryResolver: any;
  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
}
