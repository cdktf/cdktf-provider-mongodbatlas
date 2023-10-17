# `data_mongodbatlas_advanced_cluster`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_advanced_cluster`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster).

# `dataMongodbatlasAdvancedCluster` Submodule <a name="`dataMongodbatlasAdvancedCluster` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAdvancedCluster <a name="DataMongodbatlasAdvancedCluster" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster mongodbatlas_advanced_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedCluster(scope Construct, id *string, config DataMongodbatlasAdvancedClusterConfig) DataMongodbatlasAdvancedCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig">DataMongodbatlasAdvancedClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig">DataMongodbatlasAdvancedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetPitEnabled">ResetPitEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetPitEnabled` <a name="ResetPitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetPitEnabled"></a>

```go
func ResetPitEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAdvancedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasAdvancedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasAdvancedCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasAdvancedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAdvancedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.advancedConfiguration">AdvancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList">DataMongodbatlasAdvancedClusterAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.backupEnabled">BackupEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.biConnectorConfig">BiConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList">DataMongodbatlasAdvancedClusterBiConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList">DataMongodbatlasAdvancedClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.createDate">CreateDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.encryptionAtRestProvider">EncryptionAtRestProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList">DataMongodbatlasAdvancedClusterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbMajorVersion">MongoDbMajorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbVersion">MongoDbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.paused">Paused</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.replicationSpecs">ReplicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.rootCertType">RootCertType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.stateName">StateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList">DataMongodbatlasAdvancedClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.versionReleaseSystem">VersionReleaseSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabledInput">PitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabled">PitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdvancedConfiguration`<sup>Required</sup> <a name="AdvancedConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.advancedConfiguration"></a>

```go
func AdvancedConfiguration() DataMongodbatlasAdvancedClusterAdvancedConfigurationList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList">DataMongodbatlasAdvancedClusterAdvancedConfigurationList</a>

---

##### `BackupEnabled`<sup>Required</sup> <a name="BackupEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.backupEnabled"></a>

```go
func BackupEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BiConnectorConfig`<sup>Required</sup> <a name="BiConnectorConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.biConnectorConfig"></a>

```go
func BiConnectorConfig() DataMongodbatlasAdvancedClusterBiConnectorConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList">DataMongodbatlasAdvancedClusterBiConnectorConfigList</a>

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.connectionStrings"></a>

```go
func ConnectionStrings() DataMongodbatlasAdvancedClusterConnectionStringsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList">DataMongodbatlasAdvancedClusterConnectionStringsList</a>

---

##### `CreateDate`<sup>Required</sup> <a name="CreateDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.createDate"></a>

```go
func CreateDate() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EncryptionAtRestProvider`<sup>Required</sup> <a name="EncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.encryptionAtRestProvider"></a>

```go
func EncryptionAtRestProvider() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.labels"></a>

```go
func Labels() DataMongodbatlasAdvancedClusterLabelsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList">DataMongodbatlasAdvancedClusterLabelsList</a>

---

##### `MongoDbMajorVersion`<sup>Required</sup> <a name="MongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbMajorVersion"></a>

```go
func MongoDbMajorVersion() *string
```

- *Type:* *string

---

##### `MongoDbVersion`<sup>Required</sup> <a name="MongoDbVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbVersion"></a>

```go
func MongoDbVersion() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.paused"></a>

```go
func Paused() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReplicationSpecs`<sup>Required</sup> <a name="ReplicationSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.replicationSpecs"></a>

```go
func ReplicationSpecs() DataMongodbatlasAdvancedClusterReplicationSpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsList</a>

---

##### `RootCertType`<sup>Required</sup> <a name="RootCertType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.rootCertType"></a>

```go
func RootCertType() *string
```

- *Type:* *string

---

##### `StateName`<sup>Required</sup> <a name="StateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.stateName"></a>

```go
func StateName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.tags"></a>

```go
func Tags() DataMongodbatlasAdvancedClusterTagsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList">DataMongodbatlasAdvancedClusterTagsList</a>

---

##### `TerminationProtectionEnabled`<sup>Required</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terminationProtectionEnabled"></a>

```go
func TerminationProtectionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VersionReleaseSystem`<sup>Required</sup> <a name="VersionReleaseSystem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.versionReleaseSystem"></a>

```go
func VersionReleaseSystem() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PitEnabledInput`<sup>Optional</sup> <a name="PitEnabledInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabledInput"></a>

```go
func PitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PitEnabled`<sup>Required</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabled"></a>

```go
func PitEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAdvancedClusterAdvancedConfiguration <a name="DataMongodbatlasAdvancedClusterAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration {

}
```


### DataMongodbatlasAdvancedClusterBiConnectorConfig <a name="DataMongodbatlasAdvancedClusterBiConnectorConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterBiConnectorConfig {

}
```


