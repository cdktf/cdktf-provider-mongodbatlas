# `dataMongodbatlasGlobalClusterConfig` Submodule <a name="`dataMongodbatlasGlobalClusterConfig` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasGlobalClusterConfig <a name="DataMongodbatlasGlobalClusterConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config mongodbatlas_global_cluster_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasGlobalClusterConfig(Construct Scope, string Id, DataMongodbatlasGlobalClusterConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig">DataMongodbatlasGlobalClusterConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig">DataMongodbatlasGlobalClusterConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces">PutManagedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetManagedNamespaces">ResetManagedNamespaces</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutManagedNamespaces` <a name="PutManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces"></a>

```csharp
private void PutManagedNamespaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedNamespaces` <a name="ResetManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetManagedNamespaces"></a>

```csharp
private void ResetManagedNamespaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasGlobalClusterConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasGlobalClusterConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasGlobalClusterConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasGlobalClusterConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasGlobalClusterConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasGlobalClusterConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasGlobalClusterConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasGlobalClusterConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasGlobalClusterConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMapping">CustomZoneMapping</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespaces">ManagedNamespaces</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList">DataMongodbatlasGlobalClusterConfigManagedNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespacesInput">ManagedNamespacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CustomZoneMapping`<sup>Required</sup> <a name="CustomZoneMapping" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMapping"></a>

```csharp
public StringMap CustomZoneMapping { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ManagedNamespaces`<sup>Required</sup> <a name="ManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespaces"></a>

```csharp
public DataMongodbatlasGlobalClusterConfigManagedNamespacesList ManagedNamespaces { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList">DataMongodbatlasGlobalClusterConfigManagedNamespacesList</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedNamespacesInput`<sup>Optional</sup> <a name="ManagedNamespacesInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespacesInput"></a>

```csharp
public object ManagedNamespacesInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasGlobalClusterConfigConfig <a name="DataMongodbatlasGlobalClusterConfigConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasGlobalClusterConfigConfig {
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
    object ManagedNamespaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.managedNamespaces">ManagedNamespaces</a></code> | <code>object</code> | managed_namespaces block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedNamespaces`<sup>Optional</sup> <a name="ManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.managedNamespaces"></a>

```csharp
public object ManagedNamespaces { get; set; }
```

- *Type:* object

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#managed_namespaces DataMongodbatlasGlobalClusterConfig#managed_namespaces}

---

### DataMongodbatlasGlobalClusterConfigManagedNamespaces <a name="DataMongodbatlasGlobalClusterConfigManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasGlobalClusterConfigManagedNamespaces {
    string Collection,
    string CustomShardKey,
    string Db,
    object IsCustomShardKeyHashed = null,
    object IsShardKeyUnique = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.collection">Collection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#collection DataMongodbatlasGlobalClusterConfig#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.customShardKey">CustomShardKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#custom_shard_key DataMongodbatlasGlobalClusterConfig#custom_shard_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.db">Db</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#db DataMongodbatlasGlobalClusterConfig#db}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed">IsCustomShardKeyHashed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#is_custom_shard_key_hashed DataMongodbatlasGlobalClusterConfig#is_custom_shard_key_hashed}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isShardKeyUnique">IsShardKeyUnique</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#is_shard_key_unique DataMongodbatlasGlobalClusterConfig#is_shard_key_unique}. |

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.collection"></a>

```csharp
public string Collection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#collection DataMongodbatlasGlobalClusterConfig#collection}.

---

##### `CustomShardKey`<sup>Required</sup> <a name="CustomShardKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.customShardKey"></a>

```csharp
public string CustomShardKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#custom_shard_key DataMongodbatlasGlobalClusterConfig#custom_shard_key}.

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.db"></a>

```csharp
public string Db { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#db DataMongodbatlasGlobalClusterConfig#db}.

---

##### `IsCustomShardKeyHashed`<sup>Optional</sup> <a name="IsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed"></a>

```csharp
public object IsCustomShardKeyHashed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#is_custom_shard_key_hashed DataMongodbatlasGlobalClusterConfig#is_custom_shard_key_hashed}.

---

##### `IsShardKeyUnique`<sup>Optional</sup> <a name="IsShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isShardKeyUnique"></a>

```csharp
public object IsShardKeyUnique { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/global_cluster_config#is_shard_key_unique DataMongodbatlasGlobalClusterConfig#is_shard_key_unique}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasGlobalClusterConfigManagedNamespacesList <a name="DataMongodbatlasGlobalClusterConfigManagedNamespacesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasGlobalClusterConfigManagedNamespacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get"></a>

```csharp
private DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference <a name="DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed">ResetIsCustomShardKeyHashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique">ResetIsShardKeyUnique</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCustomShardKeyHashed` <a name="ResetIsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed"></a>

```csharp
private void ResetIsCustomShardKeyHashed()
```

##### `ResetIsShardKeyUnique` <a name="ResetIsShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique"></a>

```csharp
private void ResetIsShardKeyUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput">CollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput">CustomShardKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.dbInput">DbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput">IsCustomShardKeyHashedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput">IsShardKeyUniqueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collection">Collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey">CustomShardKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.db">Db</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed">IsCustomShardKeyHashed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique">IsShardKeyUnique</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput"></a>

```csharp
public string CollectionInput { get; }
```

- *Type:* string

---

##### `CustomShardKeyInput`<sup>Optional</sup> <a name="CustomShardKeyInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput"></a>

```csharp
public string CustomShardKeyInput { get; }
```

- *Type:* string

---

##### `DbInput`<sup>Optional</sup> <a name="DbInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.dbInput"></a>

```csharp
public string DbInput { get; }
```

- *Type:* string

---

##### `IsCustomShardKeyHashedInput`<sup>Optional</sup> <a name="IsCustomShardKeyHashedInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput"></a>

```csharp
public object IsCustomShardKeyHashedInput { get; }
```

- *Type:* object

---

##### `IsShardKeyUniqueInput`<sup>Optional</sup> <a name="IsShardKeyUniqueInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput"></a>

```csharp
public object IsShardKeyUniqueInput { get; }
```

- *Type:* object

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collection"></a>

```csharp
public string Collection { get; }
```

- *Type:* string

---

##### `CustomShardKey`<sup>Required</sup> <a name="CustomShardKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey"></a>

```csharp
public string CustomShardKey { get; }
```

- *Type:* string

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.db"></a>

```csharp
public string Db { get; }
```

- *Type:* string

---

##### `IsCustomShardKeyHashed`<sup>Required</sup> <a name="IsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed"></a>

```csharp
public object IsCustomShardKeyHashed { get; }
```

- *Type:* object

---

##### `IsShardKeyUnique`<sup>Required</sup> <a name="IsShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique"></a>

```csharp
public object IsShardKeyUnique { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



