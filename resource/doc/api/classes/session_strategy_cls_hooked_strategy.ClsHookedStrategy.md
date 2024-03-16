[@beecode/msh-node-session](../README.md) / [session-strategy/cls-hooked-strategy](../modules/session_strategy_cls_hooked_strategy.md) / ClsHookedStrategy

# Class: ClsHookedStrategy

[session-strategy/cls-hooked-strategy](../modules/session_strategy_cls_hooked_strategy.md).ClsHookedStrategy

## Implements

- [`SessionStrategy`](../interfaces/session_strategy_session_strategy.SessionStrategy.md)

## Table of contents

### Constructors

- [constructor](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#constructor)

### Properties

- [\_ns](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#_ns)

### Accessors

- [NS](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#ns)

### Methods

- [\_throwErrorIfInactiveContext](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#_throwerrorifinactivecontext)
- [clear](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#clear)
- [createSession](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#createsession)
- [get](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#get)
- [set](session_strategy_cls_hooked_strategy.ClsHookedStrategy.md#set)

## Constructors

### constructor

• **new ClsHookedStrategy**(`params?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.nameSpaceId?` | `string` |

#### Defined in

[session-strategy/cls-hooked-strategy.ts:15](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L15)

## Properties

### \_ns

• `Protected` `Readonly` **\_ns**: `Namespace`<`Record`<`string`, `any`\>\>

#### Defined in

[session-strategy/cls-hooked-strategy.ts:8](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L8)

## Accessors

### NS

• `get` **NS**(): `Namespace`<`Record`<`string`, `any`\>\>

#### Returns

`Namespace`<`Record`<`string`, `any`\>\>

#### Defined in

[session-strategy/cls-hooked-strategy.ts:11](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L11)

## Methods

### \_throwErrorIfInactiveContext

▸ `Protected` **_throwErrorIfInactiveContext**(): `void`

#### Returns

`void`

#### Defined in

[session-strategy/cls-hooked-strategy.ts:44](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L44)

___

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

[session-strategy/cls-hooked-strategy.ts:31](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L31)

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

[session-strategy/cls-hooked-strategy.ts:36](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L36)

___

### get

▸ **get**<`T`\>(`key`): `undefined` \| `T`

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

[session-strategy/cls-hooked-strategy.ts:20](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L20)

___

### set

▸ **set**<`T`\>(`key`, `value`): `void`

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

[session-strategy/cls-hooked-strategy.ts:26](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/session-strategy/cls-hooked-strategy.ts#L26)
