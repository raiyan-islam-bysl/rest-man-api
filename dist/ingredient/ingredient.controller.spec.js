"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _ingredientcontroller = require("./ingredient.controller");
const _ingredientservice = require("./ingredient.service");
describe('IngredientController', ()=>{
    let controller;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            controllers: [
                _ingredientcontroller.IngredientController
            ],
            providers: [
                _ingredientservice.IngredientService
            ]
        }).compile();
        controller = module.get(_ingredientcontroller.IngredientController);
    });
    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    });
});

//# sourceMappingURL=ingredient.controller.spec.js.map