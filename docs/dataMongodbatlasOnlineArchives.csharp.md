# `dataMongodbatlasOnlineArchives` Submodule <a name="`dataMongodbatlasOnlineArchives` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasOnlineArchives <a name="DataMongodbatlasOnlineArchives" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives mongodbatlas_online_archives}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchives(Construct Scope, string Id, DataMongodbatlasOnlineArchivesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig">DataMongodbatlasOnlineArchivesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig">DataMongodbatlasOnlineArchivesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasOnlineArchives resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasOnlineArchives.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasOnlineArchives.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasOnlineArchives.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasOnlineArchives.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasOnlineArchives resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasOnlineArchives to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasOnlineArchives that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasOnlineArchives to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList">DataMongodbatlasOnlineArchivesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.totalCount">TotalCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.results"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsList Results { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList">DataMongodbatlasOnlineArchivesResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.totalCount"></a>

```csharp
public double TotalCount { get; }
```

- *Type:* double

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasOnlineArchivesConfig <a name="DataMongodbatlasOnlineArchivesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ProjectId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives#cluster_name DataMongodbatlasOnlineArchives#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives#project_id DataMongodbatlasOnlineArchives#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives#id DataMongodbatlasOnlineArchives#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives#cluster_name DataMongodbatlasOnlineArchives#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives#project_id DataMongodbatlasOnlineArchives#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/online_archives#id DataMongodbatlasOnlineArchives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasOnlineArchivesResults <a name="DataMongodbatlasOnlineArchivesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResults {

};
```


### DataMongodbatlasOnlineArchivesResultsCriteria <a name="DataMongodbatlasOnlineArchivesResultsCriteria" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsCriteria {

};
```


### DataMongodbatlasOnlineArchivesResultsDataExpirationRule <a name="DataMongodbatlasOnlineArchivesResultsDataExpirationRule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsDataExpirationRule {

};
```


### DataMongodbatlasOnlineArchivesResultsDataProcessRegion <a name="DataMongodbatlasOnlineArchivesResultsDataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsDataProcessRegion {

};
```


### DataMongodbatlasOnlineArchivesResultsPartitionFields <a name="DataMongodbatlasOnlineArchivesResultsPartitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsPartitionFields {

};
```


### DataMongodbatlasOnlineArchivesResultsSchedule <a name="DataMongodbatlasOnlineArchivesResultsSchedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsSchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasOnlineArchivesResultsCriteriaList <a name="DataMongodbatlasOnlineArchivesResultsCriteriaList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.get"></a>

```csharp
private DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference <a name="DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateField">DateField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.expireAfterDays">ExpireAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria">DataMongodbatlasOnlineArchivesResultsCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateField`<sup>Required</sup> <a name="DateField" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateField"></a>

```csharp
public string DateField { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.expireAfterDays"></a>

```csharp
public double ExpireAfterDays { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria">DataMongodbatlasOnlineArchivesResultsCriteria</a>

---


### DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList <a name="DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.get"></a>

```csharp
private DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference <a name="DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.expireAfterDays">ExpireAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule">DataMongodbatlasOnlineArchivesResultsDataExpirationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireAfterDays`<sup>Required</sup> <a name="ExpireAfterDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.expireAfterDays"></a>

```csharp
public double ExpireAfterDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsDataExpirationRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule">DataMongodbatlasOnlineArchivesResultsDataExpirationRule</a>

---


### DataMongodbatlasOnlineArchivesResultsDataProcessRegionList <a name="DataMongodbatlasOnlineArchivesResultsDataProcessRegionList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsDataProcessRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.get"></a>

```csharp
private DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference <a name="DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion">DataMongodbatlasOnlineArchivesResultsDataProcessRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsDataProcessRegion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion">DataMongodbatlasOnlineArchivesResultsDataProcessRegion</a>

---


### DataMongodbatlasOnlineArchivesResultsList <a name="DataMongodbatlasOnlineArchivesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.get"></a>

```csharp
private DataMongodbatlasOnlineArchivesResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasOnlineArchivesResultsOutputReference <a name="DataMongodbatlasOnlineArchivesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.archiveId">ArchiveId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collectionType">CollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collName">CollName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList">DataMongodbatlasOnlineArchivesResultsCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataExpirationRule">DataExpirationRule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList">DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList">DataMongodbatlasOnlineArchivesResultsDataProcessRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.partitionFields">PartitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList">DataMongodbatlasOnlineArchivesResultsPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.paused">Paused</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList">DataMongodbatlasOnlineArchivesResultsScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults">DataMongodbatlasOnlineArchivesResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveId`<sup>Required</sup> <a name="ArchiveId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.archiveId"></a>

```csharp
public string ArchiveId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collectionType"></a>

```csharp
public string CollectionType { get; }
```

- *Type:* string

---

##### `CollName`<sup>Required</sup> <a name="CollName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collName"></a>

```csharp
public string CollName { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.criteria"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsCriteriaList Criteria { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList">DataMongodbatlasOnlineArchivesResultsCriteriaList</a>

---

##### `DataExpirationRule`<sup>Required</sup> <a name="DataExpirationRule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataExpirationRule"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList DataExpirationRule { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList">DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList</a>

---

##### `DataProcessRegion`<sup>Required</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataProcessRegion"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsDataProcessRegionList DataProcessRegion { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList">DataMongodbatlasOnlineArchivesResultsDataProcessRegionList</a>

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `PartitionFields`<sup>Required</sup> <a name="PartitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.partitionFields"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsPartitionFieldsList PartitionFields { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList">DataMongodbatlasOnlineArchivesResultsPartitionFieldsList</a>

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.paused"></a>

```csharp
public IResolvable Paused { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.schedule"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList">DataMongodbatlasOnlineArchivesResultsScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasOnlineArchivesResults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults">DataMongodbatlasOnlineArchivesResults</a>

---


### DataMongodbatlasOnlineArchivesResultsPartitionFieldsList <a name="DataMongodbatlasOnlineArchivesResultsPartitionFieldsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsPartitionFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.get"></a>

```csharp
private DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference <a name="DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldType">FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields">DataMongodbatlasOnlineArchivesResultsPartitionFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldType"></a>

```csharp
public string FieldType { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsPartitionFields InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields">DataMongodbatlasOnlineArchivesResultsPartitionFields</a>

---


### DataMongodbatlasOnlineArchivesResultsScheduleList <a name="DataMongodbatlasOnlineArchivesResultsScheduleList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.get"></a>

```csharp
private DataMongodbatlasOnlineArchivesResultsScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasOnlineArchivesResultsScheduleOutputReference <a name="DataMongodbatlasOnlineArchivesResultsScheduleOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasOnlineArchivesResultsScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endHour">EndHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endMinute">EndMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startHour">StartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startMinute">StartMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule">DataMongodbatlasOnlineArchivesResultsSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; }
```

- *Type:* double

---

##### `EndHour`<sup>Required</sup> <a name="EndHour" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endHour"></a>

```csharp
public double EndHour { get; }
```

- *Type:* double

---

##### `EndMinute`<sup>Required</sup> <a name="EndMinute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endMinute"></a>

```csharp
public double EndMinute { get; }
```

- *Type:* double

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startHour"></a>

```csharp
public double StartHour { get; }
```

- *Type:* double

---

##### `StartMinute`<sup>Required</sup> <a name="StartMinute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startMinute"></a>

```csharp
public double StartMinute { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasOnlineArchivesResultsSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule">DataMongodbatlasOnlineArchivesResultsSchedule</a>

---



