# `mongodbatlas_maintenance_window`

Refer to the Terraform Registory for docs: [`mongodbatlas_maintenance_window`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window).

# `maintenanceWindow` Submodule <a name="`maintenanceWindow` Submodule" id="@cdktf/provider-mongodbatlas.maintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceWindow <a name="MaintenanceWindow" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window mongodbatlas_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new MaintenanceWindow(Construct Scope, string Id, MaintenanceWindowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig">MaintenanceWindowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAutoDefer` <a name="ResetAutoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDefer"></a>

```csharp
private void ResetAutoDefer()
```

##### `ResetAutoDeferOnceEnabled` <a name="ResetAutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDeferOnceEnabled"></a>

```csharp
private void ResetAutoDeferOnceEnabled()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetDefer` <a name="ResetDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDefer"></a>

```csharp
private void ResetDefer()
```

##### `ResetHourOfDay` <a name="ResetHourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetHourOfDay"></a>

```csharp
private void ResetHourOfDay()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNumberOfDeferrals` <a name="ResetNumberOfDeferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetNumberOfDeferrals"></a>

```csharp
private void ResetNumberOfDeferrals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

MaintenanceWindow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

MaintenanceWindow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

MaintenanceWindow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap">StartAsap</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput">AutoDeferInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput">AutoDeferOnceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput">DeferInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferralsInput">NumberOfDeferralsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer">AutoDefer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled">AutoDeferOnceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer">Defer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals">NumberOfDeferrals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `StartAsap`<sup>Required</sup> <a name="StartAsap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap"></a>

```csharp
public IResolvable StartAsap { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoDeferInput`<sup>Optional</sup> <a name="AutoDeferInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput"></a>

```csharp
public object AutoDeferInput { get; }
```

- *Type:* object

---

##### `AutoDeferOnceEnabledInput`<sup>Optional</sup> <a name="AutoDeferOnceEnabledInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput"></a>

```csharp
public object AutoDeferOnceEnabledInput { get; }
```

- *Type:* object

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput"></a>

```csharp
public double DayOfWeekInput { get; }
```

- *Type:* double

---

##### `DeferInput`<sup>Optional</sup> <a name="DeferInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput"></a>

```csharp
public object DeferInput { get; }
```

- *Type:* object

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NumberOfDeferralsInput`<sup>Optional</sup> <a name="NumberOfDeferralsInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferralsInput"></a>

```csharp
public double NumberOfDeferralsInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `AutoDefer`<sup>Required</sup> <a name="AutoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer"></a>

```csharp
public object AutoDefer { get; }
```

- *Type:* object

---

##### `AutoDeferOnceEnabled`<sup>Required</sup> <a name="AutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled"></a>

```csharp
public object AutoDeferOnceEnabled { get; }
```

- *Type:* object

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; }
```

- *Type:* double

---

##### `Defer`<sup>Required</sup> <a name="Defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer"></a>

```csharp
public object Defer { get; }
```

- *Type:* object

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NumberOfDeferrals`<sup>Required</sup> <a name="NumberOfDeferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals"></a>

```csharp
public double NumberOfDeferrals { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceWindowConfig <a name="MaintenanceWindowConfig" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new MaintenanceWindowConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    object AutoDefer = null,
    object AutoDeferOnceEnabled = null,
    double DayOfWeek = null,
    object Defer = null,
    double HourOfDay = null,
    string Id = null,
    double NumberOfDeferrals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer">AutoDefer</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled">AutoDeferOnceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer">Defer</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.numberOfDeferrals">NumberOfDeferrals</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#number_of_deferrals MaintenanceWindow#number_of_deferrals}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}.

---

##### `AutoDefer`<sup>Optional</sup> <a name="AutoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer"></a>

```csharp
public object AutoDefer { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}.

---

##### `AutoDeferOnceEnabled`<sup>Optional</sup> <a name="AutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled"></a>

```csharp
public object AutoDeferOnceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}.

---

##### `Defer`<sup>Optional</sup> <a name="Defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer"></a>

```csharp
public object Defer { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}.

---

##### `HourOfDay`<sup>Optional</sup> <a name="HourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumberOfDeferrals`<sup>Optional</sup> <a name="NumberOfDeferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.numberOfDeferrals"></a>

```csharp
public double NumberOfDeferrals { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/maintenance_window#number_of_deferrals MaintenanceWindow#number_of_deferrals}.

---



