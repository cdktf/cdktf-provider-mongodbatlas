# `dataMongodbatlasBackupCompliancePolicy` Submodule <a name="`dataMongodbatlasBackupCompliancePolicy` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasBackupCompliancePolicy <a name="DataMongodbatlasBackupCompliancePolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/backup_compliance_policy mongodbatlas_backup_compliance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicy(Construct Scope, string Id, DataMongodbatlasBackupCompliancePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig">DataMongodbatlasBackupCompliancePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig">DataMongodbatlasBackupCompliancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasBackupCompliancePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasBackupCompliancePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasBackupCompliancePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasBackupCompliancePolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasBackupCompliancePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasBackupCompliancePolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasBackupCompliancePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasBackupCompliancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/backup_compliance_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasBackupCompliancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedEmail">AuthorizedEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserFirstName">AuthorizedUserFirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserLastName">AuthorizedUserLastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.copyProtectionEnabled">CopyProtectionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.encryptionAtRestEnabled">EncryptionAtRestEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItem">OnDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.pitEnabled">PitEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList">DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList">DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemYearly">PolicyItemYearly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedDate">UpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedUser">UpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthorizedEmail`<sup>Required</sup> <a name="AuthorizedEmail" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedEmail"></a>

```csharp
public string AuthorizedEmail { get; }
```

- *Type:* string

---

##### `AuthorizedUserFirstName`<sup>Required</sup> <a name="AuthorizedUserFirstName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserFirstName"></a>

```csharp
public string AuthorizedUserFirstName { get; }
```

- *Type:* string

---

##### `AuthorizedUserLastName`<sup>Required</sup> <a name="AuthorizedUserLastName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserLastName"></a>

```csharp
public string AuthorizedUserLastName { get; }
```

- *Type:* string

---

##### `CopyProtectionEnabled`<sup>Required</sup> <a name="CopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.copyProtectionEnabled"></a>

```csharp
public IResolvable CopyProtectionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EncryptionAtRestEnabled`<sup>Required</sup> <a name="EncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.encryptionAtRestEnabled"></a>

```csharp
public IResolvable EncryptionAtRestEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OnDemandPolicyItem`<sup>Required</sup> <a name="OnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItem"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList OnDemandPolicyItem { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList</a>

---

##### `PitEnabled`<sup>Required</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.pitEnabled"></a>

```csharp
public IResolvable PitEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PolicyItemDaily`<sup>Required</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDaily"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList PolicyItemDaily { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList">DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList</a>

---

##### `PolicyItemHourly`<sup>Required</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourly"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList PolicyItemHourly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList</a>

---

##### `PolicyItemMonthly`<sup>Required</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthly"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList PolicyItemMonthly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList</a>

---

##### `PolicyItemWeekly`<sup>Required</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeekly"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList PolicyItemWeekly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList">DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList</a>

---

##### `PolicyItemYearly`<sup>Required</sup> <a name="PolicyItemYearly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemYearly"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList PolicyItemYearly { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList</a>

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedDate"></a>

```csharp
public string UpdatedDate { get; }
```

- *Type:* string

---

##### `UpdatedUser`<sup>Required</sup> <a name="UpdatedUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedUser"></a>

```csharp
public string UpdatedUser { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasBackupCompliancePolicyConfig <a name="DataMongodbatlasBackupCompliancePolicyConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem {

};
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemDaily <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemDaily {

};
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemHourly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemHourly {

};
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly {

};
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly {

};
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemYearly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemYearly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemYearly {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.get"></a>

```csharp
private DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.get"></a>

```csharp
private DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.get"></a>

```csharp
private DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemHourly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get"></a>

```csharp
private DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get"></a>

```csharp
private DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.get"></a>

```csharp
private DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly">DataMongodbatlasBackupCompliancePolicyPolicyItemYearly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasBackupCompliancePolicyPolicyItemYearly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly">DataMongodbatlasBackupCompliancePolicyPolicyItemYearly</a>

---



