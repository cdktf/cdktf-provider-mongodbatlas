# `dataMongodbatlasCustomDnsConfigurationClusterAws` Submodule <a name="`dataMongodbatlasCustomDnsConfigurationClusterAws` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCustomDnsConfigurationClusterAws <a name="DataMongodbatlasCustomDnsConfigurationClusterAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/custom_dns_configuration_cluster_aws mongodbatlas_custom_dns_configuration_cluster_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCustomDnsConfigurationClusterAws(Construct Scope, string Id, DataMongodbatlasCustomDnsConfigurationClusterAwsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig">DataMongodbatlasCustomDnsConfigurationClusterAwsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig">DataMongodbatlasCustomDnsConfigurationClusterAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCustomDnsConfigurationClusterAws resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCustomDnsConfigurationClusterAws.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCustomDnsConfigurationClusterAws.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCustomDnsConfigurationClusterAws.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCustomDnsConfigurationClusterAws.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataMongodbatlasCustomDnsConfigurationClusterAws resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasCustomDnsConfigurationClusterAws to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasCustomDnsConfigurationClusterAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/custom_dns_configuration_cluster_aws#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCustomDnsConfigurationClusterAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAws.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCustomDnsConfigurationClusterAwsConfig <a name="DataMongodbatlasCustomDnsConfigurationClusterAwsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCustomDnsConfigurationClusterAwsConfig {
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/custom_dns_configuration_cluster_aws#project_id DataMongodbatlasCustomDnsConfigurationClusterAws#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/custom_dns_configuration_cluster_aws#id DataMongodbatlasCustomDnsConfigurationClusterAws#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/custom_dns_configuration_cluster_aws#project_id DataMongodbatlasCustomDnsConfigurationClusterAws#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCustomDnsConfigurationClusterAws.DataMongodbatlasCustomDnsConfigurationClusterAwsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/custom_dns_configuration_cluster_aws#id DataMongodbatlasCustomDnsConfigurationClusterAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



