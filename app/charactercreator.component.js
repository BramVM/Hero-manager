System.register(['angular2/core', './character.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, character_service_1;
    var CharactercreatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (character_service_1_1) {
                character_service_1 = character_service_1_1;
            }],
        execute: function() {
            CharactercreatorComponent = (function () {
                function CharactercreatorComponent(characterService) {
                    var calcStatPool = function (character) {
                        var pool = 80;
                        pool = pool - character.stats.int;
                        pool = pool - character.stats.dex;
                        pool = pool - character.stats.str;
                        pool = pool - character.stats.con;
                        pool = pool - character.stats.char;
                        pool = pool - character.stats.wis;
                        return pool;
                    };
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
                    this.updateSheet = function (event) {
                        /*this.character = statsRound(this.character);*/
                        this.statPool = calcStatPool(this.character);
                        this.character.mods = characterService.calculateMods(this.character);
                        this.character.maxHp = characterService.calculateMaxHp(this.character);
                    };
                    this.character = characterService.character;
                    this.statPool = calcStatPool(characterService.character);
                    this.characterCreationFunction = function (character) {
                        if (this.statPool == 0) {
                            this.statPool = calcStatPool(characterService.character);
                            character.mods = characterService.calculateMods(character);
                            character.maxHp = characterService.calculateMaxHp(character);
                            this.character = characterService.createCharacter(character);
                        }
                    };
                }
                CharactercreatorComponent = __decorate([
                    core_1.Component({
                        selector: 'charactercreator',
                        template: "\n    \t<h2>Create your character</h2>\n        <form>\n            <div class=\"form-group\">\n        \t    <label for=\"name\">Name:</label>\n                <input id=\"name\" type=\"text\" [(ngModel)]=\"character.name\" >\n            </div>\n            <div class=\"form-group\">\n                <label for=\"statPool\">statPool:</label>\n                {{statPool}}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"int\">Int:</label>\n                <input id=\"int\" type=\"number\" [(ngModel)]=\"character.stats.int\" min=\"8\" max=\"18\" size=\"2\" (ngModelChange)=\"updateSheet($event)\" >\n                {{character.mods.int}}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"dex\">Dex:</label>\n                <input id=\"dex\" type=\"number\" [(ngModel)]=\"character.stats.dex\" min=\"8\" max=\"18\" size=\"2\" (ngModelChange)=\"updateSheet($event)\" >\n                {{character.mods.dex}}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"str\">Str:</label>\n                <input id=\"str\" type=\"number\" [(ngModel)]=\"character.stats.str\" min=\"8\" max=\"18\" size=\"2\" (ngModelChange)=\"updateSheet($event)\" >\n                {{character.mods.str}}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"con\">Con:</label>\n                <input id=\"con\" type=\"number\" [(ngModel)]=\"character.stats.con\" min=\"8\" max=\"18\" size=\"2\" (ngModelChange)=\"updateSheet($event)\" >\n                {{character.mods.con}}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"char\">Char:</label>\n                <input id=\"char\" type=\"number\" [(ngModel)]=\"character.stats.char\" min=\"8\" max=\"18\" size=\"2\" (ngModelChange)=\"updateSheet($event)\" >\n                {{character.mods.char}}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"wis\">Wis:</label>\n                <input id=\"wis\" type=\"number\" [(ngModel)]=\"character.stats.wis\" min=\"8\" max=\"18\" size=\"2\" (ngModelChange)=\"updateSheet($event)\" >\n                {{character.mods.wis}}\n            </div>\n            <div class=\"form-group\">\n                <label>Max Hp:</label>\n                {{character.maxHp}}\n            </div>\n\n            <button (click)=\"characterCreationFunction(character)\">Submit Character</button>\n        </form>\n    ",
                        providers: [character_service_1.CharacterService]
                    }), 
                    __metadata('design:paramtypes', [character_service_1.CharacterService])
                ], CharactercreatorComponent);
                return CharactercreatorComponent;
            }());
            exports_1("CharactercreatorComponent", CharactercreatorComponent);
        }
    }
});
//# sourceMappingURL=charactercreator.component.js.map