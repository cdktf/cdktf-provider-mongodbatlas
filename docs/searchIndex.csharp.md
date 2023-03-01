# `searchIndex` Submodule <a name="`searchIndex` Submodule" id="@cdktf/provider-mongodbatlas.searchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchIndex <a name="SearchIndex" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index mongodbatlas_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchIndex(Construct Scope, string Id, SearchIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig">SearchIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig">SearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putSynonyms">PutSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetAnalyzers">ResetAnalyzers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsDynamic">ResetMappingsDynamic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsFields">ResetMappingsFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSearchAnalyzer">ResetSearchAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSynonyms` <a name="PutSynonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putSynonyms"></a>

```csharp
private void PutSynonyms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putSynonyms.parameter.value"></a>

- *Type:* object

---

##### `ResetAnalyzers` <a name="ResetAnalyzers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetAnalyzers"></a>

```csharp
private void ResetAnalyzers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMappingsDynamic` <a name="ResetMappingsDynamic" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsDynamic"></a>

```csharp
private void ResetMappingsDynamic()
```

##### `ResetMappingsFields` <a name="ResetMappingsFields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsFields"></a>

```csharp
private void ResetMappingsFields()
```

##### `ResetSearchAnalyzer` <a name="ResetSearchAnalyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSearchAnalyzer"></a>

```csharp
private void ResetSearchAnalyzer()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

SearchIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

SearchIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

SearchIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonyms">Synonyms</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList">SearchIndexSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzerInput">AnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzersInput">AnalyzersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionNameInput">CollectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamicInput">MappingsDynamicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFieldsInput">MappingsFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzerInput">SearchAnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonymsInput">SynonymsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzers">Analyzers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionName">CollectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamic">MappingsDynamic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFields">MappingsFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzer">SearchAnalyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonyms"></a>

```csharp
public SearchIndexSynonymsList Synonyms { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList">SearchIndexSynonymsList</a>

---

##### `AnalyzerInput`<sup>Optional</sup> <a name="AnalyzerInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzerInput"></a>

```csharp
public string AnalyzerInput { get; }
```

- *Type:* string

---

##### `AnalyzersInput`<sup>Optional</sup> <a name="AnalyzersInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzersInput"></a>

```csharp
public string AnalyzersInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CollectionNameInput`<sup>Optional</sup> <a name="CollectionNameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionNameInput"></a>

```csharp
public string CollectionNameInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MappingsDynamicInput`<sup>Optional</sup> <a name="MappingsDynamicInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamicInput"></a>

```csharp
public object MappingsDynamicInput { get; }
```

- *Type:* object

---

##### `MappingsFieldsInput`<sup>Optional</sup> <a name="MappingsFieldsInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFieldsInput"></a>

```csharp
public string MappingsFieldsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SearchAnalyzerInput`<sup>Optional</sup> <a name="SearchAnalyzerInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzerInput"></a>

```csharp
public string SearchAnalyzerInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonymsInput"></a>

```csharp
public object SynonymsInput { get; }
```

- *Type:* object

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `Analyzers`<sup>Required</sup> <a name="Analyzers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzers"></a>

```csharp
public string Analyzers { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionName"></a>

```csharp
public string CollectionName { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MappingsDynamic`<sup>Required</sup> <a name="MappingsDynamic" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamic"></a>

```csharp
public object MappingsDynamic { get; }
```

- *Type:* object

---

##### `MappingsFields`<sup>Required</sup> <a name="MappingsFields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFields"></a>

```csharp
public string MappingsFields { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SearchAnalyzer`<sup>Required</sup> <a name="SearchAnalyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzer"></a>

```csharp
public string SearchAnalyzer { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchIndexConfig <a name="SearchIndexConfig" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchIndexConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Analyzer,
    string ClusterName,
    string CollectionName,
    string Database,
    string Name,
    string ProjectId,
    string Analyzers = null,
    string Id = null,
    object MappingsDynamic = null,
    string MappingsFields = null,
    string SearchAnalyzer = null,
    string Status = null,
    object Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzer">Analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#analyzer SearchIndex#analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#cluster_name SearchIndex#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.collectionName">CollectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#collection_name SearchIndex#collection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#database SearchIndex#database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#name SearchIndex#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#project_id SearchIndex#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzers">Analyzers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#analyzers SearchIndex#analyzers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#id SearchIndex#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsDynamic">MappingsDynamic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#mappings_dynamic SearchIndex#mappings_dynamic}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsFields">MappingsFields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#mappings_fields SearchIndex#mappings_fields}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.searchAnalyzer">SearchAnalyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#search_analyzer SearchIndex#search_analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#status SearchIndex#status}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.synonyms">Synonyms</a></code> | <code>object</code> | synonyms block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzer"></a>

```csharp
public string Analyzer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#analyzer SearchIndex#analyzer}.

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#cluster_name SearchIndex#cluster_name}.

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.collectionName"></a>

```csharp
public string CollectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#collection_name SearchIndex#collection_name}.

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#database SearchIndex#database}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#name SearchIndex#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#project_id SearchIndex#project_id}.

---

##### `Analyzers`<sup>Optional</sup> <a name="Analyzers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzers"></a>

```csharp
public string Analyzers { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#analyzers SearchIndex#analyzers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#id SearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MappingsDynamic`<sup>Optional</sup> <a name="MappingsDynamic" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsDynamic"></a>

```csharp
public object MappingsDynamic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#mappings_dynamic SearchIndex#mappings_dynamic}.

---

##### `MappingsFields`<sup>Optional</sup> <a name="MappingsFields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsFields"></a>

```csharp
public string MappingsFields { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#mappings_fields SearchIndex#mappings_fields}.

---

##### `SearchAnalyzer`<sup>Optional</sup> <a name="SearchAnalyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.searchAnalyzer"></a>

```csharp
public string SearchAnalyzer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#search_analyzer SearchIndex#search_analyzer}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#status SearchIndex#status}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.synonyms"></a>

```csharp
public object Synonyms { get; set; }
```

- *Type:* object

synonyms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#synonyms SearchIndex#synonyms}

---

### SearchIndexSynonyms <a name="SearchIndexSynonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchIndexSynonyms {
    string Analyzer,
    string Name,
    string SourceCollection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.analyzer">Analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#analyzer SearchIndex#analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#name SearchIndex#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.sourceCollection">SourceCollection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#source_collection SearchIndex#source_collection}. |

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.analyzer"></a>

```csharp
public string Analyzer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#analyzer SearchIndex#analyzer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#name SearchIndex#name}.

---

##### `SourceCollection`<sup>Required</sup> <a name="SourceCollection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.sourceCollection"></a>

```csharp
public string SourceCollection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/search_index#source_collection SearchIndex#source_collection}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchIndexSynonymsList <a name="SearchIndexSynonymsList" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchIndexSynonymsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.get"></a>

```csharp
private SearchIndexSynonymsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SearchIndexSynonymsOutputReference <a name="SearchIndexSynonymsOutputReference" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchIndexSynonymsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzerInput">AnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollectionInput">SourceCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollection">SourceCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalyzerInput`<sup>Optional</sup> <a name="AnalyzerInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzerInput"></a>

```csharp
public string AnalyzerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceCollectionInput`<sup>Optional</sup> <a name="SourceCollectionInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollectionInput"></a>

```csharp
public string SourceCollectionInput { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceCollection`<sup>Required</sup> <a name="SourceCollection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollection"></a>

```csharp
public string SourceCollection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


