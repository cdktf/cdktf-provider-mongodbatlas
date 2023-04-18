# `data_mongodbatlas_cloud_provider_snapshot_backup_policy`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_provider_snapshot_backup_policy`](https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy).

# `dataMongodbatlasCloudProviderSnapshotBackupPolicy` Submodule <a name="`dataMongodbatlasCloudProviderSnapshotBackupPolicy` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicy <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicy;

DataMongodbatlasCloudProviderSnapshotBackupPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicy;

DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicy;

DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicy;

DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.nextSnapshot">nextSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.updateSnapshots">updateSnapshots</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `nextSnapshot`<sup>Required</sup> <a name="nextSnapshot" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.nextSnapshot"></a>

```java
public java.lang.String getNextSnapshot();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.policies"></a>

```java
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList</a>

---

##### `referenceHourOfDay`<sup>Required</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceHourOfDay"></a>

```java
public java.lang.Number getReferenceHourOfDay();
```

- *Type:* java.lang.Number

---

##### `referenceMinuteOfHour`<sup>Required</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour"></a>

```java
public java.lang.Number getReferenceMinuteOfHour();
```

- *Type:* java.lang.Number

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

---

##### `updateSnapshots`<sup>Required</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.updateSnapshots"></a>

```java
public IResolvable getUpdateSnapshots();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig;

DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies;

DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies.builder()
    .build();
```


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem;

DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get"></a>

```java
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">policyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies">DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyItem`<sup>Required</sup> <a name="policyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```java
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList getPolicyItem();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies">DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies</a>

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```java
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_snapshot_backup_policy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference;

new DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>

---



