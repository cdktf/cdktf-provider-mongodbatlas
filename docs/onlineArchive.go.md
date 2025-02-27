# `onlineArchive` Submodule <a name="`onlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.onlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineArchive <a name="OnlineArchive" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive mongodbatlas_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.NewOnlineArchive(scope Construct, id *string, config OnlineArchiveConfig) OnlineArchive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig">OnlineArchiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig">OnlineArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule">PutDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion">PutDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields">PutPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType">ResetCollectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataExpirationRule">ResetDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataProcessRegion">ResetDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields">ResetPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation">ResetSyncCreation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria"></a>

```go
func PutCriteria(value OnlineArchiveCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---

##### `PutDataExpirationRule` <a name="PutDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule"></a>

```go
func PutDataExpirationRule(value OnlineArchiveDataExpirationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---

##### `PutDataProcessRegion` <a name="PutDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion"></a>

```go
func PutDataProcessRegion(value OnlineArchiveDataProcessRegion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---

##### `PutPartitionFields` <a name="PutPartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields"></a>

```go
func PutPartitionFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule"></a>

```go
func PutSchedule(value OnlineArchiveSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---

##### `ResetCollectionType` <a name="ResetCollectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType"></a>

```go
func ResetCollectionType()
```

##### `ResetDataExpirationRule` <a name="ResetDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataExpirationRule"></a>

```go
func ResetDataExpirationRule()
```

##### `ResetDataProcessRegion` <a name="ResetDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataProcessRegion"></a>

```go
func ResetDataProcessRegion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId"></a>

```go
func ResetId()
```

##### `ResetPartitionFields` <a name="ResetPartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields"></a>

```go
func ResetPartitionFields()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetSyncCreation` <a name="ResetSyncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation"></a>

```go
func ResetSyncCreation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OnlineArchive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.OnlineArchive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.OnlineArchive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.OnlineArchive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.OnlineArchive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OnlineArchive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OnlineArchive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OnlineArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OnlineArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId">ArchiveId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRule">DataExpirationRule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference">OnlineArchiveDataExpirationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference">OnlineArchiveDataProcessRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields">PartitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput">CollectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput">CollNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRuleInput">DataExpirationRuleInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegionInput">DataProcessRegionInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput">PartitionFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput">SyncCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType">CollectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName">CollName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation">SyncCreation</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchiveId`<sup>Required</sup> <a name="ArchiveId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId"></a>

```go
func ArchiveId() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria"></a>

```go
func Criteria() OnlineArchiveCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a>

---

##### `DataExpirationRule`<sup>Required</sup> <a name="DataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRule"></a>

```go
func DataExpirationRule() OnlineArchiveDataExpirationRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference">OnlineArchiveDataExpirationRuleOutputReference</a>

---

##### `DataProcessRegion`<sup>Required</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegion"></a>

```go
func DataProcessRegion() OnlineArchiveDataProcessRegionOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference">OnlineArchiveDataProcessRegionOutputReference</a>

---

##### `PartitionFields`<sup>Required</sup> <a name="PartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields"></a>

```go
func PartitionFields() OnlineArchivePartitionFieldsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule"></a>

```go
func Schedule() OnlineArchiveScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CollectionTypeInput`<sup>Optional</sup> <a name="CollectionTypeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput"></a>

```go
func CollectionTypeInput() *string
```

- *Type:* *string

---

##### `CollNameInput`<sup>Optional</sup> <a name="CollNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput"></a>

```go
func CollNameInput() *string
```

- *Type:* *string

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput"></a>

```go
func CriteriaInput() OnlineArchiveCriteria
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---

##### `DataExpirationRuleInput`<sup>Optional</sup> <a name="DataExpirationRuleInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRuleInput"></a>

```go
func DataExpirationRuleInput() OnlineArchiveDataExpirationRule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---

##### `DataProcessRegionInput`<sup>Optional</sup> <a name="DataProcessRegionInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegionInput"></a>

```go
func DataProcessRegionInput() OnlineArchiveDataProcessRegion
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PartitionFieldsInput`<sup>Optional</sup> <a name="PartitionFieldsInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput"></a>

```go
func PartitionFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput"></a>

```go
func ScheduleInput() OnlineArchiveSchedule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---

##### `SyncCreationInput`<sup>Optional</sup> <a name="SyncCreationInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput"></a>

```go
func SyncCreationInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType"></a>

```go
func CollectionType() *string
```

- *Type:* *string

---

##### `CollName`<sup>Required</sup> <a name="CollName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName"></a>

```go
func CollName() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SyncCreation`<sup>Required</sup> <a name="SyncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation"></a>

```go
func SyncCreation() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineArchiveConfig <a name="OnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

&onlinearchive.OnlineArchiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	CollName: *string,
	Criteria: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.onlineArchive.OnlineArchiveCriteria,
	DbName: *string,
	ProjectId: *string,
	CollectionType: *string,
	DataExpirationRule: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.onlineArchive.OnlineArchiveDataExpirationRule,
	DataProcessRegion: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.onlineArchive.OnlineArchiveDataProcessRegion,
	Id: *string,
	PartitionFields: interface{},
	Paused: interface{},
	Schedule: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.onlineArchive.OnlineArchiveSchedule,
	SyncCreation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName">CollName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#coll_name OnlineArchive#coll_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName">DbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#db_name OnlineArchive#db_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#project_id OnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType">CollectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#collection_type OnlineArchive#collection_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataExpirationRule">DataExpirationRule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | data_expiration_rule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | data_process_region block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#id OnlineArchive#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields">PartitionFields</a></code> | <code>interface{}</code> | partition_fields block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused">Paused</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#paused OnlineArchive#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation">SyncCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}.

---

##### `CollName`<sup>Required</sup> <a name="CollName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName"></a>

```go
CollName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#coll_name OnlineArchive#coll_name}.

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria"></a>

```go
Criteria OnlineArchiveCriteria
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#criteria OnlineArchive#criteria}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#db_name OnlineArchive#db_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#project_id OnlineArchive#project_id}.

---

##### `CollectionType`<sup>Optional</sup> <a name="CollectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType"></a>

```go
CollectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#collection_type OnlineArchive#collection_type}.

---

##### `DataExpirationRule`<sup>Optional</sup> <a name="DataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataExpirationRule"></a>

```go
DataExpirationRule OnlineArchiveDataExpirationRule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

data_expiration_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#data_expiration_rule OnlineArchive#data_expiration_rule}

---

##### `DataProcessRegion`<sup>Optional</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataProcessRegion"></a>

```go
DataProcessRegion OnlineArchiveDataProcessRegion
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

data_process_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#data_process_region OnlineArchive#data_process_region}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#id OnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionFields`<sup>Optional</sup> <a name="PartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields"></a>

```go
PartitionFields interface{}
```

- *Type:* interface{}

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#partition_fields OnlineArchive#partition_fields}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#paused OnlineArchive#paused}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule"></a>

```go
Schedule OnlineArchiveSchedule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#schedule OnlineArchive#schedule}

---

##### `SyncCreation`<sup>Optional</sup> <a name="SyncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation"></a>

```go
SyncCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}.

