# `mongodbatlas_cloud_backup_snapshot_restore_job`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_backup_snapshot_restore_job`](https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job).

# `cloudBackupSnapshotRestoreJob` Submodule <a name="`cloudBackupSnapshotRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSnapshotRestoreJob <a name="CloudBackupSnapshotRestoreJob" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job mongodbatlas_cloud_backup_snapshot_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSnapshotRestoreJob(Construct Scope, string Id, CloudBackupSnapshotRestoreJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig">CloudBackupSnapshotRestoreJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig">CloudBackupSnapshotRestoreJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig">PutDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryType">ResetDeliveryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryTypeConfig">ResetDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDeliveryTypeConfig` <a name="PutDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig"></a>

```csharp
private void PutDeliveryTypeConfig(CloudBackupSnapshotRestoreJobDeliveryTypeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `ResetDeliveryType` <a name="ResetDeliveryType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryType"></a>

```csharp
private void ResetDeliveryType()
```

##### `ResetDeliveryTypeConfig` <a name="ResetDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryTypeConfig"></a>

```csharp
private void ResetDeliveryTypeConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudBackupSnapshotRestoreJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudBackupSnapshotRestoreJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

CloudBackupSnapshotRestoreJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cancelled">Cancelled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfig">DeliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryUrl">DeliveryUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expired">Expired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.finishedAt">FinishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId">SnapshotRestoreJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfigInput">DeliveryTypeConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeInput">DeliveryTypeInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryType">DeliveryType</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Cancelled`<sup>Required</sup> <a name="Cancelled" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cancelled"></a>

```csharp
public IResolvable Cancelled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeliveryTypeConfig`<sup>Required</sup> <a name="DeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfig"></a>

```csharp
public CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference DeliveryTypeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference</a>

---

##### `DeliveryUrl`<sup>Required</sup> <a name="DeliveryUrl" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryUrl"></a>

```csharp
public string[] DeliveryUrl { get; }
```

- *Type:* string[]

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expired"></a>

```csharp
public IResolvable Expired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.finishedAt"></a>

```csharp
public string FinishedAt { get; }
```

- *Type:* string

---

##### `SnapshotRestoreJobId`<sup>Required</sup> <a name="SnapshotRestoreJobId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId"></a>

```csharp
public string SnapshotRestoreJobId { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `DeliveryTypeConfigInput`<sup>Optional</sup> <a name="DeliveryTypeConfigInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfigInput"></a>

```csharp
public CloudBackupSnapshotRestoreJobDeliveryTypeConfig DeliveryTypeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `DeliveryTypeInput`<sup>Optional</sup> <a name="DeliveryTypeInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeliveryTypeInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `DeliveryType`<sup>Required</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryType"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeliveryType { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupSnapshotRestoreJobConfig <a name="CloudBackupSnapshotRestoreJobConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSnapshotRestoreJobConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ProjectId,
    string SnapshotId,
    System.Collections.Generic.IDictionary<string, string> DeliveryType = null,
    CloudBackupSnapshotRestoreJobDeliveryTypeConfig DeliveryTypeConfig = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryType">DeliveryType</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type CloudBackupSnapshotRestoreJob#delivery_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryTypeConfig">DeliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | delivery_type_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}.

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}.

---

##### `DeliveryType`<sup>Optional</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryType"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeliveryType { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type CloudBackupSnapshotRestoreJob#delivery_type}.

---

##### `DeliveryTypeConfig`<sup>Optional</sup> <a name="DeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryTypeConfig"></a>

```csharp
public CloudBackupSnapshotRestoreJobDeliveryTypeConfig DeliveryTypeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

delivery_type_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type_config CloudBackupSnapshotRestoreJob#delivery_type_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudBackupSnapshotRestoreJobDeliveryTypeConfig <a name="CloudBackupSnapshotRestoreJobDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSnapshotRestoreJobDeliveryTypeConfig {
    object Automated = null,
    object Download = null,
    double OplogInc = null,
    double OplogTs = null,
    object PointInTime = null,
    double PointInTimeUtcSeconds = null,
    string TargetClusterName = null,
    string TargetProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.automated">Automated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#automated CloudBackupSnapshotRestoreJob#automated}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.download">Download</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#download CloudBackupSnapshotRestoreJob#download}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc">OplogInc</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_inc CloudBackupSnapshotRestoreJob#oplog_inc}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs">OplogTs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_ts CloudBackupSnapshotRestoreJob#oplog_ts}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime">PointInTime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time CloudBackupSnapshotRestoreJob#point_in_time}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time_utc_seconds CloudBackupSnapshotRestoreJob#point_in_time_utc_seconds}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName">TargetClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_cluster_name CloudBackupSnapshotRestoreJob#target_cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId">TargetProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_project_id CloudBackupSnapshotRestoreJob#target_project_id}. |

---

##### `Automated`<sup>Optional</sup> <a name="Automated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.automated"></a>

```csharp
public object Automated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#automated CloudBackupSnapshotRestoreJob#automated}.

---

##### `Download`<sup>Optional</sup> <a name="Download" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.download"></a>

