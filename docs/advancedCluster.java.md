# `mongodbatlas_advanced_cluster`

Refer to the Terraform Registory for docs: [`mongodbatlas_advanced_cluster`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster).

# `advancedCluster` Submodule <a name="`advancedCluster` Submodule" id="@cdktf/provider-mongodbatlas.advancedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdvancedCluster <a name="AdvancedCluster" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster mongodbatlas_advanced_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedCluster;

AdvancedCluster.Builder.create(Construct scope, java.lang.String id)
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
    .clusterType(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .replicationSpecs(IResolvable)
    .replicationSpecs(java.util.List<AdvancedClusterReplicationSpecs>)
//  .advancedConfiguration(AdvancedClusterAdvancedConfiguration)
//  .backupEnabled(java.lang.Boolean)
//  .backupEnabled(IResolvable)
//  .biConnector(AdvancedClusterBiConnector)
//  .biConnectorConfig(AdvancedClusterBiConnectorConfig)
//  .diskSizeGb(java.lang.Number)
//  .encryptionAtRestProvider(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<AdvancedClusterLabels>)
//  .mongoDbMajorVersion(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .pitEnabled(java.lang.Boolean)
//  .pitEnabled(IResolvable)
//  .rootCertType(java.lang.String)
//  .terminationProtectionEnabled(java.lang.Boolean)
//  .terminationProtectionEnabled(IResolvable)
//  .timeouts(AdvancedClusterTimeouts)
//  .versionReleaseSystem(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#name AdvancedCluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.replicationSpecs">replicationSpecs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>></code> | replication_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a></code> | advanced_configuration block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.backupEnabled">backupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.biConnector">biConnector</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a></code> | bi_connector block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a></code> | bi_connector_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#id AdvancedCluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#paused AdvancedCluster#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.rootCertType">rootCertType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.versionReleaseSystem">versionReleaseSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#name AdvancedCluster#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}.

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.replicationSpecs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>>

replication_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#replication_specs AdvancedCluster#replication_specs}

---

##### `advancedConfiguration`<sup>Optional</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.advancedConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

advanced_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#advanced_configuration AdvancedCluster#advanced_configuration}

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.backupEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}.

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.biConnector"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a>

bi_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#bi_connector AdvancedCluster#bi_connector}

---

##### `biConnectorConfig`<sup>Optional</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.biConnectorConfig"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

bi_connector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#bi_connector_config AdvancedCluster#bi_connector_config}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.diskSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.encryptionAtRestProvider"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#id AdvancedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#labels AdvancedCluster#labels}

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.mongoDbMajorVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#paused AdvancedCluster#paused}.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.pitEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}.

---

