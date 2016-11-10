import {Component} from 'angular2/core';
import {CharacterService} from './character.service';

@Component({
    selector: 'charactercreator',
    template: `
    	<h2>Create your character</h2>
        <form>
            <div class="form-group">
        	    <label for="name">Name:</label>
                <input id="name" type="text" [(ngModel)]="character.name" >
            </div>
            <div class="form-group">
                <label for="statPool">statPool:</label>
                {{statPool}}
            </div>
            <div class="form-group">
                <label for="int">Int:</label>
                <input id="int" type="number" [(ngModel)]="character.stats.int" min="8" max="18" size="2" (ngModelChange)="updateSheet($event)" >
                {{character.mods.int}}
            </div>
            <div class="form-group">
                <label for="dex">Dex:</label>
                <input id="dex" type="number" [(ngModel)]="character.stats.dex" min="8" max="18" size="2" (ngModelChange)="updateSheet($event)" >
                {{character.mods.dex}}
            </div>
            <div class="form-group">
                <label for="str">Str:</label>
                <input id="str" type="number" [(ngModel)]="character.stats.str" min="8" max="18" size="2" (ngModelChange)="updateSheet($event)" >
                {{character.mods.str}}
            </div>
            <div class="form-group">
                <label for="con">Con:</label>
                <input id="con" type="number" [(ngModel)]="character.stats.con" min="8" max="18" size="2" (ngModelChange)="updateSheet($event)" >
                {{character.mods.con}}
            </div>
            <div class="form-group">
                <label for="char">Char:</label>
                <input id="char" type="number" [(ngModel)]="character.stats.char" min="8" max="18" size="2" (ngModelChange)="updateSheet($event)" >
                {{character.mods.char}}
            </div>
            <div class="form-group">
                <label for="wis">Wis:</label>
                <input id="wis" type="number" [(ngModel)]="character.stats.wis" min="8" max="18" size="2" (ngModelChange)="updateSheet($event)" >
                {{character.mods.wis}}
            </div>
            <div class="form-group">
                <label>Max Hp:</label>
                {{character.maxHp}}
            </div>

            <button (click)="characterCreationFunction(character)">Submit Character</button>
        </form>
    `,
    providers:[CharacterService]
})
export class CharactercreatorComponent { 
	characterCreationFunction : Function;
    updateSheet : Function;
    character : Object;
    statPool : number;
   
	constructor(characterService: CharacterService) {
        var calcStatPool = function (character){
            var pool = 80;
            pool = pool - character.stats.int;
            pool = pool - character.stats.dex;
            pool = pool - character.stats.str;
            pool = pool - character.stats.con;
            pool = pool - character.stats.char;
            pool = pool - character.stats.wis; 
            return pool
        }
        /*var statsRound = function (character){
            if(character.stats.int>18) character.stats.int = 18;
            if(character.stats.dex>18) character.stats.dex = 18;
            if(character.stats.str>18) character.stats.str = 18;
            if(character.stats.con>18) character.stats.con = 18;
            if(character.stats.char>18) character.stats.char = 18;
            if(character.stats.wis>18) character.stats.wis = 18;
            if(character.stats.int<0) character.stats.int = 0;
            if(character.stats.dex<0) character.stats.dex = 0;
            if(character.stats.str<0) character.stats.str = 0;
            if(character.stats.con<0) character.stats.con = 0;
            if(character.stats.char<0) character.stats.char = 0;
            if(character.stats.wis<0) character.stats.wis = 0;
            return character
        }*/
        this.updateSheet = function(event){
            /*this.character = statsRound(this.character);*/
            this.statPool = calcStatPool(this.character);
            this.character.mods = characterService.calculateMods(this.character);
            this.character.maxHp = characterService.calculateMaxHp(this.character);
        }
        this.character = characterService.character;
        this.statPool = calcStatPool(characterService.character);
        this.characterCreationFunction  =  function(character){
            if(this.statPool == 0){
                this.statPool = calcStatPool(characterService.character);
                character.mods = characterService.calculateMods(character);
                character.maxHp = characterService.calculateMaxHp(character);
                this.character = characterService.createCharacter(character);
            }
        }
	}
}