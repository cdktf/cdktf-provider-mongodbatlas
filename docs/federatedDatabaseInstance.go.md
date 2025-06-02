# `federatedDatabaseInstance` Submodule <a name="`federatedDatabaseInstance` Submodule" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedDatabaseInstance <a name="FederatedDatabaseInstance" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance mongodbatlas_federated_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstance(scope Construct, id *string, config FederatedDatabaseInstanceConfig) FederatedDatabaseInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig">FederatedDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig">FederatedDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putCloudProviderConfig">PutCloudProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putDataProcessRegion">PutDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putStorageDatabases">PutStorageDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putStorageStores">PutStorageStores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetCloudProviderConfig">ResetCloudProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetDataProcessRegion">ResetDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetStorageDatabases">ResetStorageDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetStorageStores">ResetStorageStores</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudProviderConfig` <a name="PutCloudProviderConfig" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putCloudProviderConfig"></a>

```go
func PutCloudProviderConfig(value FederatedDatabaseInstanceCloudProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putCloudProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig">FederatedDatabaseInstanceCloudProviderConfig</a>

---

##### `PutDataProcessRegion` <a name="PutDataProcessRegion" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putDataProcessRegion"></a>

```go
func PutDataProcessRegion(value FederatedDatabaseInstanceDataProcessRegion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putDataProcessRegion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion">FederatedDatabaseInstanceDataProcessRegion</a>

---

##### `PutStorageDatabases` <a name="PutStorageDatabases" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putStorageDatabases"></a>

```go
func PutStorageDatabases(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putStorageDatabases.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageStores` <a name="PutStorageStores" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putStorageStores"></a>

```go
func PutStorageStores(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.putStorageStores.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudProviderConfig` <a name="ResetCloudProviderConfig" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetCloudProviderConfig"></a>

```go
func ResetCloudProviderConfig()
```

##### `ResetDataProcessRegion` <a name="ResetDataProcessRegion" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetDataProcessRegion"></a>

```go
func ResetDataProcessRegion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetStorageDatabases` <a name="ResetStorageDatabases" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetStorageDatabases"></a>

```go
func ResetStorageDatabases()
```

##### `ResetStorageStores` <a name="ResetStorageStores" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.resetStorageStores"></a>

```go
func ResetStorageStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FederatedDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.FederatedDatabaseInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.FederatedDatabaseInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.FederatedDatabaseInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.FederatedDatabaseInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FederatedDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FederatedDatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FederatedDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FederatedDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.cloudProviderConfig">CloudProviderConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference">FederatedDatabaseInstanceCloudProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference">FederatedDatabaseInstanceDataProcessRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageDatabases">StorageDatabases</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList">FederatedDatabaseInstanceStorageDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageStores">StorageStores</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList">FederatedDatabaseInstanceStorageStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.cloudProviderConfigInput">CloudProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig">FederatedDatabaseInstanceCloudProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.dataProcessRegionInput">DataProcessRegionInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion">FederatedDatabaseInstanceDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageDatabasesInput">StorageDatabasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageStoresInput">StorageStoresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudProviderConfig`<sup>Required</sup> <a name="CloudProviderConfig" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.cloudProviderConfig"></a>

```go
func CloudProviderConfig() FederatedDatabaseInstanceCloudProviderConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference">FederatedDatabaseInstanceCloudProviderConfigOutputReference</a>

---

##### `DataProcessRegion`<sup>Required</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.dataProcessRegion"></a>

```go
func DataProcessRegion() FederatedDatabaseInstanceDataProcessRegionOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference">FederatedDatabaseInstanceDataProcessRegionOutputReference</a>

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageDatabases`<sup>Required</sup> <a name="StorageDatabases" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageDatabases"></a>

```go
func StorageDatabases() FederatedDatabaseInstanceStorageDatabasesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList">FederatedDatabaseInstanceStorageDatabasesList</a>

---

##### `StorageStores`<sup>Required</sup> <a name="StorageStores" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageStores"></a>

```go
func StorageStores() FederatedDatabaseInstanceStorageStoresList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList">FederatedDatabaseInstanceStorageStoresList</a>

---

##### `CloudProviderConfigInput`<sup>Optional</sup> <a name="CloudProviderConfigInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.cloudProviderConfigInput"></a>

```go
func CloudProviderConfigInput() FederatedDatabaseInstanceCloudProviderConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig">FederatedDatabaseInstanceCloudProviderConfig</a>

---

##### `DataProcessRegionInput`<sup>Optional</sup> <a name="DataProcessRegionInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.dataProcessRegionInput"></a>

```go
func DataProcessRegionInput() FederatedDatabaseInstanceDataProcessRegion
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion">FederatedDatabaseInstanceDataProcessRegion</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StorageDatabasesInput`<sup>Optional</sup> <a name="StorageDatabasesInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageDatabasesInput"></a>

```go
func StorageDatabasesInput() interface{}
```

- *Type:* interface{}

---

##### `StorageStoresInput`<sup>Optional</sup> <a name="StorageStoresInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.storageStoresInput"></a>

```go
func StorageStoresInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedDatabaseInstanceCloudProviderConfig <a name="FederatedDatabaseInstanceCloudProviderConfig" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceCloudProviderConfig {
	Aws: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws">FederatedDatabaseInstanceCloudProviderConfigAws</a></code> | aws block. |

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig.property.aws"></a>

```go
Aws FederatedDatabaseInstanceCloudProviderConfigAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws">FederatedDatabaseInstanceCloudProviderConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#aws FederatedDatabaseInstance#aws}

---

### FederatedDatabaseInstanceCloudProviderConfigAws <a name="FederatedDatabaseInstanceCloudProviderConfigAws" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceCloudProviderConfigAws {
	RoleId: *string,
	TestS3Bucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws.property.roleId">RoleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#role_id FederatedDatabaseInstance#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws.property.testS3Bucket">TestS3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#test_s3_bucket FederatedDatabaseInstance#test_s3_bucket}. |

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#role_id FederatedDatabaseInstance#role_id}.

---

##### `TestS3Bucket`<sup>Required</sup> <a name="TestS3Bucket" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws.property.testS3Bucket"></a>

```go
TestS3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#test_s3_bucket FederatedDatabaseInstance#test_s3_bucket}.

---

### FederatedDatabaseInstanceConfig <a name="FederatedDatabaseInstanceConfig" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProjectId: *string,
	CloudProviderConfig: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig,
	DataProcessRegion: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion,
	Id: *string,
	StorageDatabases: interface{},
	StorageStores: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#project_id FederatedDatabaseInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.cloudProviderConfig">CloudProviderConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig">FederatedDatabaseInstanceCloudProviderConfig</a></code> | cloud_provider_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion">FederatedDatabaseInstanceDataProcessRegion</a></code> | data_process_region block. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#id FederatedDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.storageDatabases">StorageDatabases</a></code> | <code>interface{}</code> | storage_databases block. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.storageStores">StorageStores</a></code> | <code>interface{}</code> | storage_stores block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#project_id FederatedDatabaseInstance#project_id}.

---

##### `CloudProviderConfig`<sup>Optional</sup> <a name="CloudProviderConfig" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.cloudProviderConfig"></a>

```go
CloudProviderConfig FederatedDatabaseInstanceCloudProviderConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig">FederatedDatabaseInstanceCloudProviderConfig</a>

cloud_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#cloud_provider_config FederatedDatabaseInstance#cloud_provider_config}

---

##### `DataProcessRegion`<sup>Optional</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.dataProcessRegion"></a>

```go
DataProcessRegion FederatedDatabaseInstanceDataProcessRegion
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion">FederatedDatabaseInstanceDataProcessRegion</a>

data_process_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#data_process_region FederatedDatabaseInstance#data_process_region}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#id FederatedDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageDatabases`<sup>Optional</sup> <a name="StorageDatabases" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.storageDatabases"></a>

```go
StorageDatabases interface{}
```

- *Type:* interface{}

storage_databases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#storage_databases FederatedDatabaseInstance#storage_databases}

---

##### `StorageStores`<sup>Optional</sup> <a name="StorageStores" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceConfig.property.storageStores"></a>

```go
StorageStores interface{}
```

- *Type:* interface{}

storage_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#storage_stores FederatedDatabaseInstance#storage_stores}

---

### FederatedDatabaseInstanceDataProcessRegion <a name="FederatedDatabaseInstanceDataProcessRegion" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceDataProcessRegion {
	CloudProvider: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#cloud_provider FederatedDatabaseInstance#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#region FederatedDatabaseInstance#region}. |

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion.property.cloudProvider"></a>

```go
CloudProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#cloud_provider FederatedDatabaseInstance#cloud_provider}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#region FederatedDatabaseInstance#region}.

---

### FederatedDatabaseInstanceStorageDatabases <a name="FederatedDatabaseInstanceStorageDatabases" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageDatabases {
	Collections: interface{},
	Name: *string,
	Views: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases.property.collections">Collections</a></code> | <code>interface{}</code> | collections block. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases.property.views">Views</a></code> | <code>interface{}</code> | views block. |

---

##### `Collections`<sup>Optional</sup> <a name="Collections" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases.property.collections"></a>

```go
Collections interface{}
```

- *Type:* interface{}

collections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#collections FederatedDatabaseInstance#collections}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}.

---

##### `Views`<sup>Optional</sup> <a name="Views" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabases.property.views"></a>

```go
Views interface{}
```

- *Type:* interface{}

views block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#views FederatedDatabaseInstance#views}

---

### FederatedDatabaseInstanceStorageDatabasesCollections <a name="FederatedDatabaseInstanceStorageDatabasesCollections" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageDatabasesCollections {
	DataSources: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollections.property.dataSources">DataSources</a></code> | <code>interface{}</code> | data_sources block. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollections.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}. |

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollections.property.dataSources"></a>

```go
DataSources interface{}
```

- *Type:* interface{}

data_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#data_sources FederatedDatabaseInstance#data_sources}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollections.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}.

---

### FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources <a name="FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources {
	AllowInsecure: interface{},
	Collection: *string,
	CollectionRegex: *string,
	Database: *string,
	DatabaseRegex: *string,
	DatasetName: *string,
	DefaultFormat: *string,
	Path: *string,
	ProvenanceFieldName: *string,
	StoreName: *string,
	Urls: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#allow_insecure FederatedDatabaseInstance#allow_insecure}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.collection">Collection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#collection FederatedDatabaseInstance#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.collectionRegex">CollectionRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#collection_regex FederatedDatabaseInstance#collection_regex}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#database FederatedDatabaseInstance#database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.databaseRegex">DatabaseRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#database_regex FederatedDatabaseInstance#database_regex}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.datasetName">DatasetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#dataset_name FederatedDatabaseInstance#dataset_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.defaultFormat">DefaultFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#default_format FederatedDatabaseInstance#default_format}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#path FederatedDatabaseInstance#path}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.provenanceFieldName">ProvenanceFieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#provenance_field_name FederatedDatabaseInstance#provenance_field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.storeName">StoreName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#store_name FederatedDatabaseInstance#store_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.urls">Urls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#urls FederatedDatabaseInstance#urls}. |

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.allowInsecure"></a>

```go
AllowInsecure interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#allow_insecure FederatedDatabaseInstance#allow_insecure}.

---

##### `Collection`<sup>Optional</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.collection"></a>

```go
Collection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#collection FederatedDatabaseInstance#collection}.

---

##### `CollectionRegex`<sup>Optional</sup> <a name="CollectionRegex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.collectionRegex"></a>

```go
CollectionRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#collection_regex FederatedDatabaseInstance#collection_regex}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#database FederatedDatabaseInstance#database}.

---

##### `DatabaseRegex`<sup>Optional</sup> <a name="DatabaseRegex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.databaseRegex"></a>

```go
DatabaseRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#database_regex FederatedDatabaseInstance#database_regex}.

---

##### `DatasetName`<sup>Optional</sup> <a name="DatasetName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.datasetName"></a>

```go
DatasetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#dataset_name FederatedDatabaseInstance#dataset_name}.

---

##### `DefaultFormat`<sup>Optional</sup> <a name="DefaultFormat" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.defaultFormat"></a>

```go
DefaultFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#default_format FederatedDatabaseInstance#default_format}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#path FederatedDatabaseInstance#path}.

---

##### `ProvenanceFieldName`<sup>Optional</sup> <a name="ProvenanceFieldName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.provenanceFieldName"></a>

```go
ProvenanceFieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#provenance_field_name FederatedDatabaseInstance#provenance_field_name}.

---

##### `StoreName`<sup>Optional</sup> <a name="StoreName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.storeName"></a>

```go
StoreName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#store_name FederatedDatabaseInstance#store_name}.

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.property.urls"></a>

```go
Urls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#urls FederatedDatabaseInstance#urls}.

---

### FederatedDatabaseInstanceStorageDatabasesViews <a name="FederatedDatabaseInstanceStorageDatabasesViews" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViews.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageDatabasesViews {

}
```


### FederatedDatabaseInstanceStorageStores <a name="FederatedDatabaseInstanceStorageStores" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageStores {
	AdditionalStorageClasses: *[]*string,
	AllowInsecure: interface{},
	Bucket: *string,
	ClusterName: *string,
	DefaultFormat: *string,
	Delimiter: *string,
	IncludeTags: interface{},
	Name: *string,
	Prefix: *string,
	ProjectId: *string,
	Provider: *string,
	Public: *string,
	ReadPreference: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference,
	Region: *string,
	Urls: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.additionalStorageClasses">AdditionalStorageClasses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#additional_storage_classes FederatedDatabaseInstance#additional_storage_classes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#allow_insecure FederatedDatabaseInstance#allow_insecure}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#bucket FederatedDatabaseInstance#bucket}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#cluster_name FederatedDatabaseInstance#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.defaultFormat">DefaultFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#default_format FederatedDatabaseInstance#default_format}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#delimiter FederatedDatabaseInstance#delimiter}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.includeTags">IncludeTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#include_tags FederatedDatabaseInstance#include_tags}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#prefix FederatedDatabaseInstance#prefix}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#project_id FederatedDatabaseInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.provider">Provider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#provider FederatedDatabaseInstance#provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.public">Public</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#public FederatedDatabaseInstance#public}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.readPreference">ReadPreference</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference">FederatedDatabaseInstanceStorageStoresReadPreference</a></code> | read_preference block. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#region FederatedDatabaseInstance#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.urls">Urls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#urls FederatedDatabaseInstance#urls}. |

---

##### `AdditionalStorageClasses`<sup>Optional</sup> <a name="AdditionalStorageClasses" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.additionalStorageClasses"></a>

```go
AdditionalStorageClasses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#additional_storage_classes FederatedDatabaseInstance#additional_storage_classes}.

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.allowInsecure"></a>

