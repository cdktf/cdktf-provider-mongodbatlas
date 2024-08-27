# `dataMongodbatlasCustomDbRoles` Submodule <a name="`dataMongodbatlasCustomDbRoles` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCustomDbRoles <a name="DataMongodbatlasCustomDbRoles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/custom_db_roles mongodbatlas_custom_db_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRoles(scope Construct, id *string, config DataMongodbatlasCustomDbRolesConfig) DataMongodbatlasCustomDbRoles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig">DataMongodbatlasCustomDbRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig">DataMongodbatlasCustomDbRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCustomDbRoles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRoles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRoles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRoles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRoles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasCustomDbRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasCustomDbRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasCustomDbRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/custom_db_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCustomDbRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList">DataMongodbatlasCustomDbRolesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.results"></a>

```go
func Results() DataMongodbatlasCustomDbRolesResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList">DataMongodbatlasCustomDbRolesResultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRoles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCustomDbRolesConfig <a name="DataMongodbatlasCustomDbRolesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

&datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRolesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/custom_db_roles#project_id DataMongodbatlasCustomDbRoles#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/custom_db_roles#id DataMongodbatlasCustomDbRoles#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/custom_db_roles#project_id DataMongodbatlasCustomDbRoles#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/custom_db_roles#id DataMongodbatlasCustomDbRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasCustomDbRolesResults <a name="DataMongodbatlasCustomDbRolesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

&datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRolesResults {

}
```


### DataMongodbatlasCustomDbRolesResultsActions <a name="DataMongodbatlasCustomDbRolesResultsActions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

&datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRolesResultsActions {

}
```


### DataMongodbatlasCustomDbRolesResultsActionsResources <a name="DataMongodbatlasCustomDbRolesResultsActionsResources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

&datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRolesResultsActionsResources {

}
```


### DataMongodbatlasCustomDbRolesResultsInheritedRoles <a name="DataMongodbatlasCustomDbRolesResultsInheritedRoles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

&datamongodbatlascustomdbroles.DataMongodbatlasCustomDbRolesResultsInheritedRoles {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCustomDbRolesResultsActionsList <a name="DataMongodbatlasCustomDbRolesResultsActionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCustomDbRolesResultsActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCustomDbRolesResultsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCustomDbRolesResultsActionsOutputReference <a name="DataMongodbatlasCustomDbRolesResultsActionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCustomDbRolesResultsActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList">DataMongodbatlasCustomDbRolesResultsActionsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActions">DataMongodbatlasCustomDbRolesResultsActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.resources"></a>

```go
func Resources() DataMongodbatlasCustomDbRolesResultsActionsResourcesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList">DataMongodbatlasCustomDbRolesResultsActionsResourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCustomDbRolesResultsActions
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActions">DataMongodbatlasCustomDbRolesResultsActions</a>

---


### DataMongodbatlasCustomDbRolesResultsActionsResourcesList <a name="DataMongodbatlasCustomDbRolesResultsActionsResourcesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsActionsResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCustomDbRolesResultsActionsResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference <a name="DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.cluster">Cluster</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.collectionName">CollectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResources">DataMongodbatlasCustomDbRolesResultsActionsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.cluster"></a>

```go
func Cluster() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.collectionName"></a>

```go
func CollectionName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCustomDbRolesResultsActionsResources
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsResources">DataMongodbatlasCustomDbRolesResultsActionsResources</a>

---


### DataMongodbatlasCustomDbRolesResultsInheritedRolesList <a name="DataMongodbatlasCustomDbRolesResultsInheritedRolesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsInheritedRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCustomDbRolesResultsInheritedRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference <a name="DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRoles">DataMongodbatlasCustomDbRolesResultsInheritedRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCustomDbRolesResultsInheritedRoles
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRoles">DataMongodbatlasCustomDbRolesResultsInheritedRoles</a>

---


### DataMongodbatlasCustomDbRolesResultsList <a name="DataMongodbatlasCustomDbRolesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCustomDbRolesResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCustomDbRolesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCustomDbRolesResultsOutputReference <a name="DataMongodbatlasCustomDbRolesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascustomdbroles"

datamongodbatlascustomdbroles.NewDataMongodbatlasCustomDbRolesResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCustomDbRolesResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList">DataMongodbatlasCustomDbRolesResultsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.inheritedRoles">InheritedRoles</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList">DataMongodbatlasCustomDbRolesResultsInheritedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResults">DataMongodbatlasCustomDbRolesResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.actions"></a>

```go
func Actions() DataMongodbatlasCustomDbRolesResultsActionsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsActionsList">DataMongodbatlasCustomDbRolesResultsActionsList</a>

---

##### `InheritedRoles`<sup>Required</sup> <a name="InheritedRoles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.inheritedRoles"></a>

```go
func InheritedRoles() DataMongodbatlasCustomDbRolesResultsInheritedRolesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsInheritedRolesList">DataMongodbatlasCustomDbRolesResultsInheritedRolesList</a>

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCustomDbRolesResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDbRoles.DataMongodbatlasCustomDbRolesResults">DataMongodbatlasCustomDbRolesResults</a>

---



