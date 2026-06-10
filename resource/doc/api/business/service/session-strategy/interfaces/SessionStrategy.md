[**@beecode/msh-node-session**](../../../../README.md)

***

[@beecode/msh-node-session](../../../../README.md) / [business/service/session-strategy](../README.md) / SessionStrategy

# Interface: SessionStrategy

Defined in: [business/service/session-strategy.ts:4](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy.ts#L4)

## Methods

### clear()

> **clear**(`key`): `void`

Defined in: [business/service/session-strategy.ts:9](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy.ts#L9)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### createSession()

> **createSession**(`callback`, `options?`): `void`

Defined in: [business/service/session-strategy.ts:10](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy.ts#L10)

#### Parameters

##### callback

() => `void`

##### options?

[`CreateSessionOptions`](../type-aliases/CreateSessionOptions.md)

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`key`): `T` \| `undefined`

Defined in: [business/service/session-strategy.ts:6](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy.ts#L6)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

#### Returns

`T` \| `undefined`

***

### set()

> **set**\<`T`\>(`key`, `value`): `void`

Defined in: [business/service/session-strategy.ts:8](https://github.com/beecode-rs/msh-node-session/blob/d2b749923dd6e997cea939634c7ebb04054628c8/src/business/service/session-strategy.ts#L8)

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
