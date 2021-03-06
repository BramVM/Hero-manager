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
    var LogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (character_service_1_1) {
                character_service_1 = character_service_1_1;
            }],
        execute: function() {
            LogComponent = (function () {
                function LogComponent(characterService) {
                    this.character = characterService.character;
                }
                LogComponent = __decorate([
                    core_1.Component({
                        selector: 'log',
                        template: "\n    \t<h2>log</h2>\n    \t\n    ",
                        providers: [character_service_1.CharacterService]
                    }), 
                    __metadata('design:paramtypes', [character_service_1.CharacterService])
                ], LogComponent);
                return LogComponent;
            }());
            exports_1("LogComponent", LogComponent);
        }
    }
});
//# sourceMappingURL=log.component.js.map