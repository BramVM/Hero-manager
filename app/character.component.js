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
    var CharacterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (character_service_1_1) {
                character_service_1 = character_service_1_1;
            }],
        execute: function() {
            CharacterComponent = (function () {
                function CharacterComponent(characterService) {
                    this.character = characterService.character;
                    this.deleteCharacter = characterService.delete;
                }
                CharacterComponent = __decorate([
                    core_1.Component({
                        selector: 'character',
                        template: "\n    \t<h2>{{ character.name }}</h2>\n        Stats\n        Int: {{ character.stats.int }}\n        Dex: {{ character.stats.dex }}\n        Str: {{ character.stats.str }}\n        Con: {{ character.stats.con }}\n        Char: {{ character.stats.char }}\n        Wis: {{ character.stats.wis }}\n        <div class=\"form-group\">\n            <label>Max Hp:</label>\n            {{character.maxHp}}\n        </div>\n        <button (click)=\"deleteCharacter()\">Delete Character</button>\n    ",
                        providers: [character_service_1.CharacterService]
                    }), 
                    __metadata('design:paramtypes', [character_service_1.CharacterService])
                ], CharacterComponent);
                return CharacterComponent;
            }());
            exports_1("CharacterComponent", CharacterComponent);
        }
    }
});
//# sourceMappingURL=character.component.js.map