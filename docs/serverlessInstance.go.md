# `serverlessInstance` Submodule <a name="`serverlessInstance` Submodule" id="@cdktf/provider-mongodbatlas.serverlessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessInstance <a name="ServerlessInstance" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance mongodbatlas_serverless_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.NewServerlessInstance(scope Construct, id *string, config ServerlessInstanceConfig) ServerlessInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig">ServerlessInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig">ServerlessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetAutoIndexing">ResetAutoIndexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetContinuousBackupEnabled">ResetContinuousBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetLinks">ResetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetStateName">ResetStateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTerminationProtectionEnabled">ResetTerminationProtectionEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks"></a>

```go
func PutLinks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoIndexing` <a name="ResetAutoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetAutoIndexing"></a>

```go
func ResetAutoIndexing()
```

##### `ResetContinuousBackupEnabled` <a name="ResetContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetContinuousBackupEnabled"></a>

```go
func ResetContinuousBackupEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLinks` <a name="ResetLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetLinks"></a>

```go
func ResetLinks()
```

##### `ResetStateName` <a name="ResetStateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetStateName"></a>

```go
func ResetStateName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTerminationProtectionEnabled` <a name="ResetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTerminationProtectionEnabled"></a>

```go
func ResetTerminationProtectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServerlessInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.ServerlessInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.ServerlessInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.ServerlessInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.ServerlessInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServerlessInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServerlessInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServerlessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServerlessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsPrivateEndpointSrv">ConnectionStringsPrivateEndpointSrv</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsStandardSrv">ConnectionStringsStandardSrv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.createDate">CreateDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.links">Links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList">ServerlessInstanceLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.mongoDbVersion">MongoDbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList">ServerlessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexingInput">AutoIndexingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabledInput">ContinuousBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.linksInput">LinksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderNameInput">ProviderSettingsBackingProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderNameInput">ProviderSettingsProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionNameInput">ProviderSettingsRegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateNameInput">StateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabledInput">TerminationProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexing">AutoIndexing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabled">ContinuousBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderName">ProviderSettingsBackingProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderName">ProviderSettingsProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionName">ProviderSettingsRegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateName">StateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionStringsPrivateEndpointSrv`<sup>Required</sup> <a name="ConnectionStringsPrivateEndpointSrv" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsPrivateEndpointSrv"></a>

```go
func ConnectionStringsPrivateEndpointSrv() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionStringsStandardSrv`<sup>Required</sup> <a name="ConnectionStringsStandardSrv" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsStandardSrv"></a>

```go
func ConnectionStringsStandardSrv() *string
```

- *Type:* *string

---

##### `CreateDate`<sup>Required</sup> <a name="CreateDate" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.createDate"></a>

```go
func CreateDate() *string
```

- *Type:* *string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.links"></a>

```go
func Links() ServerlessInstanceLinksList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList">ServerlessInstanceLinksList</a>

---

##### `MongoDbVersion`<sup>Required</sup> <a name="MongoDbVersion" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.mongoDbVersion"></a>

```go
func MongoDbVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tags"></a>

```go
func Tags() ServerlessInstanceTagsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList">ServerlessInstanceTagsList</a>

---

##### `AutoIndexingInput`<sup>Optional</sup> <a name="AutoIndexingInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexingInput"></a>

```go
func AutoIndexingInput() interface{}
```

- *Type:* interface{}

---

##### `ContinuousBackupEnabledInput`<sup>Optional</sup> <a name="ContinuousBackupEnabledInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabledInput"></a>

```go
func ContinuousBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.linksInput"></a>

```go
func LinksInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderSettingsBackingProviderNameInput`<sup>Optional</sup> <a name="ProviderSettingsBackingProviderNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderNameInput"></a>

```go
func ProviderSettingsBackingProviderNameInput() *string
```

- *Type:* *string

---

##### `ProviderSettingsProviderNameInput`<sup>Optional</sup> <a name="ProviderSettingsProviderNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderNameInput"></a>

```go
func ProviderSettingsProviderNameInput() *string
```

- *Type:* *string

---

##### `ProviderSettingsRegionNameInput`<sup>Optional</sup> <a name="ProviderSettingsRegionNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionNameInput"></a>

```go
func ProviderSettingsRegionNameInput() *string
```

- *Type:* *string

---

##### `StateNameInput`<sup>Optional</sup> <a name="StateNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateNameInput"></a>

```go
func StateNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TerminationProtectionEnabledInput`<sup>Optional</sup> <a name="TerminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabledInput"></a>

```go
func TerminationProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoIndexing`<sup>Required</sup> <a name="AutoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexing"></a>

```go
func AutoIndexing() interface{}
```

- *Type:* interface{}

---

##### `ContinuousBackupEnabled`<sup>Required</sup> <a name="ContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabled"></a>

```go
func ContinuousBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderSettingsBackingProviderName`<sup>Required</sup> <a name="ProviderSettingsBackingProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderName"></a>

```go
func ProviderSettingsBackingProviderName() *string
```

- *Type:* *string

---

##### `ProviderSettingsProviderName`<sup>Required</sup> <a name="ProviderSettingsProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderName"></a>

```go
func ProviderSettingsProviderName() *string
```

