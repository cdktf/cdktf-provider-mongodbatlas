# `dataMongodbatlasStreamPrivatelinkEndpoints` Submodule <a name="`dataMongodbatlasStreamPrivatelinkEndpoints` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasStreamPrivatelinkEndpoints <a name="DataMongodbatlasStreamPrivatelinkEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/stream_privatelink_endpoints mongodbatlas_stream_privatelink_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

datamongodbatlasstreamprivatelinkendpoints.NewDataMongodbatlasStreamPrivatelinkEndpoints(scope Construct, id *string, config DataMongodbatlasStreamPrivatelinkEndpointsConfig) DataMongodbatlasStreamPrivatelinkEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig">DataMongodbatlasStreamPrivatelinkEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig">DataMongodbatlasStreamPrivatelinkEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

datamongodbatlasstreamprivatelinkendpoints.DataMongodbatlasStreamPrivatelinkEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

datamongodbatlasstreamprivatelinkendpoints.DataMongodbatlasStreamPrivatelinkEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

datamongodbatlasstreamprivatelinkendpoints.DataMongodbatlasStreamPrivatelinkEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

datamongodbatlasstreamprivatelinkendpoints.DataMongodbatlasStreamPrivatelinkEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasStreamPrivatelinkEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasStreamPrivatelinkEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/stream_privatelink_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasStreamPrivatelinkEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList">DataMongodbatlasStreamPrivatelinkEndpointsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.results"></a>

```go
func Results() DataMongodbatlasStreamPrivatelinkEndpointsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList">DataMongodbatlasStreamPrivatelinkEndpointsResultsList</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasStreamPrivatelinkEndpointsConfig <a name="DataMongodbatlasStreamPrivatelinkEndpointsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

&datamongodbatlasstreamprivatelinkendpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/stream_privatelink_endpoints#project_id DataMongodbatlasStreamPrivatelinkEndpoints#project_id}

---

### DataMongodbatlasStreamPrivatelinkEndpointsResults <a name="DataMongodbatlasStreamPrivatelinkEndpointsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

&datamongodbatlasstreamprivatelinkendpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasStreamPrivatelinkEndpointsResultsList <a name="DataMongodbatlasStreamPrivatelinkEndpointsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

datamongodbatlasstreamprivatelinkendpoints.NewDataMongodbatlasStreamPrivatelinkEndpointsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasStreamPrivatelinkEndpointsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference <a name="DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasstreamprivatelinkendpoints"

datamongodbatlasstreamprivatelinkendpoints.NewDataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsSubDomain">DnsSubDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointId">InterfaceEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointName">InterfaceEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerAccountId">ProviderAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.serviceEndpointId">ServiceEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults">DataMongodbatlasStreamPrivatelinkEndpointsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsDomain"></a>

```go
func DnsDomain() *string
```

- *Type:* *string

---

##### `DnsSubDomain`<sup>Required</sup> <a name="DnsSubDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsSubDomain"></a>

```go
func DnsSubDomain() *[]*string
```

- *Type:* *[]*string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceEndpointId`<sup>Required</sup> <a name="InterfaceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointId"></a>

```go
func InterfaceEndpointId() *string
```

- *Type:* *string

---

##### `InterfaceEndpointName`<sup>Required</sup> <a name="InterfaceEndpointName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointName"></a>

```go
func InterfaceEndpointName() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderAccountId`<sup>Required</sup> <a name="ProviderAccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerAccountId"></a>

```go
func ProviderAccountId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceEndpointId`<sup>Required</sup> <a name="ServiceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.serviceEndpointId"></a>

```go
func ServiceEndpointId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasStreamPrivatelinkEndpointsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults">DataMongodbatlasStreamPrivatelinkEndpointsResults</a>

---



