# `eventTrigger` Submodule <a name="`eventTrigger` Submodule" id="@cdktf/provider-mongodbatlas.eventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventTrigger <a name="EventTrigger" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger mongodbatlas_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EventTrigger(Construct Scope, string Id, EventTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig">EventTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig">EventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors">PutEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection">ResetConfigCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase">ResetConfigDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument">ResetConfigFullDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore">ResetConfigFullDocumentBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch">ResetConfigMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType">ResetConfigOperationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes">ResetConfigOperationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject">ResetConfigProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders">ResetConfigProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule">ResetConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId">ResetConfigServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors">ResetEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId">ResetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered">ResetUnordered</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventProcessors` <a name="PutEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors"></a>

```csharp
private void PutEventProcessors(EventTriggerEventProcessors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `ResetConfigCollection` <a name="ResetConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection"></a>

```csharp
private void ResetConfigCollection()
```

##### `ResetConfigDatabase` <a name="ResetConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase"></a>

```csharp
private void ResetConfigDatabase()
```

##### `ResetConfigFullDocument` <a name="ResetConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument"></a>

```csharp
private void ResetConfigFullDocument()
```

##### `ResetConfigFullDocumentBefore` <a name="ResetConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore"></a>

```csharp
private void ResetConfigFullDocumentBefore()
```

##### `ResetConfigMatch` <a name="ResetConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch"></a>

```csharp
private void ResetConfigMatch()
```

##### `ResetConfigOperationType` <a name="ResetConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType"></a>

```csharp
private void ResetConfigOperationType()
```

##### `ResetConfigOperationTypes` <a name="ResetConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes"></a>

```csharp
private void ResetConfigOperationTypes()
```

##### `ResetConfigProject` <a name="ResetConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject"></a>

```csharp
private void ResetConfigProject()
```

##### `ResetConfigProviders` <a name="ResetConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders"></a>

```csharp
private void ResetConfigProviders()
```

##### `ResetConfigSchedule` <a name="ResetConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule"></a>

```csharp
private void ResetConfigSchedule()
```

##### `ResetConfigServiceId` <a name="ResetConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId"></a>

```csharp
private void ResetConfigServiceId()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEventProcessors` <a name="ResetEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors"></a>

```csharp
private void ResetEventProcessors()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId"></a>

```csharp
private void ResetFunctionId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUnordered` <a name="ResetUnordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered"></a>

```csharp
private void ResetUnordered()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EventTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EventTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EventTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EventTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType">ConfigScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors">EventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId">TriggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput">ConfigCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput">ConfigDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput">ConfigFullDocumentBeforeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput">ConfigFullDocumentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput">ConfigMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput">ConfigOperationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput">ConfigOperationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput">ConfigProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput">ConfigProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput">ConfigScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput">ConfigServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput">EventProcessorsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput">UnorderedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection">ConfigCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase">ConfigDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument">ConfigFullDocument</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore">ConfigFullDocumentBefore</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch">ConfigMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType">ConfigOperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes">ConfigOperationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject">ConfigProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders">ConfigProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule">ConfigSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId">ConfigServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered">Unordered</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConfigScheduleType`<sup>Required</sup> <a name="ConfigScheduleType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType"></a>

```csharp
public string ConfigScheduleType { get; }
```

- *Type:* string

---

##### `EventProcessors`<sup>Required</sup> <a name="EventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors"></a>

