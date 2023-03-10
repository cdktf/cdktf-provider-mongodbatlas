# `cloudBackupSnapshotRestoreJob` Submodule <a name="`cloudBackupSnapshotRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSnapshotRestoreJob <a name="CloudBackupSnapshotRestoreJob" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job mongodbatlas_cloud_backup_snapshot_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_restore_job.CloudBackupSnapshotRestoreJob;

CloudBackupSnapshotRestoreJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
    .snapshotId(java.lang.String)
//  .deliveryType(java.util.Map<java.lang.String, java.lang.String>)
//  .deliveryTypeConfig(CloudBackupSnapshotRestoreJobDeliveryTypeConfig)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.deliveryType">deliveryType</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type CloudBackupSnapshotRestoreJob#delivery_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.deliveryTypeConfig">deliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | delivery_type_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}.

---

##### `deliveryType`<sup>Optional</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.deliveryType"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type CloudBackupSnapshotRestoreJob#delivery_type}.

---

##### `deliveryTypeConfig`<sup>Optional</sup> <a name="deliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.deliveryTypeConfig"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

delivery_type_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type_config CloudBackupSnapshotRestoreJob#delivery_type_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig">putDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryType">resetDeliveryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryTypeConfig">resetDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDeliveryTypeConfig` <a name="putDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig"></a>

```java
public void putDeliveryTypeConfig(CloudBackupSnapshotRestoreJobDeliveryTypeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `resetDeliveryType` <a name="resetDeliveryType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryType"></a>

```java
public void resetDeliveryType()
```

##### `resetDeliveryTypeConfig` <a name="resetDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryTypeConfig"></a>

```java
public void resetDeliveryTypeConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_restore_job.CloudBackupSnapshotRestoreJob;

CloudBackupSnapshotRestoreJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_restore_job.CloudBackupSnapshotRestoreJob;

CloudBackupSnapshotRestoreJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_restore_job.CloudBackupSnapshotRestoreJob;

CloudBackupSnapshotRestoreJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cancelled">cancelled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfig">deliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryUrl">deliveryUrl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expired">expired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.finishedAt">finishedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId">snapshotRestoreJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfigInput">deliveryTypeConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeInput">deliveryTypeInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryType">deliveryType</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cancelled`<sup>Required</sup> <a name="cancelled" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cancelled"></a>

```java
public IResolvable getCancelled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deliveryTypeConfig`<sup>Required</sup> <a name="deliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfig"></a>

```java
public CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference getDeliveryTypeConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference</a>

---

##### `deliveryUrl`<sup>Required</sup> <a name="deliveryUrl" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryUrl"></a>

```java
public java.util.List<java.lang.String> getDeliveryUrl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expired`<sup>Required</sup> <a name="expired" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expired"></a>

```java
public IResolvable getExpired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.finishedAt"></a>

```java
public java.lang.String getFinishedAt();
```

- *Type:* java.lang.String

---

##### `snapshotRestoreJobId`<sup>Required</sup> <a name="snapshotRestoreJobId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId"></a>

```java
public java.lang.String getSnapshotRestoreJobId();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `deliveryTypeConfigInput`<sup>Optional</sup> <a name="deliveryTypeConfigInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfigInput"></a>

```java
public CloudBackupSnapshotRestoreJobDeliveryTypeConfig getDeliveryTypeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `deliveryTypeInput`<sup>Optional</sup> <a name="deliveryTypeInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeliveryTypeInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `deliveryType`<sup>Required</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryType"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeliveryType();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupSnapshotRestoreJobConfig <a name="CloudBackupSnapshotRestoreJobConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_restore_job.CloudBackupSnapshotRestoreJobConfig;

CloudBackupSnapshotRestoreJobConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
    .snapshotId(java.lang.String)
//  .deliveryType(java.util.Map<java.lang.String, java.lang.String>)
//  .deliveryTypeConfig(CloudBackupSnapshotRestoreJobDeliveryTypeConfig)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryType">deliveryType</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type CloudBackupSnapshotRestoreJob#delivery_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryTypeConfig">deliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | delivery_type_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}.

---

##### `deliveryType`<sup>Optional</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryType"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeliveryType();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type CloudBackupSnapshotRestoreJob#delivery_type}.

---

##### `deliveryTypeConfig`<sup>Optional</sup> <a name="deliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryTypeConfig"></a>

```java
public CloudBackupSnapshotRestoreJobDeliveryTypeConfig getDeliveryTypeConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

delivery_type_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#delivery_type_config CloudBackupSnapshotRestoreJob#delivery_type_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudBackupSnapshotRestoreJobDeliveryTypeConfig <a name="CloudBackupSnapshotRestoreJobDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_restore_job.CloudBackupSnapshotRestoreJobDeliveryTypeConfig;

CloudBackupSnapshotRestoreJobDeliveryTypeConfig.builder()
//  .automated(java.lang.Boolean)
//  .automated(IResolvable)
//  .download(java.lang.Boolean)
//  .download(IResolvable)
//  .oplogInc(java.lang.Number)
//  .oplogTs(java.lang.Number)
//  .pointInTime(java.lang.Boolean)
//  .pointInTime(IResolvable)
//  .pointInTimeUtcSeconds(java.lang.Number)
//  .targetClusterName(java.lang.String)
//  .targetProjectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.automated">automated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#automated CloudBackupSnapshotRestoreJob#automated}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#download CloudBackupSnapshotRestoreJob#download}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc">oplogInc</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_inc CloudBackupSnapshotRestoreJob#oplog_inc}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs">oplogTs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_ts CloudBackupSnapshotRestoreJob#oplog_ts}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime">pointInTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time CloudBackupSnapshotRestoreJob#point_in_time}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds">pointInTimeUtcSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time_utc_seconds CloudBackupSnapshotRestoreJob#point_in_time_utc_seconds}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName">targetClusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_cluster_name CloudBackupSnapshotRestoreJob#target_cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId">targetProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_project_id CloudBackupSnapshotRestoreJob#target_project_id}. |

---

##### `automated`<sup>Optional</sup> <a name="automated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.automated"></a>

```java
public java.lang.Object getAutomated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#automated CloudBackupSnapshotRestoreJob#automated}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#download CloudBackupSnapshotRestoreJob#download}.

