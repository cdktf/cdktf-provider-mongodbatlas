# `dataMongodbatlasControlPlaneIpAddresses` Submodule <a name="`dataMongodbatlasControlPlaneIpAddresses` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasControlPlaneIpAddresses <a name="DataMongodbatlasControlPlaneIpAddresses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/control_plane_ip_addresses mongodbatlas_control_plane_ip_addresses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

datamongodbatlascontrolplaneipaddresses.NewDataMongodbatlasControlPlaneIpAddresses(scope Construct, id *string, config DataMongodbatlasControlPlaneIpAddressesConfig) DataMongodbatlasControlPlaneIpAddresses
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig">DataMongodbatlasControlPlaneIpAddressesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig">DataMongodbatlasControlPlaneIpAddressesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

datamongodbatlascontrolplaneipaddresses.DataMongodbatlasControlPlaneIpAddresses_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

datamongodbatlascontrolplaneipaddresses.DataMongodbatlasControlPlaneIpAddresses_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

datamongodbatlascontrolplaneipaddresses.DataMongodbatlasControlPlaneIpAddresses_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

datamongodbatlascontrolplaneipaddresses.DataMongodbatlasControlPlaneIpAddresses_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasControlPlaneIpAddresses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasControlPlaneIpAddresses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/control_plane_ip_addresses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasControlPlaneIpAddresses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound">Inbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Inbound`<sup>Required</sup> <a name="Inbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound"></a>

```go
func Inbound() DataMongodbatlasControlPlaneIpAddressesInboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a>

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound"></a>

```go
func Outbound() DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasControlPlaneIpAddressesConfig <a name="DataMongodbatlasControlPlaneIpAddressesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

&datamongodbatlascontrolplaneipaddresses.DataMongodbatlasControlPlaneIpAddressesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

### DataMongodbatlasControlPlaneIpAddressesInbound <a name="DataMongodbatlasControlPlaneIpAddressesInbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

&datamongodbatlascontrolplaneipaddresses.DataMongodbatlasControlPlaneIpAddressesInbound {

}
```


### DataMongodbatlasControlPlaneIpAddressesOutbound <a name="DataMongodbatlasControlPlaneIpAddressesOutbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

&datamongodbatlascontrolplaneipaddresses.DataMongodbatlasControlPlaneIpAddressesOutbound {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasControlPlaneIpAddressesInboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesInboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

datamongodbatlascontrolplaneipaddresses.NewDataMongodbatlasControlPlaneIpAddressesInboundOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasControlPlaneIpAddressesInboundOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws">Aws</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure">Azure</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp">Gcp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws"></a>

```go
func Aws() StringListMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure"></a>

```go
func Azure() StringListMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp"></a>

```go
func Gcp() StringListMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasControlPlaneIpAddressesInbound
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a>

---


### DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascontrolplaneipaddresses"

datamongodbatlascontrolplaneipaddresses.NewDataMongodbatlasControlPlaneIpAddressesOutboundOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws">Aws</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure">Azure</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp">Gcp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws"></a>

```go
func Aws() StringListMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure"></a>

```go
func Azure() StringListMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp"></a>

```go
func Gcp() StringListMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasControlPlaneIpAddressesOutbound
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a>

---



