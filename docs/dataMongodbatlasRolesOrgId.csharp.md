# `dataMongodbatlasRolesOrgId` Submodule <a name="`dataMongodbatlasRolesOrgId` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasRolesOrgId <a name="DataMongodbatlasRolesOrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/roles_org_id mongodbatlas_roles_org_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasRolesOrgId(Construct Scope, string Id, DataMongodbatlasRolesOrgIdConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig">DataMongodbatlasRolesOrgIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig">DataMongodbatlasRolesOrgIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasRolesOrgId resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasRolesOrgId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasRolesOrgId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasRolesOrgId.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasRolesOrgId.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasRolesOrgId resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasRolesOrgId to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasRolesOrgId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/roles_org_id#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasRolesOrgId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasRolesOrgIdConfig <a name="DataMongodbatlasRolesOrgIdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasRolesOrgIdConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/roles_org_id#id DataMongodbatlasRolesOrgId#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasRolesOrgId.DataMongodbatlasRolesOrgIdConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/roles_org_id#id DataMongodbatlasRolesOrgId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



