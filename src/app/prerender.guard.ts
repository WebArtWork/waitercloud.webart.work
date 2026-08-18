import { isPlatformServer } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {
	adminsGuard,
	authenticatedGuard,
	guestGuard,
} from '@wawjs/ngx-bos';

const browserGuard = (guard: CanActivateFn): CanActivateFn => (route, state) =>
	isPlatformServer(inject(PLATFORM_ID)) ? true : guard(route, state);

export const prerenderAuthenticatedGuard = browserGuard(authenticatedGuard);
export const prerenderAdminsGuard = browserGuard(adminsGuard);
export const prerenderGuestGuard = browserGuard(guestGuard);