### DataMongodbatlasAdvancedClusterConfig <a name="DataMongodbatlasAdvancedClusterConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProjectId: *string,
	Id: *string,
	PitEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#name DataMongodbatlasAdvancedCluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#project_id DataMongodbatlasAdvancedCluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#id DataMongodbatlasAdvancedCluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.pitEnabled">PitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#pit_enabled DataMongodbatlasAdvancedCluster#pit_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#name DataMongodbatlasAdvancedCluster#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#project_id DataMongodbatlasAdvancedCluster#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#id DataMongodbatlasAdvancedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PitEnabled`<sup>Optional</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.pitEnabled"></a>

```go
PitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/advanced_cluster#pit_enabled DataMongodbatlasAdvancedCluster#pit_enabled}.

---

### DataMongodbatlasAdvancedClusterConnectionStrings <a name="DataMongodbatlasAdvancedClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterConnectionStrings {

}
```


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint {

}
```


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints {

}
```


### DataMongodbatlasAdvancedClusterLabels <a name="DataMongodbatlasAdvancedClusterLabels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterLabels {

}
```


### DataMongodbatlasAdvancedClusterReplicationSpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterReplicationSpecs {

}
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs {

}
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling {

}
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs {

}
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling {

}
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs {

}
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs {

}
```


### DataMongodbatlasAdvancedClusterTags <a name="DataMongodbatlasAdvancedClusterTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

&datamongodbatlasadvancedcluster.DataMongodbatlasAdvancedClusterTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAdvancedClusterAdvancedConfigurationList <a name="DataMongodbatlasAdvancedClusterAdvancedConfigurationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterAdvancedConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterAdvancedConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference <a name="DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern">DefaultReadConcern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern">DefaultWriteConcern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">FailIndexKeyTooLong</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled">JavascriptEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">MinimumEnabledTlsProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan">NoTableScan</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">OplogMinRetentionHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb">OplogSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">SampleRefreshIntervalBiConnector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">SampleSizeBiConnector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds">TransactionLifetimeLimitSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration">DataMongodbatlasAdvancedClusterAdvancedConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultReadConcern`<sup>Required</sup> <a name="DefaultReadConcern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```go
func DefaultReadConcern() *string
```

- *Type:* *string

---

##### `DefaultWriteConcern`<sup>Required</sup> <a name="DefaultWriteConcern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```go
func DefaultWriteConcern() *string
```

- *Type:* *string

---

##### `FailIndexKeyTooLong`<sup>Required</sup> <a name="FailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```go
func FailIndexKeyTooLong() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JavascriptEnabled`<sup>Required</sup> <a name="JavascriptEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```go
func JavascriptEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MinimumEnabledTlsProtocol`<sup>Required</sup> <a name="MinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```go
func MinimumEnabledTlsProtocol() *string
```

- *Type:* *string

---

##### `NoTableScan`<sup>Required</sup> <a name="NoTableScan" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan"></a>

```go
func NoTableScan() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OplogMinRetentionHours`<sup>Required</sup> <a name="OplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```go
func OplogMinRetentionHours() *f64
```

- *Type:* *f64

---

##### `OplogSizeMb`<sup>Required</sup> <a name="OplogSizeMb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```go
func OplogSizeMb() *f64
```

- *Type:* *f64

---

##### `SampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="SampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```go
func SampleRefreshIntervalBiConnector() *f64
```

- *Type:* *f64

---

##### `SampleSizeBiConnector`<sup>Required</sup> <a name="SampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```go
func SampleSizeBiConnector() *f64
```

- *Type:* *f64

---

##### `TransactionLifetimeLimitSeconds`<sup>Required</sup> <a name="TransactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds"></a>

```go
func TransactionLifetimeLimitSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterAdvancedConfiguration
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration">DataMongodbatlasAdvancedClusterAdvancedConfiguration</a>

---


### DataMongodbatlasAdvancedClusterBiConnectorConfigList <a name="DataMongodbatlasAdvancedClusterBiConnectorConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterBiConnectorConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterBiConnectorConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference <a name="DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.readPreference">ReadPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig">DataMongodbatlasAdvancedClusterBiConnectorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReadPreference`<sup>Required</sup> <a name="ReadPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.readPreference"></a>

```go
func ReadPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterBiConnectorConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig">DataMongodbatlasAdvancedClusterBiConnectorConfig</a>

---


### DataMongodbatlasAdvancedClusterConnectionStringsList <a name="DataMongodbatlasAdvancedClusterConnectionStringsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterConnectionStringsOutputReference <a name="DataMongodbatlasAdvancedClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.private">Private</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateSrv">PrivateSrv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standard">Standard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standardSrv">StandardSrv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings">DataMongodbatlasAdvancedClusterConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Private`<sup>Required</sup> <a name="Private" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.private"></a>

```go
func Private() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList</a>

---

##### `PrivateSrv`<sup>Required</sup> <a name="PrivateSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateSrv"></a>

```go
func PrivateSrv() *string
```

- *Type:* *string

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standard"></a>

```go
func Standard() *string
```

- *Type:* *string

---

##### `StandardSrv`<sup>Required</sup> <a name="StandardSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standardSrv"></a>

```go
func StandardSrv() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings">DataMongodbatlasAdvancedClusterConnectionStrings</a>

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints</a>

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">SrvConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString">SrvShardOptimizedConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```go
func Endpoints() DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `SrvConnectionString`<sup>Required</sup> <a name="SrvConnectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```go
func SrvConnectionString() *string
```

- *Type:* *string

---

##### `SrvShardOptimizedConnectionString`<sup>Required</sup> <a name="SrvShardOptimizedConnectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString"></a>

```go
func SrvShardOptimizedConnectionString() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint</a>

