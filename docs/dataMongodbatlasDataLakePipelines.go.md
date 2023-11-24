# `data_mongodbatlas_data_lake_pipelines`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_data_lake_pipelines`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/data_lake_pipelines).

# `dataMongodbatlasDataLakePipelines` Submodule <a name="`dataMongodbatlasDataLakePipelines` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasDataLakePipelines <a name="DataMongodbatlasDataLakePipelines" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/data_lake_pipelines mongodbatlas_data_lake_pipelines}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelines(scope Construct, id *string, config DataMongodbatlasDataLakePipelinesConfig) DataMongodbatlasDataLakePipelines
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig">DataMongodbatlasDataLakePipelinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig">DataMongodbatlasDataLakePipelinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasDataLakePipelines resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelines_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelines_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelines_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelines_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasDataLakePipelines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasDataLakePipelines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasDataLakePipelines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/data_lake_pipelines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasDataLakePipelines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList">DataMongodbatlasDataLakePipelinesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.results"></a>

```go
func Results() DataMongodbatlasDataLakePipelinesResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList">DataMongodbatlasDataLakePipelinesResultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasDataLakePipelinesConfig <a name="DataMongodbatlasDataLakePipelinesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

&datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelinesConfig {
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/data_lake_pipelines#project_id DataMongodbatlasDataLakePipelines#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/data_lake_pipelines#id DataMongodbatlasDataLakePipelines#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/data_lake_pipelines#project_id DataMongodbatlasDataLakePipelines#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/data_lake_pipelines#id DataMongodbatlasDataLakePipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasDataLakePipelinesResults <a name="DataMongodbatlasDataLakePipelinesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

&datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelinesResults {

}
```


### DataMongodbatlasDataLakePipelinesResultsSink <a name="DataMongodbatlasDataLakePipelinesResultsSink" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

&datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelinesResultsSink {

}
```


### DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields <a name="DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

&datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields {

}
```


### DataMongodbatlasDataLakePipelinesResultsSource <a name="DataMongodbatlasDataLakePipelinesResultsSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

&datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelinesResultsSource {

}
```


### DataMongodbatlasDataLakePipelinesResultsTransformations <a name="DataMongodbatlasDataLakePipelinesResultsTransformations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

&datamongodbatlasdatalakepipelines.DataMongodbatlasDataLakePipelinesResultsTransformations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasDataLakePipelinesResultsList <a name="DataMongodbatlasDataLakePipelinesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasDataLakePipelinesResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasDataLakePipelinesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasDataLakePipelinesResultsOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasDataLakePipelinesResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.sink">Sink</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList">DataMongodbatlasDataLakePipelinesResultsSinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList">DataMongodbatlasDataLakePipelinesResultsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.transformations">Transformations</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList">DataMongodbatlasDataLakePipelinesResultsTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults">DataMongodbatlasDataLakePipelinesResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.lastUpdatedDate"></a>

```go
func LastUpdatedDate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Sink`<sup>Required</sup> <a name="Sink" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.sink"></a>

```go
func Sink() DataMongodbatlasDataLakePipelinesResultsSinkList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList">DataMongodbatlasDataLakePipelinesResultsSinkList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.source"></a>

```go
func Source() DataMongodbatlasDataLakePipelinesResultsSourceList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList">DataMongodbatlasDataLakePipelinesResultsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Transformations`<sup>Required</sup> <a name="Transformations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.transformations"></a>

```go
func Transformations() DataMongodbatlasDataLakePipelinesResultsTransformationsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList">DataMongodbatlasDataLakePipelinesResultsTransformationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasDataLakePipelinesResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults">DataMongodbatlasDataLakePipelinesResults</a>

---


### DataMongodbatlasDataLakePipelinesResultsSinkList <a name="DataMongodbatlasDataLakePipelinesResultsSinkList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsSinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasDataLakePipelinesResultsSinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.get"></a>

```go
func Get(index *f64) DataMongodbatlasDataLakePipelinesResultsSinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasDataLakePipelinesResultsSinkOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsSinkOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsSinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasDataLakePipelinesResultsSinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.partitionFields">PartitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink">DataMongodbatlasDataLakePipelinesResultsSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionFields`<sup>Required</sup> <a name="PartitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.partitionFields"></a>

```go
func PartitionFields() DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList</a>

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasDataLakePipelinesResultsSink
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink">DataMongodbatlasDataLakePipelinesResultsSink</a>

---


### DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList <a name="DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields</a>

---


### DataMongodbatlasDataLakePipelinesResultsSourceList <a name="DataMongodbatlasDataLakePipelinesResultsSourceList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasDataLakePipelinesResultsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.get"></a>

```go
func Get(index *f64) DataMongodbatlasDataLakePipelinesResultsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasDataLakePipelinesResultsSourceOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsSourceOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasDataLakePipelinesResultsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.collectionName">CollectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource">DataMongodbatlasDataLakePipelinesResultsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.collectionName"></a>

```go
func CollectionName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasDataLakePipelinesResultsSource
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource">DataMongodbatlasDataLakePipelinesResultsSource</a>

---


### DataMongodbatlasDataLakePipelinesResultsTransformationsList <a name="DataMongodbatlasDataLakePipelinesResultsTransformationsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsTransformationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasDataLakePipelinesResultsTransformationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v6/datamongodbatlasdatalakepipelines"

datamongodbatlasdatalakepipelines.NewDataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations">DataMongodbatlasDataLakePipelinesResultsTransformations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasDataLakePipelinesResultsTransformations
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations">DataMongodbatlasDataLakePipelinesResultsTransformations</a>

---