##### `rootCertType`<sup>Optional</sup> <a name="rootCertType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.rootCertType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.terminationProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#timeouts AdvancedCluster#timeouts}

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.versionReleaseSystem"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putAdvancedConfiguration">putAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnector">putBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnectorConfig">putBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putReplicationSpecs">putReplicationSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetAdvancedConfiguration">resetAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBackupEnabled">resetBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBiConnector">resetBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBiConnectorConfig">resetBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetEncryptionAtRestProvider">resetEncryptionAtRestProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetMongoDbMajorVersion">resetMongoDbMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPitEnabled">resetPitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetRootCertType">resetRootCertType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetVersionReleaseSystem">resetVersionReleaseSystem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdvancedConfiguration` <a name="putAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putAdvancedConfiguration"></a>

```java
public void putAdvancedConfiguration(AdvancedClusterAdvancedConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putAdvancedConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

---

##### `putBiConnector` <a name="putBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnector"></a>

```java
public void putBiConnector(AdvancedClusterBiConnector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a>

---

##### `putBiConnectorConfig` <a name="putBiConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnectorConfig"></a>

```java
public void putBiConnectorConfig(AdvancedClusterBiConnectorConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<AdvancedClusterLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>>

---

##### `putReplicationSpecs` <a name="putReplicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putReplicationSpecs"></a>

```java
public void putReplicationSpecs(IResolvable OR java.util.List<AdvancedClusterReplicationSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putReplicationSpecs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTimeouts"></a>

```java
public void putTimeouts(AdvancedClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a>

---

##### `resetAdvancedConfiguration` <a name="resetAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetAdvancedConfiguration"></a>

```java
public void resetAdvancedConfiguration()
```

##### `resetBackupEnabled` <a name="resetBackupEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBackupEnabled"></a>

```java
public void resetBackupEnabled()
```

##### `resetBiConnector` <a name="resetBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBiConnector"></a>

```java
public void resetBiConnector()
```

##### `resetBiConnectorConfig` <a name="resetBiConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBiConnectorConfig"></a>

```java
public void resetBiConnectorConfig()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetEncryptionAtRestProvider` <a name="resetEncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetEncryptionAtRestProvider"></a>

```java
public void resetEncryptionAtRestProvider()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMongoDbMajorVersion` <a name="resetMongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetMongoDbMajorVersion"></a>

```java
public void resetMongoDbMajorVersion()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetPitEnabled` <a name="resetPitEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPitEnabled"></a>

```java
public void resetPitEnabled()
```

##### `resetRootCertType` <a name="resetRootCertType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetRootCertType"></a>

```java
public void resetRootCertType()
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTerminationProtectionEnabled"></a>

```java
public void resetTerminationProtectionEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionReleaseSystem` <a name="resetVersionReleaseSystem" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetVersionReleaseSystem"></a>

```java
public void resetVersionReleaseSystem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedCluster;

AdvancedCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedCluster;

AdvancedCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedCluster;

AdvancedCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference">AdvancedClusterAdvancedConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnector">biConnector</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference">AdvancedClusterBiConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference">AdvancedClusterBiConnectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList">AdvancedClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.createDate">createDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList">AdvancedClusterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbVersion">mongoDbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList">AdvancedClusterReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.stateName">stateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference">AdvancedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfigurationInput">advancedConfigurationInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabledInput">backupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfigInput">biConnectorConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorInput">biConnectorInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProviderInput">encryptionAtRestProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersionInput">mongoDbMajorVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabledInput">pitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecsInput">replicationSpecsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertTypeInput">rootCertTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystemInput">versionReleaseSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabled">backupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertType">rootCertType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfiguration"></a>

```java
public AdvancedClusterAdvancedConfigurationOutputReference getAdvancedConfiguration();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference">AdvancedClusterAdvancedConfigurationOutputReference</a>

---

##### `biConnector`<sup>Required</sup> <a name="biConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnector"></a>

```java
public AdvancedClusterBiConnectorOutputReference getBiConnector();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference">AdvancedClusterBiConnectorOutputReference</a>

---

##### `biConnectorConfig`<sup>Required</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfig"></a>

```java
public AdvancedClusterBiConnectorConfigOutputReference getBiConnectorConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference">AdvancedClusterBiConnectorConfigOutputReference</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connectionStrings"></a>

```java
public AdvancedClusterConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList">AdvancedClusterConnectionStringsList</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.createDate"></a>

```java
public java.lang.String getCreateDate();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labels"></a>

```java
public AdvancedClusterLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList">AdvancedClusterLabelsList</a>

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbVersion"></a>

```java
public java.lang.String getMongoDbVersion();
```

- *Type:* java.lang.String

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecs"></a>

```java
public AdvancedClusterReplicationSpecsList getReplicationSpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList">AdvancedClusterReplicationSpecsList</a>

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.stateName"></a>

```java
public java.lang.String getStateName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeouts"></a>

```java
public AdvancedClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference">AdvancedClusterTimeoutsOutputReference</a>

---

##### `advancedConfigurationInput`<sup>Optional</sup> <a name="advancedConfigurationInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfigurationInput"></a>

```java
public AdvancedClusterAdvancedConfiguration getAdvancedConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

---

##### `backupEnabledInput`<sup>Optional</sup> <a name="backupEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabledInput"></a>

```java
public java.lang.Object getBackupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `biConnectorConfigInput`<sup>Optional</sup> <a name="biConnectorConfigInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfigInput"></a>

```java
public AdvancedClusterBiConnectorConfig getBiConnectorConfigInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

---

##### `biConnectorInput`<sup>Optional</sup> <a name="biConnectorInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorInput"></a>

```java
public AdvancedClusterBiConnector getBiConnectorInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a>

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `encryptionAtRestProviderInput`<sup>Optional</sup> <a name="encryptionAtRestProviderInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProviderInput"></a>

```java
public java.lang.String getEncryptionAtRestProviderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>>

---

##### `mongoDbMajorVersionInput`<sup>Optional</sup> <a name="mongoDbMajorVersionInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersionInput"></a>

```java
public java.lang.String getMongoDbMajorVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pitEnabledInput`<sup>Optional</sup> <a name="pitEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabledInput"></a>

```java
public java.lang.Object getPitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `replicationSpecsInput`<sup>Optional</sup> <a name="replicationSpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecsInput"></a>

```java
public java.lang.Object getReplicationSpecsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>>

---

##### `rootCertTypeInput`<sup>Optional</sup> <a name="rootCertTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertTypeInput"></a>

```java
public java.lang.String getRootCertTypeInput();
```

- *Type:* java.lang.String

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabledInput"></a>

```java
public java.lang.Object getTerminationProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `versionReleaseSystemInput`<sup>Optional</sup> <a name="versionReleaseSystemInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystemInput"></a>

```java
public java.lang.String getVersionReleaseSystemInput();
```

- *Type:* java.lang.String

---

##### `backupEnabled`<sup>Required</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabled"></a>

```java
public java.lang.Object getBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `encryptionAtRestProvider`<sup>Required</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProvider"></a>

```java
public java.lang.String getEncryptionAtRestProvider();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mongoDbMajorVersion`<sup>Required</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersion"></a>

```java
public java.lang.String getMongoDbMajorVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabled"></a>

```java
public java.lang.Object getPitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `rootCertType`<sup>Required</sup> <a name="rootCertType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertType"></a>

```java
public java.lang.String getRootCertType();
```

- *Type:* java.lang.String

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabled"></a>

```java
public java.lang.Object getTerminationProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionReleaseSystem`<sup>Required</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystem"></a>

```java
public java.lang.String getVersionReleaseSystem();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AdvancedClusterAdvancedConfiguration <a name="AdvancedClusterAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterAdvancedConfiguration;

AdvancedClusterAdvancedConfiguration.builder()
//  .defaultReadConcern(java.lang.String)
//  .defaultWriteConcern(java.lang.String)
//  .failIndexKeyTooLong(java.lang.Boolean)
//  .failIndexKeyTooLong(IResolvable)
//  .javascriptEnabled(java.lang.Boolean)
//  .javascriptEnabled(IResolvable)
//  .minimumEnabledTlsProtocol(java.lang.String)
//  .noTableScan(java.lang.Boolean)
//  .noTableScan(IResolvable)
//  .oplogMinRetentionHours(java.lang.Number)
//  .oplogSizeMb(java.lang.Number)
//  .sampleRefreshIntervalBiConnector(java.lang.Number)
//  .sampleSizeBiConnector(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultReadConcern">defaultReadConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#default_read_concern AdvancedCluster#default_read_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#default_write_concern AdvancedCluster#default_write_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#fail_index_key_too_long AdvancedCluster#fail_index_key_too_long}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.javascriptEnabled">javascriptEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#javascript_enabled AdvancedCluster#javascript_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#minimum_enabled_tls_protocol AdvancedCluster#minimum_enabled_tls_protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.noTableScan">noTableScan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#no_table_scan AdvancedCluster#no_table_scan}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#oplog_min_retention_hours AdvancedCluster#oplog_min_retention_hours}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogSizeMb">oplogSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#oplog_size_mb AdvancedCluster#oplog_size_mb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#sample_refresh_interval_bi_connector AdvancedCluster#sample_refresh_interval_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#sample_size_bi_connector AdvancedCluster#sample_size_bi_connector}. |

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultReadConcern"></a>

```java
public java.lang.String getDefaultReadConcern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#default_read_concern AdvancedCluster#default_read_concern}.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultWriteConcern"></a>

```java
public java.lang.String getDefaultWriteConcern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#default_write_concern AdvancedCluster#default_write_concern}.

---

##### `failIndexKeyTooLong`<sup>Optional</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.failIndexKeyTooLong"></a>

```java
public java.lang.Object getFailIndexKeyTooLong();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#fail_index_key_too_long AdvancedCluster#fail_index_key_too_long}.

---

##### `javascriptEnabled`<sup>Optional</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.javascriptEnabled"></a>

```java
public java.lang.Object getJavascriptEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#javascript_enabled AdvancedCluster#javascript_enabled}.

---

##### `minimumEnabledTlsProtocol`<sup>Optional</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol"></a>

```java
public java.lang.String getMinimumEnabledTlsProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#minimum_enabled_tls_protocol AdvancedCluster#minimum_enabled_tls_protocol}.

---

##### `noTableScan`<sup>Optional</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.noTableScan"></a>

```java
public java.lang.Object getNoTableScan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#no_table_scan AdvancedCluster#no_table_scan}.

---

##### `oplogMinRetentionHours`<sup>Optional</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogMinRetentionHours"></a>

```java
public java.lang.Number getOplogMinRetentionHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#oplog_min_retention_hours AdvancedCluster#oplog_min_retention_hours}.

---

##### `oplogSizeMb`<sup>Optional</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogSizeMb"></a>

```java
public java.lang.Number getOplogSizeMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#oplog_size_mb AdvancedCluster#oplog_size_mb}.

---

##### `sampleRefreshIntervalBiConnector`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector"></a>

```java
public java.lang.Number getSampleRefreshIntervalBiConnector();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#sample_refresh_interval_bi_connector AdvancedCluster#sample_refresh_interval_bi_connector}.

---

##### `sampleSizeBiConnector`<sup>Optional</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleSizeBiConnector"></a>

```java
public java.lang.Number getSampleSizeBiConnector();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#sample_size_bi_connector AdvancedCluster#sample_size_bi_connector}.

---

### AdvancedClusterBiConnector <a name="AdvancedClusterBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterBiConnector;

AdvancedClusterBiConnector.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .readPreference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector.property.readPreference">readPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}.

---

##### `readPreference`<sup>Optional</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector.property.readPreference"></a>

```java
public java.lang.String getReadPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}.

---

### AdvancedClusterBiConnectorConfig <a name="AdvancedClusterBiConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterBiConnectorConfig;

AdvancedClusterBiConnectorConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .readPreference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.readPreference">readPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}.

---

##### `readPreference`<sup>Optional</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.readPreference"></a>

```java
public java.lang.String getReadPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}.

---

### AdvancedClusterConfig <a name="AdvancedClusterConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConfig;

AdvancedClusterConfig.builder()
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
    .clusterType(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .replicationSpecs(IResolvable)
    .replicationSpecs(java.util.List<AdvancedClusterReplicationSpecs>)
//  .advancedConfiguration(AdvancedClusterAdvancedConfiguration)
//  .backupEnabled(java.lang.Boolean)
//  .backupEnabled(IResolvable)
//  .biConnector(AdvancedClusterBiConnector)
//  .biConnectorConfig(AdvancedClusterBiConnectorConfig)
//  .diskSizeGb(java.lang.Number)
//  .encryptionAtRestProvider(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<AdvancedClusterLabels>)
//  .mongoDbMajorVersion(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .pitEnabled(java.lang.Boolean)
//  .pitEnabled(IResolvable)
//  .rootCertType(java.lang.String)
//  .terminationProtectionEnabled(java.lang.Boolean)
//  .terminationProtectionEnabled(IResolvable)
//  .timeouts(AdvancedClusterTimeouts)
//  .versionReleaseSystem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#name AdvancedCluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.replicationSpecs">replicationSpecs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>></code> | replication_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a></code> | advanced_configuration block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.backupEnabled">backupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.biConnector">biConnector</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a></code> | bi_connector block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a></code> | bi_connector_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#id AdvancedCluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#paused AdvancedCluster#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.rootCertType">rootCertType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#name AdvancedCluster#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}.

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.replicationSpecs"></a>

```java
public java.lang.Object getReplicationSpecs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>>

replication_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#replication_specs AdvancedCluster#replication_specs}

---

##### `advancedConfiguration`<sup>Optional</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.advancedConfiguration"></a>

```java
public AdvancedClusterAdvancedConfiguration getAdvancedConfiguration();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

advanced_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#advanced_configuration AdvancedCluster#advanced_configuration}

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.backupEnabled"></a>

```java
public java.lang.Object getBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}.

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.biConnector"></a>

```java
public AdvancedClusterBiConnector getBiConnector();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a>

bi_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#bi_connector AdvancedCluster#bi_connector}

---

##### `biConnectorConfig`<sup>Optional</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.biConnectorConfig"></a>

```java
public AdvancedClusterBiConnectorConfig getBiConnectorConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

bi_connector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#bi_connector_config AdvancedCluster#bi_connector_config}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.encryptionAtRestProvider"></a>

```java
public java.lang.String getEncryptionAtRestProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#id AdvancedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#labels AdvancedCluster#labels}

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.mongoDbMajorVersion"></a>

```java
public java.lang.String getMongoDbMajorVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#paused AdvancedCluster#paused}.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.pitEnabled"></a>

```java
public java.lang.Object getPitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}.

---

##### `rootCertType`<sup>Optional</sup> <a name="rootCertType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.rootCertType"></a>

```java
public java.lang.String getRootCertType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.terminationProtectionEnabled"></a>

```java
public java.lang.Object getTerminationProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.timeouts"></a>

```java
public AdvancedClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#timeouts AdvancedCluster#timeouts}

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.versionReleaseSystem"></a>

```java
public java.lang.String getVersionReleaseSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}.

---

### AdvancedClusterConnectionStrings <a name="AdvancedClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStrings;

AdvancedClusterConnectionStrings.builder()
    .build();
```


### AdvancedClusterConnectionStringsPrivateEndpoint <a name="AdvancedClusterConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsPrivateEndpoint;

AdvancedClusterConnectionStringsPrivateEndpoint.builder()
    .build();
```


### AdvancedClusterConnectionStringsPrivateEndpointEndpoints <a name="AdvancedClusterConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints;

AdvancedClusterConnectionStringsPrivateEndpointEndpoints.builder()
    .build();
```


### AdvancedClusterLabels <a name="AdvancedClusterLabels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterLabels;

AdvancedClusterLabels.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#key AdvancedCluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#value AdvancedCluster#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#key AdvancedCluster#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#value AdvancedCluster#value}.

---

### AdvancedClusterReplicationSpecs <a name="AdvancedClusterReplicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecs;

AdvancedClusterReplicationSpecs.builder()
    .regionConfigs(IResolvable)
    .regionConfigs(java.util.List<AdvancedClusterReplicationSpecsRegionConfigs>)
//  .numShards(java.lang.Number)
//  .zoneName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.regionConfigs">regionConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>></code> | region_configs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#num_shards AdvancedCluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#zone_name AdvancedCluster#zone_name}. |

---

##### `regionConfigs`<sup>Required</sup> <a name="regionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.regionConfigs"></a>

```java
public java.lang.Object getRegionConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>>

region_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#region_configs AdvancedCluster#region_configs}

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#num_shards AdvancedCluster#num_shards}.

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#zone_name AdvancedCluster#zone_name}.

---

### AdvancedClusterReplicationSpecsRegionConfigs <a name="AdvancedClusterReplicationSpecsRegionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigs;

AdvancedClusterReplicationSpecsRegionConfigs.builder()
    .priority(java.lang.Number)
    .providerName(java.lang.String)
    .regionName(java.lang.String)
//  .analyticsAutoScaling(AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling)
//  .analyticsSpecs(AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs)
//  .autoScaling(AdvancedClusterReplicationSpecsRegionConfigsAutoScaling)
//  .backingProviderName(java.lang.String)
//  .electableSpecs(AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs)
//  .readOnlySpecs(AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#priority AdvancedCluster#priority}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#provider_name AdvancedCluster#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#region_name AdvancedCluster#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | analytics_auto_scaling block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsSpecs">analyticsSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | analytics_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.backingProviderName">backingProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#backing_provider_name AdvancedCluster#backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.electableSpecs">electableSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | electable_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.readOnlySpecs">readOnlySpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | read_only_specs block. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#priority AdvancedCluster#priority}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#provider_name AdvancedCluster#provider_name}.

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#region_name AdvancedCluster#region_name}.

---

##### `analyticsAutoScaling`<sup>Optional</sup> <a name="analyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsAutoScaling"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling getAnalyticsAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

analytics_auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#analytics_auto_scaling AdvancedCluster#analytics_auto_scaling}

---

##### `analyticsSpecs`<sup>Optional</sup> <a name="analyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsSpecs"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs getAnalyticsSpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

analytics_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#analytics_specs AdvancedCluster#analytics_specs}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.autoScaling"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAutoScaling getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#auto_scaling AdvancedCluster#auto_scaling}

---

##### `backingProviderName`<sup>Optional</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.backingProviderName"></a>

```java
public java.lang.String getBackingProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#backing_provider_name AdvancedCluster#backing_provider_name}.

---

##### `electableSpecs`<sup>Optional</sup> <a name="electableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.electableSpecs"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs getElectableSpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

electable_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#electable_specs AdvancedCluster#electable_specs}

---

##### `readOnlySpecs`<sup>Optional</sup> <a name="readOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.readOnlySpecs"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs getReadOnlySpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

read_only_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#read_only_specs AdvancedCluster#read_only_specs}

---

### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling;

AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.builder()
//  .computeEnabled(java.lang.Boolean)
//  .computeEnabled(IResolvable)
//  .computeMaxInstanceSize(java.lang.String)
//  .computeMinInstanceSize(java.lang.String)
//  .computeScaleDownEnabled(java.lang.Boolean)
//  .computeScaleDownEnabled(IResolvable)
//  .diskGbEnabled(java.lang.Boolean)
//  .diskGbEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeEnabled">computeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.diskGbEnabled">diskGbEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}. |

---

##### `computeEnabled`<sup>Optional</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeEnabled"></a>

```java
public java.lang.Object getComputeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}.

---

##### `computeMaxInstanceSize`<sup>Optional</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMaxInstanceSize"></a>

```java
public java.lang.String getComputeMaxInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}.

