# `dataMongodbatlasFederatedSettingsOrgConfigs` Submodule <a name="`dataMongodbatlasFederatedSettingsOrgConfigs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsOrgConfigs <a name="DataMongodbatlasFederatedSettingsOrgConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs mongodbatlas_federated_settings_org_configs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigs(scope Construct, id *string, config DataMongodbatlasFederatedSettingsOrgConfigsConfig) DataMongodbatlasFederatedSettingsOrgConfigs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig">DataMongodbatlasFederatedSettingsOrgConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig">DataMongodbatlasFederatedSettingsOrgConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetId"></a>

```go
func ResetId()
```

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetItemsPerPage"></a>

```go
func ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.resetPageNum"></a>

```go
func ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasFederatedSettingsOrgConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasFederatedSettingsOrgConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedSettingsOrgConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.federationSettingsIdInput">FederationSettingsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.pageNumInput">PageNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.pageNum">PageNum</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.results"></a>

```go
func Results() DataMongodbatlasFederatedSettingsOrgConfigsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsList</a>

---

##### `FederationSettingsIdInput`<sup>Optional</sup> <a name="FederationSettingsIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.federationSettingsIdInput"></a>

```go
func FederationSettingsIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.itemsPerPageInput"></a>

```go
func ItemsPerPageInput() *f64
```

- *Type:* *f64

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.pageNumInput"></a>

```go
func PageNumInput() *f64
```

- *Type:* *f64

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.federationSettingsId"></a>

```go
func FederationSettingsId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.pageNum"></a>

```go
func PageNum() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsOrgConfigsConfig <a name="DataMongodbatlasFederatedSettingsOrgConfigsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

&datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FederationSettingsId: *string,
	Id: *string,
	ItemsPerPage: *f64,
	PageNum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#federation_settings_id DataMongodbatlasFederatedSettingsOrgConfigs#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#id DataMongodbatlasFederatedSettingsOrgConfigs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#items_per_page DataMongodbatlasFederatedSettingsOrgConfigs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.pageNum">PageNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#page_num DataMongodbatlasFederatedSettingsOrgConfigs#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.federationSettingsId"></a>

```go
FederationSettingsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#federation_settings_id DataMongodbatlasFederatedSettingsOrgConfigs#federation_settings_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#id DataMongodbatlasFederatedSettingsOrgConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.itemsPerPage"></a>

```go
ItemsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#items_per_page DataMongodbatlasFederatedSettingsOrgConfigs#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsConfig.property.pageNum"></a>

```go
PageNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/federated_settings_org_configs#page_num DataMongodbatlasFederatedSettingsOrgConfigs#page_num}.

---

### DataMongodbatlasFederatedSettingsOrgConfigsResults <a name="DataMongodbatlasFederatedSettingsOrgConfigsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

&datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigsResults {

}
```


### DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

&datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings {

}
```


### DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

&datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments {

}
```


### DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

&datamongodbatlasfederatedsettingsorgconfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsOrgConfigsResultsList <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.dataAccessIdentityProviderIds">DataAccessIdentityProviderIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.domainAllowList">DomainAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.domainRestrictionEnabled">DomainRestrictionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.postAuthRoleGrants">PostAuthRoleGrants</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.roleMappings">RoleMappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.userConflicts">UserConflicts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResults">DataMongodbatlasFederatedSettingsOrgConfigsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataAccessIdentityProviderIds`<sup>Required</sup> <a name="DataAccessIdentityProviderIds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.dataAccessIdentityProviderIds"></a>

```go
func DataAccessIdentityProviderIds() *[]*string
```

- *Type:* *[]*string

---

##### `DomainAllowList`<sup>Required</sup> <a name="DomainAllowList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.domainAllowList"></a>

```go
func DomainAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `DomainRestrictionEnabled`<sup>Required</sup> <a name="DomainRestrictionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.domainRestrictionEnabled"></a>

```go
func DomainRestrictionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `PostAuthRoleGrants`<sup>Required</sup> <a name="PostAuthRoleGrants" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.postAuthRoleGrants"></a>

```go
func PostAuthRoleGrants() *[]*string
```

- *Type:* *[]*string

---

##### `RoleMappings`<sup>Required</sup> <a name="RoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.roleMappings"></a>

```go
func RoleMappings() DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList</a>

---

##### `UserConflicts`<sup>Required</sup> <a name="UserConflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.userConflicts"></a>

```go
func UserConflicts() DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsOrgConfigsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResults">DataMongodbatlasFederatedSettingsOrgConfigsResults</a>

---


### DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.externalGroupName">ExternalGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.roleAssignments">RoleAssignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalGroupName`<sup>Required</sup> <a name="ExternalGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.externalGroupName"></a>

```go
func ExternalGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoleAssignments`<sup>Required</sup> <a name="RoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.roleAssignments"></a>

```go
func RoleAssignments() DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings</a>

---


### DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments</a>

---


### DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasfederatedsettingsorgconfigs"

datamongodbatlasfederatedsettingsorgconfigs.NewDataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts">DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.federationSettingsId"></a>

```go
func FederationSettingsId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgConfigs.DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts">DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts</a>

---



