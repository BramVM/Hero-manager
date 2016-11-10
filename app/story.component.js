System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var StoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StoryComponent = (function () {
                function StoryComponent() {
                    this.adventure = {};
                    var thisInstance = this;
                    thisInstance.adventure = {
                        name: '',
                        level: 1,
                        frames: [
                            {
                                flavortext: "You found your way back to town",
                                delay: 2000,
                                trap: {
                                    perceptionCheck: 15,
                                    damage: [6],
                                    succes: "",
                                    fail: ""
                                },
                            },
                            {
                                flavortext: "You leave town",
                                delay: 2000,
                                trap: {
                                    perceptionCheck: 15,
                                    damage: [6],
                                    succes: "",
                                    fail: ""
                                },
                            }
                        ]
                    };
                    thisInstance.animate = function (delay) {
                        if (thisInstance.progress < 100) {
                            var interval = 40;
                            setTimeout(function () { thisInstance.animate(delay); }, interval);
                            thisInstance.progress = thisInstance.progress + 100 / (delay / interval);
                        }
                    };
                    thisInstance.runStory = function (adventure) {
                        console.log(thisInstance.progress);
                        var i = adventure.frames.length - 1;
                        var frame = function (adventure) {
                            thisInstance.progress = 0;
                            var delay = 0;
                            if (adventure.frames[i].delay)
                                delay = adventure.frames[i].delay;
                            if (adventure.frames[i].flavortext)
                                console.log(adventure.frames[i].flavortext);
                            --i;
                            if (i >= 0) {
                                thisInstance.animate(delay);
                                setTimeout(function () { frame(adventure); }, delay);
                            }
                        };
                        frame(adventure);
                    };
                }
                StoryComponent = __decorate([
                    core_1.Component({
                        selector: 'story',
                        template: "\n    \t<h2>Story</h2>\n        <button (click)=\"runStory(adventure)\">Start Adventure</button>\n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\"  aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:{{progress}}%\">\n            </div>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StoryComponent);
                return StoryComponent;
            }());
            exports_1("StoryComponent", StoryComponent);
        }
    }
});
//# sourceMappingURL=story.component.js.map