---

### OnlineArchiveCriteria <a name="OnlineArchiveCriteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

&onlinearchive.OnlineArchiveCriteria {
	Type: *string,
	DateField: *string,
	DateFormat: *string,
	ExpireAfterDays: *f64,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField">DateField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#date_field OnlineArchive#date_field}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#date_format OnlineArchive#date_format}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays">ExpireAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#query OnlineArchive#query}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `DateField`<sup>Optional</sup> <a name="DateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField"></a>

```go
DateField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#date_field OnlineArchive#date_field}.

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#date_format OnlineArchive#date_format}.

---

##### `ExpireAfterDays`<sup>Optional</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays"></a>

```go
ExpireAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#query OnlineArchive#query}.

---

### OnlineArchiveDataExpirationRule <a name="OnlineArchiveDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

&onlinearchive.OnlineArchiveDataExpirationRule {
	ExpireAfterDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.property.expireAfterDays">ExpireAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}. |

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.property.expireAfterDays"></a>

```go
ExpireAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

### OnlineArchiveDataProcessRegion <a name="OnlineArchiveDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

&onlinearchive.OnlineArchiveDataProcessRegion {
	CloudProvider: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#cloud_provider OnlineArchive#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#region OnlineArchive#region}. |

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.cloudProvider"></a>

```go
CloudProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#cloud_provider OnlineArchive#cloud_provider}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#region OnlineArchive#region}.

---

### OnlineArchivePartitionFields <a name="OnlineArchivePartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

&onlinearchive.OnlineArchivePartitionFields {
	FieldName: *string,
	Order: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#field_name OnlineArchive#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#order OnlineArchive#order}. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#field_name OnlineArchive#field_name}.

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#order OnlineArchive#order}.

---

### OnlineArchiveSchedule <a name="OnlineArchiveSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

&onlinearchive.OnlineArchiveSchedule {
	Type: *string,
	DayOfMonth: *f64,
	DayOfWeek: *f64,
	EndHour: *f64,
	EndMinute: *f64,
	StartHour: *f64,
	StartMinute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth">DayOfMonth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour">EndHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#end_hour OnlineArchive#end_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute">EndMinute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#end_minute OnlineArchive#end_minute}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour">StartHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#start_hour OnlineArchive#start_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute">StartMinute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#start_minute OnlineArchive#start_minute}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `DayOfMonth`<sup>Optional</sup> <a name="DayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth"></a>

```go
DayOfMonth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek"></a>

```go
DayOfWeek *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}.

---

##### `EndHour`<sup>Optional</sup> <a name="EndHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour"></a>

```go
EndHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#end_hour OnlineArchive#end_hour}.

---

##### `EndMinute`<sup>Optional</sup> <a name="EndMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute"></a>

```go
EndMinute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#end_minute OnlineArchive#end_minute}.

---

##### `StartHour`<sup>Optional</sup> <a name="StartHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour"></a>

```go
StartHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#start_hour OnlineArchive#start_hour}.

---

##### `StartMinute`<sup>Optional</sup> <a name="StartMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute"></a>

```go
StartMinute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/online_archive#start_minute OnlineArchive#start_minute}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineArchiveCriteriaOutputReference <a name="OnlineArchiveCriteriaOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.NewOnlineArchiveCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OnlineArchiveCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField">ResetDateField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays">ResetExpireAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateField` <a name="ResetDateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField"></a>

```go
func ResetDateField()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetExpireAfterDays` <a name="ResetExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays"></a>

```go
func ResetExpireAfterDays()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput">DateFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput">ExpireAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField">DateField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays">ExpireAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateFieldInput`<sup>Optional</sup> <a name="DateFieldInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput"></a>

```go
func DateFieldInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `ExpireAfterDaysInput`<sup>Optional</sup> <a name="ExpireAfterDaysInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput"></a>

```go
func ExpireAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DateField`<sup>Required</sup> <a name="DateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField"></a>

```go
func DateField() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays"></a>

```go
func ExpireAfterDays() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() OnlineArchiveCriteria
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---


### OnlineArchiveDataExpirationRuleOutputReference <a name="OnlineArchiveDataExpirationRuleOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.NewOnlineArchiveDataExpirationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OnlineArchiveDataExpirationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDaysInput">ExpireAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDays">ExpireAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireAfterDaysInput`<sup>Optional</sup> <a name="ExpireAfterDaysInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDaysInput"></a>

```go
func ExpireAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDays"></a>

```go
func ExpireAfterDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() OnlineArchiveDataExpirationRule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---


### OnlineArchiveDataProcessRegionOutputReference <a name="OnlineArchiveDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.NewOnlineArchiveDataProcessRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OnlineArchiveDataProcessRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetCloudProvider"></a>

```go
func ResetCloudProvider()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() OnlineArchiveDataProcessRegion
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---


### OnlineArchivePartitionFieldsList <a name="OnlineArchivePartitionFieldsList" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.NewOnlineArchivePartitionFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OnlineArchivePartitionFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get"></a>

```go
func Get(index *f64) OnlineArchivePartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnlineArchivePartitionFieldsOutputReference <a name="OnlineArchivePartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.NewOnlineArchivePartitionFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OnlineArchivePartitionFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType">FieldType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType"></a>

```go
func FieldType() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnlineArchiveScheduleOutputReference <a name="OnlineArchiveScheduleOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/onlinearchive"

onlinearchive.NewOnlineArchiveScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OnlineArchiveScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth">ResetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour">ResetEndHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute">ResetEndMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour">ResetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute">ResetStartMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfMonth` <a name="ResetDayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth"></a>

```go
func ResetDayOfMonth()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek"></a>

```go
func ResetDayOfWeek()
```

##### `ResetEndHour` <a name="ResetEndHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour"></a>

```go
func ResetEndHour()
```

##### `ResetEndMinute` <a name="ResetEndMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute"></a>

```go
func ResetEndMinute()
```

##### `ResetStartHour` <a name="ResetStartHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour"></a>

```go
func ResetStartHour()
```

##### `ResetStartMinute` <a name="ResetStartMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute"></a>

```go
func ResetStartMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput">EndHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput">EndMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput">StartHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput">StartMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour">EndHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute">EndMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour">StartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute">StartMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput"></a>

```go
func DayOfMonthInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *f64
```

- *Type:* *f64

---

##### `EndHourInput`<sup>Optional</sup> <a name="EndHourInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput"></a>

```go
func EndHourInput() *f64
```

- *Type:* *f64

---

##### `EndMinuteInput`<sup>Optional</sup> <a name="EndMinuteInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput"></a>

```go
func EndMinuteInput() *f64
```

- *Type:* *f64

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput"></a>

```go
func StartHourInput() *f64
```

- *Type:* *f64

---

##### `StartMinuteInput`<sup>Optional</sup> <a name="StartMinuteInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput"></a>

```go
func StartMinuteInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth"></a>

```go
func DayOfMonth() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *f64
```

- *Type:* *f64

---

##### `EndHour`<sup>Required</sup> <a name="EndHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour"></a>

```go
func EndHour() *f64
```

- *Type:* *f64

---

##### `EndMinute`<sup>Required</sup> <a name="EndMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute"></a>

```go
func EndMinute() *f64
```

- *Type:* *f64

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour"></a>

```go
func StartHour() *f64
```

- *Type:* *f64

---

##### `StartMinute`<sup>Required</sup> <a name="StartMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute"></a>

```go
func StartMinute() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() OnlineArchiveSchedule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---



