# `data_mongodbatlas_data_lake_pipeline_run`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_data_lake_pipeline_run`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run).

# `dataMongodbatlasDataLakePipelineRun` Submodule <a name="`dataMongodbatlasDataLakePipelineRun` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasDataLakePipelineRun <a name="DataMongodbatlasDataLakePipelineRun" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run mongodbatlas_data_lake_pipeline_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakePipelineRun(Construct Scope, string Id, DataMongodbatlasDataLakePipelineRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig">DataMongodbatlasDataLakePipelineRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig">DataMongodbatlasDataLakePipelineRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasDataLakePipelineRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasDataLakePipelineRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasDataLakePipelineRun.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.backupFrequencyType">BackupFrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.datasetName">DatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.stats">Stats</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList">DataMongodbatlasDataLakePipelineRunStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineNameInput">PipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineRunIdInput">PipelineRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineName">PipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineRunId">PipelineRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BackupFrequencyType`<sup>Required</sup> <a name="BackupFrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.backupFrequencyType"></a>

```csharp
public string BackupFrequencyType { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.datasetName"></a>

```csharp
public string DatasetName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Stats`<sup>Required</sup> <a name="Stats" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.stats"></a>

```csharp
public DataMongodbatlasDataLakePipelineRunStatsList Stats { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList">DataMongodbatlasDataLakePipelineRunStatsList</a>

---

##### `PipelineNameInput`<sup>Optional</sup> <a name="PipelineNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineNameInput"></a>

```csharp
public string PipelineNameInput { get; }
```

- *Type:* string

---

##### `PipelineRunIdInput`<sup>Optional</sup> <a name="PipelineRunIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineRunIdInput"></a>

```csharp
public string PipelineRunIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineName"></a>

```csharp
public string PipelineName { get; }
```

- *Type:* string

---

##### `PipelineRunId`<sup>Required</sup> <a name="PipelineRunId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.pipelineRunId"></a>

```csharp
public string PipelineRunId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasDataLakePipelineRunConfig <a name="DataMongodbatlasDataLakePipelineRunConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakePipelineRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PipelineName,
    string PipelineRunId,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.pipelineName">PipelineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run#pipeline_name DataMongodbatlasDataLakePipelineRun#pipeline_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.pipelineRunId">PipelineRunId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run#pipeline_run_id DataMongodbatlasDataLakePipelineRun#pipeline_run_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run#project_id DataMongodbatlasDataLakePipelineRun#project_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.pipelineName"></a>

```csharp
public string PipelineName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run#pipeline_name DataMongodbatlasDataLakePipelineRun#pipeline_name}.

---

##### `PipelineRunId`<sup>Required</sup> <a name="PipelineRunId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.pipelineRunId"></a>

```csharp
public string PipelineRunId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run#pipeline_run_id DataMongodbatlasDataLakePipelineRun#pipeline_run_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipeline_run#project_id DataMongodbatlasDataLakePipelineRun#project_id}.

---

### DataMongodbatlasDataLakePipelineRunStats <a name="DataMongodbatlasDataLakePipelineRunStats" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakePipelineRunStats {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasDataLakePipelineRunStatsList <a name="DataMongodbatlasDataLakePipelineRunStatsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakePipelineRunStatsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.get"></a>

```csharp
private DataMongodbatlasDataLakePipelineRunStatsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelineRunStatsOutputReference <a name="DataMongodbatlasDataLakePipelineRunStatsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakePipelineRunStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.bytesExported">BytesExported</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.numDocs">NumDocs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStats">DataMongodbatlasDataLakePipelineRunStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BytesExported`<sup>Required</sup> <a name="BytesExported" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.bytesExported"></a>

```csharp
public double BytesExported { get; }
```

- *Type:* double

---

##### `NumDocs`<sup>Required</sup> <a name="NumDocs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.numDocs"></a>

```csharp
public double NumDocs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStatsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakePipelineRunStats InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRun.DataMongodbatlasDataLakePipelineRunStats">DataMongodbatlasDataLakePipelineRunStats</a>

---