- *Type:* *string

---

##### `ProviderSettingsRegionName`<sup>Required</sup> <a name="ProviderSettingsRegionName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionName"></a>

```go
func ProviderSettingsRegionName() *string
```

- *Type:* *string

---

##### `StateName`<sup>Required</sup> <a name="StateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateName"></a>

```go
func StateName() *string
```

- *Type:* *string

---

##### `TerminationProtectionEnabled`<sup>Required</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabled"></a>

```go
func TerminationProtectionEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessInstanceConfig <a name="ServerlessInstanceConfig" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

&serverlessinstance.ServerlessInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProjectId: *string,
	ProviderSettingsBackingProviderName: *string,
	ProviderSettingsProviderName: *string,
	ProviderSettingsRegionName: *string,
	AutoIndexing: interface{},
	ContinuousBackupEnabled: interface{},
	Id: *string,
	Links: interface{},
	StateName: *string,
	Tags: interface{},
	TerminationProtectionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#name ServerlessInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsBackingProviderName">ProviderSettingsBackingProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsProviderName">ProviderSettingsProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsRegionName">ProviderSettingsRegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.autoIndexing">AutoIndexing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#auto_indexing ServerlessInstance#auto_indexing}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.continuousBackupEnabled">ContinuousBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#id ServerlessInstance#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.links">Links</a></code> | <code>interface{}</code> | links block. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.stateName">StateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#name ServerlessInstance#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}.

---

##### `ProviderSettingsBackingProviderName`<sup>Required</sup> <a name="ProviderSettingsBackingProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsBackingProviderName"></a>

```go
ProviderSettingsBackingProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}.

---

##### `ProviderSettingsProviderName`<sup>Required</sup> <a name="ProviderSettingsProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsProviderName"></a>

```go
ProviderSettingsProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}.

---

##### `ProviderSettingsRegionName`<sup>Required</sup> <a name="ProviderSettingsRegionName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsRegionName"></a>

```go
ProviderSettingsRegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}.

---

##### `AutoIndexing`<sup>Optional</sup> <a name="AutoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.autoIndexing"></a>

```go
AutoIndexing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#auto_indexing ServerlessInstance#auto_indexing}.

---

##### `ContinuousBackupEnabled`<sup>Optional</sup> <a name="ContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.continuousBackupEnabled"></a>

```go
ContinuousBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#id ServerlessInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Links`<sup>Optional</sup> <a name="Links" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.links"></a>

```go
Links interface{}
```

- *Type:* interface{}

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#links ServerlessInstance#links}

---

##### `StateName`<sup>Optional</sup> <a name="StateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.stateName"></a>

```go
StateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#tags ServerlessInstance#tags}

---

##### `TerminationProtectionEnabled`<sup>Optional</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.terminationProtectionEnabled"></a>

```go
TerminationProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}.

---

### ServerlessInstanceLinks <a name="ServerlessInstanceLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

&serverlessinstance.ServerlessInstanceLinks {
	Href: *string,
	Rel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.href">Href</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#href ServerlessInstance#href}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.rel">Rel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#rel ServerlessInstance#rel}. |

---

##### `Href`<sup>Optional</sup> <a name="Href" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.href"></a>

```go
Href *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#href ServerlessInstance#href}.

---

##### `Rel`<sup>Optional</sup> <a name="Rel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.rel"></a>

```go
Rel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#rel ServerlessInstance#rel}.

---

### ServerlessInstanceTags <a name="ServerlessInstanceTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

&serverlessinstance.ServerlessInstanceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#key ServerlessInstance#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#value ServerlessInstance#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#key ServerlessInstance#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/serverless_instance#value ServerlessInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessInstanceLinksList <a name="ServerlessInstanceLinksList" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.NewServerlessInstanceLinksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServerlessInstanceLinksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get"></a>

```go
func Get(index *f64) ServerlessInstanceLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerlessInstanceLinksOutputReference <a name="ServerlessInstanceLinksOutputReference" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.NewServerlessInstanceLinksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServerlessInstanceLinksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetHref">ResetHref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetRel">ResetRel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHref` <a name="ResetHref" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetHref"></a>

```go
func ResetHref()
```

##### `ResetRel` <a name="ResetRel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetRel"></a>

```go
func ResetRel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.hrefInput">HrefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.relInput">RelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.href">Href</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.rel">Rel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HrefInput`<sup>Optional</sup> <a name="HrefInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.hrefInput"></a>

```go
func HrefInput() *string
```

- *Type:* *string

---

##### `RelInput`<sup>Optional</sup> <a name="RelInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.relInput"></a>

```go
func RelInput() *string
```

- *Type:* *string

---

##### `Href`<sup>Required</sup> <a name="Href" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.href"></a>

```go
func Href() *string
```

- *Type:* *string

---

##### `Rel`<sup>Required</sup> <a name="Rel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.rel"></a>

```go
func Rel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerlessInstanceTagsList <a name="ServerlessInstanceTagsList" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.NewServerlessInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServerlessInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get"></a>

```go
func Get(index *f64) ServerlessInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerlessInstanceTagsOutputReference <a name="ServerlessInstanceTagsOutputReference" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/serverlessinstance"

serverlessinstance.NewServerlessInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServerlessInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



