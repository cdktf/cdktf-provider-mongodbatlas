# `dataMongodbatlasFederatedSettingsIdentityProvider` Submodule <a name="`dataMongodbatlasFederatedSettingsIdentityProvider` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsIdentityProvider <a name="DataMongodbatlasFederatedSettingsIdentityProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProvider(scope Construct, id *string, config DataMongodbatlasFederatedSettingsIdentityProviderConfig) DataMongodbatlasFederatedSettingsIdentityProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig">DataMongodbatlasFederatedSettingsIdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig">DataMongodbatlasFederatedSettingsIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProvider_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasFederatedSettingsIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasFederatedSettingsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedSettingsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.acsUrl">AcsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedDomains">AssociatedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedOrgs">AssociatedOrgs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.audienceUri">AudienceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.groupsClaim">GroupsClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idpId">IdpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idpType">IdpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.oktaIdpId">OktaIdpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.pemFileInfo">PemFileInfo</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.requestBinding">RequestBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.requestedScopes">RequestedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoDebugEnabled">SsoDebugEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.userClaim">UserClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsIdInput">FederationSettingsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AcsUrl`<sup>Required</sup> <a name="AcsUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.acsUrl"></a>

```go
func AcsUrl() *string
```

- *Type:* *string

---

##### `AssociatedDomains`<sup>Required</sup> <a name="AssociatedDomains" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedDomains"></a>

```go
func AssociatedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `AssociatedOrgs`<sup>Required</sup> <a name="AssociatedOrgs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedOrgs"></a>

```go
func AssociatedOrgs() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList</a>

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `AudienceUri`<sup>Required</sup> <a name="AudienceUri" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.audienceUri"></a>

```go
func AudienceUri() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.groupsClaim"></a>

```go
func GroupsClaim() *string
```

- *Type:* *string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idpId"></a>

```go
func IdpId() *string
```

- *Type:* *string

---

##### `IdpType`<sup>Required</sup> <a name="IdpType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idpType"></a>

```go
func IdpType() *string
```

- *Type:* *string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `OktaIdpId`<sup>Required</sup> <a name="OktaIdpId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.oktaIdpId"></a>

```go
func OktaIdpId() *string
```

- *Type:* *string

---

##### `PemFileInfo`<sup>Required</sup> <a name="PemFileInfo" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.pemFileInfo"></a>

```go
func PemFileInfo() DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RequestBinding`<sup>Required</sup> <a name="RequestBinding" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.requestBinding"></a>

```go
func RequestBinding() *string
```

- *Type:* *string

---

##### `RequestedScopes`<sup>Required</sup> <a name="RequestedScopes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.requestedScopes"></a>

```go
func RequestedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseSignatureAlgorithm`<sup>Required</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.responseSignatureAlgorithm"></a>

```go
func ResponseSignatureAlgorithm() *string
```

- *Type:* *string

---

##### `SsoDebugEnabled`<sup>Required</sup> <a name="SsoDebugEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoDebugEnabled"></a>

```go
func SsoDebugEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoUrl"></a>

```go
func SsoUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.userClaim"></a>

```go
func UserClaim() *string
```

- *Type:* *string

---

##### `FederationSettingsIdInput`<sup>Optional</sup> <a name="FederationSettingsIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsIdInput"></a>

```go
func FederationSettingsIdInput() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsId"></a>

```go
func FederationSettingsId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

&datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs {

}
```


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

&datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings {

}
```


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

&datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments {

}
```


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

&datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts {

}
```


### DataMongodbatlasFederatedSettingsIdentityProviderConfig <a name="DataMongodbatlasFederatedSettingsIdentityProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

&datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FederationSettingsId: *string,
	IdentityProviderId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProvider#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider#identity_provider_id DataMongodbatlasFederatedSettingsIdentityProvider#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider#id DataMongodbatlasFederatedSettingsIdentityProvider#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.federationSettingsId"></a>

```go
FederationSettingsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProvider#federation_settings_id}.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider#identity_provider_id DataMongodbatlasFederatedSettingsIdentityProvider#identity_provider_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.0/docs/data-sources/federated_settings_identity_provider#id DataMongodbatlasFederatedSettingsIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

&datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo {

}
```


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

&datamongodbatlasfederatedsettingsidentityprovider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainAllowList">DomainAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainRestrictionEnabled">DomainRestrictionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.postAuthRoleGrants">PostAuthRoleGrants</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.roleMappings">RoleMappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.userConflicts">UserConflicts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainAllowList`<sup>Required</sup> <a name="DomainAllowList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainAllowList"></a>

```go
func DomainAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `DomainRestrictionEnabled`<sup>Required</sup> <a name="DomainRestrictionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainRestrictionEnabled"></a>

```go
func DomainRestrictionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `PostAuthRoleGrants`<sup>Required</sup> <a name="PostAuthRoleGrants" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.postAuthRoleGrants"></a>

```go
func PostAuthRoleGrants() *[]*string
```

- *Type:* *[]*string

---

##### `RoleMappings`<sup>Required</sup> <a name="RoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.roleMappings"></a>

```go
func RoleMappings() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList</a>

---

##### `UserConflicts`<sup>Required</sup> <a name="UserConflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.userConflicts"></a>

```go
func UserConflicts() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.externalGroupName">ExternalGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.roleAssignments">RoleAssignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalGroupName`<sup>Required</sup> <a name="ExternalGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.externalGroupName"></a>

```go
func ExternalGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoleAssignments`<sup>Required</sup> <a name="RoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.roleAssignments"></a>

```go
func RoleAssignments() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.federationSettingsId">FederationSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.federationSettingsId"></a>

```go
func FederationSettingsId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notBefore">NotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notBefore"></a>

```go
func NotBefore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.get"></a>

```go
func Get(index *f64) DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasfederatedsettingsidentityprovider"

datamongodbatlasfederatedsettingsidentityprovider.NewDataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.certificates">Certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.certificates"></a>

```go
func Certificates() DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo</a>

---



