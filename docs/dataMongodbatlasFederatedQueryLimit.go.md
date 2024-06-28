# `dataMongodbatlasFederatedQueryLimit` Submodule <a name="`dataMongodbatlasFederatedQueryLimit` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedQueryLimit <a name="DataMongodbatlasFederatedQueryLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit mongodbatlas_federated_query_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedquerylimit"

datamongodbatlasfederatedquerylimit.NewDataMongodbatlasFederatedQueryLimit(scope Construct, id *string, config DataMongodbatlasFederatedQueryLimitConfig) DataMongodbatlasFederatedQueryLimit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig">DataMongodbatlasFederatedQueryLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig">DataMongodbatlasFederatedQueryLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedQueryLimit resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedquerylimit"

datamongodbatlasfederatedquerylimit.DataMongodbatlasFederatedQueryLimit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedquerylimit"

datamongodbatlasfederatedquerylimit.DataMongodbatlasFederatedQueryLimit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedquerylimit"

datamongodbatlasfederatedquerylimit.DataMongodbatlasFederatedQueryLimit_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedquerylimit"

datamongodbatlasfederatedquerylimit.DataMongodbatlasFederatedQueryLimit_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasFederatedQueryLimit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasFederatedQueryLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasFederatedQueryLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedQueryLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.currentUsage">CurrentUsage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.defaultLimit">DefaultLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.maximumLimit">MaximumLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.overrunPolicy">OverrunPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitNameInput">LimitNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantNameInput">TenantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitName">LimitName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantName">TenantName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CurrentUsage`<sup>Required</sup> <a name="CurrentUsage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.currentUsage"></a>

```go
func CurrentUsage() *f64
```

- *Type:* *f64

---

##### `DefaultLimit`<sup>Required</sup> <a name="DefaultLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.defaultLimit"></a>

```go
func DefaultLimit() *f64
```

- *Type:* *f64

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `MaximumLimit`<sup>Required</sup> <a name="MaximumLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.maximumLimit"></a>

```go
func MaximumLimit() *f64
```

- *Type:* *f64

---

##### `OverrunPolicy`<sup>Required</sup> <a name="OverrunPolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.overrunPolicy"></a>

```go
func OverrunPolicy() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitNameInput`<sup>Optional</sup> <a name="LimitNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitNameInput"></a>

```go
func LimitNameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantNameInput"></a>

```go
func TenantNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitName"></a>

```go
func LimitName() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantName"></a>

```go
func TenantName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedQueryLimitConfig <a name="DataMongodbatlasFederatedQueryLimitConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedquerylimit"

&datamongodbatlasfederatedquerylimit.DataMongodbatlasFederatedQueryLimitConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LimitName: *string,
	ProjectId: *string,
	TenantName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.limitName">LimitName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#limit_name DataMongodbatlasFederatedQueryLimit#limit_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#project_id DataMongodbatlasFederatedQueryLimit#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.tenantName">TenantName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#tenant_name DataMongodbatlasFederatedQueryLimit#tenant_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#id DataMongodbatlasFederatedQueryLimit#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.limitName"></a>

```go
LimitName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#limit_name DataMongodbatlasFederatedQueryLimit#limit_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#project_id DataMongodbatlasFederatedQueryLimit#project_id}.

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.tenantName"></a>

```go
TenantName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#tenant_name DataMongodbatlasFederatedQueryLimit#tenant_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/federated_query_limit#id DataMongodbatlasFederatedQueryLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



