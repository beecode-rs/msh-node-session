[@beecode/msh-node-session](../README.md) / [helpers/express-cls-hooked-helper](../modules/helpers_express_cls_hooked_helper.md) / ExpressClsHookedHelper

# Class: ExpressClsHookedHelper

[helpers/express-cls-hooked-helper](../modules/helpers_express_cls_hooked_helper.md).ExpressClsHookedHelper

## Table of contents

### Constructors

- [constructor](helpers_express_cls_hooked_helper.ExpressClsHookedHelper.md#constructor)

### Properties

- [\_clsHookedStrategy](helpers_express_cls_hooked_helper.ExpressClsHookedHelper.md#_clshookedstrategy)

### Methods

- [expressMiddleware](helpers_express_cls_hooked_helper.ExpressClsHookedHelper.md#expressmiddleware)
- [expressMiddlewareBindEmitter](helpers_express_cls_hooked_helper.ExpressClsHookedHelper.md#expressmiddlewarebindemitter)

## Constructors

### constructor

• **new ExpressClsHookedHelper**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.clsHookedStrategy` | [`ClsHookedStrategy`](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md) |

#### Defined in

[helpers/express-cls-hooked-helper.ts:8](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/helpers/express-cls-hooked-helper.ts#L8)

## Properties

### \_clsHookedStrategy

• `Protected` `Readonly` **\_clsHookedStrategy**: [`ClsHookedStrategy`](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md)

#### Defined in

[helpers/express-cls-hooked-helper.ts:6](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/helpers/express-cls-hooked-helper.ts#L6)

## Methods

### expressMiddleware

▸ **expressMiddleware**(`_req`, `_res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `_res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`void`

#### Defined in

[helpers/express-cls-hooked-helper.ts:13](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/helpers/express-cls-hooked-helper.ts#L13)

___

### expressMiddlewareBindEmitter

▸ **expressMiddlewareBindEmitter**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`void`

#### Defined in

[helpers/express-cls-hooked-helper.ts:17](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/helpers/express-cls-hooked-helper.ts#L17)
