[@beecode/msh-node-session](../README.md) / [session-strategy/session-strategy](../modules/session_strategy_session_strategy.md) / SessionStrategy

# Interface: SessionStrategy

[session-strategy/session-strategy](../modules/session_strategy_session_strategy.md).SessionStrategy

## Implemented by

- [`ClsHookedStrategy`](../classes/session_strategy_cls_hooked_strategy.ClsHookedStrategy.md)
- [`FastAlsStrategy`](../classes/session_strategy_fast_als_strategy.FastAlsStrategy.md)

## Table of contents

### Methods

- [clear](session_strategy_session_strategy.SessionStrategy.md#clear)
- [createSession](session_strategy_session_strategy.SessionStrategy.md#createsession)
- [get](session_strategy_session_strategy.SessionStrategy.md#get)
- [set](session_strategy_session_strategy.SessionStrategy.md#set)

## Methods

### clear

▸ **clear**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[session-strategy/session-strategy.ts:7](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/session-strategy.ts#L7)

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

#### Defined in

[session-strategy/session-strategy.ts:8](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/session-strategy.ts#L8)

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

#### Defined in

[session-strategy/session-strategy.ts:5](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/session-strategy.ts#L5)

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

#### Defined in

[session-strategy/session-strategy.ts:6](https://github.com/beecode-rs/msh-node-session/blob/007a8c1/src/session-strategy/session-strategy.ts#L6)
