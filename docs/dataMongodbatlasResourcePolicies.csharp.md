# `dataMongodbatlasResourcePolicies` Submodule <a name="`dataMongodbatlasResourcePolicies` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasResourcePolicies <a name="DataMongodbatlasResourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/resource_policies mongodbatlas_resource_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePolicies(Construct Scope, string Id, DataMongodbatlasResourcePoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig">DataMongodbatlasResourcePoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig">DataMongodbatlasResourcePoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasResourcePolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasResourcePolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasResourcePolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasResourcePolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasResourcePolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasResourcePolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasResourcePolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasResourcePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/resource_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasResourcePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.resourcePolicies">ResourcePolicies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList">DataMongodbatlasResourcePoliciesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.resourcePolicies"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePoliciesList ResourcePolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesList</a>

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.results"></a>

```csharp
public DataMongodbatlasResourcePoliciesResultsList Results { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList">DataMongodbatlasResourcePoliciesResultsList</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasResourcePoliciesConfig <a name="DataMongodbatlasResourcePoliciesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OrgId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.orgId">OrgId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies the organization that contains your projects.

Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/resource_policies#org_id DataMongodbatlasResourcePolicies#org_id}

---

### DataMongodbatlasResourcePoliciesResourcePolicies <a name="DataMongodbatlasResourcePoliciesResourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePolicies {

};
```


### DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser <a name="DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser {

};
```


### DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser <a name="DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser {

};
```


### DataMongodbatlasResourcePoliciesResourcePoliciesPolicies <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesPolicies {

};
```


### DataMongodbatlasResourcePoliciesResults <a name="DataMongodbatlasResourcePoliciesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResults {

};
```


### DataMongodbatlasResourcePoliciesResultsCreatedByUser <a name="DataMongodbatlasResourcePoliciesResultsCreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsCreatedByUser {

};
```


### DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser <a name="DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser {

};
```


### DataMongodbatlasResourcePoliciesResultsPolicies <a name="DataMongodbatlasResourcePoliciesResultsPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsPolicies {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesList <a name="DataMongodbatlasResourcePoliciesResourcePoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get"></a>

```csharp
private DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdByUser">CreatedByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedByUser">LastUpdatedByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies">DataMongodbatlasResourcePoliciesResourcePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedByUser`<sup>Required</sup> <a name="CreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdByUser"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference CreatedByUser { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedByUser`<sup>Required</sup> <a name="LastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedByUser"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference LastUpdatedByUser { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference</a>

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.policies"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies">DataMongodbatlasResourcePoliciesResourcePolicies</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get"></a>

```csharp
private DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies">DataMongodbatlasResourcePoliciesResourcePoliciesPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResourcePoliciesPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies">DataMongodbatlasResourcePoliciesResourcePoliciesPolicies</a>

---


### DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser">DataMongodbatlasResourcePoliciesResultsCreatedByUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResultsCreatedByUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser">DataMongodbatlasResourcePoliciesResultsCreatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResultsList <a name="DataMongodbatlasResourcePoliciesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get"></a>

```csharp
private DataMongodbatlasResourcePoliciesResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResultsOutputReference <a name="DataMongodbatlasResourcePoliciesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdByUser">CreatedByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedByUser">LastUpdatedByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList">DataMongodbatlasResourcePoliciesResultsPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults">DataMongodbatlasResourcePoliciesResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedByUser`<sup>Required</sup> <a name="CreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdByUser"></a>

```csharp
public DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference CreatedByUser { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedByUser`<sup>Required</sup> <a name="LastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedByUser"></a>

```csharp
public DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference LastUpdatedByUser { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference</a>

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.policies"></a>

```csharp
public DataMongodbatlasResourcePoliciesResultsPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList">DataMongodbatlasResourcePoliciesResultsPoliciesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults">DataMongodbatlasResourcePoliciesResults</a>

---


### DataMongodbatlasResourcePoliciesResultsPoliciesList <a name="DataMongodbatlasResourcePoliciesResultsPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get"></a>

```csharp
private DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies">DataMongodbatlasResourcePoliciesResultsPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasResourcePoliciesResultsPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies">DataMongodbatlasResourcePoliciesResultsPolicies</a>

---