```go
AllowInsecure interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#allow_insecure FederatedDatabaseInstance#allow_insecure}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#bucket FederatedDatabaseInstance#bucket}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#cluster_name FederatedDatabaseInstance#cluster_name}.

---

##### `DefaultFormat`<sup>Optional</sup> <a name="DefaultFormat" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.defaultFormat"></a>

```go
DefaultFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#default_format FederatedDatabaseInstance#default_format}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#delimiter FederatedDatabaseInstance#delimiter}.

---

##### `IncludeTags`<sup>Optional</sup> <a name="IncludeTags" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.includeTags"></a>

```go
IncludeTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#include_tags FederatedDatabaseInstance#include_tags}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#prefix FederatedDatabaseInstance#prefix}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#project_id FederatedDatabaseInstance#project_id}.

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.provider"></a>

```go
Provider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#provider FederatedDatabaseInstance#provider}.

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.public"></a>

```go
Public *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#public FederatedDatabaseInstance#public}.

---

##### `ReadPreference`<sup>Optional</sup> <a name="ReadPreference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.readPreference"></a>

```go
ReadPreference FederatedDatabaseInstanceStorageStoresReadPreference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference">FederatedDatabaseInstanceStorageStoresReadPreference</a>

read_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#read_preference FederatedDatabaseInstance#read_preference}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#region FederatedDatabaseInstance#region}.

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStores.property.urls"></a>

