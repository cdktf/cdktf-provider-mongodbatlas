# `dataMongodbatlasX509AuthenticationDatabaseUser` Submodule <a name="`dataMongodbatlasX509AuthenticationDatabaseUser` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUser <a name="DataMongodbatlasX509AuthenticationDatabaseUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user mongodbatlas_x509_authentication_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasX509AuthenticationDatabaseUser(Construct Scope, string Id, DataMongodbatlasX509AuthenticationDatabaseUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig">DataMongodbatlasX509AuthenticationDatabaseUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig">DataMongodbatlasX509AuthenticationDatabaseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasX509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasX509AuthenticationDatabaseUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasX509AuthenticationDatabaseUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasX509AuthenticationDatabaseUser.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasX509AuthenticationDatabaseUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasX509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasX509AuthenticationDatabaseUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasX509AuthenticationDatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasX509AuthenticationDatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates">Certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas">CustomerX509Cas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates"></a>

```csharp
public DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a>

---

##### `CustomerX509Cas`<sup>Required</sup> <a name="CustomerX509Cas" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas"></a>

```csharp
public string CustomerX509Cas { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificates <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasX509AuthenticationDatabaseUserCertificates {

};
```


### DataMongodbatlasX509AuthenticationDatabaseUserConfig <a name="DataMongodbatlasX509AuthenticationDatabaseUserConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasX509AuthenticationDatabaseUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    string Id = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get"></a>

```csharp
private DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter">NotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter"></a>

```csharp
public string NotAfter { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasX509AuthenticationDatabaseUserCertificates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a>

---



