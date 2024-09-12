# `dataMongodbatlasFederatedSettingsOrgRoleMappings` Submodule <a name="`dataMongodbatlasFederatedSettingsOrgRoleMappings` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappings <a name="DataMongodbatlasFederatedSettingsOrgRoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings mongodbatlas_federated_settings_org_role_mappings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.NewDataMongodbatlasFederatedSettingsOrgRoleMappings(scope Construct, id *string, config DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig) DataMongodbatlasFederatedSettingsOrgRoleMappings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig">DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig">DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetId"></a>

```go
func ResetId()
```

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetItemsPerPage"></a>

```go
func ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.resetPageNum"></a>

```go
func ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgRoleMappings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.DataMongodbatlasFederatedSettingsOrgRoleMappings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.DataMongodbatlasFederatedSettingsOrgRoleMappings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.DataMongodbatlasFederatedSettingsOrgRoleMappings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.DataMongodbatlasFederatedSettingsOrgRoleMappings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgRoleMappings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasFederatedSettingsOrgRoleMappings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasFederatedSettingsOrgRoleMappings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedSettingsOrgRoleMappings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList">DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.federationSettingsIdInput">FederationSettingsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.pageNumInput">PageNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.pageNum">PageNum</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.results"></a>

```go
func Results() DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList">DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList</a>

---

##### `FederationSettingsIdInput`<sup>Optional</sup> <a name="FederationSettingsIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.federationSettingsIdInput"></a>

```go
func FederationSettingsIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.itemsPerPageInput"></a>

```go
func ItemsPerPageInput() *f64
```

- *Type:* *f64

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.pageNumInput"></a>

```go
func PageNumInput() *f64
```

- *Type:* *f64

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.federationSettingsId"></a>

```go
func FederationSettingsId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.pageNum"></a>

```go
func PageNum() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

&datamongodbatlasfederatedsettingsorgrolemappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FederationSettingsId: *string,
	OrgId: *string,
	Id: *string,
	ItemsPerPage: *f64,
	PageNum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMappings#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#org_id DataMongodbatlasFederatedSettingsOrgRoleMappings#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#id DataMongodbatlasFederatedSettingsOrgRoleMappings#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#items_per_page DataMongodbatlasFederatedSettingsOrgRoleMappings#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.pageNum">PageNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#page_num DataMongodbatlasFederatedSettingsOrgRoleMappings#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.federationSettingsId"></a>

```go
FederationSettingsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMappings#federation_settings_id}.

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#org_id DataMongodbatlasFederatedSettingsOrgRoleMappings#org_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#id DataMongodbatlasFederatedSettingsOrgRoleMappings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.itemsPerPage"></a>

```go
ItemsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#items_per_page DataMongodbatlasFederatedSettingsOrgRoleMappings#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsConfig.property.pageNum"></a>

```go
PageNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/data-sources/federated_settings_org_role_mappings#page_num DataMongodbatlasFederatedSettingsOrgRoleMappings#page_num}.

---

### DataMongodbatlasFederatedSettingsOrgRoleMappingsResults <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

&datamongodbatlasfederatedsettingsorgrolemappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResults {

}
```


### DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

&datamongodbatlasfederatedsettingsorgrolemappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.NewDataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.NewDataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.externalGroupName">ExternalGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.roleAssignments">RoleAssignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResults">DataMongodbatlasFederatedSettingsOrgRoleMappingsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalGroupName`<sup>Required</sup> <a name="ExternalGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.externalGroupName"></a>

```go
func ExternalGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoleAssignments`<sup>Required</sup> <a name="RoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.roleAssignments"></a>

```go
func RoleAssignments() DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsOrgRoleMappingsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResults">DataMongodbatlasFederatedSettingsOrgRoleMappingsResults</a>

---


### DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.NewDataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemappings"

datamongodbatlasfederatedsettingsorgrolemappings.NewDataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMappings.DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingsResultsRoleAssignments</a>

---



