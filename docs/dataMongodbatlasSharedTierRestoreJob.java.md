# `dataMongodbatlasSharedTierRestoreJob` Submodule <a name="`dataMongodbatlasSharedTierRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasSharedTierRestoreJob <a name="DataMongodbatlasSharedTierRestoreJob" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job mongodbatlas_shared_tier_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_shared_tier_restore_job.DataMongodbatlasSharedTierRestoreJob;

DataMongodbatlasSharedTierRestoreJob.Builder.create(Construct scope, java.lang.String id)
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
    .jobId(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#cluster_name DataMongodbatlasSharedTierRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#job_id DataMongodbatlasSharedTierRestoreJob#job_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#project_id DataMongodbatlasSharedTierRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#id DataMongodbatlasSharedTierRestoreJob#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#cluster_name DataMongodbatlasSharedTierRestoreJob#cluster_name}.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#job_id DataMongodbatlasSharedTierRestoreJob#job_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#project_id DataMongodbatlasSharedTierRestoreJob#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#id DataMongodbatlasSharedTierRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasSharedTierRestoreJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_shared_tier_restore_job.DataMongodbatlasSharedTierRestoreJob;

DataMongodbatlasSharedTierRestoreJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_shared_tier_restore_job.DataMongodbatlasSharedTierRestoreJob;

DataMongodbatlasSharedTierRestoreJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_shared_tier_restore_job.DataMongodbatlasSharedTierRestoreJob;

DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_shared_tier_restore_job.DataMongodbatlasSharedTierRestoreJob;

DataMongodbatlasSharedTierRestoreJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasSharedTierRestoreJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasSharedTierRestoreJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasSharedTierRestoreJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasSharedTierRestoreJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasSharedTierRestoreJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.deliveryType">deliveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreFinishedDate">restoreFinishedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreScheduledDate">restoreScheduledDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotFinishedDate">snapshotFinishedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotUrl">snapshotUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetDeploymentItemName">targetDeploymentItemName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetProjectId">targetProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `deliveryType`<sup>Required</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.deliveryType"></a>

```java
public java.lang.String getDeliveryType();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `restoreFinishedDate`<sup>Required</sup> <a name="restoreFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreFinishedDate"></a>

```java
public java.lang.String getRestoreFinishedDate();
```

- *Type:* java.lang.String

---

##### `restoreScheduledDate`<sup>Required</sup> <a name="restoreScheduledDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreScheduledDate"></a>

```java
public java.lang.String getRestoreScheduledDate();
```

- *Type:* java.lang.String

---

##### `snapshotFinishedDate`<sup>Required</sup> <a name="snapshotFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotFinishedDate"></a>

```java
public java.lang.String getSnapshotFinishedDate();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `snapshotUrl`<sup>Required</sup> <a name="snapshotUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotUrl"></a>

```java
public java.lang.String getSnapshotUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `targetDeploymentItemName`<sup>Required</sup> <a name="targetDeploymentItemName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetDeploymentItemName"></a>

```java
public java.lang.String getTargetDeploymentItemName();
```

- *Type:* java.lang.String

---

##### `targetProjectId`<sup>Required</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetProjectId"></a>

```java
public java.lang.String getTargetProjectId();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasSharedTierRestoreJobConfig <a name="DataMongodbatlasSharedTierRestoreJobConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_shared_tier_restore_job.DataMongodbatlasSharedTierRestoreJobConfig;

DataMongodbatlasSharedTierRestoreJobConfig.builder()
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
    .jobId(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#cluster_name DataMongodbatlasSharedTierRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#job_id DataMongodbatlasSharedTierRestoreJob#job_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#project_id DataMongodbatlasSharedTierRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#id DataMongodbatlasSharedTierRestoreJob#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#cluster_name DataMongodbatlasSharedTierRestoreJob#cluster_name}.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#job_id DataMongodbatlasSharedTierRestoreJob#job_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#project_id DataMongodbatlasSharedTierRestoreJob#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/shared_tier_restore_job#id DataMongodbatlasSharedTierRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



