# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-mongodbatlas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasProvider <a name="MongodbatlasProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-mongodbatlas'

new provider.MongodbatlasProvider(scope: Construct, id: string, config?: MongodbatlasProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig">MongodbatlasProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig">MongodbatlasProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId">resetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey">resetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken">resetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud">resetIsMongodbgovCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl">resetRealmBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint">resetStsEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```

##### `resetAwsAccessKeyId` <a name="resetAwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId"></a>

```typescript
public resetAwsAccessKeyId(): void
```

##### `resetAwsSecretAccessKey` <a name="resetAwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey"></a>

```typescript
public resetAwsSecretAccessKey(): void
```

##### `resetAwsSessionToken` <a name="resetAwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken"></a>

```typescript
public resetAwsSessionToken(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetIsMongodbgovCloud` <a name="resetIsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud"></a>

```typescript
public resetIsMongodbgovCloud(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetRealmBaseUrl` <a name="resetRealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl"></a>

```typescript
public resetRealmBaseUrl(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName"></a>

```typescript
public resetSecretName(): void
```

##### `resetStsEndpoint` <a name="resetStsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint"></a>

```typescript
public resetStsEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-mongodbatlas'

provider.MongodbatlasProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-mongodbatlas'

provider.MongodbatlasProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-mongodbatlas'

provider.MongodbatlasProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-mongodbatlas'

provider.MongodbatlasProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MongodbatlasProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MongodbatlasProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MongodbatlasProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput">awsAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput">awsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput">awsSessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput">isMongodbgovCloudInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput">realmBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput">stsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole">assumeRole</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken">awsSessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud">isMongodbgovCloud</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl">realmBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint">stsEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: IResolvable | MongodbatlasProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>[]

---

##### `awsAccessKeyIdInput`<sup>Optional</sup> <a name="awsAccessKeyIdInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput"></a>

```typescript
public readonly awsAccessKeyIdInput: string;
```

- *Type:* string

---

##### `awsSecretAccessKeyInput`<sup>Optional</sup> <a name="awsSecretAccessKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput"></a>

```typescript
public readonly awsSecretAccessKeyInput: string;
```

- *Type:* string

---

##### `awsSessionTokenInput`<sup>Optional</sup> <a name="awsSessionTokenInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput"></a>

```typescript
public readonly awsSessionTokenInput: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `isMongodbgovCloudInput`<sup>Optional</sup> <a name="isMongodbgovCloudInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput"></a>

```typescript
public readonly isMongodbgovCloudInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `realmBaseUrlInput`<sup>Optional</sup> <a name="realmBaseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput"></a>

```typescript
public readonly realmBaseUrlInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `stsEndpointInput`<sup>Optional</sup> <a name="stsEndpointInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput"></a>

```typescript
public readonly stsEndpointInput: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole"></a>

```typescript
public readonly assumeRole: IResolvable | MongodbatlasProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>[]

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId"></a>

```typescript
public readonly awsAccessKeyId: string;
```

- *Type:* string

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey"></a>

```typescript
public readonly awsSecretAccessKey: string;
```

- *Type:* string

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken"></a>

```typescript
public readonly awsSessionToken: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `isMongodbgovCloud`<sup>Optional</sup> <a name="isMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud"></a>

```typescript
public readonly isMongodbgovCloud: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `realmBaseUrl`<sup>Optional</sup> <a name="realmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl"></a>

```typescript
public readonly realmBaseUrl: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint"></a>

```typescript
public readonly stsEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasProviderAssumeRole <a name="MongodbatlasProviderAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-mongodbatlas'

const mongodbatlasProviderAssumeRole: provider.MongodbatlasProviderAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration">duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId">externalId</a></code> | <code>string</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy">policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity">sourceIdentity</a></code> | <code>string</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>string[]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#duration MongodbatlasProvider#duration}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#external_id MongodbatlasProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#policy MongodbatlasProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#policy_arns MongodbatlasProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#role_arn MongodbatlasProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#session_name MongodbatlasProvider#session_name}

---

##### `sourceIdentity`<sup>Optional</sup> <a name="sourceIdentity" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity"></a>

```typescript
public readonly sourceIdentity: string;
```

- *Type:* string

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#source_identity MongodbatlasProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#tags MongodbatlasProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys"></a>

```typescript
public readonly transitiveTagKeys: string[];
```

- *Type:* string[]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#transitive_tag_keys MongodbatlasProvider#transitive_tag_keys}

---

### MongodbatlasProviderConfig <a name="MongodbatlasProviderConfig" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-mongodbatlas'

const mongodbatlasProviderConfig: provider.MongodbatlasProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole">assumeRole</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>[]</code> | assume_role block. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>string</code> | AWS API Access Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>string</code> | AWS API Access Secret Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken">awsSessionToken</a></code> | <code>string</code> | AWS Security Token Service provided session token. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | MongoDB Atlas Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud">isMongodbgovCloud</a></code> | <code>boolean \| cdktf.IResolvable</code> | MongoDB Atlas Base URL default to gov. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey">privateKey</a></code> | <code>string</code> | MongoDB Atlas Programmatic Private Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey">publicKey</a></code> | <code>string</code> | MongoDB Atlas Programmatic Public Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl">realmBaseUrl</a></code> | <code>string</code> | MongoDB Realm Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region">region</a></code> | <code>string</code> | Region where secret is stored as part of AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName">secretName</a></code> | <code>string</code> | Name of secret stored in AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint">stsEndpoint</a></code> | <code>string</code> | AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#alias MongodbatlasProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole"></a>

```typescript
public readonly assumeRole: IResolvable | MongodbatlasProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>[]

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#assume_role MongodbatlasProvider#assume_role}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId"></a>

```typescript
public readonly awsAccessKeyId: string;
```

- *Type:* string

AWS API Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey"></a>

```typescript
public readonly awsSecretAccessKey: string;
```

- *Type:* string

AWS API Access Secret Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken"></a>

```typescript
public readonly awsSessionToken: string;
```

- *Type:* string

AWS Security Token Service provided session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#aws_session_token MongodbatlasProvider#aws_session_token}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

MongoDB Atlas Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#base_url MongodbatlasProvider#base_url}

---

##### `isMongodbgovCloud`<sup>Optional</sup> <a name="isMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud"></a>

```typescript
public readonly isMongodbgovCloud: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

MongoDB Atlas Base URL default to gov.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

MongoDB Atlas Programmatic Private Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#private_key MongodbatlasProvider#private_key}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

MongoDB Atlas Programmatic Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#public_key MongodbatlasProvider#public_key}

---

##### `realmBaseUrl`<sup>Optional</sup> <a name="realmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl"></a>

```typescript
public readonly realmBaseUrl: string;
```

- *Type:* string

MongoDB Realm Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#realm_base_url MongodbatlasProvider#realm_base_url}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where secret is stored as part of AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#region MongodbatlasProvider#region}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Name of secret stored in AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#secret_name MongodbatlasProvider#secret_name}

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint"></a>

```typescript
public readonly stsEndpoint: string;
```

- *Type:* string

AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.0/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}

---



