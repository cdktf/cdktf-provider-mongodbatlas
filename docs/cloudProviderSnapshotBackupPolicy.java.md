# `mongodbatlas_cloud_provider_snapshot_backup_policy`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_provider_snapshot_backup_policy`](https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy).

# `cloudProviderSnapshotBackupPolicy` Submodule <a name="`cloudProviderSnapshotBackupPolicy` Submodule" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderSnapshotBackupPolicy <a name="CloudProviderSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicy;

CloudProviderSnapshotBackupPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .policies(IResolvable)
    .policies(java.util.List<CloudProviderSnapshotBackupPolicyPolicies>)
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .referenceHourOfDay(java.lang.Number)
//  .referenceMinuteOfHour(java.lang.Number)
//  .restoreWindowDays(java.lang.Number)
//  .updateSnapshots(java.lang.Boolean)
//  .updateSnapshots(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.policies">policies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>></code> | policies block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.updateSnapshots">updateSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.policies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>>

policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#policies CloudProviderSnapshotBackupPolicy#policies}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `referenceHourOfDay`<sup>Optional</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceHourOfDay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}.

---

##### `referenceMinuteOfHour`<sup>Optional</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceMinuteOfHour"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}.

---

##### `restoreWindowDays`<sup>Optional</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.restoreWindowDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}.

---

##### `updateSnapshots`<sup>Optional</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.updateSnapshots"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceHourOfDay">resetReferenceHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceMinuteOfHour">resetReferenceMinuteOfHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetRestoreWindowDays">resetRestoreWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetUpdateSnapshots">resetUpdateSnapshots</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPolicies` <a name="putPolicies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies"></a>

```java
public void putPolicies(IResolvable OR java.util.List<CloudProviderSnapshotBackupPolicyPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetReferenceHourOfDay` <a name="resetReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceHourOfDay"></a>

```java
public void resetReferenceHourOfDay()
```

##### `resetReferenceMinuteOfHour` <a name="resetReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceMinuteOfHour"></a>

```java
public void resetReferenceMinuteOfHour()
```

##### `resetRestoreWindowDays` <a name="resetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetRestoreWindowDays"></a>

```java
public void resetRestoreWindowDays()
```

##### `resetUpdateSnapshots` <a name="resetUpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetUpdateSnapshots"></a>

```java
public void resetUpdateSnapshots()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicy;

CloudProviderSnapshotBackupPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicy;

CloudProviderSnapshotBackupPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicy;

CloudProviderSnapshotBackupPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.nextSnapshot">nextSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList">CloudProviderSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policiesInput">policiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDayInput">referenceHourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHourInput">referenceMinuteOfHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDaysInput">restoreWindowDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshotsInput">updateSnapshotsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshots">updateSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `nextSnapshot`<sup>Required</sup> <a name="nextSnapshot" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.nextSnapshot"></a>

```java
public java.lang.String getNextSnapshot();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policies"></a>

```java
public CloudProviderSnapshotBackupPolicyPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList">CloudProviderSnapshotBackupPolicyPoliciesList</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policiesInput"></a>

```java
public java.lang.Object getPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `referenceHourOfDayInput`<sup>Optional</sup> <a name="referenceHourOfDayInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDayInput"></a>

```java
public java.lang.Number getReferenceHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `referenceMinuteOfHourInput`<sup>Optional</sup> <a name="referenceMinuteOfHourInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHourInput"></a>

```java
public java.lang.Number getReferenceMinuteOfHourInput();
```

- *Type:* java.lang.Number

---

##### `restoreWindowDaysInput`<sup>Optional</sup> <a name="restoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDaysInput"></a>

```java
public java.lang.Number getRestoreWindowDaysInput();
```

- *Type:* java.lang.Number

---

##### `updateSnapshotsInput`<sup>Optional</sup> <a name="updateSnapshotsInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshotsInput"></a>

```java
public java.lang.Object getUpdateSnapshotsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `referenceHourOfDay`<sup>Required</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDay"></a>

```java
public java.lang.Number getReferenceHourOfDay();
```

- *Type:* java.lang.Number

---

##### `referenceMinuteOfHour`<sup>Required</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour"></a>

