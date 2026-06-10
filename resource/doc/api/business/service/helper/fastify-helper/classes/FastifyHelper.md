[**@beecode/msh-node-session**](../../../../../README.md)

***

[@beecode/msh-node-session](../../../../../README.md) / [business/service/helper/fastify-helper](../README.md) / FastifyHelper

# Class: FastifyHelper

Defined in: [business/service/helper/fastify-helper.ts:5](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/helper/fastify-helper.ts#L5)

## Constructors

### Constructor

> **new FastifyHelper**(`params`): `FastifyHelper`

Defined in: [business/service/helper/fastify-helper.ts:19](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/helper/fastify-helper.ts#L19)

#### Parameters

##### params

###### sessionStrategy

[`SessionStrategy`](../../../session-strategy/interfaces/SessionStrategy.md)

#### Returns

`FastifyHelper`

## Properties

### \_sessionStrategy

> `protected` `readonly` **\_sessionStrategy**: [`SessionStrategy`](../../../session-strategy/interfaces/SessionStrategy.md)

Defined in: [business/service/helper/fastify-helper.ts:6](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/helper/fastify-helper.ts#L6)

***

### validHooks

> `readonly` **validHooks**: `string`[]

Defined in: [business/service/helper/fastify-helper.ts:8](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/helper/fastify-helper.ts#L8)

## Methods

### \_plugin()

> `protected` **\_plugin**(`fastify`, `opts`, `next`): `void`

Defined in: [business/service/helper/fastify-helper.ts:25](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/helper/fastify-helper.ts#L25)

#### Parameters

##### fastify

`any`

##### opts

`any`

##### next

() => `void`

#### Returns

`void`

***

### beecodeSessionContextPluginFactory()

> **beecodeSessionContextPluginFactory**(): `any`

Defined in: [business/service/helper/fastify-helper.ts:45](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/helper/fastify-helper.ts#L45)

#### Returns

`any`
