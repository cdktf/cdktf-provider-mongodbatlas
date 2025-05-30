# `dataMongodbatlasCloudBackupSnapshotExportJob` Submodule <a name="`dataMongodbatlasCloudBackupSnapshotExportJob` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshotExportJob <a name="DataMongodbatlasCloudBackupSnapshotExportJob" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job mongodbatlas_cloud_backup_snapshot_export_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJob(Construct Scope, string Id, DataMongodbatlasCloudBackupSnapshotExportJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig">DataMongodbatlasCloudBackupSnapshotExportJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig">DataMongodbatlasCloudBackupSnapshotExportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotExportJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotExportJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotExportJob.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudBackupSnapshotExportJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshotExportJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasCloudBackupSnapshotExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshotExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.components">Components</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList">DataMongodbatlasCloudBackupSnapshotExportJobComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.customData">CustomData</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList">DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportBucketId">ExportBucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportStatusExportedCollections">ExportStatusExportedCollections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportStatusTotalCollections">ExportStatusTotalCollections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.finishedAt">FinishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportJobIdInput">ExportJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportJobId">ExportJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.components"></a>

```csharp
public DataMongodbatlasCloudBackupSnapshotExportJobComponentsList Components { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList">DataMongodbatlasCloudBackupSnapshotExportJobComponentsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.customData"></a>

```csharp
public DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList CustomData { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList">DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList</a>

---

##### `ExportBucketId`<sup>Required</sup> <a name="ExportBucketId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportBucketId"></a>

```csharp
public string ExportBucketId { get; }
```

- *Type:* string

---

##### `ExportStatusExportedCollections`<sup>Required</sup> <a name="ExportStatusExportedCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportStatusExportedCollections"></a>

```csharp
public double ExportStatusExportedCollections { get; }
```

- *Type:* double

---

##### `ExportStatusTotalCollections`<sup>Required</sup> <a name="ExportStatusTotalCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportStatusTotalCollections"></a>

```csharp
public double ExportStatusTotalCollections { get; }
```

- *Type:* double

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.finishedAt"></a>

```csharp
public string FinishedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ExportJobIdInput`<sup>Optional</sup> <a name="ExportJobIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportJobIdInput"></a>

```csharp
public string ExportJobIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ExportJobId`<sup>Required</sup> <a name="ExportJobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.exportJobId"></a>

```csharp
public string ExportJobId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotExportJobComponents <a name="DataMongodbatlasCloudBackupSnapshotExportJobComponents" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJobComponents {

};
```


### DataMongodbatlasCloudBackupSnapshotExportJobConfig <a name="DataMongodbatlasCloudBackupSnapshotExportJobConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ExportJobId,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job#cluster_name DataMongodbatlasCloudBackupSnapshotExportJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.exportJobId">ExportJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job#export_job_id DataMongodbatlasCloudBackupSnapshotExportJob#export_job_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job#project_id DataMongodbatlasCloudBackupSnapshotExportJob#project_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job#cluster_name DataMongodbatlasCloudBackupSnapshotExportJob#cluster_name}.

---

##### `ExportJobId`<sup>Required</sup> <a name="ExportJobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.exportJobId"></a>

```csharp
public string ExportJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job#export_job_id DataMongodbatlasCloudBackupSnapshotExportJob#export_job_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/cloud_backup_snapshot_export_job#project_id DataMongodbatlasCloudBackupSnapshotExportJob#project_id}.

---

### DataMongodbatlasCloudBackupSnapshotExportJobCustomData <a name="DataMongodbatlasCloudBackupSnapshotExportJobCustomData" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJobCustomData {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudBackupSnapshotExportJobComponentsList <a name="DataMongodbatlasCloudBackupSnapshotExportJobComponentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJobComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.get"></a>

```csharp
private DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference <a name="DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.exportId">ExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.replicaSetName">ReplicaSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponents">DataMongodbatlasCloudBackupSnapshotExportJobComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.exportId"></a>

```csharp
public string ExportId { get; }
```

- *Type:* string

---

##### `ReplicaSetName`<sup>Required</sup> <a name="ReplicaSetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.replicaSetName"></a>

```csharp
public string ReplicaSetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponentsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasCloudBackupSnapshotExportJobComponents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobComponents">DataMongodbatlasCloudBackupSnapshotExportJobComponents</a>

---


### DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList <a name="DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.get"></a>

```csharp
private DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference <a name="DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomData">DataMongodbatlasCloudBackupSnapshotExportJobCustomData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomDataOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasCloudBackupSnapshotExportJobCustomData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJob.DataMongodbatlasCloudBackupSnapshotExportJobCustomData">DataMongodbatlasCloudBackupSnapshotExportJobCustomData</a>

---



