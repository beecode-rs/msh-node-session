[@beecode/msh-node-session](../README.md) / [helpers/fastify-helper](../modules/helpers_fastify_helper.md) / FastifyHelper

# Class: FastifyHelper

[helpers/fastify-helper](../modules/helpers_fastify_helper.md).FastifyHelper

## Table of contents

### Constructors

- [constructor](helpers_fastify_helper.FastifyHelper.md#constructor)

### Properties

- [\_sessionStrategy](helpers_fastify_helper.FastifyHelper.md#_sessionstrategy)
- [validHooks](helpers_fastify_helper.FastifyHelper.md#validhooks)

### Methods

- [\_plugin](helpers_fastify_helper.FastifyHelper.md#_plugin)
- [beecodeSessionContextPluginFactory](helpers_fastify_helper.FastifyHelper.md#beecodesessioncontextpluginfactory)

## Constructors

### constructor

• **new FastifyHelper**(`params`): [`FastifyHelper`](helpers_fastify_helper.FastifyHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.sessionStrategy` | [`SessionStrategy`](../interfaces/session_strategy_session_strategy.SessionStrategy.md) |

#### Returns

[`FastifyHelper`](helpers_fastify_helper.FastifyHelper.md)

#### Defined in

[helpers/fastify-helper.ts:19](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/helpers/fastify-helper.ts#L19)

## Properties

### \_sessionStrategy

• `Protected` `Readonly` **\_sessionStrategy**: [`SessionStrategy`](../interfaces/session_strategy_session_strategy.SessionStrategy.md)

#### Defined in

[helpers/fastify-helper.ts:6](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/helpers/fastify-helper.ts#L6)

___

### validHooks

• `Readonly` **validHooks**: `string`[]

#### Defined in

[helpers/fastify-helper.ts:8](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/helpers/fastify-helper.ts#L8)

## Methods

### \_plugin

▸ **_plugin**(`fastify`, `opts`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fastify` | `any` |
| `opts` | `any` |
| `next` | () => `void` |

#### Returns

`void`

#### Defined in

[helpers/fastify-helper.ts:25](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/helpers/fastify-helper.ts#L25)

___

### beecodeSessionContextPluginFactory

▸ **beecodeSessionContextPluginFactory**(): `any`

#### Returns

`any`

#### Defined in

[helpers/fastify-helper.ts:43](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/helpers/fastify-helper.ts#L43)
