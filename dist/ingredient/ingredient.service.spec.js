"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _ingredientservice = require("./ingredient.service");
describe('IngredientService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _ingredientservice.IngredientService
            ]
        }).compile();
        service = module.get(_ingredientservice.IngredientService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});

//# sourceMappingURL=ingredient.service.spec.js.map