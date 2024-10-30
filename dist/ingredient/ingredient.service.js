"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IngredientService", {
    enumerable: true,
    get: function() {
        return IngredientService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _Ingredient = require("../entity/Ingredient");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let IngredientService = class IngredientService {
    async findAll() {
        return await this.ingredientRepository.find();
    }
    async findOne(id) {
        return await this.ingredientRepository.findOneBy({
            id
        });
    }
    async create(ingredient) {
        const newIngredient = this.ingredientRepository.create(ingredient);
        return await this.ingredientRepository.save(newIngredient);
    }
    async update(id, ingredient) {
        await this.ingredientRepository.update(id, ingredient);
        return this.findOne(id);
    }
    async remove(id) {
        await this.ingredientRepository.delete(id);
    }
    constructor(ingredientRepository){
        this.ingredientRepository = ingredientRepository;
    }
};
IngredientService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_Ingredient.Ingredient)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], IngredientService);

//# sourceMappingURL=ingredient.service.js.map