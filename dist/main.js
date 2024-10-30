"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _platformfastify = require("@nestjs/platform-fastify");
const _appmodule = require("./app.module");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, new _platformfastify.FastifyAdapter());
    await app.listen(3000, '0.0.0.0');
}
bootstrap();

//# sourceMappingURL=main.js.map