```go
Urls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#urls FederatedDatabaseInstance#urls}.

---

### FederatedDatabaseInstanceStorageStoresReadPreference <a name="FederatedDatabaseInstanceStorageStoresReadPreference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageStoresReadPreference {
	MaxStalenessSeconds: *f64,
	Mode: *string,
	TagSets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference.property.maxStalenessSeconds">MaxStalenessSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#max_staleness_seconds FederatedDatabaseInstance#max_staleness_seconds}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#mode FederatedDatabaseInstance#mode}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference.property.tagSets">TagSets</a></code> | <code>interface{}</code> | tag_sets block. |

---

##### `MaxStalenessSeconds`<sup>Optional</sup> <a name="MaxStalenessSeconds" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference.property.maxStalenessSeconds"></a>

```go
MaxStalenessSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#max_staleness_seconds FederatedDatabaseInstance#max_staleness_seconds}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#mode FederatedDatabaseInstance#mode}.

---

##### `TagSets`<sup>Optional</sup> <a name="TagSets" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference.property.tagSets"></a>

```go
TagSets interface{}
```

- *Type:* interface{}

tag_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#tag_sets FederatedDatabaseInstance#tag_sets}

---

### FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets <a name="FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets {
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#tags FederatedDatabaseInstance#tags}

