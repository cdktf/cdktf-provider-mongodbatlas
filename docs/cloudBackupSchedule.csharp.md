# `cloudBackupSchedule` Submodule <a name="`cloudBackupSchedule` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSchedule <a name="CloudBackupSchedule" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule mongodbatlas_cloud_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedule(Construct Scope, string Id, CloudBackupScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig">CloudBackupScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig">CloudBackupScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings">PutCopySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily">PutPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly">PutPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly">PutPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly">PutPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemYearly">PutPolicyItemYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetAutoExportEnabled">ResetAutoExportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetCopySettings">ResetCopySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetExport">ResetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemDaily">ResetPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemHourly">ResetPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemMonthly">ResetPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemWeekly">ResetPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemYearly">ResetPolicyItemYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceHourOfDay">ResetReferenceHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceMinuteOfHour">ResetReferenceMinuteOfHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetRestoreWindowDays">ResetRestoreWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUpdateSnapshots">ResetUpdateSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUseOrgAndGroupNamesInExportPrefix">ResetUseOrgAndGroupNamesInExportPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCopySettings` <a name="PutCopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings"></a>

```csharp
private void PutCopySettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings.parameter.value"></a>

- *Type:* object

---

##### `PutExport` <a name="PutExport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport"></a>

```csharp
private void PutExport(CloudBackupScheduleExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---

##### `PutPolicyItemDaily` <a name="PutPolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily"></a>

```csharp
private void PutPolicyItemDaily(CloudBackupSchedulePolicyItemDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---

##### `PutPolicyItemHourly` <a name="PutPolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly"></a>

```csharp
private void PutPolicyItemHourly(CloudBackupSchedulePolicyItemHourly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---

##### `PutPolicyItemMonthly` <a name="PutPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly"></a>

```csharp
private void PutPolicyItemMonthly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly.parameter.value"></a>

- *Type:* object

---

##### `PutPolicyItemWeekly` <a name="PutPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly"></a>

```csharp
private void PutPolicyItemWeekly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly.parameter.value"></a>

- *Type:* object

---

##### `PutPolicyItemYearly` <a name="PutPolicyItemYearly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemYearly"></a>

```csharp
private void PutPolicyItemYearly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemYearly.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoExportEnabled` <a name="ResetAutoExportEnabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetAutoExportEnabled"></a>

```csharp
private void ResetAutoExportEnabled()
```

##### `ResetCopySettings` <a name="ResetCopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetCopySettings"></a>

```csharp
private void ResetCopySettings()
```

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetExport"></a>

```csharp
private void ResetExport()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyItemDaily` <a name="ResetPolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemDaily"></a>

```csharp
private void ResetPolicyItemDaily()
```

##### `ResetPolicyItemHourly` <a name="ResetPolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemHourly"></a>

```csharp
private void ResetPolicyItemHourly()
```

##### `ResetPolicyItemMonthly` <a name="ResetPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemMonthly"></a>

```csharp
private void ResetPolicyItemMonthly()
```

##### `ResetPolicyItemWeekly` <a name="ResetPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemWeekly"></a>

```csharp
private void ResetPolicyItemWeekly()
```

##### `ResetPolicyItemYearly` <a name="ResetPolicyItemYearly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemYearly"></a>

```csharp
private void ResetPolicyItemYearly()
```

##### `ResetReferenceHourOfDay` <a name="ResetReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceHourOfDay"></a>

```csharp
private void ResetReferenceHourOfDay()
```

##### `ResetReferenceMinuteOfHour` <a name="ResetReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceMinuteOfHour"></a>

```csharp
private void ResetReferenceMinuteOfHour()
```

##### `ResetRestoreWindowDays` <a name="ResetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetRestoreWindowDays"></a>

```csharp
private void ResetRestoreWindowDays()
```

##### `ResetUpdateSnapshots` <a name="ResetUpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUpdateSnapshots"></a>

```csharp
private void ResetUpdateSnapshots()
```

##### `ResetUseOrgAndGroupNamesInExportPrefix` <a name="ResetUseOrgAndGroupNamesInExportPrefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUseOrgAndGroupNamesInExportPrefix"></a>

```csharp
private void ResetUseOrgAndGroupNamesInExportPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudBackupSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudBackupSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudBackupSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudBackupSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudBackupSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettings">CopySettings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList">CloudBackupScheduleCopySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.export">Export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference">CloudBackupScheduleExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idPolicy">IdPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.nextSnapshot">NextSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference">CloudBackupSchedulePolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference">CloudBackupSchedulePolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList">CloudBackupSchedulePolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList">CloudBackupSchedulePolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemYearly">PolicyItemYearly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList">CloudBackupSchedulePolicyItemYearlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabledInput">AutoExportEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettingsInput">CopySettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.exportInput">ExportInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDailyInput">PolicyItemDailyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourlyInput">PolicyItemHourlyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthlyInput">PolicyItemMonthlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeeklyInput">PolicyItemWeeklyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemYearlyInput">PolicyItemYearlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDayInput">ReferenceHourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHourInput">ReferenceMinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDaysInput">RestoreWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshotsInput">UpdateSnapshotsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefixInput">UseOrgAndGroupNamesInExportPrefixInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabled">AutoExportEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDay">ReferenceHourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHour">ReferenceMinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshots">UpdateSnapshots</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefix">UseOrgAndGroupNamesInExportPrefix</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `CopySettings`<sup>Required</sup> <a name="CopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettings"></a>

```csharp
public CloudBackupScheduleCopySettingsList CopySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList">CloudBackupScheduleCopySettingsList</a>

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.export"></a>

```csharp
public CloudBackupScheduleExportOutputReference Export { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference">CloudBackupScheduleExportOutputReference</a>

---

##### `IdPolicy`<sup>Required</sup> <a name="IdPolicy" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idPolicy"></a>

```csharp
public string IdPolicy { get; }
```

- *Type:* string

---

##### `NextSnapshot`<sup>Required</sup> <a name="NextSnapshot" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.nextSnapshot"></a>

```csharp
public string NextSnapshot { get; }
```

- *Type:* string

---

##### `PolicyItemDaily`<sup>Required</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDaily"></a>

```csharp
public CloudBackupSchedulePolicyItemDailyOutputReference PolicyItemDaily { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference">CloudBackupSchedulePolicyItemDailyOutputReference</a>

---

##### `PolicyItemHourly`<sup>Required</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourly"></a>

```csharp
public CloudBackupSchedulePolicyItemHourlyOutputReference PolicyItemHourly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference">CloudBackupSchedulePolicyItemHourlyOutputReference</a>

---

##### `PolicyItemMonthly`<sup>Required</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthly"></a>

```csharp
public CloudBackupSchedulePolicyItemMonthlyList PolicyItemMonthly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList">CloudBackupSchedulePolicyItemMonthlyList</a>

---

##### `PolicyItemWeekly`<sup>Required</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeekly"></a>

```csharp
public CloudBackupSchedulePolicyItemWeeklyList PolicyItemWeekly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList">CloudBackupSchedulePolicyItemWeeklyList</a>

---

##### `PolicyItemYearly`<sup>Required</sup> <a name="PolicyItemYearly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemYearly"></a>

```csharp
public CloudBackupSchedulePolicyItemYearlyList PolicyItemYearly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList">CloudBackupSchedulePolicyItemYearlyList</a>

---

##### `AutoExportEnabledInput`<sup>Optional</sup> <a name="AutoExportEnabledInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabledInput"></a>

```csharp
public object AutoExportEnabledInput { get; }
```

- *Type:* object

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CopySettingsInput`<sup>Optional</sup> <a name="CopySettingsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettingsInput"></a>

```csharp
public object CopySettingsInput { get; }
```

- *Type:* object

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.exportInput"></a>

```csharp
public CloudBackupScheduleExport ExportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyItemDailyInput`<sup>Optional</sup> <a name="PolicyItemDailyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDailyInput"></a>

```csharp
public CloudBackupSchedulePolicyItemDaily PolicyItemDailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---

##### `PolicyItemHourlyInput`<sup>Optional</sup> <a name="PolicyItemHourlyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourlyInput"></a>

```csharp
public CloudBackupSchedulePolicyItemHourly PolicyItemHourlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---

##### `PolicyItemMonthlyInput`<sup>Optional</sup> <a name="PolicyItemMonthlyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthlyInput"></a>

```csharp
public object PolicyItemMonthlyInput { get; }
```

- *Type:* object

---

##### `PolicyItemWeeklyInput`<sup>Optional</sup> <a name="PolicyItemWeeklyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeeklyInput"></a>

```csharp
public object PolicyItemWeeklyInput { get; }
```

- *Type:* object

---

##### `PolicyItemYearlyInput`<sup>Optional</sup> <a name="PolicyItemYearlyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemYearlyInput"></a>

```csharp
public object PolicyItemYearlyInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ReferenceHourOfDayInput`<sup>Optional</sup> <a name="ReferenceHourOfDayInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDayInput"></a>

```csharp
public double ReferenceHourOfDayInput { get; }
```

- *Type:* double

---

##### `ReferenceMinuteOfHourInput`<sup>Optional</sup> <a name="ReferenceMinuteOfHourInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHourInput"></a>

```csharp
public double ReferenceMinuteOfHourInput { get; }
```

- *Type:* double

---

##### `RestoreWindowDaysInput`<sup>Optional</sup> <a name="RestoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDaysInput"></a>

```csharp
public double RestoreWindowDaysInput { get; }
```

- *Type:* double

---

##### `UpdateSnapshotsInput`<sup>Optional</sup> <a name="UpdateSnapshotsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshotsInput"></a>

```csharp
public object UpdateSnapshotsInput { get; }
```

- *Type:* object

---

##### `UseOrgAndGroupNamesInExportPrefixInput`<sup>Optional</sup> <a name="UseOrgAndGroupNamesInExportPrefixInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefixInput"></a>

```csharp
public object UseOrgAndGroupNamesInExportPrefixInput { get; }
```

- *Type:* object

---

##### `AutoExportEnabled`<sup>Required</sup> <a name="AutoExportEnabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabled"></a>

```csharp
public object AutoExportEnabled { get; }
```

- *Type:* object

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ReferenceHourOfDay`<sup>Required</sup> <a name="ReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDay"></a>

```csharp
public double ReferenceHourOfDay { get; }
```

- *Type:* double

---

##### `ReferenceMinuteOfHour`<sup>Required</sup> <a name="ReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHour"></a>

```csharp
public double ReferenceMinuteOfHour { get; }
```

- *Type:* double

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; }
```

- *Type:* double

---

##### `UpdateSnapshots`<sup>Required</sup> <a name="UpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshots"></a>

```csharp
public object UpdateSnapshots { get; }
```

- *Type:* object

---

##### `UseOrgAndGroupNamesInExportPrefix`<sup>Required</sup> <a name="UseOrgAndGroupNamesInExportPrefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefix"></a>

```csharp
public object UseOrgAndGroupNamesInExportPrefix { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupScheduleConfig <a name="CloudBackupScheduleConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ProjectId,
    object AutoExportEnabled = null,
    object CopySettings = null,
    CloudBackupScheduleExport Export = null,
    string Id = null,
    CloudBackupSchedulePolicyItemDaily PolicyItemDaily = null,
    CloudBackupSchedulePolicyItemHourly PolicyItemHourly = null,
    object PolicyItemMonthly = null,
    object PolicyItemWeekly = null,
    object PolicyItemYearly = null,
    double ReferenceHourOfDay = null,
    double ReferenceMinuteOfHour = null,
    double RestoreWindowDays = null,
    object UpdateSnapshots = null,
    object UseOrgAndGroupNamesInExportPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.autoExportEnabled">AutoExportEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.copySettings">CopySettings</a></code> | <code>object</code> | copy_settings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.export">Export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | export block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code>object</code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code>object</code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemYearly">PolicyItemYearly</a></code> | <code>object</code> | policy_item_yearly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceHourOfDay">ReferenceHourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceMinuteOfHour">ReferenceMinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.updateSnapshots">UpdateSnapshots</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.useOrgAndGroupNamesInExportPrefix">UseOrgAndGroupNamesInExportPrefix</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}.

---

##### `AutoExportEnabled`<sup>Optional</sup> <a name="AutoExportEnabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.autoExportEnabled"></a>

```csharp
public object AutoExportEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}.

---

##### `CopySettings`<sup>Optional</sup> <a name="CopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.copySettings"></a>

```csharp
public object CopySettings { get; set; }
```

- *Type:* object

copy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#copy_settings CloudBackupSchedule#copy_settings}

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.export"></a>

```csharp
public CloudBackupScheduleExport Export { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#export CloudBackupSchedule#export}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyItemDaily`<sup>Optional</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemDaily"></a>

```csharp
public CloudBackupSchedulePolicyItemDaily PolicyItemDaily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#policy_item_daily CloudBackupSchedule#policy_item_daily}

---

##### `PolicyItemHourly`<sup>Optional</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemHourly"></a>

```csharp
public CloudBackupSchedulePolicyItemHourly PolicyItemHourly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#policy_item_hourly CloudBackupSchedule#policy_item_hourly}

---

##### `PolicyItemMonthly`<sup>Optional</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemMonthly"></a>

```csharp
public object PolicyItemMonthly { get; set; }
```

- *Type:* object

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#policy_item_monthly CloudBackupSchedule#policy_item_monthly}

---

##### `PolicyItemWeekly`<sup>Optional</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemWeekly"></a>

```csharp
public object PolicyItemWeekly { get; set; }
```

- *Type:* object

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#policy_item_weekly CloudBackupSchedule#policy_item_weekly}

---

##### `PolicyItemYearly`<sup>Optional</sup> <a name="PolicyItemYearly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemYearly"></a>

```csharp
public object PolicyItemYearly { get; set; }
```

- *Type:* object

policy_item_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#policy_item_yearly CloudBackupSchedule#policy_item_yearly}

---

##### `ReferenceHourOfDay`<sup>Optional</sup> <a name="ReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceHourOfDay"></a>

```csharp
public double ReferenceHourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}.

---

##### `ReferenceMinuteOfHour`<sup>Optional</sup> <a name="ReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceMinuteOfHour"></a>

```csharp
public double ReferenceMinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}.

---

##### `RestoreWindowDays`<sup>Optional</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}.

---

##### `UpdateSnapshots`<sup>Optional</sup> <a name="UpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.updateSnapshots"></a>

```csharp
public object UpdateSnapshots { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}.

---

##### `UseOrgAndGroupNamesInExportPrefix`<sup>Optional</sup> <a name="UseOrgAndGroupNamesInExportPrefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.useOrgAndGroupNamesInExportPrefix"></a>

```csharp
public object UseOrgAndGroupNamesInExportPrefix { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}.

---

### CloudBackupScheduleCopySettings <a name="CloudBackupScheduleCopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupScheduleCopySettings {
    string CloudProvider = null,
    string[] Frequencies = null,
    string RegionName = null,
    string ReplicationSpecId = null,
    object ShouldCopyOplogs = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#cloud_provider CloudBackupSchedule#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.frequencies">Frequencies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequencies CloudBackupSchedule#frequencies}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.regionName">RegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#region_name CloudBackupSchedule#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.replicationSpecId">ReplicationSpecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#replication_spec_id CloudBackupSchedule#replication_spec_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.shouldCopyOplogs">ShouldCopyOplogs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#should_copy_oplogs CloudBackupSchedule#should_copy_oplogs}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#zone_id CloudBackupSchedule#zone_id}. |

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#cloud_provider CloudBackupSchedule#cloud_provider}.

---

##### `Frequencies`<sup>Optional</sup> <a name="Frequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.frequencies"></a>

```csharp
public string[] Frequencies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequencies CloudBackupSchedule#frequencies}.

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.regionName"></a>

```csharp
public string RegionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#region_name CloudBackupSchedule#region_name}.

---

##### `ReplicationSpecId`<sup>Optional</sup> <a name="ReplicationSpecId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.replicationSpecId"></a>

```csharp
public string ReplicationSpecId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#replication_spec_id CloudBackupSchedule#replication_spec_id}.

---

##### `ShouldCopyOplogs`<sup>Optional</sup> <a name="ShouldCopyOplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.shouldCopyOplogs"></a>

```csharp
public object ShouldCopyOplogs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#should_copy_oplogs CloudBackupSchedule#should_copy_oplogs}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#zone_id CloudBackupSchedule#zone_id}.

---

### CloudBackupScheduleExport <a name="CloudBackupScheduleExport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupScheduleExport {
    string ExportBucketId = null,
    string FrequencyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.exportBucketId">ExportBucketId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.frequencyType">FrequencyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}. |

---

##### `ExportBucketId`<sup>Optional</sup> <a name="ExportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.exportBucketId"></a>

```csharp
public string ExportBucketId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}.

---

##### `FrequencyType`<sup>Optional</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.frequencyType"></a>

```csharp
public string FrequencyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}.

