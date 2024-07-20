# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-mongodbatlas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasProvider <a name="MongodbatlasProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new MongodbatlasProvider(Construct Scope, string Id, MongodbatlasProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig">MongodbatlasProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig">MongodbatlasProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId">ResetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey">ResetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken">ResetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud">ResetIsMongodbgovCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl">ResetRealmBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint">ResetStsEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole"></a>

```csharp
private void ResetAssumeRole()
```

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId"></a>

```csharp
private void ResetAwsAccessKeyId()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey"></a>

```csharp
private void ResetAwsSecretAccessKey()
```

##### `ResetAwsSessionToken` <a name="ResetAwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken"></a>

```csharp
private void ResetAwsSessionToken()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetIsMongodbgovCloud` <a name="ResetIsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud"></a>

```csharp
private void ResetIsMongodbgovCloud()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetRealmBaseUrl` <a name="ResetRealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl"></a>

```csharp
private void ResetRealmBaseUrl()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetStsEndpoint` <a name="ResetStsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint"></a>

```csharp
private void ResetStsEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

MongodbatlasProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

MongodbatlasProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

MongodbatlasProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

MongodbatlasProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MongodbatlasProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MongodbatlasProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MongodbatlasProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput">AwsSessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput">IsMongodbgovCloudInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput">RealmBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput">StsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole">AssumeRole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken">AwsSessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud">IsMongodbgovCloud</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl">RealmBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput"></a>

```csharp
public object AssumeRoleInput { get; }
```

- *Type:* object

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput"></a>

```csharp
public string AwsAccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput"></a>

```csharp
public string AwsSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AwsSessionTokenInput`<sup>Optional</sup> <a name="AwsSessionTokenInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput"></a>

```csharp
public string AwsSessionTokenInput { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `IsMongodbgovCloudInput`<sup>Optional</sup> <a name="IsMongodbgovCloudInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput"></a>

```csharp
public object IsMongodbgovCloudInput { get; }
```

- *Type:* object

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `RealmBaseUrlInput`<sup>Optional</sup> <a name="RealmBaseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput"></a>

```csharp
public string RealmBaseUrlInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `StsEndpointInput`<sup>Optional</sup> <a name="StsEndpointInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput"></a>

```csharp
public string StsEndpointInput { get; }
```

- *Type:* string

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole"></a>

```csharp
public object AssumeRole { get; }
```

- *Type:* object

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; }
```

- *Type:* string

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken"></a>

```csharp
public string AwsSessionToken { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `IsMongodbgovCloud`<sup>Optional</sup> <a name="IsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud"></a>

```csharp
public object IsMongodbgovCloud { get; }
```

- *Type:* object

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `RealmBaseUrl`<sup>Optional</sup> <a name="RealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl"></a>

```csharp
public string RealmBaseUrl { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasProviderAssumeRole <a name="MongodbatlasProviderAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new MongodbatlasProviderAssumeRole {
    string Duration = null,
    string ExternalId = null,
    string Policy = null,
    string[] PolicyArns = null,
    string RoleArn = null,
    string SessionName = null,
    string SourceIdentity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string[] TransitiveTagKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration">Duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId">ExternalId</a></code> | <code>string</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy">Policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName">SessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity">SourceIdentity</a></code> | <code>string</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys">TransitiveTagKeys</a></code> | <code>string[]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#duration MongodbatlasProvider#duration}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#external_id MongodbatlasProvider#external_id}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#policy MongodbatlasProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#policy_arns MongodbatlasProvider#policy_arns}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#role_arn MongodbatlasProvider#role_arn}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName"></a>

```csharp
public string SessionName { get; set; }
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#session_name MongodbatlasProvider#session_name}

---

##### `SourceIdentity`<sup>Optional</sup> <a name="SourceIdentity" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity"></a>

```csharp
public string SourceIdentity { get; set; }
```

- *Type:* string

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#source_identity MongodbatlasProvider#source_identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#tags MongodbatlasProvider#tags}

---

##### `TransitiveTagKeys`<sup>Optional</sup> <a name="TransitiveTagKeys" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys"></a>

```csharp
public string[] TransitiveTagKeys { get; set; }
```

- *Type:* string[]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#transitive_tag_keys MongodbatlasProvider#transitive_tag_keys}

---

### MongodbatlasProviderConfig <a name="MongodbatlasProviderConfig" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new MongodbatlasProviderConfig {
    string Alias = null,
    object AssumeRole = null,
    string AwsAccessKeyId = null,
    string AwsSecretAccessKey = null,
    string AwsSessionToken = null,
    string BaseUrl = null,
    object IsMongodbgovCloud = null,
    string PrivateKey = null,
    string PublicKey = null,
    string RealmBaseUrl = null,
    string Region = null,
    string SecretName = null,
    string StsEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole">AssumeRole</a></code> | <code>object</code> | assume_role block. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | AWS API Access Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | AWS API Access Secret Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken">AwsSessionToken</a></code> | <code>string</code> | AWS Security Token Service provided session token. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | MongoDB Atlas Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud">IsMongodbgovCloud</a></code> | <code>object</code> | MongoDB Atlas Base URL default to gov. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | MongoDB Atlas Programmatic Private Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | MongoDB Atlas Programmatic Public Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl">RealmBaseUrl</a></code> | <code>string</code> | MongoDB Realm Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region">Region</a></code> | <code>string</code> | Region where secret is stored as part of AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of secret stored in AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#alias MongodbatlasProvider#alias}

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole"></a>

```csharp
public object AssumeRole { get; set; }
```

- *Type:* object

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#assume_role MongodbatlasProvider#assume_role}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; set; }
```

- *Type:* string

AWS API Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; set; }
```

- *Type:* string

AWS API Access Secret Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken"></a>

```csharp
public string AwsSessionToken { get; set; }
```

- *Type:* string

AWS Security Token Service provided session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#aws_session_token MongodbatlasProvider#aws_session_token}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

MongoDB Atlas Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#base_url MongodbatlasProvider#base_url}

---

##### `IsMongodbgovCloud`<sup>Optional</sup> <a name="IsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud"></a>

```csharp
public object IsMongodbgovCloud { get; set; }
```

- *Type:* object

MongoDB Atlas Base URL default to gov.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

MongoDB Atlas Programmatic Private Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#private_key MongodbatlasProvider#private_key}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

MongoDB Atlas Programmatic Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#public_key MongodbatlasProvider#public_key}

---

##### `RealmBaseUrl`<sup>Optional</sup> <a name="RealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl"></a>

```csharp
public string RealmBaseUrl { get; set; }
```

- *Type:* string

MongoDB Realm Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#realm_base_url MongodbatlasProvider#realm_base_url}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where secret is stored as part of AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#region MongodbatlasProvider#region}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of secret stored in AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#secret_name MongodbatlasProvider#secret_name}

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; set; }
```

- *Type:* string

AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.4/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}

---



