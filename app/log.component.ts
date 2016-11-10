import {Component} from 'angular2/core';
import {CharacterService} from './character.service';

@Component({
    selector: 'log',
    template: `
    	<h2>log</h2>
    	
    `,
    providers:[CharacterService]
})
export class LogComponent { 
	character : Object;

	constructor(characterService: CharacterService) {
    	this.character = characterService.character;
	}
}