---

### CloudBackupSchedulePolicyItemDaily <a name="CloudBackupSchedulePolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemDaily {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemHourly <a name="CloudBackupSchedulePolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemHourly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemMonthly <a name="CloudBackupSchedulePolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemMonthly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemWeekly <a name="CloudBackupSchedulePolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemWeekly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemYearly <a name="CloudBackupSchedulePolicyItemYearly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemYearly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupScheduleCopySettingsList <a name="CloudBackupScheduleCopySettingsList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupScheduleCopySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get"></a>

```csharp
private CloudBackupScheduleCopySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBackupScheduleCopySettingsOutputReference <a name="CloudBackupScheduleCopySettingsOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupScheduleCopySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetFrequencies">ResetFrequencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetRegionName">ResetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetReplicationSpecId">ResetReplicationSpecId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetShouldCopyOplogs">ResetShouldCopyOplogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetCloudProvider"></a>

```csharp
private void ResetCloudProvider()
```

##### `ResetFrequencies` <a name="ResetFrequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetFrequencies"></a>

```csharp
private void ResetFrequencies()
```

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetRegionName"></a>

```csharp
private void ResetRegionName()
```

##### `ResetReplicationSpecId` <a name="ResetReplicationSpecId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetReplicationSpecId"></a>

```csharp
private void ResetReplicationSpecId()
```

##### `ResetShouldCopyOplogs` <a name="ResetShouldCopyOplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetShouldCopyOplogs"></a>

```csharp
private void ResetShouldCopyOplogs()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequenciesInput">FrequenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecIdInput">ReplicationSpecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogsInput">ShouldCopyOplogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequencies">Frequencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecId">ReplicationSpecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogs">ShouldCopyOplogs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProviderInput"></a>

