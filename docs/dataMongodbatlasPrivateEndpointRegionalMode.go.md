# `data_mongodbatlas_private_endpoint_regional_mode`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_private_endpoint_regional_mode`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode).

# `dataMongodbatlasPrivateEndpointRegionalMode` Submodule <a name="`dataMongodbatlasPrivateEndpointRegionalMode` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivateEndpointRegionalMode <a name="DataMongodbatlasPrivateEndpointRegionalMode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode mongodbatlas_private_endpoint_regional_mode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivateendpointregionalmode"

datamongodbatlasprivateendpointregionalmode.NewDataMongodbatlasPrivateEndpointRegionalMode(scope Construct, id *string, config DataMongodbatlasPrivateEndpointRegionalModeConfig) DataMongodbatlasPrivateEndpointRegionalMode
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig">DataMongodbatlasPrivateEndpointRegionalModeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig">DataMongodbatlasPrivateEndpointRegionalModeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivateendpointregionalmode"

datamongodbatlasprivateendpointregionalmode.DataMongodbatlasPrivateEndpointRegionalMode_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivateendpointregionalmode"

datamongodbatlasprivateendpointregionalmode.DataMongodbatlasPrivateEndpointRegionalMode_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivateendpointregionalmode"

datamongodbatlasprivateendpointregionalmode.DataMongodbatlasPrivateEndpointRegionalMode_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivateEndpointRegionalModeConfig <a name="DataMongodbatlasPrivateEndpointRegionalModeConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivateendpointregionalmode"

&datamongodbatlasprivateendpointregionalmode.DataMongodbatlasPrivateEndpointRegionalModeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	Enabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode#project_id DataMongodbatlasPrivateEndpointRegionalMode#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode#enabled DataMongodbatlasPrivateEndpointRegionalMode#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode#id DataMongodbatlasPrivateEndpointRegionalMode#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode#project_id DataMongodbatlasPrivateEndpointRegionalMode#project_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode#enabled DataMongodbatlasPrivateEndpointRegionalMode#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/private_endpoint_regional_mode#id DataMongodbatlasPrivateEndpointRegionalMode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