---

##### `computeMinInstanceSize`<sup>Optional</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMinInstanceSize"></a>

```java
public java.lang.String getComputeMinInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}.

---

##### `computeScaleDownEnabled`<sup>Optional</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeScaleDownEnabled"></a>

```java
public java.lang.Object getComputeScaleDownEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}.

---

##### `diskGbEnabled`<sup>Optional</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.diskGbEnabled"></a>

```java
public java.lang.Object getDiskGbEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}.

---

### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs;

AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.builder()
    .instanceSize(java.lang.String)
//  .diskIops(java.lang.Number)
//  .ebsVolumeType(java.lang.String)
//  .nodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.diskIops">diskIops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}. |

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}.

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.diskIops"></a>

```java
public java.lang.Number getDiskIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}.

---

### AdvancedClusterReplicationSpecsRegionConfigsAutoScaling <a name="AdvancedClusterReplicationSpecsRegionConfigsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling;

AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.builder()
//  .computeEnabled(java.lang.Boolean)
//  .computeEnabled(IResolvable)
//  .computeMaxInstanceSize(java.lang.String)
//  .computeMinInstanceSize(java.lang.String)
//  .computeScaleDownEnabled(java.lang.Boolean)
//  .computeScaleDownEnabled(IResolvable)
//  .diskGbEnabled(java.lang.Boolean)
//  .diskGbEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeEnabled">computeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.diskGbEnabled">diskGbEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}. |

