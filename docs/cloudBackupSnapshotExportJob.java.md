# `cloudBackupSnapshotExportJob` Submodule <a name="`cloudBackupSnapshotExportJob` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSnapshotExportJob <a name="CloudBackupSnapshotExportJob" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job mongodbatlas_cloud_backup_snapshot_export_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJob;

CloudBackupSnapshotExportJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .exportBucketId(java.lang.String)
    .projectId(java.lang.String)
    .snapshotId(java.lang.String)
//  .customData(IResolvable)
//  .customData(java.util.List<CloudBackupSnapshotExportJobCustomData>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#cluster_name CloudBackupSnapshotExportJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.exportBucketId">exportBucketId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#export_bucket_id CloudBackupSnapshotExportJob#export_bucket_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#project_id CloudBackupSnapshotExportJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#snapshot_id CloudBackupSnapshotExportJob#snapshot_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.customData">customData</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>></code> | custom_data block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#cluster_name CloudBackupSnapshotExportJob#cluster_name}.

---

##### `exportBucketId`<sup>Required</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.exportBucketId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#export_bucket_id CloudBackupSnapshotExportJob#export_bucket_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#project_id CloudBackupSnapshotExportJob#project_id}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#snapshot_id CloudBackupSnapshotExportJob#snapshot_id}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.customData"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>>

custom_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#custom_data CloudBackupSnapshotExportJob#custom_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.putCustomData">putCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.resetCustomData">resetCustomData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomData` <a name="putCustomData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.putCustomData"></a>

```java
public void putCustomData(IResolvable OR java.util.List<CloudBackupSnapshotExportJobCustomData> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.putCustomData.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>>

---

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.resetCustomData"></a>

```java
public void resetCustomData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBackupSnapshotExportJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJob;

CloudBackupSnapshotExportJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJob;

CloudBackupSnapshotExportJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJob;

CloudBackupSnapshotExportJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJob;

CloudBackupSnapshotExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudBackupSnapshotExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudBackupSnapshotExportJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudBackupSnapshotExportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudBackupSnapshotExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudBackupSnapshotExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.components">components</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList">CloudBackupSnapshotExportJobComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customData">customData</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList">CloudBackupSnapshotExportJobCustomDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportJobId">exportJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusExportedCollections">exportStatusExportedCollections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusTotalCollections">exportStatusTotalCollections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.finishedAt">finishedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customDataInput">customDataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketIdInput">exportBucketIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketId">exportBucketId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.components"></a>

```java
public CloudBackupSnapshotExportJobComponentsList getComponents();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList">CloudBackupSnapshotExportJobComponentsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customData"></a>

```java
public CloudBackupSnapshotExportJobCustomDataList getCustomData();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList">CloudBackupSnapshotExportJobCustomDataList</a>

---

##### `exportJobId`<sup>Required</sup> <a name="exportJobId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportJobId"></a>

```java
public java.lang.String getExportJobId();
```

- *Type:* java.lang.String

---

##### `exportStatusExportedCollections`<sup>Required</sup> <a name="exportStatusExportedCollections" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusExportedCollections"></a>

```java
public java.lang.Number getExportStatusExportedCollections();
```

- *Type:* java.lang.Number

---

##### `exportStatusTotalCollections`<sup>Required</sup> <a name="exportStatusTotalCollections" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusTotalCollections"></a>

```java
public java.lang.Number getExportStatusTotalCollections();
```

- *Type:* java.lang.Number

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.finishedAt"></a>

```java
public java.lang.String getFinishedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customDataInput"></a>

```java
public java.lang.Object getCustomDataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>>

---

##### `exportBucketIdInput`<sup>Optional</sup> <a name="exportBucketIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketIdInput"></a>

```java
public java.lang.String getExportBucketIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `exportBucketId`<sup>Required</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketId"></a>

```java
public java.lang.String getExportBucketId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupSnapshotExportJobComponents <a name="CloudBackupSnapshotExportJobComponents" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJobComponents;

CloudBackupSnapshotExportJobComponents.builder()
    .build();
```


### CloudBackupSnapshotExportJobConfig <a name="CloudBackupSnapshotExportJobConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJobConfig;

CloudBackupSnapshotExportJobConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .exportBucketId(java.lang.String)
    .projectId(java.lang.String)
    .snapshotId(java.lang.String)
//  .customData(IResolvable)
//  .customData(java.util.List<CloudBackupSnapshotExportJobCustomData>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#cluster_name CloudBackupSnapshotExportJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.exportBucketId">exportBucketId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#export_bucket_id CloudBackupSnapshotExportJob#export_bucket_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#project_id CloudBackupSnapshotExportJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#snapshot_id CloudBackupSnapshotExportJob#snapshot_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.customData">customData</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>></code> | custom_data block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#cluster_name CloudBackupSnapshotExportJob#cluster_name}.

---

##### `exportBucketId`<sup>Required</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.exportBucketId"></a>

```java
public java.lang.String getExportBucketId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#export_bucket_id CloudBackupSnapshotExportJob#export_bucket_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#project_id CloudBackupSnapshotExportJob#project_id}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#snapshot_id CloudBackupSnapshotExportJob#snapshot_id}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.customData"></a>

```java
public java.lang.Object getCustomData();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>>

custom_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#custom_data CloudBackupSnapshotExportJob#custom_data}

---

### CloudBackupSnapshotExportJobCustomData <a name="CloudBackupSnapshotExportJobCustomData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJobCustomData;

CloudBackupSnapshotExportJobCustomData.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#key CloudBackupSnapshotExportJob#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#value CloudBackupSnapshotExportJob#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#key CloudBackupSnapshotExportJob#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/cloud_backup_snapshot_export_job#value CloudBackupSnapshotExportJob#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupSnapshotExportJobComponentsList <a name="CloudBackupSnapshotExportJobComponentsList" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJobComponentsList;

new CloudBackupSnapshotExportJobComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.get"></a>

```java
public CloudBackupSnapshotExportJobComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudBackupSnapshotExportJobComponentsOutputReference <a name="CloudBackupSnapshotExportJobComponentsOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJobComponentsOutputReference;

new CloudBackupSnapshotExportJobComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.exportId">exportId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.replicaSetName">replicaSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents">CloudBackupSnapshotExportJobComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.exportId"></a>

```java
public java.lang.String getExportId();
```

- *Type:* java.lang.String

---

##### `replicaSetName`<sup>Required</sup> <a name="replicaSetName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.replicaSetName"></a>

```java
public java.lang.String getReplicaSetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.internalValue"></a>

```java
public CloudBackupSnapshotExportJobComponents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents">CloudBackupSnapshotExportJobComponents</a>

---


### CloudBackupSnapshotExportJobCustomDataList <a name="CloudBackupSnapshotExportJobCustomDataList" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJobCustomDataList;

new CloudBackupSnapshotExportJobCustomDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.get"></a>

```java
public CloudBackupSnapshotExportJobCustomDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>>

---


### CloudBackupSnapshotExportJobCustomDataOutputReference <a name="CloudBackupSnapshotExportJobCustomDataOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_snapshot_export_job.CloudBackupSnapshotExportJobCustomDataOutputReference;

new CloudBackupSnapshotExportJobCustomDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>

---



