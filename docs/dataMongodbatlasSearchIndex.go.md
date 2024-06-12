# `dataMongodbatlasSearchIndex` Submodule <a name="`dataMongodbatlasSearchIndex` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasSearchIndex <a name="DataMongodbatlasSearchIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index mongodbatlas_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

datamongodbatlassearchindex.NewDataMongodbatlasSearchIndex(scope Construct, id *string, config DataMongodbatlasSearchIndexConfig) DataMongodbatlasSearchIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig">DataMongodbatlasSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig">DataMongodbatlasSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzer">ResetAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzers">ResetAnalyzers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetCollectionName">ResetCollectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsDynamic">ResetMappingsDynamic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsFields">ResetMappingsFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetSearchAnalyzer">ResetSearchAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAnalyzer` <a name="ResetAnalyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzer"></a>

```go
func ResetAnalyzer()
```

##### `ResetAnalyzers` <a name="ResetAnalyzers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzers"></a>

```go
func ResetAnalyzers()
```

##### `ResetCollectionName` <a name="ResetCollectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetCollectionName"></a>

```go
func ResetCollectionName()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetFields"></a>

```go
func ResetFields()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetMappingsDynamic` <a name="ResetMappingsDynamic" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsDynamic"></a>

```go
func ResetMappingsDynamic()
```

##### `ResetMappingsFields` <a name="ResetMappingsFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsFields"></a>

```go
func ResetMappingsFields()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetName"></a>

```go
func ResetName()
```

##### `ResetSearchAnalyzer` <a name="ResetSearchAnalyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetSearchAnalyzer"></a>

```go
func ResetSearchAnalyzer()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasSearchIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

datamongodbatlassearchindex.DataMongodbatlasSearchIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

datamongodbatlassearchindex.DataMongodbatlasSearchIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

datamongodbatlassearchindex.DataMongodbatlasSearchIndex_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

datamongodbatlassearchindex.DataMongodbatlasSearchIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasSearchIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.synonyms">Synonyms</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList">DataMongodbatlasSearchIndexSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzerInput">AnalyzerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzersInput">AnalyzersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionNameInput">CollectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fieldsInput">FieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexIdInput">IndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamicInput">MappingsDynamicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFieldsInput">MappingsFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzerInput">SearchAnalyzerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzer">Analyzer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzers">Analyzers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionName">CollectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fields">Fields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamic">MappingsDynamic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFields">MappingsFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzer">SearchAnalyzer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.synonyms"></a>

```go
func Synonyms() DataMongodbatlasSearchIndexSynonymsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList">DataMongodbatlasSearchIndexSynonymsList</a>

---

##### `AnalyzerInput`<sup>Optional</sup> <a name="AnalyzerInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzerInput"></a>

```go
func AnalyzerInput() *string
```

- *Type:* *string

---

##### `AnalyzersInput`<sup>Optional</sup> <a name="AnalyzersInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzersInput"></a>

```go
func AnalyzersInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CollectionNameInput`<sup>Optional</sup> <a name="CollectionNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionNameInput"></a>

```go
func CollectionNameInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fieldsInput"></a>

```go
func FieldsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexIdInput"></a>

```go
func IndexIdInput() *string
```

- *Type:* *string

---

##### `MappingsDynamicInput`<sup>Optional</sup> <a name="MappingsDynamicInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamicInput"></a>

```go
func MappingsDynamicInput() interface{}
```

- *Type:* interface{}

---

##### `MappingsFieldsInput`<sup>Optional</sup> <a name="MappingsFieldsInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFieldsInput"></a>

```go
func MappingsFieldsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SearchAnalyzerInput`<sup>Optional</sup> <a name="SearchAnalyzerInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzerInput"></a>

```go
func SearchAnalyzerInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzer"></a>

```go
func Analyzer() *string
```

- *Type:* *string

---

##### `Analyzers`<sup>Required</sup> <a name="Analyzers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzers"></a>

```go
func Analyzers() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionName"></a>

```go
func CollectionName() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fields"></a>

```go
func Fields() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `MappingsDynamic`<sup>Required</sup> <a name="MappingsDynamic" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamic"></a>

```go
func MappingsDynamic() interface{}
```

- *Type:* interface{}

---

##### `MappingsFields`<sup>Required</sup> <a name="MappingsFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFields"></a>

```go
func MappingsFields() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SearchAnalyzer`<sup>Required</sup> <a name="SearchAnalyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzer"></a>

```go
func SearchAnalyzer() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasSearchIndexConfig <a name="DataMongodbatlasSearchIndexConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

