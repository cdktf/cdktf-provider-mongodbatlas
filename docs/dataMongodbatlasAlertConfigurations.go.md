# `dataMongodbatlasAlertConfigurations` Submodule <a name="`dataMongodbatlasAlertConfigurations` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAlertConfigurations <a name="DataMongodbatlasAlertConfigurations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations mongodbatlas_alert_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurations(scope Construct, id *string, config DataMongodbatlasAlertConfigurationsConfig) DataMongodbatlasAlertConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig">DataMongodbatlasAlertConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig">DataMongodbatlasAlertConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions">PutListOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetListOptions">ResetListOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOutputType">ResetOutputType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutListOptions` <a name="PutListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions"></a>

```go
func PutListOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetListOptions` <a name="ResetListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetListOptions"></a>

```go
func ResetListOptions()
```

##### `ResetOutputType` <a name="ResetOutputType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOutputType"></a>

```go
func ResetOutputType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAlertConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasAlertConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasAlertConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasAlertConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAlertConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptions">ListOptions</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList">DataMongodbatlasAlertConfigurationsListOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList">DataMongodbatlasAlertConfigurationsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.totalCount">TotalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptionsInput">ListOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputTypeInput">OutputTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputType">OutputType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListOptions`<sup>Required</sup> <a name="ListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptions"></a>

```go
func ListOptions() DataMongodbatlasAlertConfigurationsListOptionsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList">DataMongodbatlasAlertConfigurationsListOptionsList</a>

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.results"></a>

```go
func Results() DataMongodbatlasAlertConfigurationsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList">DataMongodbatlasAlertConfigurationsResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.totalCount"></a>

```go
func TotalCount() *f64
```

- *Type:* *f64

---

##### `ListOptionsInput`<sup>Optional</sup> <a name="ListOptionsInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptionsInput"></a>

```go
func ListOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputTypeInput"></a>

```go
func OutputTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputType"></a>

```go
func OutputType() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAlertConfigurationsConfig <a name="DataMongodbatlasAlertConfigurationsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	ListOptions: interface{},
	OutputType: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.listOptions">ListOptions</a></code> | <code>interface{}</code> | list_options block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.outputType">OutputType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}.

---

##### `ListOptions`<sup>Optional</sup> <a name="ListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.listOptions"></a>

```go
ListOptions interface{}
```

- *Type:* interface{}

list_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#list_options DataMongodbatlasAlertConfigurations#list_options}

---

##### `OutputType`<sup>Optional</sup> <a name="OutputType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.outputType"></a>

```go
OutputType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}.

---

### DataMongodbatlasAlertConfigurationsListOptions <a name="DataMongodbatlasAlertConfigurationsListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsListOptions {
	IncludeCount: interface{},
	ItemsPerPage: *f64,
	PageNum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.includeCount">IncludeCount</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#include_count DataMongodbatlasAlertConfigurations#include_count}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#items_per_page DataMongodbatlasAlertConfigurations#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.pageNum">PageNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#page_num DataMongodbatlasAlertConfigurations#page_num}. |

---

##### `IncludeCount`<sup>Optional</sup> <a name="IncludeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.includeCount"></a>

```go
IncludeCount interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#include_count DataMongodbatlasAlertConfigurations#include_count}.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.itemsPerPage"></a>

```go
ItemsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#items_per_page DataMongodbatlasAlertConfigurations#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.pageNum"></a>

```go
PageNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#page_num DataMongodbatlasAlertConfigurations#page_num}.

---

### DataMongodbatlasAlertConfigurationsResults <a name="DataMongodbatlasAlertConfigurationsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsResults {
	AlertConfigurationId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.alertConfigurationId">AlertConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#alert_configuration_id DataMongodbatlasAlertConfigurations#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}. |

---

##### `AlertConfigurationId`<sup>Required</sup> <a name="AlertConfigurationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.alertConfigurationId"></a>

```go
AlertConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#alert_configuration_id DataMongodbatlasAlertConfigurations#alert_configuration_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}.

---

### DataMongodbatlasAlertConfigurationsResultsMatcher <a name="DataMongodbatlasAlertConfigurationsResultsMatcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher {

}
```


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig {

}
```


