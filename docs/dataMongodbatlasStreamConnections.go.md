# `dataMongodbatlasStreamConnections` Submodule <a name="`dataMongodbatlasStreamConnections` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasStreamConnections <a name="DataMongodbatlasStreamConnections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections mongodbatlas_stream_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnections(scope Construct, id *string, config DataMongodbatlasStreamConnectionsConfig) DataMongodbatlasStreamConnections
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig">DataMongodbatlasStreamConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig">DataMongodbatlasStreamConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetItemsPerPage"></a>

```go
func ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetPageNum"></a>

```go
func ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasStreamConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.DataMongodbatlasStreamConnections_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.DataMongodbatlasStreamConnections_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.DataMongodbatlasStreamConnections_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.DataMongodbatlasStreamConnections_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasStreamConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasStreamConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasStreamConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasStreamConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList">DataMongodbatlasStreamConnectionsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.totalCount">TotalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNumInput">PageNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNum">PageNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.results"></a>

```go
func Results() DataMongodbatlasStreamConnectionsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList">DataMongodbatlasStreamConnectionsResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.totalCount"></a>

```go
func TotalCount() *f64
```

- *Type:* *f64

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPageInput"></a>

```go
func ItemsPerPageInput() *f64
```

- *Type:* *f64

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNumInput"></a>

```go
func PageNumInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNum"></a>

```go
func PageNum() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasStreamConnectionsConfig <a name="DataMongodbatlasStreamConnectionsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceName: *string,
	ProjectId: *string,
	ItemsPerPage: *f64,
	PageNum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#instance_name DataMongodbatlasStreamConnections#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#project_id DataMongodbatlasStreamConnections#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#items_per_page DataMongodbatlasStreamConnections#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.pageNum">PageNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#page_num DataMongodbatlasStreamConnections#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#instance_name DataMongodbatlasStreamConnections#instance_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#project_id DataMongodbatlasStreamConnections#project_id}.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.itemsPerPage"></a>

```go
ItemsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#items_per_page DataMongodbatlasStreamConnections#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.pageNum"></a>

```go
PageNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/stream_connections#page_num DataMongodbatlasStreamConnections#page_num}.

---

### DataMongodbatlasStreamConnectionsResults <a name="DataMongodbatlasStreamConnectionsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsResults {

}
```


### DataMongodbatlasStreamConnectionsResultsAuthentication <a name="DataMongodbatlasStreamConnectionsResultsAuthentication" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsResultsAuthentication {

}
```


### DataMongodbatlasStreamConnectionsResultsAws <a name="DataMongodbatlasStreamConnectionsResultsAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsResultsAws {

}
```


### DataMongodbatlasStreamConnectionsResultsDbRoleToExecute <a name="DataMongodbatlasStreamConnectionsResultsDbRoleToExecute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute {

}
```


### DataMongodbatlasStreamConnectionsResultsNetworking <a name="DataMongodbatlasStreamConnectionsResultsNetworking" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsResultsNetworking {

}
```


### DataMongodbatlasStreamConnectionsResultsNetworkingAccess <a name="DataMongodbatlasStreamConnectionsResultsNetworkingAccess" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess {

}
```


### DataMongodbatlasStreamConnectionsResultsSecurity <a name="DataMongodbatlasStreamConnectionsResultsSecurity" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

&datamongodbatlasstreamconnections.DataMongodbatlasStreamConnectionsResultsSecurity {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference <a name="DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.mechanism">Mechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication">DataMongodbatlasStreamConnectionsResultsAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.mechanism"></a>

```go
func Mechanism() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamConnectionsResultsAuthentication
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication">DataMongodbatlasStreamConnectionsResultsAuthentication</a>

---


### DataMongodbatlasStreamConnectionsResultsAwsOutputReference <a name="DataMongodbatlasStreamConnectionsResultsAwsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasStreamConnectionsResultsAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws">DataMongodbatlasStreamConnectionsResultsAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamConnectionsResultsAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws">DataMongodbatlasStreamConnectionsResultsAws</a>

---


### DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference <a name="DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute">DataMongodbatlasStreamConnectionsResultsDbRoleToExecute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamConnectionsResultsDbRoleToExecute
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute">DataMongodbatlasStreamConnectionsResultsDbRoleToExecute</a>

---


### DataMongodbatlasStreamConnectionsResultsList <a name="DataMongodbatlasStreamConnectionsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasStreamConnectionsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasStreamConnectionsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference <a name="DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess">DataMongodbatlasStreamConnectionsResultsNetworkingAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamConnectionsResultsNetworkingAccess
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess">DataMongodbatlasStreamConnectionsResultsNetworkingAccess</a>

---


### DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference <a name="DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsNetworkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.access">Access</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking">DataMongodbatlasStreamConnectionsResultsNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.access"></a>

```go
func Access() DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamConnectionsResultsNetworking
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking">DataMongodbatlasStreamConnectionsResultsNetworking</a>

---


### DataMongodbatlasStreamConnectionsResultsOutputReference <a name="DataMongodbatlasStreamConnectionsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasStreamConnectionsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference">DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference">DataMongodbatlasStreamConnectionsResultsAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.config">Config</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.dbRoleToExecute">DbRoleToExecute</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference">DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.headers">Headers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.security">Security</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference">DataMongodbatlasStreamConnectionsResultsSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults">DataMongodbatlasStreamConnectionsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.authentication"></a>

```go
func Authentication() DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference">DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference</a>

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.aws"></a>

```go
func Aws() DataMongodbatlasStreamConnectionsResultsAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference">DataMongodbatlasStreamConnectionsResultsAwsOutputReference</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.bootstrapServers"></a>

```go
func BootstrapServers() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.config"></a>

```go
func Config() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DbRoleToExecute`<sup>Required</sup> <a name="DbRoleToExecute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.dbRoleToExecute"></a>

```go
func DbRoleToExecute() DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference">DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.headers"></a>

```go
func Headers() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.networking"></a>

```go
func Networking() DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.security"></a>

```go
func Security() DataMongodbatlasStreamConnectionsResultsSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference">DataMongodbatlasStreamConnectionsResultsSecurityOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamConnectionsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults">DataMongodbatlasStreamConnectionsResults</a>

---


### DataMongodbatlasStreamConnectionsResultsSecurityOutputReference <a name="DataMongodbatlasStreamConnectionsResultsSecurityOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasstreamconnections"

datamongodbatlasstreamconnections.NewDataMongodbatlasStreamConnectionsResultsSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasStreamConnectionsResultsSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.brokerPublicCertificate">BrokerPublicCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity">DataMongodbatlasStreamConnectionsResultsSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrokerPublicCertificate`<sup>Required</sup> <a name="BrokerPublicCertificate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.brokerPublicCertificate"></a>

```go
func BrokerPublicCertificate() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamConnectionsResultsSecurity
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity">DataMongodbatlasStreamConnectionsResultsSecurity</a>

---



