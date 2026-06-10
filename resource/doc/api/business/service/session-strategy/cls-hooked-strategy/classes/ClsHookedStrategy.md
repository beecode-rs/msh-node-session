[**@beecode/msh-node-session**](../../../../../README.md)

***

[@beecode/msh-node-session](../../../../../README.md) / [business/service/session-strategy/cls-hooked-strategy](../README.md) / ClsHookedStrategy

# Class: ClsHookedStrategy

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:7](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L7)

## Implements

- [`SessionStrategy`](../../interfaces/SessionStrategy.md)

## Constructors

### Constructor

> **new ClsHookedStrategy**(`params?`): `ClsHookedStrategy`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:15](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L15)

#### Parameters

##### params?

###### nameSpaceId?

`string`

#### Returns

`ClsHookedStrategy`

## Properties

### \_ns

> `protected` `readonly` **\_ns**: `Namespace`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:8](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L8)

## Accessors

### NS

#### Get Signature

> **get** **NS**(): `Namespace`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:11](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L11)

##### Returns

`Namespace`

## Methods

### \_throwErrorIfInactiveContext()

> `protected` **\_throwErrorIfInactiveContext**(): `void`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:48](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L48)

#### Returns

`void`

***

### clear()

> **clear**(`key`): `void`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:33](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L33)

#### Parameters

##### key

`string`

#### Returns

`void`

#### Implementation of

[`SessionStrategy`](../../interfaces/SessionStrategy.md).[`clear`](../../interfaces/SessionStrategy.md#clear)

***

### createSession()

> **createSession**(`callback`, `options?`): `void`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:38](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L38)

#### Parameters

##### callback

() => `void`

##### options?

[`CreateSessionOptions`](../../type-aliases/CreateSessionOptions.md)

#### Returns

`void`

#### Implementation of

[`SessionStrategy`](../../interfaces/SessionStrategy.md).[`createSession`](../../interfaces/SessionStrategy.md#createsession)

***

### get()

> **get**\<`T`\>(`key`): `T` \| `undefined`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:21](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L21)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

#### Returns

`T` \| `undefined`

#### Implementation of

[`SessionStrategy`](../../interfaces/SessionStrategy.md).[`get`](../../interfaces/SessionStrategy.md#get)

***

### set()

> **set**\<`T`\>(`key`, `value`): `void`

Defined in: [business/service/session-strategy/cls-hooked-strategy.ts:28](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/cls-hooked-strategy.ts#L28)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void`

#### Implementation of

[`SessionStrategy`](../../interfaces/SessionStrategy.md).[`set`](../../interfaces/SessionStrategy.md#set)
