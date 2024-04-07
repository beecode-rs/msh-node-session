[@beecode/msh-node-session](../README.md) / [session-strategy/fast-als-strategy](../modules/session_strategy_fast_als_strategy.md) / FastAlsStrategy

# Class: FastAlsStrategy

[session-strategy/fast-als-strategy](../modules/session_strategy_fast_als_strategy.md).FastAlsStrategy

## Implements

- [`SessionStrategy`](../interfaces/session_strategy_session_strategy.SessionStrategy.md)

## Table of contents

### Constructors

- [constructor](session_strategy_fast_als_strategy.FastAlsStrategy.md#constructor)

### Methods

- [clear](session_strategy_fast_als_strategy.FastAlsStrategy.md#clear)
- [createSession](session_strategy_fast_als_strategy.FastAlsStrategy.md#createsession)
- [get](session_strategy_fast_als_strategy.FastAlsStrategy.md#get)
- [set](session_strategy_fast_als_strategy.FastAlsStrategy.md#set)

## Constructors

### constructor

• **new FastAlsStrategy**(): [`FastAlsStrategy`](session_strategy_fast_als_strategy.FastAlsStrategy.md)

#### Returns

[`FastAlsStrategy`](session_strategy_fast_als_strategy.FastAlsStrategy.md)

## Methods

### clear

▸ **clear**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Implementation of

[SessionStrategy](../interfaces/session_strategy_session_strategy.SessionStrategy.md).[clear](../interfaces/session_strategy_session_strategy.SessionStrategy.md#clear)

#### Defined in

[session-strategy/fast-als-strategy.ts:8](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/fast-als-strategy.ts#L8)

___

### createSession

▸ **createSession**(`callback`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |
| `options?` | [`CreateSessionOptions`](../modules/session_strategy_session_strategy.md#createsessionoptions) |

#### Returns

`void`

#### Implementation of

[SessionStrategy](../interfaces/session_strategy_session_strategy.SessionStrategy.md).[createSession](../interfaces/session_strategy_session_strategy.SessionStrategy.md#createsession)

#### Defined in

[session-strategy/fast-als-strategy.ts:12](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/fast-als-strategy.ts#L12)

___

### get

▸ **get**\<`T`\>(`key`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Implementation of

[SessionStrategy](../interfaces/session_strategy_session_strategy.SessionStrategy.md).[get](../interfaces/session_strategy_session_strategy.SessionStrategy.md#get)

#### Defined in

[session-strategy/fast-als-strategy.ts:19](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/fast-als-strategy.ts#L19)

___

### set

▸ **set**\<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[SessionStrategy](../interfaces/session_strategy_session_strategy.SessionStrategy.md).[set](../interfaces/session_strategy_session_strategy.SessionStrategy.md#set)

#### Defined in

[session-strategy/fast-als-strategy.ts:23](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/fast-als-strategy.ts#L23)
