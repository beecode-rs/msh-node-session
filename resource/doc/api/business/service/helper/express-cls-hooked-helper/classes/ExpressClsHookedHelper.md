[**@beecode/msh-node-session**](../../../../../README.md)

***

[@beecode/msh-node-session](../../../../../README.md) / [business/service/helper/express-cls-hooked-helper](../README.md) / ExpressClsHookedHelper

# Class: ExpressClsHookedHelper

Defined in: [business/service/helper/express-cls-hooked-helper.ts:5](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-cls-hooked-helper.ts#L5)

## Constructors

### Constructor

> **new ExpressClsHookedHelper**(`params`): `ExpressClsHookedHelper`

Defined in: [business/service/helper/express-cls-hooked-helper.ts:8](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-cls-hooked-helper.ts#L8)

#### Parameters

##### params

###### clsHookedStrategy

[`ClsHookedStrategy`](../../../session-strategy/cls-hooked-strategy/classes/ClsHookedStrategy.md)

#### Returns

`ExpressClsHookedHelper`

## Properties

### \_clsHookedStrategy

> `protected` `readonly` **\_clsHookedStrategy**: [`ClsHookedStrategy`](../../../session-strategy/cls-hooked-strategy/classes/ClsHookedStrategy.md)

Defined in: [business/service/helper/express-cls-hooked-helper.ts:6](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-cls-hooked-helper.ts#L6)

## Methods

### expressMiddleware()

> **expressMiddleware**(`_req`, `_res`, `next`): `void`

Defined in: [business/service/helper/express-cls-hooked-helper.ts:13](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-cls-hooked-helper.ts#L13)

#### Parameters

##### \_req

`Request`

##### \_res

`Response`

##### next

`NextFunction`

#### Returns

`void`

***

### expressMiddlewareBindEmitter()

> **expressMiddlewareBindEmitter**(`req`, `res`, `next`): `void`

Defined in: [business/service/helper/express-cls-hooked-helper.ts:17](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-cls-hooked-helper.ts#L17)

#### Parameters

##### req

`Request`

##### res

`Response`

##### next

`NextFunction`

#### Returns

`void`