---

##### `computeEnabled`<sup>Optional</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeEnabled"></a>

```java
public java.lang.Object getComputeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}.

---

##### `computeMaxInstanceSize`<sup>Optional</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMaxInstanceSize"></a>

```java
public java.lang.String getComputeMaxInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}.

---

##### `computeMinInstanceSize`<sup>Optional</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMinInstanceSize"></a>

```java
public java.lang.String getComputeMinInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}.

---

##### `computeScaleDownEnabled`<sup>Optional</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeScaleDownEnabled"></a>

```java
public java.lang.Object getComputeScaleDownEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}.

---

##### `diskGbEnabled`<sup>Optional</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.diskGbEnabled"></a>

```java
public java.lang.Object getDiskGbEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}.

---

### AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs <a name="AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs;

AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.builder()
    .instanceSize(java.lang.String)
//  .diskIops(java.lang.Number)
//  .ebsVolumeType(java.lang.String)
//  .nodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.diskIops">diskIops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}. |

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}.

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.diskIops"></a>

```java
public java.lang.Number getDiskIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}.

---

### AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs <a name="AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs;

AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.builder()
    .instanceSize(java.lang.String)
//  .diskIops(java.lang.Number)
//  .ebsVolumeType(java.lang.String)
//  .nodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.diskIops">diskIops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}. |

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}.

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.diskIops"></a>

