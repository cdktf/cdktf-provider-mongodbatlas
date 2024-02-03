# `dataMongodbatlasThirdPartyIntegrations` Submodule <a name="`dataMongodbatlasThirdPartyIntegrations` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasThirdPartyIntegrations <a name="DataMongodbatlasThirdPartyIntegrations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/third_party_integrations mongodbatlas_third_party_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

datamongodbatlasthirdpartyintegrations.NewDataMongodbatlasThirdPartyIntegrations(scope Construct, id *string, config DataMongodbatlasThirdPartyIntegrationsConfig) DataMongodbatlasThirdPartyIntegrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig">DataMongodbatlasThirdPartyIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig">DataMongodbatlasThirdPartyIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

datamongodbatlasthirdpartyintegrations.DataMongodbatlasThirdPartyIntegrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

datamongodbatlasthirdpartyintegrations.DataMongodbatlasThirdPartyIntegrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

datamongodbatlasthirdpartyintegrations.DataMongodbatlasThirdPartyIntegrations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

datamongodbatlasthirdpartyintegrations.DataMongodbatlasThirdPartyIntegrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasThirdPartyIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasThirdPartyIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/third_party_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasThirdPartyIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList">DataMongodbatlasThirdPartyIntegrationsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.results"></a>

```go
func Results() DataMongodbatlasThirdPartyIntegrationsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList">DataMongodbatlasThirdPartyIntegrationsResultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasThirdPartyIntegrationsConfig <a name="DataMongodbatlasThirdPartyIntegrationsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

&datamongodbatlasthirdpartyintegrations.DataMongodbatlasThirdPartyIntegrationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/third_party_integrations#project_id DataMongodbatlasThirdPartyIntegrations#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/third_party_integrations#id DataMongodbatlasThirdPartyIntegrations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/third_party_integrations#project_id DataMongodbatlasThirdPartyIntegrations#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/third_party_integrations#id DataMongodbatlasThirdPartyIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasThirdPartyIntegrationsResults <a name="DataMongodbatlasThirdPartyIntegrationsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

&datamongodbatlasthirdpartyintegrations.DataMongodbatlasThirdPartyIntegrationsResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasThirdPartyIntegrationsResultsList <a name="DataMongodbatlasThirdPartyIntegrationsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

datamongodbatlasthirdpartyintegrations.NewDataMongodbatlasThirdPartyIntegrationsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasThirdPartyIntegrationsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasThirdPartyIntegrationsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasThirdPartyIntegrationsResultsOutputReference <a name="DataMongodbatlasThirdPartyIntegrationsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasthirdpartyintegrations"

datamongodbatlasthirdpartyintegrations.NewDataMongodbatlasThirdPartyIntegrationsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasThirdPartyIntegrationsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.routingKey">RoutingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceDiscovery">ServiceDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults">DataMongodbatlasThirdPartyIntegrationsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MicrosoftTeamsWebhookUrl`<sup>Required</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.microsoftTeamsWebhookUrl"></a>

```go
func MicrosoftTeamsWebhookUrl() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoutingKey`<sup>Required</sup> <a name="RoutingKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.routingKey"></a>

```go
func RoutingKey() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `ServiceDiscovery`<sup>Required</sup> <a name="ServiceDiscovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceDiscovery"></a>

```go
func ServiceDiscovery() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasThirdPartyIntegrationsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults">DataMongodbatlasThirdPartyIntegrationsResults</a>

---