---

### FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags <a name="FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

&federateddatabaseinstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#value FederatedDatabaseInstance#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_database_instance#value FederatedDatabaseInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference <a name="FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn">IamAssumedRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamUserArn">IamUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3BucketInput">TestS3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3Bucket">TestS3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws">FederatedDatabaseInstanceCloudProviderConfigAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `IamAssumedRoleArn`<sup>Required</sup> <a name="IamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn"></a>

```go
func IamAssumedRoleArn() *string
```

- *Type:* *string

---

##### `IamUserArn`<sup>Required</sup> <a name="IamUserArn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamUserArn"></a>

```go
func IamUserArn() *string
```

- *Type:* *string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `TestS3BucketInput`<sup>Optional</sup> <a name="TestS3BucketInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3BucketInput"></a>

```go
func TestS3BucketInput() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `TestS3Bucket`<sup>Required</sup> <a name="TestS3Bucket" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3Bucket"></a>

```go
func TestS3Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedDatabaseInstanceCloudProviderConfigAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws">FederatedDatabaseInstanceCloudProviderConfigAws</a>

---


### FederatedDatabaseInstanceCloudProviderConfigOutputReference <a name="FederatedDatabaseInstanceCloudProviderConfigOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceCloudProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedDatabaseInstanceCloudProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.putAws">PutAws</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAws` <a name="PutAws" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.putAws"></a>

