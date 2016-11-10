import {Component} from 'angular2/core';
import {CharacterService} from './character.service';

@Component({
    selector: 'character',
    template: `
    	<h2>{{ character.name }}</h2>
        Stats
        Int: {{ character.stats.int }}
        Dex: {{ character.stats.dex }}
        Str: {{ character.stats.str }}
        Con: {{ character.stats.con }}
        Char: {{ character.stats.char }}
        Wis: {{ character.stats.wis }}
        <div class="form-group">
            <label>Max Hp:</label>
            {{character.maxHp}}
        </div>
        <button (click)="deleteCharacter()">Delete Character</button>
    `,
    providers:[CharacterService]
})
export class CharacterComponent { 
	character : Object;
    deleteCharacter : Function;

	constructor(characterService: CharacterService) {
    	this.character = characterService.character;
        this.deleteCharacter = characterService.delete;
	}
}