```csharp
public EventTriggerEventProcessorsOutputReference EventProcessors { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a>

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId"></a>

```csharp
public string TriggerId { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `ConfigCollectionInput`<sup>Optional</sup> <a name="ConfigCollectionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput"></a>

```csharp
public string ConfigCollectionInput { get; }
```

- *Type:* string

---

##### `ConfigDatabaseInput`<sup>Optional</sup> <a name="ConfigDatabaseInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput"></a>

```csharp
public string ConfigDatabaseInput { get; }
```

- *Type:* string

---

##### `ConfigFullDocumentBeforeInput`<sup>Optional</sup> <a name="ConfigFullDocumentBeforeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput"></a>

```csharp
public object ConfigFullDocumentBeforeInput { get; }
```

- *Type:* object

---

##### `ConfigFullDocumentInput`<sup>Optional</sup> <a name="ConfigFullDocumentInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput"></a>

```csharp
public object ConfigFullDocumentInput { get; }
```

- *Type:* object

---

##### `ConfigMatchInput`<sup>Optional</sup> <a name="ConfigMatchInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput"></a>

```csharp
public string ConfigMatchInput { get; }
```

- *Type:* string

---

##### `ConfigOperationTypeInput`<sup>Optional</sup> <a name="ConfigOperationTypeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput"></a>

```csharp
public string ConfigOperationTypeInput { get; }
```

- *Type:* string

---

##### `ConfigOperationTypesInput`<sup>Optional</sup> <a name="ConfigOperationTypesInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput"></a>

```csharp
public string[] ConfigOperationTypesInput { get; }
```

- *Type:* string[]

---

##### `ConfigProjectInput`<sup>Optional</sup> <a name="ConfigProjectInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput"></a>

```csharp
public string ConfigProjectInput { get; }
```

- *Type:* string

---

##### `ConfigProvidersInput`<sup>Optional</sup> <a name="ConfigProvidersInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput"></a>

```csharp
public string[] ConfigProvidersInput { get; }
```

- *Type:* string[]

---

##### `ConfigScheduleInput`<sup>Optional</sup> <a name="ConfigScheduleInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput"></a>

```csharp
public string ConfigScheduleInput { get; }
```

- *Type:* string

---

##### `ConfigServiceIdInput`<sup>Optional</sup> <a name="ConfigServiceIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput"></a>

```csharp
public string ConfigServiceIdInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `EventProcessorsInput`<sup>Optional</sup> <a name="EventProcessorsInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput"></a>

```csharp
public EventTriggerEventProcessors EventProcessorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnorderedInput`<sup>Optional</sup> <a name="UnorderedInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput"></a>

```csharp
public object UnorderedInput { get; }
```

- *Type:* object

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `ConfigCollection`<sup>Required</sup> <a name="ConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection"></a>

```csharp
public string ConfigCollection { get; }
```

- *Type:* string

---

##### `ConfigDatabase`<sup>Required</sup> <a name="ConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase"></a>

```csharp
public string ConfigDatabase { get; }
```

- *Type:* string

---

##### `ConfigFullDocument`<sup>Required</sup> <a name="ConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument"></a>

```csharp
public object ConfigFullDocument { get; }
```

- *Type:* object

---

##### `ConfigFullDocumentBefore`<sup>Required</sup> <a name="ConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore"></a>

```csharp
public object ConfigFullDocumentBefore { get; }
```

- *Type:* object

---

##### `ConfigMatch`<sup>Required</sup> <a name="ConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch"></a>

```csharp
public string ConfigMatch { get; }
```

- *Type:* string

---

##### `ConfigOperationType`<sup>Required</sup> <a name="ConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType"></a>

```csharp
public string ConfigOperationType { get; }
```

- *Type:* string

---

##### `ConfigOperationTypes`<sup>Required</sup> <a name="ConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes"></a>

```csharp
public string[] ConfigOperationTypes { get; }
```

- *Type:* string[]

---

##### `ConfigProject`<sup>Required</sup> <a name="ConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject"></a>

```csharp
public string ConfigProject { get; }
```

- *Type:* string

---

##### `ConfigProviders`<sup>Required</sup> <a name="ConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders"></a>

```csharp
public string[] ConfigProviders { get; }
```

- *Type:* string[]

---

##### `ConfigSchedule`<sup>Required</sup> <a name="ConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule"></a>

```csharp
public string ConfigSchedule { get; }
```

- *Type:* string

---

##### `ConfigServiceId`<sup>Required</sup> <a name="ConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId"></a>

```csharp
public string ConfigServiceId { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unordered`<sup>Required</sup> <a name="Unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered"></a>

```csharp
public object Unordered { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventTriggerConfig <a name="EventTriggerConfig" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EventTriggerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string Name,
    string ProjectId,
    string Type,
    string ConfigCollection = null,
    string ConfigDatabase = null,
    object ConfigFullDocument = null,
    object ConfigFullDocumentBefore = null,
    string ConfigMatch = null,
    string ConfigOperationType = null,
    string[] ConfigOperationTypes = null,
    string ConfigProject = null,
    string[] ConfigProviders = null,
    string ConfigSchedule = null,
    string ConfigServiceId = null,
    object Disabled = null,
    EventTriggerEventProcessors EventProcessors = null,
    string FunctionId = null,
    string Id = null,
    object Unordered = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#app_id EventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#name EventTrigger#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#project_id EventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#type EventTrigger#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection">ConfigCollection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase">ConfigDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_database EventTrigger#config_database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument">ConfigFullDocument</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore">ConfigFullDocumentBefore</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch">ConfigMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_match EventTrigger#config_match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType">ConfigOperationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes">ConfigOperationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject">ConfigProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_project EventTrigger#config_project}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders">ConfigProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule">ConfigSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId">ConfigServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#disabled EventTrigger#disabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors">EventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | event_processors block. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId">FunctionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#function_id EventTrigger#function_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#id EventTrigger#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered">Unordered</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#unordered EventTrigger#unordered}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#app_id EventTrigger#app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#name EventTrigger#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#project_id EventTrigger#project_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#type EventTrigger#type}.

---

##### `ConfigCollection`<sup>Optional</sup> <a name="ConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection"></a>

```csharp
public string ConfigCollection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}.

---

##### `ConfigDatabase`<sup>Optional</sup> <a name="ConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase"></a>

```csharp
public string ConfigDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_database EventTrigger#config_database}.

---

##### `ConfigFullDocument`<sup>Optional</sup> <a name="ConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument"></a>

```csharp
public object ConfigFullDocument { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}.

---

##### `ConfigFullDocumentBefore`<sup>Optional</sup> <a name="ConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore"></a>

```csharp
public object ConfigFullDocumentBefore { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}.

---

##### `ConfigMatch`<sup>Optional</sup> <a name="ConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch"></a>

```csharp
public string ConfigMatch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_match EventTrigger#config_match}.

---

##### `ConfigOperationType`<sup>Optional</sup> <a name="ConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType"></a>

```csharp
public string ConfigOperationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}.

---

##### `ConfigOperationTypes`<sup>Optional</sup> <a name="ConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes"></a>

```csharp
public string[] ConfigOperationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}.

---

##### `ConfigProject`<sup>Optional</sup> <a name="ConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject"></a>

```csharp
public string ConfigProject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_project EventTrigger#config_project}.

---

##### `ConfigProviders`<sup>Optional</sup> <a name="ConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders"></a>

```csharp
public string[] ConfigProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}.

---

##### `ConfigSchedule`<sup>Optional</sup> <a name="ConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule"></a>

```csharp
public string ConfigSchedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}.

---

##### `ConfigServiceId`<sup>Optional</sup> <a name="ConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId"></a>

```csharp
public string ConfigServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#disabled EventTrigger#disabled}.

---

##### `EventProcessors`<sup>Optional</sup> <a name="EventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors"></a>

```csharp
public EventTriggerEventProcessors EventProcessors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

event_processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#event_processors EventTrigger#event_processors}

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#function_id EventTrigger#function_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#id EventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Unordered`<sup>Optional</sup> <a name="Unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered"></a>

```csharp
public object Unordered { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#unordered EventTrigger#unordered}.

---

### EventTriggerEventProcessors <a name="EventTriggerEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EventTriggerEventProcessors {
    EventTriggerEventProcessorsAwsEventbridge AwsEventbridge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge">AwsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | aws_eventbridge block. |

---

##### `AwsEventbridge`<sup>Optional</sup> <a name="AwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge"></a>

```csharp
public EventTriggerEventProcessorsAwsEventbridge AwsEventbridge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

aws_eventbridge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#aws_eventbridge EventTrigger#aws_eventbridge}

---

### EventTriggerEventProcessorsAwsEventbridge <a name="EventTriggerEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EventTriggerEventProcessorsAwsEventbridge {
    string ConfigAccountId = null,
    string ConfigRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId">ConfigAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion">ConfigRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_region EventTrigger#config_region}. |

---

##### `ConfigAccountId`<sup>Optional</sup> <a name="ConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId"></a>

```csharp
public string ConfigAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}.

---

##### `ConfigRegion`<sup>Optional</sup> <a name="ConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion"></a>

```csharp
public string ConfigRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/event_trigger#config_region EventTrigger#config_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventTriggerEventProcessorsAwsEventbridgeOutputReference <a name="EventTriggerEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EventTriggerEventProcessorsAwsEventbridgeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId">ResetConfigAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion">ResetConfigRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigAccountId` <a name="ResetConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId"></a>

```csharp
private void ResetConfigAccountId()
```

##### `ResetConfigRegion` <a name="ResetConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion"></a>

```csharp
private void ResetConfigRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput">ConfigAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput">ConfigRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">ConfigAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion">ConfigRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigAccountIdInput`<sup>Optional</sup> <a name="ConfigAccountIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput"></a>

```csharp
public string ConfigAccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigRegionInput`<sup>Optional</sup> <a name="ConfigRegionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput"></a>

```csharp
public string ConfigRegionInput { get; }
```

- *Type:* string

---

##### `ConfigAccountId`<sup>Required</sup> <a name="ConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```csharp
public string ConfigAccountId { get; }
```

- *Type:* string

---

##### `ConfigRegion`<sup>Required</sup> <a name="ConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```csharp
public string ConfigRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```csharp
public EventTriggerEventProcessorsAwsEventbridge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---


### EventTriggerEventProcessorsOutputReference <a name="EventTriggerEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EventTriggerEventProcessorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge">PutAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge">ResetAwsEventbridge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsEventbridge` <a name="PutAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge"></a>

```csharp
private void PutAwsEventbridge(EventTriggerEventProcessorsAwsEventbridge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `ResetAwsEventbridge` <a name="ResetAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge"></a>

```csharp
private void ResetAwsEventbridge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge">AwsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput">AwsEventbridgeInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsEventbridge`<sup>Required</sup> <a name="AwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge"></a>

```csharp
public EventTriggerEventProcessorsAwsEventbridgeOutputReference AwsEventbridge { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a>

---

##### `AwsEventbridgeInput`<sup>Optional</sup> <a name="AwsEventbridgeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput"></a>

```csharp
public EventTriggerEventProcessorsAwsEventbridge AwsEventbridgeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue"></a>

```csharp
public EventTriggerEventProcessors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---



