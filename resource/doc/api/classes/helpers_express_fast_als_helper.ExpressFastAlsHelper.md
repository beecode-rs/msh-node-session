[@beecode/msh-node-session](../README.md) / [helpers/express-fast-als-helper](../modules/helpers_express_fast_als_helper.md) / ExpressFastAlsHelper

# Class: ExpressFastAlsHelper

[helpers/express-fast-als-helper](../modules/helpers_express_fast_als_helper.md).ExpressFastAlsHelper

## Table of contents

### Constructors

- [constructor](helpers_express_fast_als_helper.ExpressFastAlsHelper.md#constructor)

### Properties

- [\_fastAlsStrategy](helpers_express_fast_als_helper.ExpressFastAlsHelper.md#_fastalsstrategy)

### Methods

- [expressMiddleware](helpers_express_fast_als_helper.ExpressFastAlsHelper.md#expressmiddleware)

## Constructors

### constructor

• **new ExpressFastAlsHelper**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.fastAlsStrategy` | [`FastAlsStrategy`](session_strategy_fast_als_strategy.FastAlsStrategy.md) |

#### Defined in

[helpers/express-fast-als-helper.ts:8](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/helpers/express-fast-als-helper.ts#L8)

## Properties

### \_fastAlsStrategy

• `Protected` `Readonly` **\_fastAlsStrategy**: [`FastAlsStrategy`](session_strategy_fast_als_strategy.FastAlsStrategy.md)

#### Defined in

[helpers/express-fast-als-helper.ts:6](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/helpers/express-fast-als-helper.ts#L6)

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

[helpers/express-fast-als-helper.ts:13](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/helpers/express-fast-als-helper.ts#L13)