### DataMongodbatlasAlertConfigurationsResultsNotification <a name="DataMongodbatlasAlertConfigurationsResultsNotification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsResultsNotification {

}
```


### DataMongodbatlasAlertConfigurationsResultsOutput <a name="DataMongodbatlasAlertConfigurationsResultsOutput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsResultsOutput {

}
```


### DataMongodbatlasAlertConfigurationsResultsThresholdConfig <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

&datamongodbatlasalertconfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAlertConfigurationsListOptionsList <a name="DataMongodbatlasAlertConfigurationsListOptionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsListOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAlertConfigurationsListOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAlertConfigurationsListOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataMongodbatlasAlertConfigurationsListOptionsOutputReference <a name="DataMongodbatlasAlertConfigurationsListOptionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsListOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAlertConfigurationsListOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetIncludeCount">ResetIncludeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeCount` <a name="ResetIncludeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetIncludeCount"></a>

```go
func ResetIncludeCount()
```

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetItemsPerPage"></a>

```go
func ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetPageNum"></a>

```go
func ResetPageNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCountInput">IncludeCountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNumInput">PageNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCount">IncludeCount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNum">PageNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeCountInput`<sup>Optional</sup> <a name="IncludeCountInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCountInput"></a>

```go
func IncludeCountInput() interface{}
```

- *Type:* interface{}

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPageInput"></a>

```go
func ItemsPerPageInput() *f64
```

- *Type:* *f64

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNumInput"></a>

```go
func PageNumInput() *f64
```

- *Type:* *f64

---

##### `IncludeCount`<sup>Required</sup> <a name="IncludeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCount"></a>

```go
func IncludeCount() interface{}
```

- *Type:* interface{}

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNum"></a>

```go
func PageNum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataMongodbatlasAlertConfigurationsResultsList <a name="DataMongodbatlasAlertConfigurationsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAlertConfigurationsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAlertConfigurationsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataMongodbatlasAlertConfigurationsResultsMatcherList <a name="DataMongodbatlasAlertConfigurationsResultsMatcherList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsMatcherList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAlertConfigurationsResultsMatcherList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher">DataMongodbatlasAlertConfigurationsResultsMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAlertConfigurationsResultsMatcher
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher">DataMongodbatlasAlertConfigurationsResultsMatcher</a>

---


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig</a>

---


### DataMongodbatlasAlertConfigurationsResultsNotificationList <a name="DataMongodbatlasAlertConfigurationsResultsNotificationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAlertConfigurationsResultsNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogApiKey">DatadogApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.delayMin">DelayMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailEnabled">EmailEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.intervalMin">IntervalMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.mobileNumber">MobileNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.notifierId">NotifierId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieApiKey">OpsGenieApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieRegion">OpsGenieRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.smsEnabled">SmsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsApiKey">VictorOpsApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsRoutingKey">VictorOpsRoutingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookSecret">WebhookSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookUrl">WebhookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification">DataMongodbatlasAlertConfigurationsResultsNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `DatadogApiKey`<sup>Required</sup> <a name="DatadogApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogApiKey"></a>

```go
func DatadogApiKey() *string
```

- *Type:* *string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogRegion"></a>

```go
func DatadogRegion() *string
```

- *Type:* *string

---

##### `DelayMin`<sup>Required</sup> <a name="DelayMin" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.delayMin"></a>

```go
func DelayMin() *f64
```

- *Type:* *f64

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `EmailEnabled`<sup>Required</sup> <a name="EmailEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailEnabled"></a>

```go
func EmailEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `IntervalMin`<sup>Required</sup> <a name="IntervalMin" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.intervalMin"></a>

```go
func IntervalMin() *f64
```

- *Type:* *f64

---

##### `MicrosoftTeamsWebhookUrl`<sup>Required</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```go
func MicrosoftTeamsWebhookUrl() *string
```

- *Type:* *string

---

##### `MobileNumber`<sup>Required</sup> <a name="MobileNumber" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.mobileNumber"></a>

```go
func MobileNumber() *string
```

- *Type:* *string

---

##### `NotifierId`<sup>Required</sup> <a name="NotifierId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.notifierId"></a>

```go
func NotifierId() *string
```

- *Type:* *string

---

##### `OpsGenieApiKey`<sup>Required</sup> <a name="OpsGenieApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieApiKey"></a>

```go
func OpsGenieApiKey() *string
```

- *Type:* *string

---

##### `OpsGenieRegion`<sup>Required</sup> <a name="OpsGenieRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieRegion"></a>

```go
func OpsGenieRegion() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `SmsEnabled`<sup>Required</sup> <a name="SmsEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.smsEnabled"></a>