```go
func PutAws(value FederatedDatabaseInstanceCloudProviderConfigAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws">FederatedDatabaseInstanceCloudProviderConfigAws</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference">FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.awsInput">AwsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws">FederatedDatabaseInstanceCloudProviderConfigAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig">FederatedDatabaseInstanceCloudProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.aws"></a>

```go
func Aws() FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference">FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.awsInput"></a>

```go
func AwsInput() FederatedDatabaseInstanceCloudProviderConfigAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigAws">FederatedDatabaseInstanceCloudProviderConfigAws</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedDatabaseInstanceCloudProviderConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceCloudProviderConfig">FederatedDatabaseInstanceCloudProviderConfig</a>

---


### FederatedDatabaseInstanceDataProcessRegionOutputReference <a name="FederatedDatabaseInstanceDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceDataProcessRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedDatabaseInstanceDataProcessRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion">FederatedDatabaseInstanceDataProcessRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedDatabaseInstanceDataProcessRegion
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceDataProcessRegion">FederatedDatabaseInstanceDataProcessRegion</a>

---


### FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList <a name="FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.get"></a>

```go
func Get(index *f64) FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference <a name="FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetCollection">ResetCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetCollectionRegex">ResetCollectionRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDatabaseRegex">ResetDatabaseRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDatasetName">ResetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDefaultFormat">ResetDefaultFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetProvenanceFieldName">ResetProvenanceFieldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetStoreName">ResetStoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetAllowInsecure"></a>

```go
func ResetAllowInsecure()
```

##### `ResetCollection` <a name="ResetCollection" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetCollection"></a>

```go
func ResetCollection()
```

##### `ResetCollectionRegex` <a name="ResetCollectionRegex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetCollectionRegex"></a>

```go
func ResetCollectionRegex()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDatabaseRegex` <a name="ResetDatabaseRegex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDatabaseRegex"></a>

