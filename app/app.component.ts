import {Component} from 'angular2/core';
//import {LocalStorageService} from "angular2-localstorage/LocalStorageEmitter";
import {CharactercreatorComponent} from './charactercreator.component';
import {CharacterComponent} from './character.component';
import {StoryComponent} from './story.component';

import {CharacterService} from './character.service';

@Component({
    selector: 'my-app',
    template:  `
    	<h1>Hero manager</h1>
    	<charactercreator *ngIf="character"></charactercreator>
    	<character *ngIf="character"></character>
    	<story></story>
    `,
    providers:[CharacterService],
    directives: [CharactercreatorComponent,CharacterComponent,StoryComponent],
    //provider: [LocalStorageService]
})
export class AppComponent { 
	//constructor(storageService: LocalStorageService){}
	character : Object;

	constructor(characterService: CharacterService) {
    	this.character = characterService.character;
	}
}