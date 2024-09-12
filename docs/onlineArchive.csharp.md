# `onlineArchive` Submodule <a name="`onlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.onlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineArchive <a name="OnlineArchive" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive mongodbatlas_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchive(Construct Scope, string Id, OnlineArchiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig">OnlineArchiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig">OnlineArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule">PutDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion">PutDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields">PutPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType">ResetCollectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataExpirationRule">ResetDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataProcessRegion">ResetDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields">ResetPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation">ResetSyncCreation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria"></a>

```csharp
private void PutCriteria(OnlineArchiveCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---

##### `PutDataExpirationRule` <a name="PutDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule"></a>

```csharp
private void PutDataExpirationRule(OnlineArchiveDataExpirationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---

##### `PutDataProcessRegion` <a name="PutDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion"></a>

```csharp
private void PutDataProcessRegion(OnlineArchiveDataProcessRegion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---

##### `PutPartitionFields` <a name="PutPartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields"></a>

```csharp
private void PutPartitionFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields.parameter.value"></a>

- *Type:* object

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule"></a>

```csharp
private void PutSchedule(OnlineArchiveSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---

##### `ResetCollectionType` <a name="ResetCollectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType"></a>

```csharp
private void ResetCollectionType()
```

##### `ResetDataExpirationRule` <a name="ResetDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataExpirationRule"></a>

```csharp
private void ResetDataExpirationRule()
```

##### `ResetDataProcessRegion` <a name="ResetDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataProcessRegion"></a>

```csharp
private void ResetDataProcessRegion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartitionFields` <a name="ResetPartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields"></a>

```csharp
private void ResetPartitionFields()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused"></a>

```csharp
private void ResetPaused()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSyncCreation` <a name="ResetSyncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation"></a>

```csharp
private void ResetSyncCreation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OnlineArchive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

OnlineArchive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

OnlineArchive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

OnlineArchive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

OnlineArchive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OnlineArchive resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnlineArchive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnlineArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OnlineArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId">ArchiveId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRule">DataExpirationRule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference">OnlineArchiveDataExpirationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference">OnlineArchiveDataProcessRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields">PartitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput">CollectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput">CollNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRuleInput">DataExpirationRuleInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegionInput">DataProcessRegionInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput">PartitionFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput">PausedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput">SyncCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType">CollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName">CollName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused">Paused</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation">SyncCreation</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArchiveId`<sup>Required</sup> <a name="ArchiveId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId"></a>

```csharp
public string ArchiveId { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria"></a>

```csharp
public OnlineArchiveCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a>

---

##### `DataExpirationRule`<sup>Required</sup> <a name="DataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRule"></a>

```csharp
public OnlineArchiveDataExpirationRuleOutputReference DataExpirationRule { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference">OnlineArchiveDataExpirationRuleOutputReference</a>

---

##### `DataProcessRegion`<sup>Required</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegion"></a>

```csharp
public OnlineArchiveDataProcessRegionOutputReference DataProcessRegion { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference">OnlineArchiveDataProcessRegionOutputReference</a>

---

##### `PartitionFields`<sup>Required</sup> <a name="PartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields"></a>

```csharp
public OnlineArchivePartitionFieldsList PartitionFields { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule"></a>

```csharp
public OnlineArchiveScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CollectionTypeInput`<sup>Optional</sup> <a name="CollectionTypeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput"></a>

```csharp
public string CollectionTypeInput { get; }
```

- *Type:* string

---

##### `CollNameInput`<sup>Optional</sup> <a name="CollNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput"></a>

```csharp
public string CollNameInput { get; }
```

- *Type:* string

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput"></a>

```csharp
public OnlineArchiveCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---

##### `DataExpirationRuleInput`<sup>Optional</sup> <a name="DataExpirationRuleInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRuleInput"></a>

```csharp
public OnlineArchiveDataExpirationRule DataExpirationRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---

##### `DataProcessRegionInput`<sup>Optional</sup> <a name="DataProcessRegionInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegionInput"></a>

```csharp
public OnlineArchiveDataProcessRegion DataProcessRegionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PartitionFieldsInput`<sup>Optional</sup> <a name="PartitionFieldsInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput"></a>

```csharp
public object PartitionFieldsInput { get; }
```

- *Type:* object

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput"></a>

```csharp
public object PausedInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput"></a>

```csharp
public OnlineArchiveSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---

##### `SyncCreationInput`<sup>Optional</sup> <a name="SyncCreationInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput"></a>

```csharp
public object SyncCreationInput { get; }
```

- *Type:* object

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType"></a>

```csharp
public string CollectionType { get; }
```

- *Type:* string

---

##### `CollName`<sup>Required</sup> <a name="CollName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName"></a>

```csharp
public string CollName { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused"></a>

```csharp
public object Paused { get; }
```

- *Type:* object

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SyncCreation`<sup>Required</sup> <a name="SyncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation"></a>

```csharp
public object SyncCreation { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineArchiveConfig <a name="OnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string CollName,
    OnlineArchiveCriteria Criteria,
    string DbName,
    string ProjectId,
    string CollectionType = null,
    OnlineArchiveDataExpirationRule DataExpirationRule = null,
    OnlineArchiveDataProcessRegion DataProcessRegion = null,
    string Id = null,
    object PartitionFields = null,
    object Paused = null,
    OnlineArchiveSchedule Schedule = null,
    object SyncCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName">CollName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#coll_name OnlineArchive#coll_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName">DbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#db_name OnlineArchive#db_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#project_id OnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType">CollectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#collection_type OnlineArchive#collection_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataExpirationRule">DataExpirationRule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | data_expiration_rule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | data_process_region block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#id OnlineArchive#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields">PartitionFields</a></code> | <code>object</code> | partition_fields block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused">Paused</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#paused OnlineArchive#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation">SyncCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}.

---

##### `CollName`<sup>Required</sup> <a name="CollName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName"></a>

```csharp
public string CollName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#coll_name OnlineArchive#coll_name}.

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria"></a>

```csharp
public OnlineArchiveCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#criteria OnlineArchive#criteria}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#db_name OnlineArchive#db_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#project_id OnlineArchive#project_id}.

---

##### `CollectionType`<sup>Optional</sup> <a name="CollectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType"></a>

```csharp
public string CollectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#collection_type OnlineArchive#collection_type}.

---

##### `DataExpirationRule`<sup>Optional</sup> <a name="DataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataExpirationRule"></a>

```csharp
public OnlineArchiveDataExpirationRule DataExpirationRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

data_expiration_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#data_expiration_rule OnlineArchive#data_expiration_rule}

---

##### `DataProcessRegion`<sup>Optional</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataProcessRegion"></a>

```csharp
public OnlineArchiveDataProcessRegion DataProcessRegion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

data_process_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#data_process_region OnlineArchive#data_process_region}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#id OnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionFields`<sup>Optional</sup> <a name="PartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields"></a>

```csharp
public object PartitionFields { get; set; }
```

- *Type:* object

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#partition_fields OnlineArchive#partition_fields}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused"></a>

```csharp
public object Paused { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#paused OnlineArchive#paused}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule"></a>

```csharp
public OnlineArchiveSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#schedule OnlineArchive#schedule}

---

##### `SyncCreation`<sup>Optional</sup> <a name="SyncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation"></a>

```csharp
public object SyncCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}.

---

### OnlineArchiveCriteria <a name="OnlineArchiveCriteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveCriteria {
    string Type,
    string DateField = null,
    string DateFormat = null,
    double ExpireAfterDays = null,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField">DateField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#date_field OnlineArchive#date_field}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat">DateFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#date_format OnlineArchive#date_format}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays">ExpireAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#query OnlineArchive#query}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `DateField`<sup>Optional</sup> <a name="DateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField"></a>

```csharp
public string DateField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#date_field OnlineArchive#date_field}.

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat"></a>

```csharp
public string DateFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#date_format OnlineArchive#date_format}.

---

##### `ExpireAfterDays`<sup>Optional</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays"></a>

```csharp
public double ExpireAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#query OnlineArchive#query}.

---

### OnlineArchiveDataExpirationRule <a name="OnlineArchiveDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveDataExpirationRule {
    double ExpireAfterDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.property.expireAfterDays">ExpireAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}. |

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.property.expireAfterDays"></a>

```csharp
public double ExpireAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

### OnlineArchiveDataProcessRegion <a name="OnlineArchiveDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveDataProcessRegion {
    string CloudProvider = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#cloud_provider OnlineArchive#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#region OnlineArchive#region}. |

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#cloud_provider OnlineArchive#cloud_provider}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#region OnlineArchive#region}.

---

### OnlineArchivePartitionFields <a name="OnlineArchivePartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchivePartitionFields {
    string FieldName,
    double Order
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName">FieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#field_name OnlineArchive#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#order OnlineArchive#order}. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#field_name OnlineArchive#field_name}.

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#order OnlineArchive#order}.

---

### OnlineArchiveSchedule <a name="OnlineArchiveSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveSchedule {
    string Type,
    double DayOfMonth = null,
    double DayOfWeek = null,
    double EndHour = null,
    double EndMinute = null,
    double StartHour = null,
    double StartMinute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour">EndHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#end_hour OnlineArchive#end_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute">EndMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#end_minute OnlineArchive#end_minute}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour">StartHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#start_hour OnlineArchive#start_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute">StartMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#start_minute OnlineArchive#start_minute}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `DayOfMonth`<sup>Optional</sup> <a name="DayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}.

---

##### `EndHour`<sup>Optional</sup> <a name="EndHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour"></a>

```csharp
public double EndHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#end_hour OnlineArchive#end_hour}.

---

##### `EndMinute`<sup>Optional</sup> <a name="EndMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute"></a>

```csharp
public double EndMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#end_minute OnlineArchive#end_minute}.

---

##### `StartHour`<sup>Optional</sup> <a name="StartHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour"></a>

```csharp
public double StartHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#start_hour OnlineArchive#start_hour}.

---

##### `StartMinute`<sup>Optional</sup> <a name="StartMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute"></a>

```csharp
public double StartMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/online_archive#start_minute OnlineArchive#start_minute}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineArchiveCriteriaOutputReference <a name="OnlineArchiveCriteriaOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField">ResetDateField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays">ResetExpireAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateField` <a name="ResetDateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField"></a>

```csharp
private void ResetDateField()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat"></a>

```csharp
private void ResetDateFormat()
```

##### `ResetExpireAfterDays` <a name="ResetExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays"></a>

```csharp
private void ResetExpireAfterDays()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput">DateFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput">ExpireAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField">DateField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays">ExpireAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateFieldInput`<sup>Optional</sup> <a name="DateFieldInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput"></a>

```csharp
public string DateFieldInput { get; }
```

- *Type:* string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput"></a>

```csharp
public string DateFormatInput { get; }
```

- *Type:* string

---

##### `ExpireAfterDaysInput`<sup>Optional</sup> <a name="ExpireAfterDaysInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput"></a>

```csharp
public double ExpireAfterDaysInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DateField`<sup>Required</sup> <a name="DateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField"></a>

```csharp
public string DateField { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays"></a>

```csharp
public double ExpireAfterDays { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue"></a>

```csharp
public OnlineArchiveCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---


### OnlineArchiveDataExpirationRuleOutputReference <a name="OnlineArchiveDataExpirationRuleOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveDataExpirationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDaysInput">ExpireAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDays">ExpireAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireAfterDaysInput`<sup>Optional</sup> <a name="ExpireAfterDaysInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDaysInput"></a>

```csharp
public double ExpireAfterDaysInput { get; }
```

- *Type:* double

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDays"></a>

```csharp
public double ExpireAfterDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.internalValue"></a>

```csharp
public OnlineArchiveDataExpirationRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---


### OnlineArchiveDataProcessRegionOutputReference <a name="OnlineArchiveDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveDataProcessRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetCloudProvider"></a>

```csharp
private void ResetCloudProvider()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProviderInput"></a>

```csharp
public string CloudProviderInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.internalValue"></a>

```csharp
public OnlineArchiveDataProcessRegion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---


### OnlineArchivePartitionFieldsList <a name="OnlineArchivePartitionFieldsList" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchivePartitionFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get"></a>

```csharp
private OnlineArchivePartitionFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OnlineArchivePartitionFieldsOutputReference <a name="OnlineArchivePartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchivePartitionFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType">FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType"></a>

```csharp
public string FieldType { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OnlineArchiveScheduleOutputReference <a name="OnlineArchiveScheduleOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new OnlineArchiveScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth">ResetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour">ResetEndHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute">ResetEndMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour">ResetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute">ResetStartMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfMonth` <a name="ResetDayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth"></a>

```csharp
private void ResetDayOfMonth()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetEndHour` <a name="ResetEndHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour"></a>

```csharp
private void ResetEndHour()
```

##### `ResetEndMinute` <a name="ResetEndMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute"></a>

```csharp
private void ResetEndMinute()
```

##### `ResetStartHour` <a name="ResetStartHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour"></a>

```csharp
private void ResetStartHour()
```

##### `ResetStartMinute` <a name="ResetStartMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute"></a>

```csharp
private void ResetStartMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput">EndHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput">EndMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput">StartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput">StartMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour">EndHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute">EndMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour">StartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute">StartMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput"></a>

```csharp
public double DayOfMonthInput { get; }
```

- *Type:* double

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public double DayOfWeekInput { get; }
```

- *Type:* double

---

##### `EndHourInput`<sup>Optional</sup> <a name="EndHourInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput"></a>

```csharp
public double EndHourInput { get; }
```

- *Type:* double

---

##### `EndMinuteInput`<sup>Optional</sup> <a name="EndMinuteInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput"></a>

```csharp
public double EndMinuteInput { get; }
```

- *Type:* double

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput"></a>

```csharp
public double StartHourInput { get; }
```

- *Type:* double

---

##### `StartMinuteInput`<sup>Optional</sup> <a name="StartMinuteInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput"></a>

```csharp
public double StartMinuteInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; }
```

- *Type:* double

---

##### `EndHour`<sup>Required</sup> <a name="EndHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour"></a>

```csharp
public double EndHour { get; }
```

- *Type:* double

---

##### `EndMinute`<sup>Required</sup> <a name="EndMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute"></a>

```csharp
public double EndMinute { get; }
```

- *Type:* double

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour"></a>

```csharp
public double StartHour { get; }
```

- *Type:* double

---

##### `StartMinute`<sup>Required</sup> <a name="StartMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute"></a>

```csharp
public double StartMinute { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue"></a>

```csharp
public OnlineArchiveSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---