```java
public java.lang.Number getReferenceMinuteOfHour();
```

- *Type:* java.lang.Number

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

---

##### `updateSnapshots`<sup>Required</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshots"></a>

```java
public java.lang.Object getUpdateSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderSnapshotBackupPolicyConfig <a name="CloudProviderSnapshotBackupPolicyConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicyConfig;

CloudProviderSnapshotBackupPolicyConfig.builder()
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
    .policies(IResolvable)
    .policies(java.util.List<CloudProviderSnapshotBackupPolicyPolicies>)
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .referenceHourOfDay(java.lang.Number)
//  .referenceMinuteOfHour(java.lang.Number)
//  .restoreWindowDays(java.lang.Number)
//  .updateSnapshots(java.lang.Boolean)
//  .updateSnapshots(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.policies">policies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>></code> | policies block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.updateSnapshots">updateSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.policies"></a>

```java
public java.lang.Object getPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>>

policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#policies CloudProviderSnapshotBackupPolicy#policies}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `referenceHourOfDay`<sup>Optional</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceHourOfDay"></a>

```java
public java.lang.Number getReferenceHourOfDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}.

---

##### `referenceMinuteOfHour`<sup>Optional</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceMinuteOfHour"></a>

```java
public java.lang.Number getReferenceMinuteOfHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}.

---

##### `restoreWindowDays`<sup>Optional</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}.

---

##### `updateSnapshots`<sup>Optional</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.updateSnapshots"></a>

```java
public java.lang.Object getUpdateSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}.

---

### CloudProviderSnapshotBackupPolicyPolicies <a name="CloudProviderSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicyPolicies;

CloudProviderSnapshotBackupPolicyPolicies.builder()
    .id(java.lang.String)
    .policyItem(IResolvable)
    .policyItem(java.util.List<CloudProviderSnapshotBackupPolicyPoliciesPolicyItem>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.policyItem">policyItem</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>></code> | policy_item block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyItem`<sup>Required</sup> <a name="policyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.policyItem"></a>

```java
public java.lang.Object getPolicyItem();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>>

policy_item block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#policy_item CloudProviderSnapshotBackupPolicy#policy_item}

---

### CloudProviderSnapshotBackupPolicyPoliciesPolicyItem <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem;

CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.builder()
    .frequencyInterval(java.lang.Number)
    .frequencyType(java.lang.String)
    .id(java.lang.String)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#frequency_interval CloudProviderSnapshotBackupPolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#frequency_type CloudProviderSnapshotBackupPolicy#frequency_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#retention_unit CloudProviderSnapshotBackupPolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#retention_value CloudProviderSnapshotBackupPolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#frequency_interval CloudProviderSnapshotBackupPolicy#frequency_interval}.

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#frequency_type CloudProviderSnapshotBackupPolicy#frequency_type}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#retention_unit CloudProviderSnapshotBackupPolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#retention_value CloudProviderSnapshotBackupPolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudProviderSnapshotBackupPolicyPoliciesList <a name="CloudProviderSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicyPoliciesList;

new CloudProviderSnapshotBackupPolicyPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get"></a>

```java
public CloudProviderSnapshotBackupPolicyPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>>

---


### CloudProviderSnapshotBackupPolicyPoliciesOutputReference <a name="CloudProviderSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference;

new CloudProviderSnapshotBackupPolicyPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem">putPolicyItem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicyItem` <a name="putPolicyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem"></a>

```java
public void putPolicyItem(IResolvable OR java.util.List<CloudProviderSnapshotBackupPolicyPoliciesPolicyItem> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">policyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItemInput">policyItemInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyItem`<sup>Required</sup> <a name="policyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```java
public CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList getPolicyItem();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyItemInput`<sup>Optional</sup> <a name="policyItemInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItemInput"></a>

```java
public java.lang.Object getPolicyItemInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList;

new CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```java
public CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>>

---


### CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_snapshot_backup_policy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference;

new CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyTypeInput">frequencyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `frequencyTypeInput`<sup>Optional</sup> <a name="frequencyTypeInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyTypeInput"></a>

```java
public java.lang.String getFrequencyTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a> OR com.hashicorp.cdktf.IResolvable

---



