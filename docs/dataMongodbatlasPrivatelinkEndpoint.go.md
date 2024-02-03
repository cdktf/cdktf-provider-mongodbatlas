# `dataMongodbatlasPrivatelinkEndpoint` Submodule <a name="`dataMongodbatlasPrivatelinkEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpoint <a name="DataMongodbatlasPrivatelinkEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint mongodbatlas_privatelink_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpoint"

datamongodbatlasprivatelinkendpoint.NewDataMongodbatlasPrivatelinkEndpoint(scope Construct, id *string, config DataMongodbatlasPrivatelinkEndpointConfig) DataMongodbatlasPrivatelinkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig">DataMongodbatlasPrivatelinkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig">DataMongodbatlasPrivatelinkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpoint"

datamongodbatlasprivatelinkendpoint.DataMongodbatlasPrivatelinkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpoint"

datamongodbatlasprivatelinkendpoint.DataMongodbatlasPrivatelinkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpoint"

datamongodbatlasprivatelinkendpoint.DataMongodbatlasPrivatelinkEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpoint"

datamongodbatlasprivatelinkendpoint.DataMongodbatlasPrivatelinkEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasPrivatelinkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasPrivatelinkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasPrivatelinkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.endpointGroupNames">EndpointGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.endpointServiceName">EndpointServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.interfaceEndpoints">InterfaceEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateEndpoints">PrivateEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkServiceName">PrivateLinkServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkServiceResourceId">PrivateLinkServiceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.serviceAttachmentNames">ServiceAttachmentNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkIdInput">PrivateLinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkId">PrivateLinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EndpointGroupNames`<sup>Required</sup> <a name="EndpointGroupNames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.endpointGroupNames"></a>

```go
func EndpointGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `EndpointServiceName`<sup>Required</sup> <a name="EndpointServiceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.endpointServiceName"></a>

```go
func EndpointServiceName() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InterfaceEndpoints`<sup>Required</sup> <a name="InterfaceEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.interfaceEndpoints"></a>

```go
func InterfaceEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpoints`<sup>Required</sup> <a name="PrivateEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateEndpoints"></a>

```go
func PrivateEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateLinkServiceName`<sup>Required</sup> <a name="PrivateLinkServiceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkServiceName"></a>

```go
func PrivateLinkServiceName() *string
```

- *Type:* *string

---

##### `PrivateLinkServiceResourceId`<sup>Required</sup> <a name="PrivateLinkServiceResourceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkServiceResourceId"></a>

```go
func PrivateLinkServiceResourceId() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `ServiceAttachmentNames`<sup>Required</sup> <a name="ServiceAttachmentNames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.serviceAttachmentNames"></a>

```go
func ServiceAttachmentNames() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateLinkIdInput`<sup>Optional</sup> <a name="PrivateLinkIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkIdInput"></a>

```go
func PrivateLinkIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateLinkId`<sup>Required</sup> <a name="PrivateLinkId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.privateLinkId"></a>

```go
func PrivateLinkId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointConfig <a name="DataMongodbatlasPrivatelinkEndpointConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpoint"

&datamongodbatlasprivatelinkendpoint.DataMongodbatlasPrivatelinkEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrivateLinkId: *string,
	ProjectId: *string,
	ProviderName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.privateLinkId">PrivateLinkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#private_link_id DataMongodbatlasPrivatelinkEndpoint#private_link_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#project_id DataMongodbatlasPrivatelinkEndpoint#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#provider_name DataMongodbatlasPrivatelinkEndpoint#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#id DataMongodbatlasPrivatelinkEndpoint#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateLinkId`<sup>Required</sup> <a name="PrivateLinkId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.privateLinkId"></a>

```go
PrivateLinkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#private_link_id DataMongodbatlasPrivatelinkEndpoint#private_link_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#project_id DataMongodbatlasPrivatelinkEndpoint#project_id}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#provider_name DataMongodbatlasPrivatelinkEndpoint#provider_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpoint.DataMongodbatlasPrivatelinkEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/privatelink_endpoint#id DataMongodbatlasPrivatelinkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