```go
func ResetDatabaseRegex()
```

##### `ResetDatasetName` <a name="ResetDatasetName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDatasetName"></a>

```go
func ResetDatasetName()
```

##### `ResetDefaultFormat` <a name="ResetDefaultFormat" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetDefaultFormat"></a>

```go
func ResetDefaultFormat()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetProvenanceFieldName` <a name="ResetProvenanceFieldName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetProvenanceFieldName"></a>

```go
func ResetProvenanceFieldName()
```

##### `ResetStoreName` <a name="ResetStoreName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetStoreName"></a>

```go
func ResetStoreName()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resetUrls"></a>

```go
func ResetUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionInput">CollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegexInput">CollectionRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegexInput">DatabaseRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetNameInput">DatasetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormatInput">DefaultFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldNameInput">ProvenanceFieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.storeNameInput">StoreNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.urlsInput">UrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collection">Collection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex">CollectionRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex">DatabaseRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetName">DatasetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat">DefaultFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName">ProvenanceFieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName">StoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.urls">Urls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecureInput"></a>

```go
func AllowInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionInput"></a>

```go
func CollectionInput() *string
```

- *Type:* *string

---

##### `CollectionRegexInput`<sup>Optional</sup> <a name="CollectionRegexInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegexInput"></a>

```go
func CollectionRegexInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DatabaseRegexInput`<sup>Optional</sup> <a name="DatabaseRegexInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegexInput"></a>

```go
func DatabaseRegexInput() *string
```

- *Type:* *string

---

##### `DatasetNameInput`<sup>Optional</sup> <a name="DatasetNameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetNameInput"></a>

```go
func DatasetNameInput() *string
```

- *Type:* *string

---

##### `DefaultFormatInput`<sup>Optional</sup> <a name="DefaultFormatInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormatInput"></a>

```go
func DefaultFormatInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProvenanceFieldNameInput`<sup>Optional</sup> <a name="ProvenanceFieldNameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldNameInput"></a>

```go
func ProvenanceFieldNameInput() *string
```

- *Type:* *string

---

##### `StoreNameInput`<sup>Optional</sup> <a name="StoreNameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.storeNameInput"></a>

```go
func StoreNameInput() *string
```

- *Type:* *string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.urlsInput"></a>

```go
func UrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure"></a>

```go
func AllowInsecure() interface{}
```

- *Type:* interface{}

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collection"></a>

```go
func Collection() *string
```

- *Type:* *string

---

##### `CollectionRegex`<sup>Required</sup> <a name="CollectionRegex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex"></a>

```go
func CollectionRegex() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DatabaseRegex`<sup>Required</sup> <a name="DatabaseRegex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex"></a>

```go
func DatabaseRegex() *string
```

- *Type:* *string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetName"></a>

```go
func DatasetName() *string
```

- *Type:* *string

---

##### `DefaultFormat`<sup>Required</sup> <a name="DefaultFormat" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat"></a>

```go
func DefaultFormat() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ProvenanceFieldName`<sup>Required</sup> <a name="ProvenanceFieldName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName"></a>

```go
func ProvenanceFieldName() *string
```

- *Type:* *string

---

##### `StoreName`<sup>Required</sup> <a name="StoreName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName"></a>

```go
func StoreName() *string
```

- *Type:* *string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.urls"></a>

```go
func Urls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageDatabasesCollectionsList <a name="FederatedDatabaseInstanceStorageDatabasesCollectionsList" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesCollectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedDatabaseInstanceStorageDatabasesCollectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.get"></a>

```go
func Get(index *f64) FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference <a name="FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.putDataSources">PutDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSources` <a name="PutDataSources" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.putDataSources"></a>

```go
func PutDataSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.putDataSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resetDataSources"></a>

```go
func ResetDataSources()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList">FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.dataSourcesInput">DataSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.dataSources"></a>

```go
func DataSources() FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList">FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList</a>

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.dataSourcesInput"></a>

```go
func DataSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageDatabasesList <a name="FederatedDatabaseInstanceStorageDatabasesList" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedDatabaseInstanceStorageDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.get"></a>

```go
func Get(index *f64) FederatedDatabaseInstanceStorageDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageDatabasesOutputReference <a name="FederatedDatabaseInstanceStorageDatabasesOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedDatabaseInstanceStorageDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.putCollections">PutCollections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.putViews">PutViews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resetCollections">ResetCollections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resetViews">ResetViews</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollections` <a name="PutCollections" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.putCollections"></a>

