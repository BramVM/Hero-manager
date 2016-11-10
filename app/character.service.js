System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _blankchar, _character, _createCharacter, _calculateMods, _calculateMaxHp, _delete, CharacterService;
    return {
        setters:[],
        execute: function() {
            _blankchar = {
                level: 1,
                hitDice: 10,
                stats: {
                    int: 8,
                    dex: 8,
                    str: 8,
                    con: 8,
                    char: 8,
                    wis: 8
                },
                mods: {
                    int: -1,
                    dex: -1,
                    str: -1,
                    con: -1,
                    char: -1,
                    wis: -1
                },
            };
            _character = _blankchar;
            if (JSON.parse(localStorage.getItem('char'))) {
                _character = JSON.parse(localStorage.getItem('char'));
                console.log('Get character ' + localStorage.getItem('char'));
            }
            _createCharacter = function (character) {
                _character = character;
                localStorage.setItem('char', JSON.stringify(character));
                console.log('Post character ' + JSON.stringify(character));
                return character;
            };
            _calculateMods = function (character) {
                var mods = {
                    int: Math.floor(character.stats.int / 2 - 5),
                    dex: Math.floor(character.stats.dex / 2 - 5),
                    str: Math.floor(character.stats.str / 2 - 5),
                    con: Math.floor(character.stats.con / 2 - 5),
                    char: Math.floor(character.stats.char / 2 - 5),
                    wis: Math.floor(character.stats.wis / 2 - 5)
                };
                return mods;
            };
            _calculateMaxHp = function (character) {
                var maxHp = character.hitDice - character.hitDice / 2 - 1 + character.level * (character.mods.con + Math.floor(character.hitDice / 2) + 1);
                return maxHp;
            };
            _delete = function () {
                _character = _blankchar;
                localStorage.setItem('char', JSON.stringify(_blankchar));
                console.log('Post character ' + JSON.stringify(_blankchar));
            };
            CharacterService = (function () {
                function CharacterService() {
                    this.character = _character;
                    this.createCharacter = _createCharacter;
                    this.calculateMods = _calculateMods;
                    this.calculateMaxHp = _calculateMaxHp;
                    this.delete = _delete;
                }
                return CharacterService;
            }());
            exports_1("CharacterService", CharacterService);
        }
    }
});
//# sourceMappingURL=character.service.js.map