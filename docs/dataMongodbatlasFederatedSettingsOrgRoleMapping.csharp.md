# `dataMongodbatlasFederatedSettingsOrgRoleMapping` Submodule <a name="`dataMongodbatlasFederatedSettingsOrgRoleMapping` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMapping <a name="DataMongodbatlasFederatedSettingsOrgRoleMapping" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping mongodbatlas_federated_settings_org_role_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasFederatedSettingsOrgRoleMapping(Construct Scope, string Id, DataMongodbatlasFederatedSettingsOrgRoleMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig">DataMongodbatlasFederatedSettingsOrgRoleMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig">DataMongodbatlasFederatedSettingsOrgRoleMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasFederatedSettingsOrgRoleMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasFederatedSettingsOrgRoleMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasFederatedSettingsOrgRoleMapping.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasFederatedSettingsOrgRoleMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasFederatedSettingsOrgRoleMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasFederatedSettingsOrgRoleMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedSettingsOrgRoleMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.externalGroupName">ExternalGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleAssignments">RoleAssignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsIdInput">FederationSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingIdInput">RoleMappingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsId">FederationSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingId">RoleMappingId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalGroupName`<sup>Required</sup> <a name="ExternalGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.externalGroupName"></a>

```csharp
public string ExternalGroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleAssignments`<sup>Required</sup> <a name="RoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleAssignments"></a>

```csharp
public DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList RoleAssignments { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList</a>

---

##### `FederationSettingsIdInput`<sup>Optional</sup> <a name="FederationSettingsIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsIdInput"></a>

```csharp
public string FederationSettingsIdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `RoleMappingIdInput`<sup>Optional</sup> <a name="RoleMappingIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingIdInput"></a>

```csharp
public string RoleMappingIdInput { get; }
```

- *Type:* string

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsId"></a>

```csharp
public string FederationSettingsId { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `RoleMappingId`<sup>Required</sup> <a name="RoleMappingId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingId"></a>

```csharp
public string RoleMappingId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingConfig <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasFederatedSettingsOrgRoleMappingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FederationSettingsId,
    string OrgId,
    string RoleMappingId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.federationSettingsId">FederationSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.orgId">OrgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.roleMappingId">RoleMappingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.federationSettingsId"></a>

```csharp
public string FederationSettingsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}.

---

##### `RoleMappingId`<sup>Required</sup> <a name="RoleMappingId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.roleMappingId"></a>

```csharp
public string RoleMappingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}.

---

### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get"></a>

```csharp
private DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments</a>

---



