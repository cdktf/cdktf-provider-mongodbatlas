# `globalClusterConfig` Submodule <a name="`globalClusterConfig` Submodule" id="@cdktf/provider-mongodbatlas.globalClusterConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalClusterConfig <a name="GlobalClusterConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config mongodbatlas_global_cluster_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.NewGlobalClusterConfig(scope Construct, id *string, config GlobalClusterConfigConfig) GlobalClusterConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig">GlobalClusterConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig">GlobalClusterConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings">PutCustomZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces">PutManagedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings">ResetCustomZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces">ResetManagedNamespaces</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomZoneMappings` <a name="PutCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings"></a>

```go
func PutCustomZoneMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedNamespaces` <a name="PutManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces"></a>

```go
func PutManagedNamespaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomZoneMappings` <a name="ResetCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings"></a>

```go
func ResetCustomZoneMappings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedNamespaces` <a name="ResetManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces"></a>

```go
func ResetManagedNamespaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.GlobalClusterConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.GlobalClusterConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.GlobalClusterConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.GlobalClusterConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlobalClusterConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlobalClusterConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GlobalClusterConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping">CustomZoneMapping</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings">CustomZoneMappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces">ManagedNamespaces</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput">CustomZoneMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput">ManagedNamespacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomZoneMapping`<sup>Required</sup> <a name="CustomZoneMapping" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping"></a>

```go
func CustomZoneMapping() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CustomZoneMappings`<sup>Required</sup> <a name="CustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings"></a>

```go
func CustomZoneMappings() GlobalClusterConfigCustomZoneMappingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a>

---

##### `ManagedNamespaces`<sup>Required</sup> <a name="ManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces"></a>

```go
func ManagedNamespaces() GlobalClusterConfigManagedNamespacesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CustomZoneMappingsInput`<sup>Optional</sup> <a name="CustomZoneMappingsInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput"></a>

```go
func CustomZoneMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedNamespacesInput`<sup>Optional</sup> <a name="ManagedNamespacesInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput"></a>

```go
func ManagedNamespacesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalClusterConfigConfig <a name="GlobalClusterConfigConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

&globalclusterconfig.GlobalClusterConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ProjectId: *string,
	CustomZoneMappings: interface{},
	Id: *string,
	ManagedNamespaces: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings">CustomZoneMappings</a></code> | <code>interface{}</code> | custom_zone_mappings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#id GlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces">ManagedNamespaces</a></code> | <code>interface{}</code> | managed_namespaces block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}.

---

##### `CustomZoneMappings`<sup>Optional</sup> <a name="CustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings"></a>

```go
CustomZoneMappings interface{}
```

- *Type:* interface{}

custom_zone_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#custom_zone_mappings GlobalClusterConfig#custom_zone_mappings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#id GlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedNamespaces`<sup>Optional</sup> <a name="ManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces"></a>

```go
ManagedNamespaces interface{}
```

- *Type:* interface{}

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#managed_namespaces GlobalClusterConfig#managed_namespaces}

---

### GlobalClusterConfigCustomZoneMappings <a name="GlobalClusterConfigCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

&globalclusterconfig.GlobalClusterConfigCustomZoneMappings {
	Location: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#location GlobalClusterConfig#location}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#location GlobalClusterConfig#location}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}.

---

### GlobalClusterConfigManagedNamespaces <a name="GlobalClusterConfigManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

&globalclusterconfig.GlobalClusterConfigManagedNamespaces {
	Collection: *string,
	CustomShardKey: *string,
	Db: *string,
	IsCustomShardKeyHashed: interface{},
	IsShardKeyUnique: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection">Collection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey">CustomShardKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db">Db</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#db GlobalClusterConfig#db}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed">IsCustomShardKeyHashed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique">IsShardKeyUnique</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}. |

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection"></a>

```go
Collection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}.

---

##### `CustomShardKey`<sup>Required</sup> <a name="CustomShardKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey"></a>

```go
CustomShardKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}.

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db"></a>

```go
Db *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#db GlobalClusterConfig#db}.

---

##### `IsCustomShardKeyHashed`<sup>Optional</sup> <a name="IsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed"></a>

```go
IsCustomShardKeyHashed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}.

---

##### `IsShardKeyUnique`<sup>Optional</sup> <a name="IsShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique"></a>

```go
IsShardKeyUnique interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalClusterConfigCustomZoneMappingsList <a name="GlobalClusterConfigCustomZoneMappingsList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.NewGlobalClusterConfigCustomZoneMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlobalClusterConfigCustomZoneMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get"></a>

```go
func Get(index *f64) GlobalClusterConfigCustomZoneMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalClusterConfigCustomZoneMappingsOutputReference <a name="GlobalClusterConfigCustomZoneMappingsOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.NewGlobalClusterConfigCustomZoneMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlobalClusterConfigCustomZoneMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalClusterConfigManagedNamespacesList <a name="GlobalClusterConfigManagedNamespacesList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.NewGlobalClusterConfigManagedNamespacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlobalClusterConfigManagedNamespacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get"></a>

```go
func Get(index *f64) GlobalClusterConfigManagedNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalClusterConfigManagedNamespacesOutputReference <a name="GlobalClusterConfigManagedNamespacesOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/globalclusterconfig"

globalclusterconfig.NewGlobalClusterConfigManagedNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlobalClusterConfigManagedNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed">ResetIsCustomShardKeyHashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique">ResetIsShardKeyUnique</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCustomShardKeyHashed` <a name="ResetIsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed"></a>

```go
func ResetIsCustomShardKeyHashed()
```

##### `ResetIsShardKeyUnique` <a name="ResetIsShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique"></a>

```go
func ResetIsShardKeyUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput">CollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput">CustomShardKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput">DbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput">IsCustomShardKeyHashedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput">IsShardKeyUniqueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection">Collection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey">CustomShardKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db">Db</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed">IsCustomShardKeyHashed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique">IsShardKeyUnique</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput"></a>

```go
func CollectionInput() *string
```

- *Type:* *string

---

##### `CustomShardKeyInput`<sup>Optional</sup> <a name="CustomShardKeyInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput"></a>

```go
func CustomShardKeyInput() *string
```

- *Type:* *string

---

##### `DbInput`<sup>Optional</sup> <a name="DbInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput"></a>

```go
func DbInput() *string
```

- *Type:* *string

---

##### `IsCustomShardKeyHashedInput`<sup>Optional</sup> <a name="IsCustomShardKeyHashedInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput"></a>

```go
func IsCustomShardKeyHashedInput() interface{}
```

- *Type:* interface{}

---

##### `IsShardKeyUniqueInput`<sup>Optional</sup> <a name="IsShardKeyUniqueInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput"></a>

```go
func IsShardKeyUniqueInput() interface{}
```

- *Type:* interface{}

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection"></a>

```go
func Collection() *string
```

- *Type:* *string

---

##### `CustomShardKey`<sup>Required</sup> <a name="CustomShardKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey"></a>

```go
func CustomShardKey() *string
```

- *Type:* *string

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db"></a>

```go
func Db() *string
```

- *Type:* *string

---

##### `IsCustomShardKeyHashed`<sup>Required</sup> <a name="IsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed"></a>

```go
func IsCustomShardKeyHashed() interface{}
```

- *Type:* interface{}

---

##### `IsShardKeyUnique`<sup>Required</sup> <a name="IsShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique"></a>

```go
func IsShardKeyUnique() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



