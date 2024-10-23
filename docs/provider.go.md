# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-mongodbatlas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasProvider <a name="MongodbatlasProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/provider"

provider.NewMongodbatlasProvider(scope Construct, id *string, config MongodbatlasProviderConfig) MongodbatlasProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig">MongodbatlasProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole"></a>

```go
func ResetAssumeRole()
```

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId"></a>

```go
func ResetAwsAccessKeyId()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey"></a>

```go
func ResetAwsSecretAccessKey()
```

##### `ResetAwsSessionToken` <a name="ResetAwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken"></a>

```go
func ResetAwsSessionToken()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetIsMongodbgovCloud` <a name="ResetIsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud"></a>

```go
func ResetIsMongodbgovCloud()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey"></a>

```go
func ResetPublicKey()
```

##### `ResetRealmBaseUrl` <a name="ResetRealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl"></a>

```go
func ResetRealmBaseUrl()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName"></a>

```go
func ResetSecretName()
```

##### `ResetStsEndpoint` <a name="ResetStsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint"></a>

```go
func ResetStsEndpoint()
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

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/provider"

provider.MongodbatlasProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/provider"

provider.MongodbatlasProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/provider"

provider.MongodbatlasProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/provider"

provider.MongodbatlasProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MongodbatlasProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MongodbatlasProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MongodbatlasProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput">AwsSessionTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput">IsMongodbgovCloudInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput">RealmBaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput">StsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole">AssumeRole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken">AwsSessionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud">IsMongodbgovCloud</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl">RealmBaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint">StsEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput"></a>

```go
func AssumeRoleInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput"></a>

```go
func AwsAccessKeyIdInput() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput"></a>

```go
func AwsSecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AwsSessionTokenInput`<sup>Optional</sup> <a name="AwsSessionTokenInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput"></a>

```go
func AwsSessionTokenInput() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `IsMongodbgovCloudInput`<sup>Optional</sup> <a name="IsMongodbgovCloudInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput"></a>

```go
func IsMongodbgovCloudInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `RealmBaseUrlInput`<sup>Optional</sup> <a name="RealmBaseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput"></a>

```go
func RealmBaseUrlInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `StsEndpointInput`<sup>Optional</sup> <a name="StsEndpointInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput"></a>

```go
func StsEndpointInput() *string
```

- *Type:* *string

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole"></a>

```go
func AssumeRole() interface{}
```

- *Type:* interface{}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId"></a>

```go
func AwsAccessKeyId() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey"></a>

```go
func AwsSecretAccessKey() *string
```

- *Type:* *string

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken"></a>

```go
func AwsSessionToken() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `IsMongodbgovCloud`<sup>Optional</sup> <a name="IsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud"></a>

```go
func IsMongodbgovCloud() interface{}
```

- *Type:* interface{}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `RealmBaseUrl`<sup>Optional</sup> <a name="RealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl"></a>

```go
func RealmBaseUrl() *string
```

- *Type:* *string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint"></a>

```go
func StsEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasProviderAssumeRole <a name="MongodbatlasProviderAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/provider"

&provider.MongodbatlasProviderAssumeRole {
	Duration: *string,
	ExternalId: *string,
	Policy: *string,
	PolicyArns: *[]*string,
	RoleArn: *string,
	SessionName: *string,
	SourceIdentity: *string,
	Tags: *map[string]*string,
	TransitiveTagKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration">Duration</a></code> | <code>*string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId">ExternalId</a></code> | <code>*string</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy">Policy</a></code> | <code>*string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns">PolicyArns</a></code> | <code>*[]*string</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName">SessionName</a></code> | <code>*string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity">SourceIdentity</a></code> | <code>*string</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys">TransitiveTagKeys</a></code> | <code>*[]*string</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#duration MongodbatlasProvider#duration}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#external_id MongodbatlasProvider#external_id}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#policy MongodbatlasProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns"></a>

```go
PolicyArns *[]*string
```

- *Type:* *[]*string

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#policy_arns MongodbatlasProvider#policy_arns}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#role_arn MongodbatlasProvider#role_arn}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName"></a>

```go
SessionName *string
```

- *Type:* *string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#session_name MongodbatlasProvider#session_name}

---

##### `SourceIdentity`<sup>Optional</sup> <a name="SourceIdentity" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity"></a>

```go
SourceIdentity *string
```

- *Type:* *string

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#source_identity MongodbatlasProvider#source_identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#tags MongodbatlasProvider#tags}

---

##### `TransitiveTagKeys`<sup>Optional</sup> <a name="TransitiveTagKeys" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys"></a>

```go
TransitiveTagKeys *[]*string
```

- *Type:* *[]*string

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#transitive_tag_keys MongodbatlasProvider#transitive_tag_keys}

---

### MongodbatlasProviderConfig <a name="MongodbatlasProviderConfig" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/provider"

&provider.MongodbatlasProviderConfig {
	Alias: *string,
	AssumeRole: interface{},
	AwsAccessKeyId: *string,
	AwsSecretAccessKey: *string,
	AwsSessionToken: *string,
	BaseUrl: *string,
	IsMongodbgovCloud: interface{},
	PrivateKey: *string,
	PublicKey: *string,
	RealmBaseUrl: *string,
	Region: *string,
	SecretName: *string,
	StsEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole">AssumeRole</a></code> | <code>interface{}</code> | assume_role block. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | AWS API Access Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>*string</code> | AWS API Access Secret Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken">AwsSessionToken</a></code> | <code>*string</code> | AWS Security Token Service provided session token. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | MongoDB Atlas Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud">IsMongodbgovCloud</a></code> | <code>interface{}</code> | MongoDB Atlas Base URL default to gov. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | MongoDB Atlas Programmatic Private Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | MongoDB Atlas Programmatic Public Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl">RealmBaseUrl</a></code> | <code>*string</code> | MongoDB Realm Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region">Region</a></code> | <code>*string</code> | Region where secret is stored as part of AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName">SecretName</a></code> | <code>*string</code> | Name of secret stored in AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint">StsEndpoint</a></code> | <code>*string</code> | AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#alias MongodbatlasProvider#alias}

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole"></a>

```go
AssumeRole interface{}
```

- *Type:* interface{}

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#assume_role MongodbatlasProvider#assume_role}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId"></a>

```go
AwsAccessKeyId *string
```

- *Type:* *string

AWS API Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey"></a>

```go
AwsSecretAccessKey *string
```

- *Type:* *string

AWS API Access Secret Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken"></a>

```go
AwsSessionToken *string
```

- *Type:* *string

AWS Security Token Service provided session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#aws_session_token MongodbatlasProvider#aws_session_token}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

MongoDB Atlas Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#base_url MongodbatlasProvider#base_url}

---

##### `IsMongodbgovCloud`<sup>Optional</sup> <a name="IsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud"></a>

```go
IsMongodbgovCloud interface{}
```

- *Type:* interface{}

MongoDB Atlas Base URL default to gov.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

MongoDB Atlas Programmatic Private Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#private_key MongodbatlasProvider#private_key}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

MongoDB Atlas Programmatic Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#public_key MongodbatlasProvider#public_key}

---

##### `RealmBaseUrl`<sup>Optional</sup> <a name="RealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl"></a>

```go
RealmBaseUrl *string
```

- *Type:* *string

MongoDB Realm Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#realm_base_url MongodbatlasProvider#realm_base_url}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where secret is stored as part of AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#region MongodbatlasProvider#region}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of secret stored in AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#secret_name MongodbatlasProvider#secret_name}

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint"></a>

```go
StsEndpoint *string
```

- *Type:* *string

AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}

---



