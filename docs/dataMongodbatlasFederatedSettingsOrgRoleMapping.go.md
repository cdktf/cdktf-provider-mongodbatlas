# `dataMongodbatlasFederatedSettingsOrgRoleMapping` Submodule <a name="`dataMongodbatlasFederatedSettingsOrgRoleMapping` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMapping <a name="DataMongodbatlasFederatedSettingsOrgRoleMapping" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping mongodbatlas_federated_settings_org_role_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

datamongodbatlasfederatedsettingsorgrolemapping.NewDataMongodbatlasFederatedSettingsOrgRoleMapping(scope Construct, id *string, config DataMongodbatlasFederatedSettingsOrgRoleMappingConfig) DataMongodbatlasFederatedSettingsOrgRoleMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig">DataMongodbatlasFederatedSettingsOrgRoleMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig">DataMongodbatlasFederatedSettingsOrgRoleMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

datamongodbatlasfederatedsettingsorgrolemapping.DataMongodbatlasFederatedSettingsOrgRoleMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

datamongodbatlasfederatedsettingsorgrolemapping.DataMongodbatlasFederatedSettingsOrgRoleMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

datamongodbatlasfederatedsettingsorgrolemapping.DataMongodbatlasFederatedSettingsOrgRoleMapping_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

datamongodbatlasfederatedsettingsorgrolemapping.DataMongodbatlasFederatedSettingsOrgRoleMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasFederatedSettingsOrgRoleMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasFederatedSettingsOrgRoleMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedSettingsOrgRoleMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.externalGroupName">ExternalGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleAssignments">RoleAssignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsIdInput">FederationSettingsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingIdInput">RoleMappingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingId">RoleMappingId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalGroupName`<sup>Required</sup> <a name="ExternalGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.externalGroupName"></a>

```go
func ExternalGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoleAssignments`<sup>Required</sup> <a name="RoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleAssignments"></a>

```go
func RoleAssignments() DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList</a>

---

##### `FederationSettingsIdInput`<sup>Optional</sup> <a name="FederationSettingsIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsIdInput"></a>

```go
func FederationSettingsIdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `RoleMappingIdInput`<sup>Optional</sup> <a name="RoleMappingIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingIdInput"></a>

```go
func RoleMappingIdInput() *string
```

- *Type:* *string

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsId"></a>

```go
func FederationSettingsId() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `RoleMappingId`<sup>Required</sup> <a name="RoleMappingId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingId"></a>

```go
func RoleMappingId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingConfig <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

&datamongodbatlasfederatedsettingsorgrolemapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FederationSettingsId: *string,
	OrgId: *string,
	RoleMappingId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.roleMappingId">RoleMappingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.federationSettingsId"></a>

```go
FederationSettingsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}.

---

##### `RoleMappingId`<sup>Required</sup> <a name="RoleMappingId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.roleMappingId"></a>

```go
RoleMappingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}.

---

### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

&datamongodbatlasfederatedsettingsorgrolemapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

datamongodbatlasfederatedsettingsorgrolemapping.NewDataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsorgrolemapping"

datamongodbatlasfederatedsettingsorgrolemapping.NewDataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments</a>

---



