# `dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive mongodbatlas_privatelink_endpoint_service_data_federation_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive"

datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive.NewDataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive(scope Construct, id *string, config DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig) DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig">DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig">DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive"

datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive"

datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive"

datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive"

datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsName">CustomerEndpointDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput">EndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CustomerEndpointDnsName`<sup>Required</sup> <a name="CustomerEndpointDnsName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsName"></a>

```go
func CustomerEndpointDnsName() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput"></a>

```go
func EndpointIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive"

&datamongodbatlasprivatelinkendpointservicedatafederationonlinearchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointId: *string,
	ProjectId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId">EndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId"></a>

```go
EndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



