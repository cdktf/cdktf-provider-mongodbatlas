# `data_mongodbatlas_projects`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_projects`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/projects).

# `dataMongodbatlasProjects` Submodule <a name="`dataMongodbatlasProjects` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasProjects <a name="DataMongodbatlasProjects" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/projects mongodbatlas_projects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjects(Construct Scope, string Id, DataMongodbatlasProjectsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig">DataMongodbatlasProjectsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig">DataMongodbatlasProjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.resetItemsPerPage"></a>

```csharp
private void ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.resetPageNum"></a>

```csharp
private void ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasProjects.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasProjects.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasProjects.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList">DataMongodbatlasProjectsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.totalCount">TotalCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.pageNumInput">PageNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.pageNum">PageNum</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.results"></a>

```csharp
public DataMongodbatlasProjectsResultsList Results { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList">DataMongodbatlasProjectsResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.totalCount"></a>

```csharp
public double TotalCount { get; }
```

- *Type:* double

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.itemsPerPageInput"></a>

```csharp
public double ItemsPerPageInput { get; }
```

- *Type:* double

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.pageNumInput"></a>

```csharp
public double PageNumInput { get; }
```

- *Type:* double

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.pageNum"></a>

```csharp
public double PageNum { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjects.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasProjectsConfig <a name="DataMongodbatlasProjectsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double ItemsPerPage = null,
    double PageNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/projects#items_per_page DataMongodbatlasProjects#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.pageNum">PageNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/projects#page_num DataMongodbatlasProjects#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/projects#items_per_page DataMongodbatlasProjects#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsConfig.property.pageNum"></a>

```csharp
public double PageNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/projects#page_num DataMongodbatlasProjects#page_num}.

---

### DataMongodbatlasProjectsResults <a name="DataMongodbatlasProjectsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResults {

};
```


### DataMongodbatlasProjectsResultsLimits <a name="DataMongodbatlasProjectsResultsLimits" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsLimits {

};
```


### DataMongodbatlasProjectsResultsTeams <a name="DataMongodbatlasProjectsResultsTeams" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsTeams {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasProjectsResultsLimitsList <a name="DataMongodbatlasProjectsResultsLimitsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.get"></a>

```csharp
private DataMongodbatlasProjectsResultsLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasProjectsResultsLimitsOutputReference <a name="DataMongodbatlasProjectsResultsLimitsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.currentUsage">CurrentUsage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.defaultLimit">DefaultLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.maximumLimit">MaximumLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimits">DataMongodbatlasProjectsResultsLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentUsage`<sup>Required</sup> <a name="CurrentUsage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.currentUsage"></a>

```csharp
public double CurrentUsage { get; }
```

- *Type:* double

---

##### `DefaultLimit`<sup>Required</sup> <a name="DefaultLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.defaultLimit"></a>

```csharp
public double DefaultLimit { get; }
```

- *Type:* double

---

##### `MaximumLimit`<sup>Required</sup> <a name="MaximumLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.maximumLimit"></a>

```csharp
public double MaximumLimit { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasProjectsResultsLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimits">DataMongodbatlasProjectsResultsLimits</a>

---


### DataMongodbatlasProjectsResultsList <a name="DataMongodbatlasProjectsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.get"></a>

```csharp
private DataMongodbatlasProjectsResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasProjectsResultsOutputReference <a name="DataMongodbatlasProjectsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.clusterCount">ClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isCollectDatabaseSpecificsStatisticsEnabled">IsCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isDataExplorerEnabled">IsDataExplorerEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isExtendedStorageSizesEnabled">IsExtendedStorageSizesEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isPerformanceAdvisorEnabled">IsPerformanceAdvisorEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isRealtimePerformancePanelEnabled">IsRealtimePerformancePanelEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isSchemaAdvisorEnabled">IsSchemaAdvisorEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList">DataMongodbatlasProjectsResultsLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.regionUsageRestrictions">RegionUsageRestrictions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.teams">Teams</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList">DataMongodbatlasProjectsResultsTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResults">DataMongodbatlasProjectsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterCount`<sup>Required</sup> <a name="ClusterCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.clusterCount"></a>

```csharp
public double ClusterCount { get; }
```

- *Type:* double

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCollectDatabaseSpecificsStatisticsEnabled`<sup>Required</sup> <a name="IsCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isCollectDatabaseSpecificsStatisticsEnabled"></a>

```csharp
public IResolvable IsCollectDatabaseSpecificsStatisticsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDataExplorerEnabled`<sup>Required</sup> <a name="IsDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isDataExplorerEnabled"></a>

```csharp
public IResolvable IsDataExplorerEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsExtendedStorageSizesEnabled`<sup>Required</sup> <a name="IsExtendedStorageSizesEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isExtendedStorageSizesEnabled"></a>

```csharp
public IResolvable IsExtendedStorageSizesEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPerformanceAdvisorEnabled`<sup>Required</sup> <a name="IsPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isPerformanceAdvisorEnabled"></a>

```csharp
public IResolvable IsPerformanceAdvisorEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRealtimePerformancePanelEnabled`<sup>Required</sup> <a name="IsRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isRealtimePerformancePanelEnabled"></a>

```csharp
public IResolvable IsRealtimePerformancePanelEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSchemaAdvisorEnabled`<sup>Required</sup> <a name="IsSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.isSchemaAdvisorEnabled"></a>

```csharp
public IResolvable IsSchemaAdvisorEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.limits"></a>

```csharp
public DataMongodbatlasProjectsResultsLimitsList Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsLimitsList">DataMongodbatlasProjectsResultsLimitsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RegionUsageRestrictions`<sup>Required</sup> <a name="RegionUsageRestrictions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.regionUsageRestrictions"></a>

```csharp
public string RegionUsageRestrictions { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.teams"></a>

```csharp
public DataMongodbatlasProjectsResultsTeamsList Teams { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList">DataMongodbatlasProjectsResultsTeamsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasProjectsResults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResults">DataMongodbatlasProjectsResults</a>

---


### DataMongodbatlasProjectsResultsTeamsList <a name="DataMongodbatlasProjectsResultsTeamsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsTeamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.get"></a>

```csharp
private DataMongodbatlasProjectsResultsTeamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasProjectsResultsTeamsOutputReference <a name="DataMongodbatlasProjectsResultsTeamsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasProjectsResultsTeamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.roleNames">RoleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeams">DataMongodbatlasProjectsResultsTeams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleNames`<sup>Required</sup> <a name="RoleNames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.roleNames"></a>

```csharp
public string[] RoleNames { get; }
```

- *Type:* string[]

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeamsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasProjectsResultsTeams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjects.DataMongodbatlasProjectsResultsTeams">DataMongodbatlasProjectsResultsTeams</a>

---