```csharp
public object Download { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#download CloudBackupSnapshotRestoreJob#download}.

---

##### `OplogInc`<sup>Optional</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc"></a>

```csharp
public double OplogInc { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_inc CloudBackupSnapshotRestoreJob#oplog_inc}.

---

##### `OplogTs`<sup>Optional</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs"></a>

```csharp
public double OplogTs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_ts CloudBackupSnapshotRestoreJob#oplog_ts}.

---

##### `PointInTime`<sup>Optional</sup> <a name="PointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime"></a>

```csharp
public object PointInTime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time CloudBackupSnapshotRestoreJob#point_in_time}.

---

##### `PointInTimeUtcSeconds`<sup>Optional</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds"></a>

```csharp
public double PointInTimeUtcSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time_utc_seconds CloudBackupSnapshotRestoreJob#point_in_time_utc_seconds}.

---

##### `TargetClusterName`<sup>Optional</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName"></a>

```csharp
public string TargetClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_cluster_name CloudBackupSnapshotRestoreJob#target_cluster_name}.

---

##### `TargetProjectId`<sup>Optional</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId"></a>

```csharp
public string TargetProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_project_id CloudBackupSnapshotRestoreJob#target_project_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference <a name="CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated">ResetAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload">ResetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc">ResetOplogInc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs">ResetOplogTs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime">ResetPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds">ResetPointInTimeUtcSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName">ResetTargetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId">ResetTargetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomated` <a name="ResetAutomated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated"></a>

```csharp
private void ResetAutomated()
```

##### `ResetDownload` <a name="ResetDownload" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload"></a>

```csharp
private void ResetDownload()
```

##### `ResetOplogInc` <a name="ResetOplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc"></a>

```csharp
private void ResetOplogInc()
```

##### `ResetOplogTs` <a name="ResetOplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs"></a>

```csharp
private void ResetOplogTs()
```

##### `ResetPointInTime` <a name="ResetPointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime"></a>

```csharp
private void ResetPointInTime()
```

##### `ResetPointInTimeUtcSeconds` <a name="ResetPointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds"></a>

```csharp
private void ResetPointInTimeUtcSeconds()
```

##### `ResetTargetClusterName` <a name="ResetTargetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName"></a>

```csharp
private void ResetTargetClusterName()
```

##### `ResetTargetProjectId` <a name="ResetTargetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId"></a>

```csharp
private void ResetTargetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput">AutomatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput">DownloadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput">OplogIncInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput">OplogTsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput">PointInTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput">PointInTimeUtcSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput">TargetClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput">TargetProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated">Automated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download">Download</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc">OplogInc</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs">OplogTs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime">PointInTime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName">TargetClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId">TargetProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomatedInput`<sup>Optional</sup> <a name="AutomatedInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput"></a>

```csharp
public object AutomatedInput { get; }
```

- *Type:* object

---

##### `DownloadInput`<sup>Optional</sup> <a name="DownloadInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput"></a>

```csharp
public object DownloadInput { get; }
```

- *Type:* object

---

##### `OplogIncInput`<sup>Optional</sup> <a name="OplogIncInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput"></a>

```csharp
public double OplogIncInput { get; }
```

- *Type:* double

---

##### `OplogTsInput`<sup>Optional</sup> <a name="OplogTsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput"></a>

```csharp
public double OplogTsInput { get; }
```

- *Type:* double

---

##### `PointInTimeInput`<sup>Optional</sup> <a name="PointInTimeInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput"></a>

```csharp
public object PointInTimeInput { get; }
```

- *Type:* object

---

##### `PointInTimeUtcSecondsInput`<sup>Optional</sup> <a name="PointInTimeUtcSecondsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput"></a>

```csharp
public double PointInTimeUtcSecondsInput { get; }
```

- *Type:* double

---

##### `TargetClusterNameInput`<sup>Optional</sup> <a name="TargetClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput"></a>

```csharp
public string TargetClusterNameInput { get; }
```

- *Type:* string

---

##### `TargetProjectIdInput`<sup>Optional</sup> <a name="TargetProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput"></a>

```csharp
public string TargetProjectIdInput { get; }
```

- *Type:* string

---

##### `Automated`<sup>Required</sup> <a name="Automated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated"></a>

```csharp
public object Automated { get; }
```

- *Type:* object

---

##### `Download`<sup>Required</sup> <a name="Download" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download"></a>

```csharp
public object Download { get; }
```

- *Type:* object

---

##### `OplogInc`<sup>Required</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc"></a>

```csharp
public double OplogInc { get; }
```

- *Type:* double

---

##### `OplogTs`<sup>Required</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs"></a>

```csharp
public double OplogTs { get; }
```

- *Type:* double

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime"></a>

```csharp
public object PointInTime { get; }
```

- *Type:* object

---

##### `PointInTimeUtcSeconds`<sup>Required</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds"></a>

```csharp
public double PointInTimeUtcSeconds { get; }
```

- *Type:* double

---

##### `TargetClusterName`<sup>Required</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName"></a>

```csharp
public string TargetClusterName { get; }
```

- *Type:* string

---

##### `TargetProjectId`<sup>Required</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId"></a>

```csharp
public string TargetProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue"></a>

```csharp
public CloudBackupSnapshotRestoreJobDeliveryTypeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---