```java
public java.lang.Number getDiskIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}.

---

### AdvancedClusterTimeouts <a name="AdvancedClusterTimeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterTimeouts;

AdvancedClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#create AdvancedCluster#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#delete AdvancedCluster#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#update AdvancedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#create AdvancedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#delete AdvancedCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/advanced_cluster#update AdvancedCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdvancedClusterAdvancedConfigurationOutputReference <a name="AdvancedClusterAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterAdvancedConfigurationOutputReference;

new AdvancedClusterAdvancedConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern">resetDefaultReadConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern">resetDefaultWriteConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong">resetFailIndexKeyTooLong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled">resetJavascriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol">resetMinimumEnabledTlsProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetNoTableScan">resetNoTableScan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours">resetOplogMinRetentionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetOplogSizeMb">resetOplogSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector">resetSampleRefreshIntervalBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector">resetSampleSizeBiConnector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultReadConcern` <a name="resetDefaultReadConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern"></a>

```java
public void resetDefaultReadConcern()
```

##### `resetDefaultWriteConcern` <a name="resetDefaultWriteConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern"></a>

```java
public void resetDefaultWriteConcern()
```

##### `resetFailIndexKeyTooLong` <a name="resetFailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong"></a>

```java
public void resetFailIndexKeyTooLong()
```

##### `resetJavascriptEnabled` <a name="resetJavascriptEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled"></a>

```java
public void resetJavascriptEnabled()
```

##### `resetMinimumEnabledTlsProtocol` <a name="resetMinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol"></a>

```java
public void resetMinimumEnabledTlsProtocol()
```

##### `resetNoTableScan` <a name="resetNoTableScan" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetNoTableScan"></a>

```java
public void resetNoTableScan()
```

##### `resetOplogMinRetentionHours` <a name="resetOplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours"></a>

```java
public void resetOplogMinRetentionHours()
```

##### `resetOplogSizeMb` <a name="resetOplogSizeMb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetOplogSizeMb"></a>

```java
public void resetOplogSizeMb()
```

##### `resetSampleRefreshIntervalBiConnector` <a name="resetSampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector"></a>

```java
public void resetSampleRefreshIntervalBiConnector()
```

##### `resetSampleSizeBiConnector` <a name="resetSampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector"></a>

```java
public void resetSampleSizeBiConnector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput">defaultReadConcernInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput">defaultWriteConcernInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput">failIndexKeyTooLongInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput">javascriptEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput">minimumEnabledTlsProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScanInput">noTableScanInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput">oplogMinRetentionHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput">oplogSizeMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput">sampleRefreshIntervalBiConnectorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput">sampleSizeBiConnectorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern">defaultReadConcern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled">javascriptEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan">noTableScan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb">oplogSizeMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultReadConcernInput`<sup>Optional</sup> <a name="defaultReadConcernInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput"></a>

```java
public java.lang.String getDefaultReadConcernInput();
```

- *Type:* java.lang.String

---

##### `defaultWriteConcernInput`<sup>Optional</sup> <a name="defaultWriteConcernInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput"></a>

```java
public java.lang.String getDefaultWriteConcernInput();
```

- *Type:* java.lang.String

---

##### `failIndexKeyTooLongInput`<sup>Optional</sup> <a name="failIndexKeyTooLongInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput"></a>

```java
public java.lang.Object getFailIndexKeyTooLongInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javascriptEnabledInput`<sup>Optional</sup> <a name="javascriptEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput"></a>

```java
public java.lang.Object getJavascriptEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minimumEnabledTlsProtocolInput`<sup>Optional</sup> <a name="minimumEnabledTlsProtocolInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput"></a>

```java
public java.lang.String getMinimumEnabledTlsProtocolInput();
```

- *Type:* java.lang.String

---

##### `noTableScanInput`<sup>Optional</sup> <a name="noTableScanInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScanInput"></a>

```java
public java.lang.Object getNoTableScanInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oplogMinRetentionHoursInput`<sup>Optional</sup> <a name="oplogMinRetentionHoursInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput"></a>

```java
public java.lang.Number getOplogMinRetentionHoursInput();
```

- *Type:* java.lang.Number

---

##### `oplogSizeMbInput`<sup>Optional</sup> <a name="oplogSizeMbInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput"></a>

```java
public java.lang.Number getOplogSizeMbInput();
```

- *Type:* java.lang.Number

---

##### `sampleRefreshIntervalBiConnectorInput`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnectorInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput"></a>

```java
public java.lang.Number getSampleRefreshIntervalBiConnectorInput();
```

- *Type:* java.lang.Number

---

##### `sampleSizeBiConnectorInput`<sup>Optional</sup> <a name="sampleSizeBiConnectorInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput"></a>

```java
public java.lang.Number getSampleSizeBiConnectorInput();
```

- *Type:* java.lang.Number

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```java
public java.lang.String getDefaultReadConcern();
```