```go
func SmsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VictorOpsApiKey`<sup>Required</sup> <a name="VictorOpsApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsApiKey"></a>

```go
func VictorOpsApiKey() *string
```

- *Type:* *string

---

##### `VictorOpsRoutingKey`<sup>Required</sup> <a name="VictorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsRoutingKey"></a>

```go
func VictorOpsRoutingKey() *string
```

- *Type:* *string

---

##### `WebhookSecret`<sup>Required</sup> <a name="WebhookSecret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookSecret"></a>

```go
func WebhookSecret() *string
```

- *Type:* *string

---

##### `WebhookUrl`<sup>Required</sup> <a name="WebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookUrl"></a>

```go
func WebhookUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAlertConfigurationsResultsNotification
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification">DataMongodbatlasAlertConfigurationsResultsNotification</a>

---


### DataMongodbatlasAlertConfigurationsResultsOutputList <a name="DataMongodbatlasAlertConfigurationsResultsOutputList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAlertConfigurationsResultsOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAlertConfigurationsResultsOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAlertConfigurationsResultsOutputOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsOutputOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAlertConfigurationsResultsOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput">DataMongodbatlasAlertConfigurationsResultsOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAlertConfigurationsResultsOutput
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput">DataMongodbatlasAlertConfigurationsResultsOutput</a>

---


### DataMongodbatlasAlertConfigurationsResultsOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAlertConfigurationsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.matcher">Matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList">DataMongodbatlasAlertConfigurationsResultsMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.metricThresholdConfig">MetricThresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList">DataMongodbatlasAlertConfigurationsResultsNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList">DataMongodbatlasAlertConfigurationsResultsOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.thresholdConfig">ThresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.updated">Updated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationIdInput">AlertConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationId">AlertConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.matcher"></a>

```go
func Matcher() DataMongodbatlasAlertConfigurationsResultsMatcherList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList">DataMongodbatlasAlertConfigurationsResultsMatcherList</a>

---

##### `MetricThresholdConfig`<sup>Required</sup> <a name="MetricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.metricThresholdConfig"></a>

```go
func MetricThresholdConfig() DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.notification"></a>

```go
func Notification() DataMongodbatlasAlertConfigurationsResultsNotificationList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList">DataMongodbatlasAlertConfigurationsResultsNotificationList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.output"></a>

```go
func Output() DataMongodbatlasAlertConfigurationsResultsOutputList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList">DataMongodbatlasAlertConfigurationsResultsOutputList</a>

---

##### `ThresholdConfig`<sup>Required</sup> <a name="ThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.thresholdConfig"></a>

```go
func ThresholdConfig() DataMongodbatlasAlertConfigurationsResultsThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsThresholdConfigList</a>

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.updated"></a>

```go
func Updated() *string
```

- *Type:* *string

---

##### `AlertConfigurationIdInput`<sup>Optional</sup> <a name="AlertConfigurationIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationIdInput"></a>

```go
func AlertConfigurationIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `AlertConfigurationId`<sup>Required</sup> <a name="AlertConfigurationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationId"></a>

```go
func AlertConfigurationId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAlertConfigurationsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a>

---


### DataMongodbatlasAlertConfigurationsResultsThresholdConfigList <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsThresholdConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasAlertConfigurationsResultsThresholdConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get"></a>

```go
func Get(index *f64) DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasalertconfigurations"

datamongodbatlasalertconfigurations.NewDataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig">DataMongodbatlasAlertConfigurationsResultsThresholdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasAlertConfigurationsResultsThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig">DataMongodbatlasAlertConfigurationsResultsThresholdConfig</a>

---



