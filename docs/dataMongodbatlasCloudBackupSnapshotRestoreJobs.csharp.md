# `dataMongodbatlasCloudBackupSnapshotRestoreJobs` Submodule <a name="`dataMongodbatlasCloudBackupSnapshotRestoreJobs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobs <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs mongodbatlas_cloud_backup_snapshot_restore_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotRestoreJobs(Construct Scope, string Id, DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig">DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig">DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetItemsPerPage"></a>

```csharp
private void ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetPageNum"></a>

```csharp
private void ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotRestoreJobs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotRestoreJobs resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshotRestoreJobs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasCloudBackupSnapshotRestoreJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshotRestoreJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList">DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.totalCount">TotalCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNumInput">PageNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNum">PageNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.results"></a>

```csharp
public DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList Results { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList">DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.totalCount"></a>

```csharp
public double TotalCount { get; }
```

- *Type:* double

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPageInput"></a>

```csharp
public double ItemsPerPageInput { get; }
```

- *Type:* double

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNumInput"></a>

```csharp
public double PageNumInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNum"></a>

```csharp
public double PageNum { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ProjectId,
    string Id = null,
    double ItemsPerPage = null,
    double PageNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.pageNum">PageNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.pageNum"></a>

```csharp
public double PageNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}.

---

### DataMongodbatlasCloudBackupSnapshotRestoreJobsResults <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotRestoreJobsResults {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get"></a>

```csharp
private DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.cancelled">Cancelled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryType">DeliveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl">DeliveryUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expired">Expired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.failed">Failed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.finishedAt">FinishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogInc">OplogInc</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogTs">OplogTs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetClusterName">TargetClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetProjectId">TargetProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults">DataMongodbatlasCloudBackupSnapshotRestoreJobsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cancelled`<sup>Required</sup> <a name="Cancelled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.cancelled"></a>

```csharp
public IResolvable Cancelled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeliveryType`<sup>Required</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryType"></a>

```csharp
public string DeliveryType { get; }
```

- *Type:* string

---

##### `DeliveryUrl`<sup>Required</sup> <a name="DeliveryUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl"></a>

```csharp
public string[] DeliveryUrl { get; }
```

- *Type:* string[]

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expired"></a>

```csharp
public IResolvable Expired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Failed`<sup>Required</sup> <a name="Failed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.failed"></a>

```csharp
public IResolvable Failed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.finishedAt"></a>

```csharp
public string FinishedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OplogInc`<sup>Required</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogInc"></a>

```csharp
public double OplogInc { get; }
```

- *Type:* double

---

##### `OplogTs`<sup>Required</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogTs"></a>

```csharp
public double OplogTs { get; }
```

- *Type:* double

---

##### `PointInTimeUtcSeconds`<sup>Required</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds"></a>

```csharp
public double PointInTimeUtcSeconds { get; }
```

- *Type:* double

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `TargetClusterName`<sup>Required</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetClusterName"></a>

```csharp
public string TargetClusterName { get; }
```

- *Type:* string

---

##### `TargetProjectId`<sup>Required</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetProjectId"></a>

```csharp
public string TargetProjectId { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasCloudBackupSnapshotRestoreJobsResults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults">DataMongodbatlasCloudBackupSnapshotRestoreJobsResults</a>

---



