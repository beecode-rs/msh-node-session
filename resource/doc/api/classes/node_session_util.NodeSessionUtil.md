[@beecode/msh-node-session](../README.md) / [node-session-util](../modules/node_session_util.md) / NodeSessionUtil

# Class: NodeSessionUtil

[node-session-util](../modules/node_session_util.md).NodeSessionUtil

## Table of contents

### Constructors

- [constructor](node_session_util.NodeSessionUtil.md#constructor)

### Properties

- [\_strategy](node_session_util.NodeSessionUtil.md#_strategy)

### Methods

- [createAsyncSession](node_session_util.NodeSessionUtil.md#createasyncsession)
- [createSession](node_session_util.NodeSessionUtil.md#createsession)

## Constructors

### constructor

• **new NodeSessionUtil**(`props?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | `Object` |
| `props.sessionStrategy?` | [`SessionStrategy`](../interfaces/session_strategy_session_strategy.SessionStrategy.md) |

#### Defined in

[node-session-util.ts:7](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/node-session-util.ts#L7)

## Properties

### \_strategy

• `Protected` `Readonly` **\_strategy**: [`SessionStrategy`](../interfaces/session_strategy_session_strategy.SessionStrategy.md)

#### Defined in

[node-session-util.ts:5](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/node-session-util.ts#L5)

## Methods

### createAsyncSession

▸ **createAsyncSession**<`T`\>(`callback`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[node-session-util.ts:13](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/node-session-util.ts#L13)

___

### createSession

▸ **createSession**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[node-session-util.ts:21](https://github.com/beecode-rs/msh-node-session/blob/d83dc09/src/node-session-util.ts#L21)
