# `mongodbatlas_maintenance_window`

Refer to the Terraform Registory for docs: [`mongodbatlas_maintenance_window`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window).

# `maintenanceWindow` Submodule <a name="`maintenanceWindow` Submodule" id="@cdktf/provider-mongodbatlas.maintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceWindow <a name="MaintenanceWindow" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window mongodbatlas_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/maintenancewindow"

maintenancewindow.NewMaintenanceWindow(scope Construct, id *string, config MaintenanceWindowConfig) MaintenanceWindow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig">MaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig">MaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDefer">ResetAutoDefer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDeferOnceEnabled">ResetAutoDeferOnceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDefer">ResetDefer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetHourOfDay">ResetHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetNumberOfDeferrals">ResetNumberOfDeferrals</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAutoDefer` <a name="ResetAutoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDefer"></a>

```go
func ResetAutoDefer()
```

##### `ResetAutoDeferOnceEnabled` <a name="ResetAutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDeferOnceEnabled"></a>

```go
func ResetAutoDeferOnceEnabled()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDayOfWeek"></a>

```go
func ResetDayOfWeek()
```

##### `ResetDefer` <a name="ResetDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDefer"></a>

```go
func ResetDefer()
```

##### `ResetHourOfDay` <a name="ResetHourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetHourOfDay"></a>

```go
func ResetHourOfDay()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetId"></a>

```go
func ResetId()
```

##### `ResetNumberOfDeferrals` <a name="ResetNumberOfDeferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetNumberOfDeferrals"></a>

```go
func ResetNumberOfDeferrals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/maintenancewindow"

maintenancewindow.MaintenanceWindow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/maintenancewindow"

maintenancewindow.MaintenanceWindow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/maintenancewindow"

maintenancewindow.MaintenanceWindow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap">StartAsap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput">AutoDeferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput">AutoDeferOnceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput">DeferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput">HourOfDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferralsInput">NumberOfDeferralsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer">AutoDefer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled">AutoDeferOnceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer">Defer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals">NumberOfDeferrals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StartAsap`<sup>Required</sup> <a name="StartAsap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap"></a>

```go
func StartAsap() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoDeferInput`<sup>Optional</sup> <a name="AutoDeferInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput"></a>

```go
func AutoDeferInput() interface{}
```

- *Type:* interface{}

---

##### `AutoDeferOnceEnabledInput`<sup>Optional</sup> <a name="AutoDeferOnceEnabledInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput"></a>

```go
func AutoDeferOnceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *f64
```

- *Type:* *f64

---

##### `DeferInput`<sup>Optional</sup> <a name="DeferInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput"></a>

```go
func DeferInput() interface{}
```

- *Type:* interface{}

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput"></a>

```go
func HourOfDayInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NumberOfDeferralsInput`<sup>Optional</sup> <a name="NumberOfDeferralsInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferralsInput"></a>

```go
func NumberOfDeferralsInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `AutoDefer`<sup>Required</sup> <a name="AutoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer"></a>

```go
func AutoDefer() interface{}
```

- *Type:* interface{}

---

##### `AutoDeferOnceEnabled`<sup>Required</sup> <a name="AutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled"></a>

```go
func AutoDeferOnceEnabled() interface{}
```

- *Type:* interface{}

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek"></a>

```go
func DayOfWeek() *f64
```

- *Type:* *f64

---

##### `Defer`<sup>Required</sup> <a name="Defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer"></a>

```go
func Defer() interface{}
```

- *Type:* interface{}

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NumberOfDeferrals`<sup>Required</sup> <a name="NumberOfDeferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals"></a>

```go
func NumberOfDeferrals() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceWindowConfig <a name="MaintenanceWindowConfig" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/maintenancewindow"

&maintenancewindow.MaintenanceWindowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	AutoDefer: interface{},
	AutoDeferOnceEnabled: interface{},
	DayOfWeek: *f64,
	Defer: interface{},
	HourOfDay: *f64,
	Id: *string,
	NumberOfDeferrals: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer">AutoDefer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled">AutoDeferOnceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek">DayOfWeek</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer">Defer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#defer MaintenanceWindow#defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.numberOfDeferrals">NumberOfDeferrals</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#number_of_deferrals MaintenanceWindow#number_of_deferrals}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}.

---

##### `AutoDefer`<sup>Optional</sup> <a name="AutoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer"></a>

```go
AutoDefer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}.

---

##### `AutoDeferOnceEnabled`<sup>Optional</sup> <a name="AutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled"></a>

```go
AutoDeferOnceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek"></a>

```go
DayOfWeek *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}.

---

##### `Defer`<sup>Optional</sup> <a name="Defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer"></a>

```go
Defer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#defer MaintenanceWindow#defer}.

---

##### `HourOfDay`<sup>Optional</sup> <a name="HourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay"></a>

```go
HourOfDay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumberOfDeferrals`<sup>Optional</sup> <a name="NumberOfDeferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.numberOfDeferrals"></a>

```go
NumberOfDeferrals *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/resources/maintenance_window#number_of_deferrals MaintenanceWindow#number_of_deferrals}.

---