- *Type:* java.lang.String

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```java
public java.lang.String getDefaultWriteConcern();
```

- *Type:* java.lang.String

---

##### `failIndexKeyTooLong`<sup>Required</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```java
public java.lang.Object getFailIndexKeyTooLong();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javascriptEnabled`<sup>Required</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```java
public java.lang.Object getJavascriptEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minimumEnabledTlsProtocol`<sup>Required</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```java
public java.lang.String getMinimumEnabledTlsProtocol();
```

- *Type:* java.lang.String

---

##### `noTableScan`<sup>Required</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan"></a>

```java
public java.lang.Object getNoTableScan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oplogMinRetentionHours`<sup>Required</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```java
public java.lang.Number getOplogMinRetentionHours();
```

- *Type:* java.lang.Number

---

##### `oplogSizeMb`<sup>Required</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```java
public java.lang.Number getOplogSizeMb();
```

- *Type:* java.lang.Number

---

##### `sampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```java
public java.lang.Number getSampleRefreshIntervalBiConnector();
```

- *Type:* java.lang.Number

---

##### `sampleSizeBiConnector`<sup>Required</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```java
public java.lang.Number getSampleSizeBiConnector();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.internalValue"></a>

```java
public AdvancedClusterAdvancedConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

---


### AdvancedClusterBiConnectorConfigOutputReference <a name="AdvancedClusterBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterBiConnectorConfigOutputReference;

new AdvancedClusterBiConnectorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resetReadPreference">resetReadPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetReadPreference` <a name="resetReadPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resetReadPreference"></a>

```java
public void resetReadPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreferenceInput">readPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreference">readPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readPreferenceInput`<sup>Optional</sup> <a name="readPreferenceInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreferenceInput"></a>

```java
public java.lang.String getReadPreferenceInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreference"></a>

```java
public java.lang.String getReadPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.internalValue"></a>

```java
public AdvancedClusterBiConnectorConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

---


### AdvancedClusterBiConnectorOutputReference <a name="AdvancedClusterBiConnectorOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterBiConnectorOutputReference;

new AdvancedClusterBiConnectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.resetReadPreference">resetReadPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetReadPreference` <a name="resetReadPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.resetReadPreference"></a>

```java
public void resetReadPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.readPreferenceInput">readPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.readPreference">readPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readPreferenceInput`<sup>Optional</sup> <a name="readPreferenceInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.readPreferenceInput"></a>

```java
public java.lang.String getReadPreferenceInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.readPreference"></a>

```java
public java.lang.String getReadPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorOutputReference.property.internalValue"></a>

```java
public AdvancedClusterBiConnector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnector">AdvancedClusterBiConnector</a>

---


### AdvancedClusterConnectionStringsList <a name="AdvancedClusterConnectionStringsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsList;

new AdvancedClusterConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.get"></a>

```java
public AdvancedClusterConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AdvancedClusterConnectionStringsOutputReference <a name="AdvancedClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsOutputReference;

new AdvancedClusterConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.awsPrivateLink">awsPrivateLink</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.awsPrivateLinkSrv">awsPrivateLinkSrv</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.private">private</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList">AdvancedClusterConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateSrv">privateSrv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standard">standard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standardSrv">standardSrv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings">AdvancedClusterConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsPrivateLink`<sup>Required</sup> <a name="awsPrivateLink" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.awsPrivateLink"></a>

```java
public StringMap getAwsPrivateLink();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `awsPrivateLinkSrv`<sup>Required</sup> <a name="awsPrivateLinkSrv" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.awsPrivateLinkSrv"></a>

```java
public StringMap getAwsPrivateLinkSrv();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.private"></a>

```java
public java.lang.String getPrivate();
```

- *Type:* java.lang.String

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateEndpoint"></a>

```java
public AdvancedClusterConnectionStringsPrivateEndpointList getPrivateEndpoint();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList">AdvancedClusterConnectionStringsPrivateEndpointList</a>

---

##### `privateSrv`<sup>Required</sup> <a name="privateSrv" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateSrv"></a>

```java
public java.lang.String getPrivateSrv();
```

- *Type:* java.lang.String

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standard"></a>

```java
public java.lang.String getStandard();
```

- *Type:* java.lang.String

---

##### `standardSrv`<sup>Required</sup> <a name="standardSrv" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standardSrv"></a>

```java
public java.lang.String getStandardSrv();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.internalValue"></a>

```java
public AdvancedClusterConnectionStrings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings">AdvancedClusterConnectionStrings</a>

---


### AdvancedClusterConnectionStringsPrivateEndpointEndpointsList <a name="AdvancedClusterConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList;

new AdvancedClusterConnectionStringsPrivateEndpointEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get"></a>

```java
public AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference <a name="AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference;

new AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints">AdvancedClusterConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```java
public AdvancedClusterConnectionStringsPrivateEndpointEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints">AdvancedClusterConnectionStringsPrivateEndpointEndpoints</a>

---


### AdvancedClusterConnectionStringsPrivateEndpointList <a name="AdvancedClusterConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsPrivateEndpointList;

new AdvancedClusterConnectionStringsPrivateEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.get"></a>

```java
public AdvancedClusterConnectionStringsPrivateEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AdvancedClusterConnectionStringsPrivateEndpointOutputReference <a name="AdvancedClusterConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference;

new AdvancedClusterConnectionStringsPrivateEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList">AdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">srvConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint">AdvancedClusterConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```java
public AdvancedClusterConnectionStringsPrivateEndpointEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList">AdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `srvConnectionString`<sup>Required</sup> <a name="srvConnectionString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```java
public java.lang.String getSrvConnectionString();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```java
public AdvancedClusterConnectionStringsPrivateEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint">AdvancedClusterConnectionStringsPrivateEndpoint</a>

---


### AdvancedClusterLabelsList <a name="AdvancedClusterLabelsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterLabelsList;

new AdvancedClusterLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.get"></a>