&datamongodbatlassearchindex.DataMongodbatlasSearchIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	IndexId: *string,
	ProjectId: *string,
	Analyzer: *string,
	Analyzers: *string,
	CollectionName: *string,
	Database: *string,
	Fields: *string,
	Id: *string,
	MappingsDynamic: interface{},
	MappingsFields: *string,
	Name: *string,
	SearchAnalyzer: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#cluster_name DataMongodbatlasSearchIndex#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.indexId">IndexId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#index_id DataMongodbatlasSearchIndex#index_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#project_id DataMongodbatlasSearchIndex#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzer">Analyzer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#analyzer DataMongodbatlasSearchIndex#analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzers">Analyzers</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#analyzers DataMongodbatlasSearchIndex#analyzers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.collectionName">CollectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#collection_name DataMongodbatlasSearchIndex#collection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#database DataMongodbatlasSearchIndex#database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.fields">Fields</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#fields DataMongodbatlasSearchIndex#fields}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#id DataMongodbatlasSearchIndex#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsDynamic">MappingsDynamic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#mappings_dynamic DataMongodbatlasSearchIndex#mappings_dynamic}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsFields">MappingsFields</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#mappings_fields DataMongodbatlasSearchIndex#mappings_fields}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#name DataMongodbatlasSearchIndex#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.searchAnalyzer">SearchAnalyzer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#search_analyzer DataMongodbatlasSearchIndex#search_analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#type DataMongodbatlasSearchIndex#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#cluster_name DataMongodbatlasSearchIndex#cluster_name}.

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.indexId"></a>

```go
IndexId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#index_id DataMongodbatlasSearchIndex#index_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#project_id DataMongodbatlasSearchIndex#project_id}.

---

##### `Analyzer`<sup>Optional</sup> <a name="Analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzer"></a>

```go
Analyzer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#analyzer DataMongodbatlasSearchIndex#analyzer}.

---

##### `Analyzers`<sup>Optional</sup> <a name="Analyzers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzers"></a>

```go
Analyzers *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#analyzers DataMongodbatlasSearchIndex#analyzers}.

---

##### `CollectionName`<sup>Optional</sup> <a name="CollectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.collectionName"></a>

```go
CollectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#collection_name DataMongodbatlasSearchIndex#collection_name}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#database DataMongodbatlasSearchIndex#database}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.fields"></a>

```go
Fields *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#fields DataMongodbatlasSearchIndex#fields}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#id DataMongodbatlasSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MappingsDynamic`<sup>Optional</sup> <a name="MappingsDynamic" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsDynamic"></a>

```go
MappingsDynamic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#mappings_dynamic DataMongodbatlasSearchIndex#mappings_dynamic}.

---

##### `MappingsFields`<sup>Optional</sup> <a name="MappingsFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsFields"></a>

```go
MappingsFields *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#mappings_fields DataMongodbatlasSearchIndex#mappings_fields}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#name DataMongodbatlasSearchIndex#name}.

---

##### `SearchAnalyzer`<sup>Optional</sup> <a name="SearchAnalyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.searchAnalyzer"></a>

```go
SearchAnalyzer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#search_analyzer DataMongodbatlasSearchIndex#search_analyzer}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/search_index#type DataMongodbatlasSearchIndex#type}.

---

### DataMongodbatlasSearchIndexSynonyms <a name="DataMongodbatlasSearchIndexSynonyms" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

&datamongodbatlassearchindex.DataMongodbatlasSearchIndexSynonyms {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasSearchIndexSynonymsList <a name="DataMongodbatlasSearchIndexSynonymsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

datamongodbatlassearchindex.NewDataMongodbatlasSearchIndexSynonymsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasSearchIndexSynonymsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasSearchIndexSynonymsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasSearchIndexSynonymsOutputReference <a name="DataMongodbatlasSearchIndexSynonymsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlassearchindex"

datamongodbatlassearchindex.NewDataMongodbatlasSearchIndexSynonymsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasSearchIndexSynonymsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.analyzer">Analyzer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.sourceCollection">SourceCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms">DataMongodbatlasSearchIndexSynonyms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.analyzer"></a>

```go
func Analyzer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceCollection`<sup>Required</sup> <a name="SourceCollection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.sourceCollection"></a>

```go
func SourceCollection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasSearchIndexSynonyms
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms">DataMongodbatlasSearchIndexSynonyms</a>

---



