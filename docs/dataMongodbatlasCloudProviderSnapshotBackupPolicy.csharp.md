# `data_mongodbatlas_cloud_provider_snapshot_backup_policy`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_provider_snapshot_backup_policy`](https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy).

# `dataMongodbatlasCloudProviderSnapshotBackupPolicy` Submodule <a name="`dataMongodbatlasCloudProviderSnapshotBackupPolicy` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicy <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicy(Construct Scope, string Id, DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig">DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig">DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudProviderSnapshotBackupPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudProviderSnapshotBackupPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasCloudProviderSnapshotBackupPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.nextSnapshot">NextSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceHourOfDay">ReferenceHourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour">ReferenceMinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.updateSnapshots">UpdateSnapshots</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `NextSnapshot`<sup>Required</sup> <a name="NextSnapshot" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.nextSnapshot"></a>

```csharp
public string NextSnapshot { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.policies"></a>

```csharp
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList</a>

---

##### `ReferenceHourOfDay`<sup>Required</sup> <a name="ReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceHourOfDay"></a>

```csharp
public double ReferenceHourOfDay { get; }
```

- *Type:* double

---

##### `ReferenceMinuteOfHour`<sup>Required</sup> <a name="ReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour"></a>

```csharp
public double ReferenceMinuteOfHour { get; }
```

- *Type:* double

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; }
```

- *Type:* double

---

##### `UpdateSnapshots`<sup>Required</sup> <a name="UpdateSnapshots" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.updateSnapshots"></a>

```csharp
public IResolvable UpdateSnapshots { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ProjectId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies {

};
```


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get"></a>

```csharp
private DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">PolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies">DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyItem`<sup>Required</sup> <a name="PolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```csharp
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList PolicyItem { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies">DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies</a>

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```csharp
private DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```csharp
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>

---