```java
public AdvancedClusterLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>>

---


### AdvancedClusterLabelsOutputReference <a name="AdvancedClusterLabelsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterLabelsOutputReference;

new AdvancedClusterLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a> OR com.hashicorp.cdktf.IResolvable

---


### AdvancedClusterReplicationSpecsList <a name="AdvancedClusterReplicationSpecsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsList;

new AdvancedClusterReplicationSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.get"></a>

```java
public AdvancedClusterReplicationSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>>

---


### AdvancedClusterReplicationSpecsOutputReference <a name="AdvancedClusterReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsOutputReference;

new AdvancedClusterReplicationSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.putRegionConfigs">putRegionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resetNumShards">resetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionConfigs` <a name="putRegionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.putRegionConfigs"></a>

```java
public void putRegionConfigs(IResolvable OR java.util.List<AdvancedClusterReplicationSpecsRegionConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.putRegionConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>>

---

##### `resetNumShards` <a name="resetNumShards" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resetNumShards"></a>

```java
public void resetNumShards()
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resetZoneName"></a>

```java
public void resetZoneName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.containerId">containerId</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigs">regionConfigs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList">AdvancedClusterReplicationSpecsRegionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShardsInput">numShardsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigsInput">regionConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.containerId"></a>

```java
public StringMap getContainerId();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `regionConfigs`<sup>Required</sup> <a name="regionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigs"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsList getRegionConfigs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList">AdvancedClusterReplicationSpecsRegionConfigsList</a>

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShardsInput"></a>

```java
public java.lang.Number getNumShardsInput();
```

- *Type:* java.lang.Number

---

##### `regionConfigsInput`<sup>Optional</sup> <a name="regionConfigsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigsInput"></a>

```java
public java.lang.Object getRegionConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>>

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a> OR com.hashicorp.cdktf.IResolvable

---


### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference;

new AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeEnabled">resetComputeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeMaxInstanceSize">resetComputeMaxInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeMinInstanceSize">resetComputeMinInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeScaleDownEnabled">resetComputeScaleDownEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetDiskGbEnabled">resetDiskGbEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeEnabled` <a name="resetComputeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeEnabled"></a>

```java
public void resetComputeEnabled()
```

##### `resetComputeMaxInstanceSize` <a name="resetComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeMaxInstanceSize"></a>

```java
public void resetComputeMaxInstanceSize()
```

##### `resetComputeMinInstanceSize` <a name="resetComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeMinInstanceSize"></a>

```java
public void resetComputeMinInstanceSize()
```

##### `resetComputeScaleDownEnabled` <a name="resetComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeScaleDownEnabled"></a>

```java
public void resetComputeScaleDownEnabled()
```

##### `resetDiskGbEnabled` <a name="resetDiskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetDiskGbEnabled"></a>

```java
public void resetDiskGbEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabledInput">computeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSizeInput">computeMaxInstanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSizeInput">computeMinInstanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabledInput">computeScaleDownEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabledInput">diskGbEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeEnabledInput`<sup>Optional</sup> <a name="computeEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabledInput"></a>

```java
public java.lang.Object getComputeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computeMaxInstanceSizeInput`<sup>Optional</sup> <a name="computeMaxInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSizeInput"></a>

```java
public java.lang.String getComputeMaxInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `computeMinInstanceSizeInput`<sup>Optional</sup> <a name="computeMinInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSizeInput"></a>

```java
public java.lang.String getComputeMinInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `computeScaleDownEnabledInput`<sup>Optional</sup> <a name="computeScaleDownEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabledInput"></a>

```java
public java.lang.Object getComputeScaleDownEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskGbEnabledInput`<sup>Optional</sup> <a name="diskGbEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabledInput"></a>

```java
public java.lang.Object getDiskGbEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled"></a>

```java
public java.lang.Object getComputeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```java
public java.lang.String getComputeMaxInstanceSize();
```

- *Type:* java.lang.String

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```java
public java.lang.String getComputeMinInstanceSize();
```

- *Type:* java.lang.String

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```java
public java.lang.Object getComputeScaleDownEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled"></a>

```java
public java.lang.Object getDiskGbEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference;

new AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetDiskIops">resetDiskIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskIops` <a name="resetDiskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetDiskIops"></a>

```java
public void resetDiskIops()
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetEbsVolumeType"></a>

```java
public void resetEbsVolumeType()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIopsInput">diskIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskIopsInput`<sup>Optional</sup> <a name="diskIopsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIopsInput"></a>

```java
public java.lang.Number getDiskIopsInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeTypeInput"></a>

```java
public java.lang.String getEbsVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSizeInput"></a>

```java
public java.lang.String getInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops"></a>

```java
public java.lang.Number getDiskIops();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference;

new AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeEnabled">resetComputeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeMaxInstanceSize">resetComputeMaxInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeMinInstanceSize">resetComputeMinInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeScaleDownEnabled">resetComputeScaleDownEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetDiskGbEnabled">resetDiskGbEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeEnabled` <a name="resetComputeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeEnabled"></a>

```java
public void resetComputeEnabled()
```

##### `resetComputeMaxInstanceSize` <a name="resetComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeMaxInstanceSize"></a>

```java
public void resetComputeMaxInstanceSize()
```

##### `resetComputeMinInstanceSize` <a name="resetComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeMinInstanceSize"></a>

```java
public void resetComputeMinInstanceSize()
```

##### `resetComputeScaleDownEnabled` <a name="resetComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeScaleDownEnabled"></a>

```java
public void resetComputeScaleDownEnabled()
```

##### `resetDiskGbEnabled` <a name="resetDiskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetDiskGbEnabled"></a>

```java
public void resetDiskGbEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabledInput">computeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSizeInput">computeMaxInstanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSizeInput">computeMinInstanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabledInput">computeScaleDownEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabledInput">diskGbEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeEnabledInput`<sup>Optional</sup> <a name="computeEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabledInput"></a>

```java
public java.lang.Object getComputeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computeMaxInstanceSizeInput`<sup>Optional</sup> <a name="computeMaxInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSizeInput"></a>

```java
public java.lang.String getComputeMaxInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `computeMinInstanceSizeInput`<sup>Optional</sup> <a name="computeMinInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSizeInput"></a>

```java
public java.lang.String getComputeMinInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `computeScaleDownEnabledInput`<sup>Optional</sup> <a name="computeScaleDownEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabledInput"></a>

```java
public java.lang.Object getComputeScaleDownEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskGbEnabledInput`<sup>Optional</sup> <a name="diskGbEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabledInput"></a>

```java
public java.lang.Object getDiskGbEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled"></a>

```java
public java.lang.Object getComputeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```java
public java.lang.String getComputeMaxInstanceSize();
```

- *Type:* java.lang.String

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```java
public java.lang.String getComputeMinInstanceSize();
```

- *Type:* java.lang.String

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```java
public java.lang.Object getComputeScaleDownEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled"></a>

```java
public java.lang.Object getDiskGbEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference;

new AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetDiskIops">resetDiskIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskIops` <a name="resetDiskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetDiskIops"></a>

```java
public void resetDiskIops()
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetEbsVolumeType"></a>

```java
public void resetEbsVolumeType()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIopsInput">diskIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskIopsInput`<sup>Optional</sup> <a name="diskIopsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIopsInput"></a>

```java
public java.lang.Number getDiskIopsInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeTypeInput"></a>

```java
public java.lang.String getEbsVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSizeInput"></a>

```java
public java.lang.String getInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops"></a>

```java
public java.lang.Number getDiskIops();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsList <a name="AdvancedClusterReplicationSpecsRegionConfigsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsList;

new AdvancedClusterReplicationSpecsRegionConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.get"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>>

---


### AdvancedClusterReplicationSpecsRegionConfigsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference;

new AdvancedClusterReplicationSpecsRegionConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsAutoScaling">putAnalyticsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsSpecs">putAnalyticsSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putElectableSpecs">putElectableSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putReadOnlySpecs">putReadOnlySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAnalyticsAutoScaling">resetAnalyticsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAnalyticsSpecs">resetAnalyticsSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetBackingProviderName">resetBackingProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetElectableSpecs">resetElectableSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetReadOnlySpecs">resetReadOnlySpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalyticsAutoScaling` <a name="putAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsAutoScaling"></a>

```java
public void putAnalyticsAutoScaling(AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---

##### `putAnalyticsSpecs` <a name="putAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsSpecs"></a>

```java
public void putAnalyticsSpecs(AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsSpecs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAutoScaling"></a>

```java
public void putAutoScaling(AdvancedClusterReplicationSpecsRegionConfigsAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---

##### `putElectableSpecs` <a name="putElectableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putElectableSpecs"></a>

```java
public void putElectableSpecs(AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putElectableSpecs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---

##### `putReadOnlySpecs` <a name="putReadOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putReadOnlySpecs"></a>

```java
public void putReadOnlySpecs(AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putReadOnlySpecs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---

##### `resetAnalyticsAutoScaling` <a name="resetAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAnalyticsAutoScaling"></a>

```java
public void resetAnalyticsAutoScaling()
```

##### `resetAnalyticsSpecs` <a name="resetAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAnalyticsSpecs"></a>

```java
public void resetAnalyticsSpecs()
```

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAutoScaling"></a>

```java
public void resetAutoScaling()
```

##### `resetBackingProviderName` <a name="resetBackingProviderName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetBackingProviderName"></a>

```java
public void resetBackingProviderName()
```

##### `resetElectableSpecs` <a name="resetElectableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetElectableSpecs"></a>

```java
public void resetElectableSpecs()
```

##### `resetReadOnlySpecs` <a name="resetReadOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetReadOnlySpecs"></a>

```java
public void resetReadOnlySpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs">analyticsSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs">electableSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs">readOnlySpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScalingInput">analyticsAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecsInput">analyticsSpecsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderNameInput">backingProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecsInput">electableSpecsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecsInput">readOnlySpecsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName">backingProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `analyticsAutoScaling`<sup>Required</sup> <a name="analyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference getAnalyticsAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference</a>

---

##### `analyticsSpecs`<sup>Required</sup> <a name="analyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference getAnalyticsSpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference</a>

---

##### `electableSpecs`<sup>Required</sup> <a name="electableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference getElectableSpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference</a>

---

##### `readOnlySpecs`<sup>Required</sup> <a name="readOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference getReadOnlySpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference</a>

---

##### `analyticsAutoScalingInput`<sup>Optional</sup> <a name="analyticsAutoScalingInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScalingInput"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling getAnalyticsAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---

##### `analyticsSpecsInput`<sup>Optional</sup> <a name="analyticsSpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecsInput"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs getAnalyticsSpecsInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScalingInput"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsAutoScaling getAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---

##### `backingProviderNameInput`<sup>Optional</sup> <a name="backingProviderNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderNameInput"></a>

```java
public java.lang.String getBackingProviderNameInput();
```

- *Type:* java.lang.String

---

##### `electableSpecsInput`<sup>Optional</sup> <a name="electableSpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecsInput"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs getElectableSpecsInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `readOnlySpecsInput`<sup>Optional</sup> <a name="readOnlySpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecsInput"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs getReadOnlySpecsInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `backingProviderName`<sup>Required</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName"></a>

```java
public java.lang.String getBackingProviderName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a> OR com.hashicorp.cdktf.IResolvable

---


### AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference;

new AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetDiskIops">resetDiskIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskIops` <a name="resetDiskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetDiskIops"></a>

```java
public void resetDiskIops()
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetEbsVolumeType"></a>

```java
public void resetEbsVolumeType()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIopsInput">diskIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops">diskIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskIopsInput`<sup>Optional</sup> <a name="diskIopsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIopsInput"></a>

```java
public java.lang.Number getDiskIopsInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeTypeInput"></a>

```java
public java.lang.String getEbsVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSizeInput"></a>

```java
public java.lang.String getInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops"></a>

```java
public java.lang.Number getDiskIops();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue"></a>

```java
public AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---


### AdvancedClusterTimeoutsOutputReference <a name="AdvancedClusterTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.advanced_cluster.AdvancedClusterTimeoutsOutputReference;

new AdvancedClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