```csharp
public string CloudProviderInput { get; }
```

- *Type:* string

---

##### `FrequenciesInput`<sup>Optional</sup> <a name="FrequenciesInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequenciesInput"></a>

```csharp
public string[] FrequenciesInput { get; }
```

- *Type:* string[]

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionNameInput"></a>

```csharp
public string RegionNameInput { get; }
```

- *Type:* string

---

##### `ReplicationSpecIdInput`<sup>Optional</sup> <a name="ReplicationSpecIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecIdInput"></a>

```csharp
public string ReplicationSpecIdInput { get; }
```

- *Type:* string

---

##### `ShouldCopyOplogsInput`<sup>Optional</sup> <a name="ShouldCopyOplogsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogsInput"></a>

```csharp
public object ShouldCopyOplogsInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `Frequencies`<sup>Required</sup> <a name="Frequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequencies"></a>

```csharp
public string[] Frequencies { get; }
```

- *Type:* string[]

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `ReplicationSpecId`<sup>Required</sup> <a name="ReplicationSpecId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecId"></a>

```csharp
public string ReplicationSpecId { get; }
```

- *Type:* string

---

##### `ShouldCopyOplogs`<sup>Required</sup> <a name="ShouldCopyOplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogs"></a>

```csharp
public object ShouldCopyOplogs { get; }
```

- *Type:* object

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBackupScheduleExportOutputReference <a name="CloudBackupScheduleExportOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupScheduleExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetExportBucketId">ResetExportBucketId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetFrequencyType">ResetFrequencyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportBucketId` <a name="ResetExportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetExportBucketId"></a>

