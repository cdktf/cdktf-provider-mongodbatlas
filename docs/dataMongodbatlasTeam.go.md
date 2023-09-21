# `data_mongodbatlas_team`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_team`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team).

# `dataMongodbatlasTeam` Submodule <a name="`dataMongodbatlasTeam` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasTeam <a name="DataMongodbatlasTeam" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team mongodbatlas_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasteam"

datamongodbatlasteam.NewDataMongodbatlasTeam(scope Construct, id *string, config DataMongodbatlasTeamConfig) DataMongodbatlasTeam
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig">DataMongodbatlasTeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig">DataMongodbatlasTeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetTeamId">ResetTeamId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetName"></a>

```go
func ResetName()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.resetTeamId"></a>

```go
func ResetTeamId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasteam"

datamongodbatlasteam.DataMongodbatlasTeam_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasteam"

datamongodbatlasteam.DataMongodbatlasTeam_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasteam"

datamongodbatlasteam.DataMongodbatlasTeam_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.usernames">Usernames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Usernames`<sup>Required</sup> <a name="Usernames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.usernames"></a>

```go
func Usernames() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeam.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasTeamConfig <a name="DataMongodbatlasTeamConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasteam"

&datamongodbatlasteam.DataMongodbatlasTeamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OrgId: *string,
	Id: *string,
	Name: *string,
	TeamId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#org_id DataMongodbatlasTeam#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#id DataMongodbatlasTeam#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#name DataMongodbatlasTeam#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#team_id DataMongodbatlasTeam#team_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#org_id DataMongodbatlasTeam#org_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#id DataMongodbatlasTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#name DataMongodbatlasTeam#name}.

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasTeam.DataMongodbatlasTeamConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/team#team_id DataMongodbatlasTeam#team_id}.

---



