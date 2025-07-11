# `dataMongodbatlasControlPlaneIpAddresses` Submodule <a name="`dataMongodbatlasControlPlaneIpAddresses` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasControlPlaneIpAddresses <a name="DataMongodbatlasControlPlaneIpAddresses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/control_plane_ip_addresses mongodbatlas_control_plane_ip_addresses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasControlPlaneIpAddresses(Construct Scope, string Id, DataMongodbatlasControlPlaneIpAddressesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig">DataMongodbatlasControlPlaneIpAddressesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig">DataMongodbatlasControlPlaneIpAddressesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasControlPlaneIpAddresses.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasControlPlaneIpAddresses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasControlPlaneIpAddresses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasControlPlaneIpAddresses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasControlPlaneIpAddresses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasControlPlaneIpAddresses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/control_plane_ip_addresses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasControlPlaneIpAddresses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound">Inbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Inbound`<sup>Required</sup> <a name="Inbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound"></a>

```csharp
public DataMongodbatlasControlPlaneIpAddressesInboundOutputReference Inbound { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a>

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound"></a>

```csharp
public DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference Outbound { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasControlPlaneIpAddressesConfig <a name="DataMongodbatlasControlPlaneIpAddressesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasControlPlaneIpAddressesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

### DataMongodbatlasControlPlaneIpAddressesInbound <a name="DataMongodbatlasControlPlaneIpAddressesInbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasControlPlaneIpAddressesInbound {

};
```


### DataMongodbatlasControlPlaneIpAddressesOutbound <a name="DataMongodbatlasControlPlaneIpAddressesOutbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasControlPlaneIpAddressesOutbound {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasControlPlaneIpAddressesInboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesInboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasControlPlaneIpAddressesInboundOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws">Aws</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure">Azure</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp">Gcp</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws"></a>

```csharp
public StringListMap Aws { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure"></a>

```csharp
public StringListMap Azure { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp"></a>

```csharp
public StringListMap Gcp { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasControlPlaneIpAddressesInbound InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a>

---


### DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws">Aws</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure">Azure</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp">Gcp</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws"></a>

```csharp
public StringListMap Aws { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure"></a>

```csharp
public StringListMap Azure { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp"></a>

```csharp
public StringListMap Gcp { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasControlPlaneIpAddressesOutbound InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a>

---