---

##### `oplogInc`<sup>Optional</sup> <a name="oplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc"></a>

```java
public java.lang.Number getOplogInc();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_inc CloudBackupSnapshotRestoreJob#oplog_inc}.

---

##### `oplogTs`<sup>Optional</sup> <a name="oplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs"></a>

```java
public java.lang.Number getOplogTs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#oplog_ts CloudBackupSnapshotRestoreJob#oplog_ts}.

---

##### `pointInTime`<sup>Optional</sup> <a name="pointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime"></a>

```java
public java.lang.Object getPointInTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time CloudBackupSnapshotRestoreJob#point_in_time}.

---

##### `pointInTimeUtcSeconds`<sup>Optional</sup> <a name="pointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds"></a>

```java
public java.lang.Number getPointInTimeUtcSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#point_in_time_utc_seconds CloudBackupSnapshotRestoreJob#point_in_time_utc_seconds}.

---

##### `targetClusterName`<sup>Optional</sup> <a name="targetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName"></a>

```java
public java.lang.String getTargetClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_cluster_name CloudBackupSnapshotRestoreJob#target_cluster_name}.

---

##### `targetProjectId`<sup>Optional</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId"></a>

```java
public java.lang.String getTargetProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_restore_job#target_project_id CloudBackupSnapshotRestoreJob#target_project_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference <a name="CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_restore_job.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference;

new CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated">resetAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc">resetOplogInc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs">resetOplogTs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime">resetPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds">resetPointInTimeUtcSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName">resetTargetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId">resetTargetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomated` <a name="resetAutomated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated"></a>

```java
public void resetAutomated()
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload"></a>

```java
public void resetDownload()
```

##### `resetOplogInc` <a name="resetOplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc"></a>

```java
public void resetOplogInc()
```

##### `resetOplogTs` <a name="resetOplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs"></a>

```java
public void resetOplogTs()
```

##### `resetPointInTime` <a name="resetPointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime"></a>

```java
public void resetPointInTime()
```

##### `resetPointInTimeUtcSeconds` <a name="resetPointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds"></a>

```java
public void resetPointInTimeUtcSeconds()
```

##### `resetTargetClusterName` <a name="resetTargetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName"></a>

```java
public void resetTargetClusterName()
```

##### `resetTargetProjectId` <a name="resetTargetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId"></a>

```java
public void resetTargetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput">automatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput">downloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput">oplogIncInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput">oplogTsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput">pointInTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput">pointInTimeUtcSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput">targetClusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput">targetProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated">automated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc">oplogInc</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs">oplogTs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime">pointInTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds">pointInTimeUtcSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName">targetClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId">targetProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatedInput`<sup>Optional</sup> <a name="automatedInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput"></a>

```java
public java.lang.Object getAutomatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput"></a>

```java
public java.lang.Object getDownloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oplogIncInput`<sup>Optional</sup> <a name="oplogIncInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput"></a>

```java
public java.lang.Number getOplogIncInput();
```

- *Type:* java.lang.Number

---

##### `oplogTsInput`<sup>Optional</sup> <a name="oplogTsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput"></a>

```java
public java.lang.Number getOplogTsInput();
```

- *Type:* java.lang.Number

---

##### `pointInTimeInput`<sup>Optional</sup> <a name="pointInTimeInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput"></a>

```java
public java.lang.Object getPointInTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pointInTimeUtcSecondsInput`<sup>Optional</sup> <a name="pointInTimeUtcSecondsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput"></a>

```java
public java.lang.Number getPointInTimeUtcSecondsInput();
```

- *Type:* java.lang.Number

---

##### `targetClusterNameInput`<sup>Optional</sup> <a name="targetClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput"></a>

```java
public java.lang.String getTargetClusterNameInput();
```

- *Type:* java.lang.String

---

##### `targetProjectIdInput`<sup>Optional</sup> <a name="targetProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput"></a>

```java
public java.lang.String getTargetProjectIdInput();
```

- *Type:* java.lang.String

---

##### `automated`<sup>Required</sup> <a name="automated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated"></a>

```java
public java.lang.Object getAutomated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oplogInc`<sup>Required</sup> <a name="oplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc"></a>

```java
public java.lang.Number getOplogInc();
```

- *Type:* java.lang.Number

---

##### `oplogTs`<sup>Required</sup> <a name="oplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs"></a>

```java
public java.lang.Number getOplogTs();
```

- *Type:* java.lang.Number

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime"></a>

```java
public java.lang.Object getPointInTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pointInTimeUtcSeconds`<sup>Required</sup> <a name="pointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds"></a>

```java
public java.lang.Number getPointInTimeUtcSeconds();
```

- *Type:* java.lang.Number

---

##### `targetClusterName`<sup>Required</sup> <a name="targetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName"></a>

```java
public java.lang.String getTargetClusterName();
```

- *Type:* java.lang.String

---

##### `targetProjectId`<sup>Required</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId"></a>

```java
public java.lang.String getTargetProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue"></a>

```java
public CloudBackupSnapshotRestoreJobDeliveryTypeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---



