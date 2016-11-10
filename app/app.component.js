System.register(['angular2/core', './charactercreator.component', './character.component', './story.component', './character.service'], function(exports_1, context_1) {
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
    var core_1, charactercreator_component_1, character_component_1, story_component_1, character_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (charactercreator_component_1_1) {
                charactercreator_component_1 = charactercreator_component_1_1;
            },
            function (character_component_1_1) {
                character_component_1 = character_component_1_1;
            },
            function (story_component_1_1) {
                story_component_1 = story_component_1_1;
            },
            function (character_service_1_1) {
                character_service_1 = character_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(characterService) {
                    this.character = characterService.character;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<h1>Hero manager</h1>\n    \t<charactercreator *ngIf=\"character\"></charactercreator>\n    \t<character *ngIf=\"character\"></character>\n    \t<story></story>\n    ",
                        providers: [character_service_1.CharacterService],
                        directives: [charactercreator_component_1.CharactercreatorComponent, character_component_1.CharacterComponent, story_component_1.StoryComponent],
                    }), 
                    __metadata('design:paramtypes', [character_service_1.CharacterService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map