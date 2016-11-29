import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable()
export class PostMessageService {
	
	constructor(private windowService: WindowService) {
	}

	addPostMessageListener(fn: EventListener): void {
		this.windowService.nativeWindow.addEventListener('message', fn, false)
	}
}