# `backupCompliancePolicy` Submodule <a name="`backupCompliancePolicy` Submodule" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupCompliancePolicy <a name="BackupCompliancePolicy" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy mongodbatlas_backup_compliance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicy(Construct Scope, string Id, BackupCompliancePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig">BackupCompliancePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig">BackupCompliancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem">PutOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily">PutPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly">PutPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly">PutPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly">PutPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly">PutPolicyItemYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetCopyProtectionEnabled">ResetCopyProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetEncryptionAtRestEnabled">ResetEncryptionAtRestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPitEnabled">ResetPitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily">ResetPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly">ResetPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly">ResetPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly">ResetPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemYearly">ResetPolicyItemYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays">ResetRestoreWindowDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnDemandPolicyItem` <a name="PutOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem"></a>

```csharp
private void PutOnDemandPolicyItem(BackupCompliancePolicyOnDemandPolicyItem Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `PutPolicyItemDaily` <a name="PutPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily"></a>

```csharp
private void PutPolicyItemDaily(BackupCompliancePolicyPolicyItemDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `PutPolicyItemHourly` <a name="PutPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly"></a>

```csharp
private void PutPolicyItemHourly(BackupCompliancePolicyPolicyItemHourly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `PutPolicyItemMonthly` <a name="PutPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly"></a>

```csharp
private void PutPolicyItemMonthly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly.parameter.value"></a>

- *Type:* object

---

##### `PutPolicyItemWeekly` <a name="PutPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly"></a>

```csharp
private void PutPolicyItemWeekly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly.parameter.value"></a>

- *Type:* object

---

##### `PutPolicyItemYearly` <a name="PutPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly"></a>

```csharp
private void PutPolicyItemYearly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly.parameter.value"></a>

- *Type:* object

---

##### `ResetCopyProtectionEnabled` <a name="ResetCopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetCopyProtectionEnabled"></a>

```csharp
private void ResetCopyProtectionEnabled()
```

##### `ResetEncryptionAtRestEnabled` <a name="ResetEncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetEncryptionAtRestEnabled"></a>

```csharp
private void ResetEncryptionAtRestEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPitEnabled` <a name="ResetPitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPitEnabled"></a>

```csharp
private void ResetPitEnabled()
```

##### `ResetPolicyItemDaily` <a name="ResetPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily"></a>

```csharp
private void ResetPolicyItemDaily()
```

##### `ResetPolicyItemHourly` <a name="ResetPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly"></a>

```csharp
private void ResetPolicyItemHourly()
```

##### `ResetPolicyItemMonthly` <a name="ResetPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly"></a>

```csharp
private void ResetPolicyItemMonthly()
```

##### `ResetPolicyItemWeekly` <a name="ResetPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly"></a>

```csharp
private void ResetPolicyItemWeekly()
```

##### `ResetPolicyItemYearly` <a name="ResetPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemYearly"></a>

```csharp
private void ResetPolicyItemYearly()
```

##### `ResetRestoreWindowDays` <a name="ResetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays"></a>

```csharp
private void ResetRestoreWindowDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupCompliancePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

BackupCompliancePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

BackupCompliancePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

BackupCompliancePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

BackupCompliancePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BackupCompliancePolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupCompliancePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupCompliancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BackupCompliancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem">OnDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearly">PolicyItemYearly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList">BackupCompliancePolicyPolicyItemYearlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate">UpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser">UpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput">AuthorizedEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstNameInput">AuthorizedUserFirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastNameInput">AuthorizedUserLastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput">CopyProtectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput">EncryptionAtRestEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput">OnDemandPolicyItemInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput">PitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput">PolicyItemDailyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput">PolicyItemHourlyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput">PolicyItemMonthlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput">PolicyItemWeeklyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearlyInput">PolicyItemYearlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput">RestoreWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail">AuthorizedEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstName">AuthorizedUserFirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastName">AuthorizedUserLastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled">CopyProtectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled">EncryptionAtRestEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled">PitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OnDemandPolicyItem`<sup>Required</sup> <a name="OnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem"></a>

```csharp
public BackupCompliancePolicyOnDemandPolicyItemOutputReference OnDemandPolicyItem { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a>

---

##### `PolicyItemDaily`<sup>Required</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily"></a>

```csharp
public BackupCompliancePolicyPolicyItemDailyOutputReference PolicyItemDaily { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a>

---

##### `PolicyItemHourly`<sup>Required</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly"></a>

```csharp
public BackupCompliancePolicyPolicyItemHourlyOutputReference PolicyItemHourly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a>

---

##### `PolicyItemMonthly`<sup>Required</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly"></a>

```csharp
public BackupCompliancePolicyPolicyItemMonthlyList PolicyItemMonthly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a>

---

##### `PolicyItemWeekly`<sup>Required</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly"></a>

```csharp
public BackupCompliancePolicyPolicyItemWeeklyList PolicyItemWeekly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a>

---

##### `PolicyItemYearly`<sup>Required</sup> <a name="PolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearly"></a>

```csharp
public BackupCompliancePolicyPolicyItemYearlyList PolicyItemYearly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList">BackupCompliancePolicyPolicyItemYearlyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate"></a>

```csharp
public string UpdatedDate { get; }
```

- *Type:* string

---

##### `UpdatedUser`<sup>Required</sup> <a name="UpdatedUser" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser"></a>

```csharp
public string UpdatedUser { get; }
```

- *Type:* string

---

##### `AuthorizedEmailInput`<sup>Optional</sup> <a name="AuthorizedEmailInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput"></a>

```csharp
public string AuthorizedEmailInput { get; }
```

- *Type:* string

---

##### `AuthorizedUserFirstNameInput`<sup>Optional</sup> <a name="AuthorizedUserFirstNameInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstNameInput"></a>

```csharp
public string AuthorizedUserFirstNameInput { get; }
```

- *Type:* string

---

##### `AuthorizedUserLastNameInput`<sup>Optional</sup> <a name="AuthorizedUserLastNameInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastNameInput"></a>

```csharp
public string AuthorizedUserLastNameInput { get; }
```

- *Type:* string

---

##### `CopyProtectionEnabledInput`<sup>Optional</sup> <a name="CopyProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput"></a>

```csharp
public object CopyProtectionEnabledInput { get; }
```

- *Type:* object

---

##### `EncryptionAtRestEnabledInput`<sup>Optional</sup> <a name="EncryptionAtRestEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput"></a>

```csharp
public object EncryptionAtRestEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnDemandPolicyItemInput`<sup>Optional</sup> <a name="OnDemandPolicyItemInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput"></a>

```csharp
public BackupCompliancePolicyOnDemandPolicyItem OnDemandPolicyItemInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `PitEnabledInput`<sup>Optional</sup> <a name="PitEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput"></a>

```csharp
public object PitEnabledInput { get; }
```

- *Type:* object

---

##### `PolicyItemDailyInput`<sup>Optional</sup> <a name="PolicyItemDailyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput"></a>

```csharp
public BackupCompliancePolicyPolicyItemDaily PolicyItemDailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `PolicyItemHourlyInput`<sup>Optional</sup> <a name="PolicyItemHourlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput"></a>

```csharp
public BackupCompliancePolicyPolicyItemHourly PolicyItemHourlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `PolicyItemMonthlyInput`<sup>Optional</sup> <a name="PolicyItemMonthlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput"></a>

```csharp
public object PolicyItemMonthlyInput { get; }
```

- *Type:* object

---

##### `PolicyItemWeeklyInput`<sup>Optional</sup> <a name="PolicyItemWeeklyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput"></a>

```csharp
public object PolicyItemWeeklyInput { get; }
```

- *Type:* object

---

##### `PolicyItemYearlyInput`<sup>Optional</sup> <a name="PolicyItemYearlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearlyInput"></a>

```csharp
public object PolicyItemYearlyInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RestoreWindowDaysInput`<sup>Optional</sup> <a name="RestoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput"></a>

```csharp
public double RestoreWindowDaysInput { get; }
```

- *Type:* double

---

##### `AuthorizedEmail`<sup>Required</sup> <a name="AuthorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail"></a>

```csharp
public string AuthorizedEmail { get; }
```

- *Type:* string

---

##### `AuthorizedUserFirstName`<sup>Required</sup> <a name="AuthorizedUserFirstName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstName"></a>

```csharp
public string AuthorizedUserFirstName { get; }
```

- *Type:* string

---

##### `AuthorizedUserLastName`<sup>Required</sup> <a name="AuthorizedUserLastName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastName"></a>

```csharp
public string AuthorizedUserLastName { get; }
```

- *Type:* string

---

##### `CopyProtectionEnabled`<sup>Required</sup> <a name="CopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled"></a>

```csharp
public object CopyProtectionEnabled { get; }
```

- *Type:* object

---

##### `EncryptionAtRestEnabled`<sup>Required</sup> <a name="EncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled"></a>

```csharp
public object EncryptionAtRestEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PitEnabled`<sup>Required</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled"></a>

```csharp
public object PitEnabled { get; }
```

- *Type:* object

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupCompliancePolicyConfig <a name="BackupCompliancePolicyConfig" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthorizedEmail,
    string AuthorizedUserFirstName,
    string AuthorizedUserLastName,
    BackupCompliancePolicyOnDemandPolicyItem OnDemandPolicyItem,
    string ProjectId,
    object CopyProtectionEnabled = null,
    object EncryptionAtRestEnabled = null,
    string Id = null,
    object PitEnabled = null,
    BackupCompliancePolicyPolicyItemDaily PolicyItemDaily = null,
    BackupCompliancePolicyPolicyItemHourly PolicyItemHourly = null,
    object PolicyItemMonthly = null,
    object PolicyItemWeekly = null,
    object PolicyItemYearly = null,
    double RestoreWindowDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail">AuthorizedEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserFirstName">AuthorizedUserFirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserLastName">AuthorizedUserLastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem">OnDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | on_demand_policy_item block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled">CopyProtectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled">EncryptionAtRestEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled">PitEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code>object</code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code>object</code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemYearly">PolicyItemYearly</a></code> | <code>object</code> | policy_item_yearly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthorizedEmail`<sup>Required</sup> <a name="AuthorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail"></a>

```csharp
public string AuthorizedEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}.

---

##### `AuthorizedUserFirstName`<sup>Required</sup> <a name="AuthorizedUserFirstName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserFirstName"></a>

```csharp
public string AuthorizedUserFirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}.

---

##### `AuthorizedUserLastName`<sup>Required</sup> <a name="AuthorizedUserLastName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserLastName"></a>

```csharp
public string AuthorizedUserLastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}.

---

##### `OnDemandPolicyItem`<sup>Required</sup> <a name="OnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem"></a>

```csharp
public BackupCompliancePolicyOnDemandPolicyItem OnDemandPolicyItem { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

on_demand_policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#on_demand_policy_item BackupCompliancePolicy#on_demand_policy_item}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}.

---

##### `CopyProtectionEnabled`<sup>Optional</sup> <a name="CopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled"></a>

```csharp
public object CopyProtectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}.

---

##### `EncryptionAtRestEnabled`<sup>Optional</sup> <a name="EncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled"></a>

```csharp
public object EncryptionAtRestEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PitEnabled`<sup>Optional</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled"></a>

```csharp
public object PitEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}.

---

##### `PolicyItemDaily`<sup>Optional</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily"></a>

```csharp
public BackupCompliancePolicyPolicyItemDaily PolicyItemDaily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#policy_item_daily BackupCompliancePolicy#policy_item_daily}

---

##### `PolicyItemHourly`<sup>Optional</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly"></a>

```csharp
public BackupCompliancePolicyPolicyItemHourly PolicyItemHourly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#policy_item_hourly BackupCompliancePolicy#policy_item_hourly}

---

##### `PolicyItemMonthly`<sup>Optional</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly"></a>

```csharp
public object PolicyItemMonthly { get; set; }
```

- *Type:* object

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#policy_item_monthly BackupCompliancePolicy#policy_item_monthly}

---

##### `PolicyItemWeekly`<sup>Optional</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly"></a>

```csharp
public object PolicyItemWeekly { get; set; }
```

- *Type:* object

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#policy_item_weekly BackupCompliancePolicy#policy_item_weekly}

---

##### `PolicyItemYearly`<sup>Optional</sup> <a name="PolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemYearly"></a>

```csharp
public object PolicyItemYearly { get; set; }
```

- *Type:* object

policy_item_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#policy_item_yearly BackupCompliancePolicy#policy_item_yearly}

---

##### `RestoreWindowDays`<sup>Optional</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}.

---

### BackupCompliancePolicyOnDemandPolicyItem <a name="BackupCompliancePolicyOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyOnDemandPolicyItem {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemDaily <a name="BackupCompliancePolicyPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemDaily {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemHourly <a name="BackupCompliancePolicyPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemHourly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemMonthly <a name="BackupCompliancePolicyPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemMonthly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemWeekly <a name="BackupCompliancePolicyPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemWeekly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemYearly <a name="BackupCompliancePolicyPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemYearly {
    double FrequencyInterval,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupCompliancePolicyOnDemandPolicyItemOutputReference <a name="BackupCompliancePolicyOnDemandPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyOnDemandPolicyItemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue"></a>

```csharp
public BackupCompliancePolicyOnDemandPolicyItem InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---


### BackupCompliancePolicyPolicyItemDailyOutputReference <a name="BackupCompliancePolicyPolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue"></a>

```csharp
public BackupCompliancePolicyPolicyItemDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---


### BackupCompliancePolicyPolicyItemHourlyOutputReference <a name="BackupCompliancePolicyPolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemHourlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue"></a>

```csharp
public BackupCompliancePolicyPolicyItemHourly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---


### BackupCompliancePolicyPolicyItemMonthlyList <a name="BackupCompliancePolicyPolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemMonthlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get"></a>

```csharp
private BackupCompliancePolicyPolicyItemMonthlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupCompliancePolicyPolicyItemMonthlyOutputReference <a name="BackupCompliancePolicyPolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupCompliancePolicyPolicyItemWeeklyList <a name="BackupCompliancePolicyPolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemWeeklyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get"></a>

```csharp
private BackupCompliancePolicyPolicyItemWeeklyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupCompliancePolicyPolicyItemWeeklyOutputReference <a name="BackupCompliancePolicyPolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupCompliancePolicyPolicyItemYearlyList <a name="BackupCompliancePolicyPolicyItemYearlyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemYearlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get"></a>

```csharp
private BackupCompliancePolicyPolicyItemYearlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupCompliancePolicyPolicyItemYearlyOutputReference <a name="BackupCompliancePolicyPolicyItemYearlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new BackupCompliancePolicyPolicyItemYearlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



