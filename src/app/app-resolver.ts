import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AppResolver implements Resolve<any> {

	constructor(
	) {}

	public resolve(route: ActivatedRouteSnapshot): any {
		// do nothing
	}
}
