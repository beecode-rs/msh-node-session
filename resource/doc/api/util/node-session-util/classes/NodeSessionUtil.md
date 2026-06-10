[**@beecode/msh-node-session**](../../../README.md)

***

[@beecode/msh-node-session](../../../README.md) / [util/node-session-util](../README.md) / NodeSessionUtil

# Class: NodeSessionUtil

Defined in: [util/node-session-util.ts:4](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/util/node-session-util.ts#L4)

## Constructors

### Constructor

> **new NodeSessionUtil**(`props?`): `NodeSessionUtil`

Defined in: [util/node-session-util.ts:7](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/util/node-session-util.ts#L7)

#### Parameters

##### props?

###### sessionStrategy?

[`SessionStrategy`](../../../business/service/session-strategy/interfaces/SessionStrategy.md)

#### Returns

`NodeSessionUtil`

## Properties

### \_strategy

> `protected` `readonly` **\_strategy**: [`SessionStrategy`](../../../business/service/session-strategy/interfaces/SessionStrategy.md)

Defined in: [util/node-session-util.ts:5](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/util/node-session-util.ts#L5)

## Methods

### createAsyncSession()

> **createAsyncSession**\<`T`\>(`callback`): `Promise`\<`T`\>

Defined in: [util/node-session-util.ts:13](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/util/node-session-util.ts#L13)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

() => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### createSession()

> **createSession**(`callback`): `void`

Defined in: [util/node-session-util.ts:21](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/util/node-session-util.ts#L21)

#### Parameters

##### callback

() => `void`

#### Returns

`void`
