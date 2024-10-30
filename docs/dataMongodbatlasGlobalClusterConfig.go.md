# `dataMongodbatlasGlobalClusterConfig` Submodule <a name="`dataMongodbatlasGlobalClusterConfig` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasGlobalClusterConfig <a name="DataMongodbatlasGlobalClusterConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config mongodbatlas_global_cluster_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

datamongodbatlasglobalclusterconfig.NewDataMongodbatlasGlobalClusterConfig(scope Construct, id *string, config DataMongodbatlasGlobalClusterConfigConfig) DataMongodbatlasGlobalClusterConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig">DataMongodbatlasGlobalClusterConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig">DataMongodbatlasGlobalClusterConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces">PutManagedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetManagedNamespaces">ResetManagedNamespaces</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutManagedNamespaces` <a name="PutManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces"></a>

```go
func PutManagedNamespaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedNamespaces` <a name="ResetManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetManagedNamespaces"></a>

```go
func ResetManagedNamespaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasGlobalClusterConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

datamongodbatlasglobalclusterconfig.DataMongodbatlasGlobalClusterConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

datamongodbatlasglobalclusterconfig.DataMongodbatlasGlobalClusterConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

datamongodbatlasglobalclusterconfig.DataMongodbatlasGlobalClusterConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

datamongodbatlasglobalclusterconfig.DataMongodbatlasGlobalClusterConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasGlobalClusterConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasGlobalClusterConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasGlobalClusterConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasGlobalClusterConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMapping">CustomZoneMapping</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMappingZoneId">CustomZoneMappingZoneId</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespaces">ManagedNamespaces</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList">DataMongodbatlasGlobalClusterConfigManagedNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespacesInput">ManagedNamespacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CustomZoneMapping`<sup>Required</sup> <a name="CustomZoneMapping" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMapping"></a>

```go
func CustomZoneMapping() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CustomZoneMappingZoneId`<sup>Required</sup> <a name="CustomZoneMappingZoneId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMappingZoneId"></a>

```go
func CustomZoneMappingZoneId() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ManagedNamespaces`<sup>Required</sup> <a name="ManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespaces"></a>

```go
func ManagedNamespaces() DataMongodbatlasGlobalClusterConfigManagedNamespacesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList">DataMongodbatlasGlobalClusterConfigManagedNamespacesList</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedNamespacesInput`<sup>Optional</sup> <a name="ManagedNamespacesInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespacesInput"></a>

```go
func ManagedNamespacesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasGlobalClusterConfigConfig <a name="DataMongodbatlasGlobalClusterConfigConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

&datamongodbatlasglobalclusterconfig.DataMongodbatlasGlobalClusterConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ProjectId: *string,
	Id: *string,
	ManagedNamespaces: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.managedNamespaces">ManagedNamespaces</a></code> | <code>interface{}</code> | managed_namespaces block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedNamespaces`<sup>Optional</sup> <a name="ManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.managedNamespaces"></a>

```go
ManagedNamespaces interface{}
```

- *Type:* interface{}

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#managed_namespaces DataMongodbatlasGlobalClusterConfig#managed_namespaces}

---

### DataMongodbatlasGlobalClusterConfigManagedNamespaces <a name="DataMongodbatlasGlobalClusterConfigManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

&datamongodbatlasglobalclusterconfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces {
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.collection">Collection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#collection DataMongodbatlasGlobalClusterConfig#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.customShardKey">CustomShardKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#custom_shard_key DataMongodbatlasGlobalClusterConfig#custom_shard_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.db">Db</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#db DataMongodbatlasGlobalClusterConfig#db}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed">IsCustomShardKeyHashed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#is_custom_shard_key_hashed DataMongodbatlasGlobalClusterConfig#is_custom_shard_key_hashed}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isShardKeyUnique">IsShardKeyUnique</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#is_shard_key_unique DataMongodbatlasGlobalClusterConfig#is_shard_key_unique}. |

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.collection"></a>

```go
Collection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#collection DataMongodbatlasGlobalClusterConfig#collection}.

---

##### `CustomShardKey`<sup>Required</sup> <a name="CustomShardKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.customShardKey"></a>

```go
CustomShardKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#custom_shard_key DataMongodbatlasGlobalClusterConfig#custom_shard_key}.

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.db"></a>

```go
Db *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#db DataMongodbatlasGlobalClusterConfig#db}.

---

##### `IsCustomShardKeyHashed`<sup>Optional</sup> <a name="IsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed"></a>

```go
IsCustomShardKeyHashed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#is_custom_shard_key_hashed DataMongodbatlasGlobalClusterConfig#is_custom_shard_key_hashed}.

---

##### `IsShardKeyUnique`<sup>Optional</sup> <a name="IsShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isShardKeyUnique"></a>

```go
IsShardKeyUnique interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/global_cluster_config#is_shard_key_unique DataMongodbatlasGlobalClusterConfig#is_shard_key_unique}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasGlobalClusterConfigManagedNamespacesList <a name="DataMongodbatlasGlobalClusterConfigManagedNamespacesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

datamongodbatlasglobalclusterconfig.NewDataMongodbatlasGlobalClusterConfigManagedNamespacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasGlobalClusterConfigManagedNamespacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get"></a>

```go
func Get(index *f64) DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference <a name="DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasglobalclusterconfig"

datamongodbatlasglobalclusterconfig.NewDataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed">ResetIsCustomShardKeyHashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique">ResetIsShardKeyUnique</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCustomShardKeyHashed` <a name="ResetIsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed"></a>

```go
func ResetIsCustomShardKeyHashed()
```

##### `ResetIsShardKeyUnique` <a name="ResetIsShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique"></a>

```go
func ResetIsShardKeyUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput">CollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput">CustomShardKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.dbInput">DbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput">IsCustomShardKeyHashedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput">IsShardKeyUniqueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collection">Collection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey">CustomShardKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.db">Db</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed">IsCustomShardKeyHashed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique">IsShardKeyUnique</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput"></a>

```go
func CollectionInput() *string
```

- *Type:* *string

---

##### `CustomShardKeyInput`<sup>Optional</sup> <a name="CustomShardKeyInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput"></a>

```go
func CustomShardKeyInput() *string
```

- *Type:* *string

---

##### `DbInput`<sup>Optional</sup> <a name="DbInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.dbInput"></a>

```go
func DbInput() *string
```

- *Type:* *string

---

##### `IsCustomShardKeyHashedInput`<sup>Optional</sup> <a name="IsCustomShardKeyHashedInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput"></a>

```go
func IsCustomShardKeyHashedInput() interface{}
```

- *Type:* interface{}

---

##### `IsShardKeyUniqueInput`<sup>Optional</sup> <a name="IsShardKeyUniqueInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput"></a>

```go
func IsShardKeyUniqueInput() interface{}
```

- *Type:* interface{}

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collection"></a>

```go
func Collection() *string
```

- *Type:* *string

---

##### `CustomShardKey`<sup>Required</sup> <a name="CustomShardKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey"></a>

```go
func CustomShardKey() *string
```

- *Type:* *string

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.db"></a>

```go
func Db() *string
```

- *Type:* *string

---

##### `IsCustomShardKeyHashed`<sup>Required</sup> <a name="IsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed"></a>

```go
func IsCustomShardKeyHashed() interface{}
```

- *Type:* interface{}

---

##### `IsShardKeyUnique`<sup>Required</sup> <a name="IsShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique"></a>

```go
func IsShardKeyUnique() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



