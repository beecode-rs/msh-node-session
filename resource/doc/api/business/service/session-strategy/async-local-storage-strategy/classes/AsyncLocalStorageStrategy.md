[**@beecode/msh-node-session**](../../../../../README.md)

***

[@beecode/msh-node-session](../../../../../README.md) / [business/service/session-strategy/async-local-storage-strategy](../README.md) / AsyncLocalStorageStrategy

# Class: AsyncLocalStorageStrategy

Defined in: [business/service/session-strategy/async-local-storage-strategy.ts:5](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy/async-local-storage-strategy.ts#L5)

## Implements

- [`SessionStrategy`](../../interfaces/SessionStrategy.md)

## Constructors

### Constructor

> **new AsyncLocalStorageStrategy**(): `AsyncLocalStorageStrategy`

#### Returns

`AsyncLocalStorageStrategy`

## Properties

### \_storage

> `protected` `readonly` **\_storage**: `AsyncLocalStorage`\<`Map`\<`string`, `unknown`\>\>

Defined in: [business/service/session-strategy/async-local-storage-strategy.ts:6](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy/async-local-storage-strategy.ts#L6)

## Methods

### \_throwErrorIfInactiveContext()

> `protected` **\_throwErrorIfInactiveContext**(`store?`): `void`

Defined in: [business/service/session-strategy/async-local-storage-strategy.ts:35](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy/async-local-storage-strategy.ts#L35)

#### Parameters

##### store?

`Map`\<`string`, `unknown`\>

#### Returns

`void`

***

### clear()

> **clear**(`key`): `void`

Defined in: [business/service/session-strategy/async-local-storage-strategy.ts:23](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy/async-local-storage-strategy.ts#L23)

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

Defined in: [business/service/session-strategy/async-local-storage-strategy.ts:29](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy/async-local-storage-strategy.ts#L29)

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

Defined in: [business/service/session-strategy/async-local-storage-strategy.ts:9](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy/async-local-storage-strategy.ts#L9)

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

Defined in: [business/service/session-strategy/async-local-storage-strategy.ts:17](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy/async-local-storage-strategy.ts#L17)

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
