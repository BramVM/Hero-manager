import {Component} from 'angular2/core';

@Component({
    selector: 'story',
    template: `
    	<h2>Story</h2>
        <button (click)="runStory(adventure)">Start Adventure</button>
        <div class="progress">
            <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width:{{progress}}%">
            </div>
        </div>
    `,
})
export class StoryComponent {

    adventure : Object = {}
    runStory : Function
    animate : Function
    progress : number

    constructor(){
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
                        succes : "",
                        fail: ""    
                    },
                },
                {
                    flavortext: "You leave town",
                    delay: 2000,
                    trap: {
                        perceptionCheck: 15,
                        damage: [6],
                        succes : "",
                        fail: ""    
                    },
                }
            ]
        };

        thisInstance.animate = function (delay){
                if (thisInstance.progress < 100) {
                    var interval = 40;
                    setTimeout( function(){thisInstance.animate(delay)}, interval );
                    thisInstance.progress = thisInstance.progress + 100/(delay/interval);
                }
        };

        thisInstance.runStory = function(adventure){
            console.log(thisInstance.progress)
            var i = adventure.frames.length-1;
            var frame = function(adventure){
                thisInstance.progress = 0;
                var delay = 0;
                if (adventure.frames[i].delay) delay = adventure.frames[i].delay;
                if (adventure.frames[i].flavortext) console.log(adventure.frames[i].flavortext);
                --i;
                if( i>=0 ) {
                    thisInstance.animate(delay);
                    setTimeout( function(){frame(adventure)}, delay );
                }
            };
            frame(adventure);
        }
    }
    
}