# `data_mongodbatlas_data_lake`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_data_lake`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake).

# `dataMongodbatlasDataLake` Submodule <a name="`dataMongodbatlasDataLake` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasDataLake <a name="DataMongodbatlasDataLake" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake mongodbatlas_data_lake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLake(Construct Scope, string Id, DataMongodbatlasDataLakeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig">DataMongodbatlasDataLakeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig">DataMongodbatlasDataLakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasDataLake.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasDataLake.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasDataLake.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList">DataMongodbatlasDataLakeAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.dataProcessRegion">DataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList">DataMongodbatlasDataLakeDataProcessRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.storageDatabases">StorageDatabases</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList">DataMongodbatlasDataLakeStorageDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.storageStores">StorageStores</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList">DataMongodbatlasDataLakeStorageStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.aws"></a>

```csharp
public DataMongodbatlasDataLakeAwsList Aws { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList">DataMongodbatlasDataLakeAwsList</a>

---

##### `DataProcessRegion`<sup>Required</sup> <a name="DataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.dataProcessRegion"></a>

```csharp
public DataMongodbatlasDataLakeDataProcessRegionList DataProcessRegion { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList">DataMongodbatlasDataLakeDataProcessRegionList</a>

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageDatabases`<sup>Required</sup> <a name="StorageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.storageDatabases"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabasesList StorageDatabases { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList">DataMongodbatlasDataLakeStorageDatabasesList</a>

---

##### `StorageStores`<sup>Required</sup> <a name="StorageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.storageStores"></a>

```csharp
public DataMongodbatlasDataLakeStorageStoresList StorageStores { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList">DataMongodbatlasDataLakeStorageStoresList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLake.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasDataLakeAws <a name="DataMongodbatlasDataLakeAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeAws {

};
```


### DataMongodbatlasDataLakeConfig <a name="DataMongodbatlasDataLakeConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ProjectId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake#name DataMongodbatlasDataLake#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake#project_id DataMongodbatlasDataLake#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake#id DataMongodbatlasDataLake#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake#name DataMongodbatlasDataLake#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake#project_id DataMongodbatlasDataLake#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/data_lake#id DataMongodbatlasDataLake#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasDataLakeDataProcessRegion <a name="DataMongodbatlasDataLakeDataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeDataProcessRegion {

};
```


### DataMongodbatlasDataLakeStorageDatabases <a name="DataMongodbatlasDataLakeStorageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabases {

};
```


### DataMongodbatlasDataLakeStorageDatabasesCollections <a name="DataMongodbatlasDataLakeStorageDatabasesCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesCollections {

};
```


### DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources <a name="DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources {

};
```


### DataMongodbatlasDataLakeStorageDatabasesViews <a name="DataMongodbatlasDataLakeStorageDatabasesViews" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesViews {

};
```


### DataMongodbatlasDataLakeStorageStores <a name="DataMongodbatlasDataLakeStorageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageStores {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasDataLakeAwsList <a name="DataMongodbatlasDataLakeAwsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeAwsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.get"></a>