```go
func PutCollections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.putCollections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutViews` <a name="PutViews" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.putViews"></a>

```go
func PutViews(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.putViews.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCollections` <a name="ResetCollections" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resetCollections"></a>

```go
func ResetCollections()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetViews` <a name="ResetViews" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.resetViews"></a>

```go
func ResetViews()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.collections">Collections</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList">FederatedDatabaseInstanceStorageDatabasesCollectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.maxWildcardCollections">MaxWildcardCollections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.views">Views</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList">FederatedDatabaseInstanceStorageDatabasesViewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.collectionsInput">CollectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.viewsInput">ViewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Collections`<sup>Required</sup> <a name="Collections" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.collections"></a>

```go
func Collections() FederatedDatabaseInstanceStorageDatabasesCollectionsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesCollectionsList">FederatedDatabaseInstanceStorageDatabasesCollectionsList</a>

---

##### `MaxWildcardCollections`<sup>Required</sup> <a name="MaxWildcardCollections" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.maxWildcardCollections"></a>

```go
func MaxWildcardCollections() *f64
```

- *Type:* *f64

---

##### `Views`<sup>Required</sup> <a name="Views" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.views"></a>

```go
func Views() FederatedDatabaseInstanceStorageDatabasesViewsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList">FederatedDatabaseInstanceStorageDatabasesViewsList</a>

---

##### `CollectionsInput`<sup>Optional</sup> <a name="CollectionsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.collectionsInput"></a>

```go
func CollectionsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ViewsInput`<sup>Optional</sup> <a name="ViewsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.viewsInput"></a>

```go
func ViewsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageDatabasesViewsList <a name="FederatedDatabaseInstanceStorageDatabasesViewsList" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesViewsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedDatabaseInstanceStorageDatabasesViewsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.get"></a>

```go
func Get(index *f64) FederatedDatabaseInstanceStorageDatabasesViewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageDatabasesViewsOutputReference <a name="FederatedDatabaseInstanceStorageDatabasesViewsOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageDatabasesViewsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedDatabaseInstanceStorageDatabasesViewsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.pipeline">Pipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.pipeline"></a>

```go
func Pipeline() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageStoresList <a name="FederatedDatabaseInstanceStorageStoresList" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageStoresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedDatabaseInstanceStorageStoresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.get"></a>

```go
func Get(index *f64) FederatedDatabaseInstanceStorageStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageStoresOutputReference <a name="FederatedDatabaseInstanceStorageStoresOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageStoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedDatabaseInstanceStorageStoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.putReadPreference">PutReadPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetAdditionalStorageClasses">ResetAdditionalStorageClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetDefaultFormat">ResetDefaultFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetIncludeTags">ResetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetProvider">ResetProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetReadPreference">ResetReadPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReadPreference` <a name="PutReadPreference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.putReadPreference"></a>

```go
func PutReadPreference(value FederatedDatabaseInstanceStorageStoresReadPreference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.putReadPreference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference">FederatedDatabaseInstanceStorageStoresReadPreference</a>

---

##### `ResetAdditionalStorageClasses` <a name="ResetAdditionalStorageClasses" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetAdditionalStorageClasses"></a>

```go
func ResetAdditionalStorageClasses()
```

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetAllowInsecure"></a>

```go
func ResetAllowInsecure()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetDefaultFormat` <a name="ResetDefaultFormat" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetDefaultFormat"></a>

```go
func ResetDefaultFormat()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetIncludeTags` <a name="ResetIncludeTags" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetIncludeTags"></a>

```go
func ResetIncludeTags()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetProvider` <a name="ResetProvider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetProvider"></a>

```go
func ResetProvider()
```

##### `ResetPublic` <a name="ResetPublic" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetPublic"></a>

```go
func ResetPublic()
```

##### `ResetReadPreference` <a name="ResetReadPreference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetReadPreference"></a>

```go
func ResetReadPreference()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.resetUrls"></a>

