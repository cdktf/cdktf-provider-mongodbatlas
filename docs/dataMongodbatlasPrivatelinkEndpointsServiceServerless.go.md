# `dataMongodbatlasPrivatelinkEndpointsServiceServerless` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointsServiceServerless` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceServerless <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerless" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless mongodbatlas_privatelink_endpoints_service_serverless}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

datamongodbatlasprivatelinkendpointsserviceserverless.NewDataMongodbatlasPrivatelinkEndpointsServiceServerless(scope Construct, id *string, config DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig) DataMongodbatlasPrivatelinkEndpointsServiceServerless
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig">DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig">DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetId"></a>

```go
func ResetId()
```

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetItemsPerPage"></a>

```go
func ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetPageNum"></a>

```go
func ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointsServiceServerless resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

datamongodbatlasprivatelinkendpointsserviceserverless.DataMongodbatlasPrivatelinkEndpointsServiceServerless_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

datamongodbatlasprivatelinkendpointsserviceserverless.DataMongodbatlasPrivatelinkEndpointsServiceServerless_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

datamongodbatlasprivatelinkendpointsserviceserverless.DataMongodbatlasPrivatelinkEndpointsServiceServerless_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

datamongodbatlasprivatelinkendpointsserviceserverless.DataMongodbatlasPrivatelinkEndpointsServiceServerless_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointsServiceServerless resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasPrivatelinkEndpointsServiceServerless to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasPrivatelinkEndpointsServiceServerless that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasPrivatelinkEndpointsServiceServerless to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.pageNumInput">PageNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.pageNum">PageNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.results"></a>

```go
func Results() DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.itemsPerPageInput"></a>

```go
func ItemsPerPageInput() *f64
```

- *Type:* *f64

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.pageNumInput"></a>

```go
func PageNumInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.pageNum"></a>

```go
func PageNum() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

&datamongodbatlasprivatelinkendpointsserviceserverless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceName: *string,
	ProjectId: *string,
	Id: *string,
	ItemsPerPage: *f64,
	PageNum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#instance_name DataMongodbatlasPrivatelinkEndpointsServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#project_id DataMongodbatlasPrivatelinkEndpointsServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#id DataMongodbatlasPrivatelinkEndpointsServiceServerless#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#items_per_page DataMongodbatlasPrivatelinkEndpointsServiceServerless#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.pageNum">PageNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#page_num DataMongodbatlasPrivatelinkEndpointsServiceServerless#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#instance_name DataMongodbatlasPrivatelinkEndpointsServiceServerless#instance_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#project_id DataMongodbatlasPrivatelinkEndpointsServiceServerless#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#id DataMongodbatlasPrivatelinkEndpointsServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.itemsPerPage"></a>

```go
ItemsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#items_per_page DataMongodbatlasPrivatelinkEndpointsServiceServerless#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.pageNum"></a>

```go
PageNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/data-sources/privatelink_endpoints_service_serverless#page_num DataMongodbatlasPrivatelinkEndpointsServiceServerless#page_num}.

---

### DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

&datamongodbatlasprivatelinkendpointsserviceserverless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

datamongodbatlasprivatelinkendpointsserviceserverless.NewDataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasprivatelinkendpointsserviceserverless"

datamongodbatlasprivatelinkendpointsserviceserverless.NewDataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.cloudProviderEndpointId">CloudProviderEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointServiceName">EndpointServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateEndpointIpAddress">PrivateEndpointIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateLinkServiceResourceId">PrivateLinkServiceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProviderEndpointId`<sup>Required</sup> <a name="CloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.cloudProviderEndpointId"></a>

```go
func CloudProviderEndpointId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `EndpointServiceName`<sup>Required</sup> <a name="EndpointServiceName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointServiceName"></a>

```go
func EndpointServiceName() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `PrivateEndpointIpAddress`<sup>Required</sup> <a name="PrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateEndpointIpAddress"></a>

```go
func PrivateEndpointIpAddress() *string
```

- *Type:* *string

---

##### `PrivateLinkServiceResourceId`<sup>Required</sup> <a name="PrivateLinkServiceResourceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateLinkServiceResourceId"></a>

```go
func PrivateLinkServiceResourceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults</a>

---



