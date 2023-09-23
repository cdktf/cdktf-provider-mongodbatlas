# `data_mongodbatlas_cloud_backup_snapshot_restore_jobs`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_backup_snapshot_restore_jobs`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs).

# `dataMongodbatlasCloudBackupSnapshotRestoreJobs` Submodule <a name="`dataMongodbatlasCloudBackupSnapshotRestoreJobs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobs <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs mongodbatlas_cloud_backup_snapshot_restore_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.Builder.create(Construct scope, java.lang.String id)
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
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .itemsPerPage(java.lang.Number)
//  .pageNum(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.pageNum">pageNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.itemsPerPage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.pageNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetItemsPerPage">resetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetPageNum">resetPageNum</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetId"></a>

```java
public void resetId()
```

##### `resetItemsPerPage` <a name="resetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetItemsPerPage"></a>

```java
public void resetItemsPerPage()
```

##### `resetPageNum` <a name="resetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetPageNum"></a>

```java
public void resetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs;

DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList">DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.totalCount">totalCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPageInput">itemsPerPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNumInput">pageNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNum">pageNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.results"></a>

```java
public DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList getResults();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList">DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList</a>

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.totalCount"></a>

```java
public java.lang.Number getTotalCount();
```

- *Type:* java.lang.Number

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `itemsPerPageInput`<sup>Optional</sup> <a name="itemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPageInput"></a>

```java
public java.lang.Number getItemsPerPageInput();
```

- *Type:* java.lang.Number

---

##### `pageNumInput`<sup>Optional</sup> <a name="pageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNumInput"></a>

```java
public java.lang.Number getPageNumInput();
```

- *Type:* java.lang.Number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `pageNum`<sup>Required</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNum"></a>

```java
public java.lang.Number getPageNum();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig;

DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.builder()
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
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .itemsPerPage(java.lang.Number)
//  .pageNum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.pageNum">pageNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.pageNum"></a>

```java
public java.lang.Number getPageNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}.

---

### DataMongodbatlasCloudBackupSnapshotRestoreJobsResults <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults;

DataMongodbatlasCloudBackupSnapshotRestoreJobsResults.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList;

new DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get"></a>

```java
public DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_backup_snapshot_restore_jobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference;

new DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.cancelled">cancelled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryType">deliveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl">deliveryUrl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expired">expired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.finishedAt">finishedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogInc">oplogInc</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogTs">oplogTs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds">pointInTimeUtcSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetClusterName">targetClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetProjectId">targetProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults">DataMongodbatlasCloudBackupSnapshotRestoreJobsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cancelled`<sup>Required</sup> <a name="cancelled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.cancelled"></a>

```java
public IResolvable getCancelled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deliveryType`<sup>Required</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryType"></a>

```java
public java.lang.String getDeliveryType();
```

- *Type:* java.lang.String

---

##### `deliveryUrl`<sup>Required</sup> <a name="deliveryUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl"></a>

```java
public java.util.List<java.lang.String> getDeliveryUrl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expired`<sup>Required</sup> <a name="expired" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expired"></a>

```java
public IResolvable getExpired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.finishedAt"></a>

```java
public java.lang.String getFinishedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oplogInc`<sup>Required</sup> <a name="oplogInc" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogInc"></a>

```java
public java.lang.Number getOplogInc();
```

- *Type:* java.lang.Number

---

##### `oplogTs`<sup>Required</sup> <a name="oplogTs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogTs"></a>

```java
public java.lang.Number getOplogTs();
```

- *Type:* java.lang.Number

---

##### `pointInTimeUtcSeconds`<sup>Required</sup> <a name="pointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds"></a>

```java
public java.lang.Number getPointInTimeUtcSeconds();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `targetClusterName`<sup>Required</sup> <a name="targetClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetClusterName"></a>

```java
public java.lang.String getTargetClusterName();
```

- *Type:* java.lang.String

---

##### `targetProjectId`<sup>Required</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetProjectId"></a>

```java
public java.lang.String getTargetProjectId();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasCloudBackupSnapshotRestoreJobsResults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults">DataMongodbatlasCloudBackupSnapshotRestoreJobsResults</a>

---



