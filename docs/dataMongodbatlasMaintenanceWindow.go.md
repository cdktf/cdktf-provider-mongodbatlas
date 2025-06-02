# `dataMongodbatlasMaintenanceWindow` Submodule <a name="`dataMongodbatlasMaintenanceWindow` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasMaintenanceWindow <a name="DataMongodbatlasMaintenanceWindow" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window mongodbatlas_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

datamongodbatlasmaintenancewindow.NewDataMongodbatlasMaintenanceWindow(scope Construct, id *string, config DataMongodbatlasMaintenanceWindowConfig) DataMongodbatlasMaintenanceWindow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig">DataMongodbatlasMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig">DataMongodbatlasMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

datamongodbatlasmaintenancewindow.DataMongodbatlasMaintenanceWindow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

datamongodbatlasmaintenancewindow.DataMongodbatlasMaintenanceWindow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

datamongodbatlasmaintenancewindow.DataMongodbatlasMaintenanceWindow_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

datamongodbatlasmaintenancewindow.DataMongodbatlasMaintenanceWindow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.autoDeferOnceEnabled">AutoDeferOnceEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.numberOfDeferrals">NumberOfDeferrals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.protectedHours">ProtectedHours</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList">DataMongodbatlasMaintenanceWindowProtectedHoursList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.startAsap">StartAsap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.timeZoneId">TimeZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoDeferOnceEnabled`<sup>Required</sup> <a name="AutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.autoDeferOnceEnabled"></a>

```go
func AutoDeferOnceEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dayOfWeek"></a>

```go
func DayOfWeek() *f64
```

- *Type:* *f64

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `NumberOfDeferrals`<sup>Required</sup> <a name="NumberOfDeferrals" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.numberOfDeferrals"></a>

```go
func NumberOfDeferrals() *f64
```

- *Type:* *f64

---

##### `ProtectedHours`<sup>Required</sup> <a name="ProtectedHours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.protectedHours"></a>

```go
func ProtectedHours() DataMongodbatlasMaintenanceWindowProtectedHoursList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList">DataMongodbatlasMaintenanceWindowProtectedHoursList</a>

---

##### `StartAsap`<sup>Required</sup> <a name="StartAsap" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.startAsap"></a>

```go
func StartAsap() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.timeZoneId"></a>

```go
func TimeZoneId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasMaintenanceWindowConfig <a name="DataMongodbatlasMaintenanceWindowConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

&datamongodbatlasmaintenancewindow.DataMongodbatlasMaintenanceWindowConfig {
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#project_id DataMongodbatlasMaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#id DataMongodbatlasMaintenanceWindow#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#project_id DataMongodbatlasMaintenanceWindow#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#id DataMongodbatlasMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasMaintenanceWindowProtectedHours <a name="DataMongodbatlasMaintenanceWindowProtectedHours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

&datamongodbatlasmaintenancewindow.DataMongodbatlasMaintenanceWindowProtectedHours {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasMaintenanceWindowProtectedHoursList <a name="DataMongodbatlasMaintenanceWindowProtectedHoursList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

datamongodbatlasmaintenancewindow.NewDataMongodbatlasMaintenanceWindowProtectedHoursList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasMaintenanceWindowProtectedHoursList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.get"></a>

```go
func Get(index *f64) DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference <a name="DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/datamongodbatlasmaintenancewindow"

datamongodbatlasmaintenancewindow.NewDataMongodbatlasMaintenanceWindowProtectedHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.endHourOfDay">EndHourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.startHourOfDay">StartHourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours">DataMongodbatlasMaintenanceWindowProtectedHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndHourOfDay`<sup>Required</sup> <a name="EndHourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.endHourOfDay"></a>

```go
func EndHourOfDay() *f64
```

- *Type:* *f64

---

##### `StartHourOfDay`<sup>Required</sup> <a name="StartHourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.startHourOfDay"></a>

```go
func StartHourOfDay() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasMaintenanceWindowProtectedHours
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours">DataMongodbatlasMaintenanceWindowProtectedHours</a>

---



