# `dataMongodbatlasMongodbEmployeeAccessGrant` Submodule <a name="`dataMongodbatlasMongodbEmployeeAccessGrant` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasMongodbEmployeeAccessGrant <a name="DataMongodbatlasMongodbEmployeeAccessGrant" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/mongodb_employee_access_grant mongodbatlas_mongodb_employee_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasMongodbEmployeeAccessGrant(Construct Scope, string Id, DataMongodbatlasMongodbEmployeeAccessGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig">DataMongodbatlasMongodbEmployeeAccessGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig">DataMongodbatlasMongodbEmployeeAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasMongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasMongodbEmployeeAccessGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasMongodbEmployeeAccessGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasMongodbEmployeeAccessGrant.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasMongodbEmployeeAccessGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasMongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasMongodbEmployeeAccessGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasMongodbEmployeeAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/mongodb_employee_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasMongodbEmployeeAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.grantType">GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.grantType"></a>

```csharp
public string GrantType { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasMongodbEmployeeAccessGrantConfig <a name="DataMongodbatlasMongodbEmployeeAccessGrantConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasMongodbEmployeeAccessGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Human-readable label that identifies this cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Human-readable label that identifies this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/mongodb_employee_access_grant#cluster_name DataMongodbatlasMongodbEmployeeAccessGrant#cluster_name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/mongodb_employee_access_grant#project_id DataMongodbatlasMongodbEmployeeAccessGrant#project_id}

---