```csharp
private DataMongodbatlasDataLakeAwsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakeAwsOutputReference <a name="DataMongodbatlasDataLakeAwsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.iamAssumedRoleArn">IamAssumedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.iamUserArn">IamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.testS3Bucket">TestS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAws">DataMongodbatlasDataLakeAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `IamAssumedRoleArn`<sup>Required</sup> <a name="IamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.iamAssumedRoleArn"></a>

```csharp
public string IamAssumedRoleArn { get; }
```

- *Type:* string

---

##### `IamUserArn`<sup>Required</sup> <a name="IamUserArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.iamUserArn"></a>

```csharp
public string IamUserArn { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `TestS3Bucket`<sup>Required</sup> <a name="TestS3Bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.testS3Bucket"></a>

```csharp
public string TestS3Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAwsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakeAws InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeAws">DataMongodbatlasDataLakeAws</a>

---


### DataMongodbatlasDataLakeDataProcessRegionList <a name="DataMongodbatlasDataLakeDataProcessRegionList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeDataProcessRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.get"></a>

```csharp
private DataMongodbatlasDataLakeDataProcessRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakeDataProcessRegionOutputReference <a name="DataMongodbatlasDataLakeDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeDataProcessRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegion">DataMongodbatlasDataLakeDataProcessRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegionOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakeDataProcessRegion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeDataProcessRegion">DataMongodbatlasDataLakeDataProcessRegion</a>

---


### DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList <a name="DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.get"></a>

```csharp
private DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference <a name="DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat">DefaultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName">StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources">DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultFormat`<sup>Required</sup> <a name="DefaultFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat"></a>

```csharp
public string DefaultFormat { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `StoreName`<sup>Required</sup> <a name="StoreName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName"></a>

```csharp
public string StoreName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources">DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSources</a>

---


### DataMongodbatlasDataLakeStorageDatabasesCollectionsList <a name="DataMongodbatlasDataLakeStorageDatabasesCollectionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesCollectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.get"></a>

```csharp
private DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference <a name="DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollections">DataMongodbatlasDataLakeStorageDatabasesCollections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.dataSources"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList DataSources { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasDataLakeStorageDatabasesCollectionsDataSourcesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabasesCollections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollections">DataMongodbatlasDataLakeStorageDatabasesCollections</a>

---


### DataMongodbatlasDataLakeStorageDatabasesList <a name="DataMongodbatlasDataLakeStorageDatabasesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.get"></a>

```csharp
private DataMongodbatlasDataLakeStorageDatabasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakeStorageDatabasesOutputReference <a name="DataMongodbatlasDataLakeStorageDatabasesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.collections">Collections</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList">DataMongodbatlasDataLakeStorageDatabasesCollectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.maxWildcardCollections">MaxWildcardCollections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.views">Views</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList">DataMongodbatlasDataLakeStorageDatabasesViewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabases">DataMongodbatlasDataLakeStorageDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Collections`<sup>Required</sup> <a name="Collections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.collections"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabasesCollectionsList Collections { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesCollectionsList">DataMongodbatlasDataLakeStorageDatabasesCollectionsList</a>

---

##### `MaxWildcardCollections`<sup>Required</sup> <a name="MaxWildcardCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.maxWildcardCollections"></a>

```csharp
public double MaxWildcardCollections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Views`<sup>Required</sup> <a name="Views" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.views"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabasesViewsList Views { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList">DataMongodbatlasDataLakeStorageDatabasesViewsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabases InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabases">DataMongodbatlasDataLakeStorageDatabases</a>

---


### DataMongodbatlasDataLakeStorageDatabasesViewsList <a name="DataMongodbatlasDataLakeStorageDatabasesViewsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesViewsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.get"></a>

```csharp
private DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference <a name="DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.pipeline">Pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViews">DataMongodbatlasDataLakeStorageDatabasesViews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.pipeline"></a>

```csharp
public string Pipeline { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViewsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakeStorageDatabasesViews InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageDatabasesViews">DataMongodbatlasDataLakeStorageDatabasesViews</a>

---


### DataMongodbatlasDataLakeStorageStoresList <a name="DataMongodbatlasDataLakeStorageStoresList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageStoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.get"></a>

```csharp
private DataMongodbatlasDataLakeStorageStoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasDataLakeStorageStoresOutputReference <a name="DataMongodbatlasDataLakeStorageStoresOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasDataLakeStorageStoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.additionalStorageClasses">AdditionalStorageClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.includeTags">IncludeTags</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStores">DataMongodbatlasDataLakeStorageStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalStorageClasses`<sup>Required</sup> <a name="AdditionalStorageClasses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.additionalStorageClasses"></a>

```csharp
public string[] AdditionalStorageClasses { get; }
```

- *Type:* string[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `IncludeTags`<sup>Required</sup> <a name="IncludeTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.includeTags"></a>

```csharp
public IResolvable IncludeTags { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStoresOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasDataLakeStorageStores InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLake.DataMongodbatlasDataLakeStorageStores">DataMongodbatlasDataLakeStorageStores</a>

---