```csharp
private void ResetExportBucketId()
```

##### `ResetFrequencyType` <a name="ResetFrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetFrequencyType"></a>

```csharp
private void ResetFrequencyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketIdInput">ExportBucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyTypeInput">FrequencyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketId">ExportBucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportBucketIdInput`<sup>Optional</sup> <a name="ExportBucketIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketIdInput"></a>

```csharp
public string ExportBucketIdInput { get; }
```

- *Type:* string

---

##### `FrequencyTypeInput`<sup>Optional</sup> <a name="FrequencyTypeInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyTypeInput"></a>

```csharp
public string FrequencyTypeInput { get; }
```

- *Type:* string

---

##### `ExportBucketId`<sup>Required</sup> <a name="ExportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketId"></a>

```csharp
public string ExportBucketId { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.internalValue"></a>

```csharp
public CloudBackupScheduleExport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---


### CloudBackupSchedulePolicyItemDailyOutputReference <a name="CloudBackupSchedulePolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.internalValue"></a>

```csharp
public CloudBackupSchedulePolicyItemDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---


### CloudBackupSchedulePolicyItemHourlyOutputReference <a name="CloudBackupSchedulePolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemHourlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.internalValue"></a>

```csharp
public CloudBackupSchedulePolicyItemHourly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---


### CloudBackupSchedulePolicyItemMonthlyList <a name="CloudBackupSchedulePolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemMonthlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get"></a>

```csharp
private CloudBackupSchedulePolicyItemMonthlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBackupSchedulePolicyItemMonthlyOutputReference <a name="CloudBackupSchedulePolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBackupSchedulePolicyItemWeeklyList <a name="CloudBackupSchedulePolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemWeeklyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get"></a>

```csharp
private CloudBackupSchedulePolicyItemWeeklyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBackupSchedulePolicyItemWeeklyOutputReference <a name="CloudBackupSchedulePolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBackupSchedulePolicyItemYearlyList <a name="CloudBackupSchedulePolicyItemYearlyList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemYearlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.get"></a>

```csharp
private CloudBackupSchedulePolicyItemYearlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBackupSchedulePolicyItemYearlyOutputReference <a name="CloudBackupSchedulePolicyItemYearlyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSchedulePolicyItemYearlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemYearlyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



