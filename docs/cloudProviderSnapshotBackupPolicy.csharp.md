# `mongodbatlas_cloud_provider_snapshot_backup_policy`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_provider_snapshot_backup_policy`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy).

# `cloudProviderSnapshotBackupPolicy` Submodule <a name="`cloudProviderSnapshotBackupPolicy` Submodule" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderSnapshotBackupPolicy <a name="CloudProviderSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicy(Construct Scope, string Id, CloudProviderSnapshotBackupPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig">CloudProviderSnapshotBackupPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig">CloudProviderSnapshotBackupPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceHourOfDay">ResetReferenceHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceMinuteOfHour">ResetReferenceMinuteOfHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetRestoreWindowDays">ResetRestoreWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetUpdateSnapshots">ResetUpdateSnapshots</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPolicies` <a name="PutPolicies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies"></a>

```csharp
private void PutPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReferenceHourOfDay` <a name="ResetReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceHourOfDay"></a>

```csharp
private void ResetReferenceHourOfDay()
```

##### `ResetReferenceMinuteOfHour` <a name="ResetReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceMinuteOfHour"></a>

```csharp
private void ResetReferenceMinuteOfHour()
```

##### `ResetRestoreWindowDays` <a name="ResetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetRestoreWindowDays"></a>

```csharp
private void ResetRestoreWindowDays()
```

##### `ResetUpdateSnapshots` <a name="ResetUpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetUpdateSnapshots"></a>

```csharp
private void ResetUpdateSnapshots()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudProviderSnapshotBackupPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudProviderSnapshotBackupPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudProviderSnapshotBackupPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.nextSnapshot">NextSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList">CloudProviderSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policiesInput">PoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDayInput">ReferenceHourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHourInput">ReferenceMinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDaysInput">RestoreWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshotsInput">UpdateSnapshotsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDay">ReferenceHourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour">ReferenceMinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshots">UpdateSnapshots</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `NextSnapshot`<sup>Required</sup> <a name="NextSnapshot" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.nextSnapshot"></a>

```csharp
public string NextSnapshot { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policies"></a>

```csharp
public CloudProviderSnapshotBackupPolicyPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList">CloudProviderSnapshotBackupPolicyPoliciesList</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policiesInput"></a>

```csharp
public object PoliciesInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ReferenceHourOfDayInput`<sup>Optional</sup> <a name="ReferenceHourOfDayInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDayInput"></a>

```csharp
public double ReferenceHourOfDayInput { get; }
```

- *Type:* double

---

##### `ReferenceMinuteOfHourInput`<sup>Optional</sup> <a name="ReferenceMinuteOfHourInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHourInput"></a>

```csharp
public double ReferenceMinuteOfHourInput { get; }
```

- *Type:* double

---

##### `RestoreWindowDaysInput`<sup>Optional</sup> <a name="RestoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDaysInput"></a>

```csharp
public double RestoreWindowDaysInput { get; }
```

- *Type:* double

---

##### `UpdateSnapshotsInput`<sup>Optional</sup> <a name="UpdateSnapshotsInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshotsInput"></a>

```csharp
public object UpdateSnapshotsInput { get; }
```

- *Type:* object

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ReferenceHourOfDay`<sup>Required</sup> <a name="ReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDay"></a>

```csharp
public double ReferenceHourOfDay { get; }
```

- *Type:* double

---

##### `ReferenceMinuteOfHour`<sup>Required</sup> <a name="ReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour"></a>

```csharp
public double ReferenceMinuteOfHour { get; }
```

- *Type:* double

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; }
```

- *Type:* double

---

##### `UpdateSnapshots`<sup>Required</sup> <a name="UpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshots"></a>

```csharp
public object UpdateSnapshots { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderSnapshotBackupPolicyConfig <a name="CloudProviderSnapshotBackupPolicyConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    object Policies,
    string ProjectId,
    string Id = null,
    double ReferenceHourOfDay = null,
    double ReferenceMinuteOfHour = null,
    double RestoreWindowDays = null,
    object UpdateSnapshots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.policies">Policies</a></code> | <code>object</code> | policies block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceHourOfDay">ReferenceHourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceMinuteOfHour">ReferenceMinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.updateSnapshots">UpdateSnapshots</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.policies"></a>

```csharp
public object Policies { get; set; }
```

- *Type:* object

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#policies CloudProviderSnapshotBackupPolicy#policies}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReferenceHourOfDay`<sup>Optional</sup> <a name="ReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceHourOfDay"></a>

```csharp
public double ReferenceHourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}.

---

##### `ReferenceMinuteOfHour`<sup>Optional</sup> <a name="ReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceMinuteOfHour"></a>

```csharp
public double ReferenceMinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}.

---

##### `RestoreWindowDays`<sup>Optional</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.restoreWindowDays"></a>

```csharp
public double RestoreWindowDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}.

---

##### `UpdateSnapshots`<sup>Optional</sup> <a name="UpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.updateSnapshots"></a>

```csharp
public object UpdateSnapshots { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}.

---

### CloudProviderSnapshotBackupPolicyPolicies <a name="CloudProviderSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicyPolicies {
    string Id,
    object PolicyItem
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.policyItem">PolicyItem</a></code> | <code>object</code> | policy_item block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyItem`<sup>Required</sup> <a name="PolicyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.policyItem"></a>

```csharp
public object PolicyItem { get; set; }
```

- *Type:* object

policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#policy_item CloudProviderSnapshotBackupPolicy#policy_item}

---

### CloudProviderSnapshotBackupPolicyPoliciesPolicyItem <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicyPoliciesPolicyItem {
    double FrequencyInterval,
    string FrequencyType,
    string Id,
    string RetentionUnit,
    double RetentionValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_interval CloudProviderSnapshotBackupPolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyType">FrequencyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_type CloudProviderSnapshotBackupPolicy#frequency_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_unit CloudProviderSnapshotBackupPolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionValue">RetentionValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_value CloudProviderSnapshotBackupPolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_interval CloudProviderSnapshotBackupPolicy#frequency_interval}.

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyType"></a>

```csharp
public string FrequencyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_type CloudProviderSnapshotBackupPolicy#frequency_type}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_unit CloudProviderSnapshotBackupPolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionValue"></a>

```csharp
public double RetentionValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_value CloudProviderSnapshotBackupPolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudProviderSnapshotBackupPolicyPoliciesList <a name="CloudProviderSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicyPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get"></a>

```csharp
private CloudProviderSnapshotBackupPolicyPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudProviderSnapshotBackupPolicyPoliciesOutputReference <a name="CloudProviderSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicyPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem">PutPolicyItem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicyItem` <a name="PutPolicyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem"></a>

```csharp
private void PutPolicyItem(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">PolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItemInput">PolicyItemInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyItem`<sup>Required</sup> <a name="PolicyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```csharp
public CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList PolicyItem { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyItemInput`<sup>Optional</sup> <a name="PolicyItemInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItemInput"></a>

```csharp
public object PolicyItemInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```csharp
private CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyTypeInput">FrequencyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyIntervalInput"></a>

```csharp
public double FrequencyIntervalInput { get; }
```

- *Type:* double

---

##### `FrequencyTypeInput`<sup>Optional</sup> <a name="FrequencyTypeInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyTypeInput"></a>

```csharp
public string FrequencyTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnitInput"></a>

```csharp
public string RetentionUnitInput { get; }
```

- *Type:* string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValueInput"></a>

```csharp
public double RetentionValueInput { get; }
```

- *Type:* double

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```csharp
public string FrequencyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```csharp
public double RetentionValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