---


### DataMongodbatlasAdvancedClusterLabelsList <a name="DataMongodbatlasAdvancedClusterLabelsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterLabelsOutputReference <a name="DataMongodbatlasAdvancedClusterLabelsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels">DataMongodbatlasAdvancedClusterLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterLabels
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels">DataMongodbatlasAdvancedClusterLabels</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.containerId">ContainerId</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.numShards">NumShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.regionConfigs">RegionConfigs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs">DataMongodbatlasAdvancedClusterReplicationSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.containerId"></a>

```go
func ContainerId() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.numShards"></a>

```go
func NumShards() *f64
```

- *Type:* *f64

---

##### `RegionConfigs`<sup>Required</sup> <a name="RegionConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.regionConfigs"></a>

```go
func RegionConfigs() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList</a>

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterReplicationSpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs">DataMongodbatlasAdvancedClusterReplicationSpecs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled">ComputeEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize">ComputeMaxInstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize">ComputeMinInstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled">ComputeScaleDownEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled">DiskGbEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeEnabled`<sup>Required</sup> <a name="ComputeEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled"></a>

```go
func ComputeEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ComputeMaxInstanceSize`<sup>Required</sup> <a name="ComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```go
func ComputeMaxInstanceSize() *string
```

- *Type:* *string

---

##### `ComputeMinInstanceSize`<sup>Required</sup> <a name="ComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```go
func ComputeMinInstanceSize() *string
```

- *Type:* *string

---

##### `ComputeScaleDownEnabled`<sup>Required</sup> <a name="ComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```go
func ComputeScaleDownEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiskGbEnabled`<sup>Required</sup> <a name="DiskGbEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled"></a>

```go
func DiskGbEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops">DiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize">InstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops"></a>

```go
func DiskIops() *f64
```

- *Type:* *f64

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `InstanceSize`<sup>Required</sup> <a name="InstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize"></a>

```go
func InstanceSize() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled">ComputeEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize">ComputeMaxInstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize">ComputeMinInstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled">ComputeScaleDownEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled">DiskGbEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeEnabled`<sup>Required</sup> <a name="ComputeEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled"></a>

```go
func ComputeEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ComputeMaxInstanceSize`<sup>Required</sup> <a name="ComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```go
func ComputeMaxInstanceSize() *string
```

- *Type:* *string

---

##### `ComputeMinInstanceSize`<sup>Required</sup> <a name="ComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```go
func ComputeMinInstanceSize() *string
```

- *Type:* *string

---

##### `ComputeScaleDownEnabled`<sup>Required</sup> <a name="ComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```go
func ComputeScaleDownEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiskGbEnabled`<sup>Required</sup> <a name="DiskGbEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled"></a>

```go
func DiskGbEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops">DiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize">InstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops"></a>

```go
func DiskIops() *f64
```

- *Type:* *f64

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `InstanceSize`<sup>Required</sup> <a name="InstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize"></a>

```go
func InstanceSize() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling">AnalyticsAutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs">AnalyticsSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName">BackingProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs">ElectableSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs">ReadOnlySpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnalyticsAutoScaling`<sup>Required</sup> <a name="AnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling"></a>

```go
func AnalyticsAutoScaling() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a>

---

##### `AnalyticsSpecs`<sup>Required</sup> <a name="AnalyticsSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs"></a>

```go
func AnalyticsSpecs() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList</a>

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling"></a>

```go
func AutoScaling() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList</a>

---

##### `BackingProviderName`<sup>Required</sup> <a name="BackingProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName"></a>

```go
func BackingProviderName() *string
```

- *Type:* *string

---

##### `ElectableSpecs`<sup>Required</sup> <a name="ElectableSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs"></a>

```go
func ElectableSpecs() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ReadOnlySpecs`<sup>Required</sup> <a name="ReadOnlySpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs"></a>

```go
func ReadOnlySpecs() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList</a>

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops">DiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize">InstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops"></a>

```go
func DiskIops() *f64
```

- *Type:* *f64

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `InstanceSize`<sup>Required</sup> <a name="InstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize"></a>

```go
func InstanceSize() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---


### DataMongodbatlasAdvancedClusterTagsList <a name="DataMongodbatlasAdvancedClusterTagsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAdvancedClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAdvancedClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAdvancedClusterTagsOutputReference <a name="DataMongodbatlasAdvancedClusterTagsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasadvancedcluster"

datamongodbatlasadvancedcluster.NewDataMongodbatlasAdvancedClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAdvancedClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTags">DataMongodbatlasAdvancedClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAdvancedClusterTags
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterTags">DataMongodbatlasAdvancedClusterTags</a>

---



