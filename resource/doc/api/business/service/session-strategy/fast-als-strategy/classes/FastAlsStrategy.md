[**@beecode/msh-node-session**](../../../../../README.md)

***

[@beecode/msh-node-session](../../../../../README.md) / [business/service/session-strategy/fast-als-strategy](../README.md) / FastAlsStrategy

# Class: FastAlsStrategy

Defined in: [business/service/session-strategy/fast-als-strategy.ts:7](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/fast-als-strategy.ts#L7)

## Implements

- [`SessionStrategy`](../../interfaces/SessionStrategy.md)

## Constructors

### Constructor

> **new FastAlsStrategy**(): `FastAlsStrategy`

#### Returns

`FastAlsStrategy`

## Methods

### clear()

> **clear**(`key`): `void`

Defined in: [business/service/session-strategy/fast-als-strategy.ts:8](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/fast-als-strategy.ts#L8)

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

Defined in: [business/service/session-strategy/fast-als-strategy.ts:12](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/fast-als-strategy.ts#L12)

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

Defined in: [business/service/session-strategy/fast-als-strategy.ts:20](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/fast-als-strategy.ts#L20)

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

Defined in: [business/service/session-strategy/fast-als-strategy.ts:25](https://github.com/beecode-rs/msh-node-session/blob/b011a19b43b510ac717227ba9aec3e8586960dd7/src/business/service/session-strategy/fast-als-strategy.ts#L25)

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