```go
func ResetUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.readPreference">ReadPreference</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference">FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.additionalStorageClassesInput">AdditionalStorageClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.defaultFormatInput">DefaultFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.includeTagsInput">IncludeTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.providerInput">ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.publicInput">PublicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.readPreferenceInput">ReadPreferenceInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference">FederatedDatabaseInstanceStorageStoresReadPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.urlsInput">UrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.additionalStorageClasses">AdditionalStorageClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.defaultFormat">DefaultFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.includeTags">IncludeTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.public">Public</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.urls">Urls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadPreference`<sup>Required</sup> <a name="ReadPreference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.readPreference"></a>

```go
func ReadPreference() FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference">FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference</a>

---

##### `AdditionalStorageClassesInput`<sup>Optional</sup> <a name="AdditionalStorageClassesInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.additionalStorageClassesInput"></a>

```go
func AdditionalStorageClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.allowInsecureInput"></a>

```go
func AllowInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DefaultFormatInput`<sup>Optional</sup> <a name="DefaultFormatInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.defaultFormatInput"></a>

```go
func DefaultFormatInput() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `IncludeTagsInput`<sup>Optional</sup> <a name="IncludeTagsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.includeTagsInput"></a>

```go
func IncludeTagsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.providerInput"></a>

```go
func ProviderInput() *string
```

- *Type:* *string

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.publicInput"></a>

```go
func PublicInput() *string
```

- *Type:* *string

---

##### `ReadPreferenceInput`<sup>Optional</sup> <a name="ReadPreferenceInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.readPreferenceInput"></a>

```go
func ReadPreferenceInput() FederatedDatabaseInstanceStorageStoresReadPreference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference">FederatedDatabaseInstanceStorageStoresReadPreference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.urlsInput"></a>

```go
func UrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalStorageClasses`<sup>Required</sup> <a name="AdditionalStorageClasses" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.additionalStorageClasses"></a>

```go
func AdditionalStorageClasses() *[]*string
```

- *Type:* *[]*string

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.allowInsecure"></a>

```go
func AllowInsecure() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DefaultFormat`<sup>Required</sup> <a name="DefaultFormat" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.defaultFormat"></a>

```go
func DefaultFormat() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `IncludeTags`<sup>Required</sup> <a name="IncludeTags" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.includeTags"></a>

```go
func IncludeTags() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.public"></a>

```go
func Public() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.urls"></a>

```go
func Urls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference <a name="FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.putTagSets">PutTagSets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resetMaxStalenessSeconds">ResetMaxStalenessSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resetTagSets">ResetTagSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagSets` <a name="PutTagSets" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.putTagSets"></a>

```go
func PutTagSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.putTagSets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaxStalenessSeconds` <a name="ResetMaxStalenessSeconds" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resetMaxStalenessSeconds"></a>

```go
func ResetMaxStalenessSeconds()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetTagSets` <a name="ResetTagSets" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resetTagSets"></a>

```go
func ResetTagSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.tagSets">TagSets</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList">FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.maxStalenessSecondsInput">MaxStalenessSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.tagSetsInput">TagSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds">MaxStalenessSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference">FederatedDatabaseInstanceStorageStoresReadPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagSets`<sup>Required</sup> <a name="TagSets" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.tagSets"></a>

```go
func TagSets() FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList">FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList</a>

---

##### `MaxStalenessSecondsInput`<sup>Optional</sup> <a name="MaxStalenessSecondsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.maxStalenessSecondsInput"></a>

```go
func MaxStalenessSecondsInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `TagSetsInput`<sup>Optional</sup> <a name="TagSetsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.tagSetsInput"></a>

```go
func TagSetsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxStalenessSeconds`<sup>Required</sup> <a name="MaxStalenessSeconds" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds"></a>

```go
func MaxStalenessSeconds() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedDatabaseInstanceStorageStoresReadPreference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreference">FederatedDatabaseInstanceStorageStoresReadPreference</a>

---


### FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList <a name="FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.get"></a>

```go
func Get(index *f64) FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference <a name="FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.putTags">PutTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList">FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.tags"></a>

```go
func Tags() FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList">FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList <a name="FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.get"></a>

```go
func Get(index *f64) FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference <a name="FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/federateddatabaseinstance"

federateddatabaseinstance.NewFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.federatedDatabaseInstance.FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



