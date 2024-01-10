# `dataMongodbatlasThirdPartyIntegration` Submodule <a name="`dataMongodbatlasThirdPartyIntegration` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasThirdPartyIntegration <a name="DataMongodbatlasThirdPartyIntegration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration mongodbatlas_third_party_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegration"

datamongodbatlasthirdpartyintegration.NewDataMongodbatlasThirdPartyIntegration(scope Construct, id *string, config DataMongodbatlasThirdPartyIntegrationConfig) DataMongodbatlasThirdPartyIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig">DataMongodbatlasThirdPartyIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig">DataMongodbatlasThirdPartyIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl">ResetMicrosoftTeamsWebhookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetServiceDiscovery">ResetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetMicrosoftTeamsWebhookUrl` <a name="ResetMicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl"></a>

```go
func ResetMicrosoftTeamsWebhookUrl()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetScheme"></a>

```go
func ResetScheme()
```

##### `ResetServiceDiscovery` <a name="ResetServiceDiscovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetServiceDiscovery"></a>

```go
func ResetServiceDiscovery()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.resetUserName"></a>

```go
func ResetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegration"

datamongodbatlasthirdpartyintegration.DataMongodbatlasThirdPartyIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegration"

datamongodbatlasthirdpartyintegration.DataMongodbatlasThirdPartyIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegration"

datamongodbatlasthirdpartyintegration.DataMongodbatlasThirdPartyIntegration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegration"

datamongodbatlasthirdpartyintegration.DataMongodbatlasThirdPartyIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasThirdPartyIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasThirdPartyIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasThirdPartyIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.routingKey">RoutingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput">MicrosoftTeamsWebhookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscoveryInput">ServiceDiscoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscovery">ServiceDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoutingKey`<sup>Required</sup> <a name="RoutingKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.routingKey"></a>

```go
func RoutingKey() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MicrosoftTeamsWebhookUrlInput`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrlInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput"></a>

```go
func MicrosoftTeamsWebhookUrlInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `ServiceDiscoveryInput`<sup>Optional</sup> <a name="ServiceDiscoveryInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscoveryInput"></a>

```go
func ServiceDiscoveryInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MicrosoftTeamsWebhookUrl`<sup>Required</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.microsoftTeamsWebhookUrl"></a>

```go
func MicrosoftTeamsWebhookUrl() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `ServiceDiscovery`<sup>Required</sup> <a name="ServiceDiscovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.serviceDiscovery"></a>

```go
func ServiceDiscovery() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasThirdPartyIntegrationConfig <a name="DataMongodbatlasThirdPartyIntegrationConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegration"

&datamongodbatlasthirdpartyintegration.DataMongodbatlasThirdPartyIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	Type: *string,
	Enabled: interface{},
	Id: *string,
	MicrosoftTeamsWebhookUrl: *string,
	Scheme: *string,
	ServiceDiscovery: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | Third-party service integration identifier. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#enabled DataMongodbatlasThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#id DataMongodbatlasThirdPartyIntegration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#microsoft_teams_webhook_url DataMongodbatlasThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#scheme DataMongodbatlasThirdPartyIntegration#scheme}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.serviceDiscovery">ServiceDiscovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#service_discovery DataMongodbatlasThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#user_name DataMongodbatlasThirdPartyIntegration#user_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#project_id DataMongodbatlasThirdPartyIntegration#project_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Third-party service integration identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#type DataMongodbatlasThirdPartyIntegration#type}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#enabled DataMongodbatlasThirdPartyIntegration#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#id DataMongodbatlasThirdPartyIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MicrosoftTeamsWebhookUrl`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl"></a>

```go
MicrosoftTeamsWebhookUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#microsoft_teams_webhook_url DataMongodbatlasThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#scheme DataMongodbatlasThirdPartyIntegration#scheme}.

---

##### `ServiceDiscovery`<sup>Optional</sup> <a name="ServiceDiscovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.serviceDiscovery"></a>

```go
ServiceDiscovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#service_discovery DataMongodbatlasThirdPartyIntegration#service_discovery}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegration.DataMongodbatlasThirdPartyIntegrationConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/third_party_integration#user_name DataMongodbatlasThirdPartyIntegration#user_name}.

---



