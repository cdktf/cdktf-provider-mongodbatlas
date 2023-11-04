# `mongodbatlas_cluster`

Refer to the Terraform Registory for docs: [`mongodbatlas_cluster`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster).

# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-mongodbatlas.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-mongodbatlas.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster mongodbatlas_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.Cluster;

Cluster.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .projectId(java.lang.String)
    .providerInstanceSizeName(java.lang.String)
    .providerName(java.lang.String)
//  .acceptDataRisksAndForceReplicaSetReconfig(java.lang.String)
//  .advancedConfiguration(IResolvable)
//  .advancedConfiguration(java.util.List<ClusterAdvancedConfiguration>)
//  .autoScalingComputeEnabled(java.lang.Boolean)
//  .autoScalingComputeEnabled(IResolvable)
//  .autoScalingComputeScaleDownEnabled(java.lang.Boolean)
//  .autoScalingComputeScaleDownEnabled(IResolvable)
//  .autoScalingDiskGbEnabled(java.lang.Boolean)
//  .autoScalingDiskGbEnabled(IResolvable)
//  .backingProviderName(java.lang.String)
//  .backupEnabled(java.lang.Boolean)
//  .backupEnabled(IResolvable)
//  .biConnectorConfig(IResolvable)
//  .biConnectorConfig(java.util.List<ClusterBiConnectorConfig>)
//  .cloudBackup(java.lang.Boolean)
//  .cloudBackup(IResolvable)
//  .clusterType(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .encryptionAtRestProvider(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<ClusterLabels>)
//  .mongoDbMajorVersion(java.lang.String)
//  .numShards(java.lang.Number)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .pitEnabled(java.lang.Boolean)
//  .pitEnabled(IResolvable)
//  .providerAutoScalingComputeMaxInstanceSize(java.lang.String)
//  .providerAutoScalingComputeMinInstanceSize(java.lang.String)
//  .providerDiskIops(java.lang.Number)
//  .providerDiskTypeName(java.lang.String)
//  .providerEncryptEbsVolume(java.lang.Boolean)
//  .providerEncryptEbsVolume(IResolvable)
//  .providerRegionName(java.lang.String)
//  .providerVolumeType(java.lang.String)
//  .replicationFactor(java.lang.Number)
//  .replicationSpecs(IResolvable)
//  .replicationSpecs(java.util.List<ClusterReplicationSpecs>)
//  .retainBackupsEnabled(java.lang.Boolean)
//  .retainBackupsEnabled(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<ClusterTags>)
//  .terminationProtectionEnabled(java.lang.Boolean)
//  .terminationProtectionEnabled(IResolvable)
//  .timeouts(ClusterTimeouts)
//  .versionReleaseSystem(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#name Cluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#project_id Cluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerInstanceSizeName">providerInstanceSizeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_name Cluster#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.acceptDataRisksAndForceReplicaSetReconfig">acceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>java.lang.String</code> | Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.advancedConfiguration">advancedConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#advanced_configuration Cluster#advanced_configuration}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.autoScalingComputeEnabled">autoScalingComputeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.autoScalingComputeScaleDownEnabled">autoScalingComputeScaleDownEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.autoScalingDiskGbEnabled">autoScalingDiskGbEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.backingProviderName">backingProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.backupEnabled">backupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.biConnectorConfig">biConnectorConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#bi_connector_config Cluster#bi_connector_config}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.cloudBackup">cloudBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cloud_backup Cluster#cloud_backup}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cluster_type Cluster#cluster_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.numShards">numShards</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#num_shards Cluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#paused Cluster#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#pit_enabled Cluster#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerAutoScalingComputeMaxInstanceSize">providerAutoScalingComputeMaxInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerAutoScalingComputeMinInstanceSize">providerAutoScalingComputeMinInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerDiskIops">providerDiskIops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerDiskTypeName">providerDiskTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerEncryptEbsVolume">providerEncryptEbsVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerRegionName">providerRegionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_region_name Cluster#provider_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerVolumeType">providerVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#replication_factor Cluster#replication_factor}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.replicationSpecs">replicationSpecs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>></code> | replication_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.retainBackupsEnabled">retainBackupsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.versionReleaseSystem">versionReleaseSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#version_release_system Cluster#version_release_system}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#name Cluster#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#project_id Cluster#project_id}.

---

##### `providerInstanceSizeName`<sup>Required</sup> <a name="providerInstanceSizeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerInstanceSizeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_name Cluster#provider_name}.

---

##### `acceptDataRisksAndForceReplicaSetReconfig`<sup>Optional</sup> <a name="acceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.acceptDataRisksAndForceReplicaSetReconfig"></a>

- *Type:* java.lang.String

Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#accept_data_risks_and_force_replica_set_reconfig Cluster#accept_data_risks_and_force_replica_set_reconfig}

---

##### `advancedConfiguration`<sup>Optional</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.advancedConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#advanced_configuration Cluster#advanced_configuration}.

---

##### `autoScalingComputeEnabled`<sup>Optional</sup> <a name="autoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.autoScalingComputeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}.

---

##### `autoScalingComputeScaleDownEnabled`<sup>Optional</sup> <a name="autoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.autoScalingComputeScaleDownEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}.

---

##### `autoScalingDiskGbEnabled`<sup>Optional</sup> <a name="autoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.autoScalingDiskGbEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}.

---

##### `backingProviderName`<sup>Optional</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.backingProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}.

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.backupEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#backup_enabled Cluster#backup_enabled}

---

##### `biConnectorConfig`<sup>Optional</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.biConnectorConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#bi_connector_config Cluster#bi_connector_config}.

---

##### `cloudBackup`<sup>Optional</sup> <a name="cloudBackup" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.cloudBackup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cloud_backup Cluster#cloud_backup}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cluster_type Cluster#cluster_type}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.diskSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.encryptionAtRestProvider"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#labels Cluster#labels}

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.mongoDbMajorVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}.

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.numShards"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#num_shards Cluster#num_shards}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#paused Cluster#paused}.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.pitEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#pit_enabled Cluster#pit_enabled}.

---

##### `providerAutoScalingComputeMaxInstanceSize`<sup>Optional</sup> <a name="providerAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerAutoScalingComputeMaxInstanceSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}.

---

##### `providerAutoScalingComputeMinInstanceSize`<sup>Optional</sup> <a name="providerAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerAutoScalingComputeMinInstanceSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}.

---

##### `providerDiskIops`<sup>Optional</sup> <a name="providerDiskIops" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerDiskIops"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}.

---

##### `providerDiskTypeName`<sup>Optional</sup> <a name="providerDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerDiskTypeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}.

---

##### `providerEncryptEbsVolume`<sup>Optional</sup> <a name="providerEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerEncryptEbsVolume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}.

---

##### `providerRegionName`<sup>Optional</sup> <a name="providerRegionName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerRegionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_region_name Cluster#provider_region_name}.

---

##### `providerVolumeType`<sup>Optional</sup> <a name="providerVolumeType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.providerVolumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#replication_factor Cluster#replication_factor}.

---

##### `replicationSpecs`<sup>Optional</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.replicationSpecs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>>

replication_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#replication_specs Cluster#replication_specs}

---

##### `retainBackupsEnabled`<sup>Optional</sup> <a name="retainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.retainBackupsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#retain_backups_enabled Cluster#retain_backups_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#tags Cluster#tags}

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.terminationProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.versionReleaseSystem"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#version_release_system Cluster#version_release_system}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration">putAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig">putBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs">putReplicationSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAcceptDataRisksAndForceReplicaSetReconfig">resetAcceptDataRisksAndForceReplicaSetReconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAdvancedConfiguration">resetAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeEnabled">resetAutoScalingComputeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeScaleDownEnabled">resetAutoScalingComputeScaleDownEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingDiskGbEnabled">resetAutoScalingDiskGbEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackingProviderName">resetBackingProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackupEnabled">resetBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetBiConnectorConfig">resetBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetCloudBackup">resetCloudBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetEncryptionAtRestProvider">resetEncryptionAtRestProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetMongoDbMajorVersion">resetMongoDbMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetNumShards">resetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetPitEnabled">resetPitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMaxInstanceSize">resetProviderAutoScalingComputeMaxInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMinInstanceSize">resetProviderAutoScalingComputeMinInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskIops">resetProviderDiskIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskTypeName">resetProviderDiskTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderEncryptEbsVolume">resetProviderEncryptEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderRegionName">resetProviderRegionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderVolumeType">resetProviderVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationSpecs">resetReplicationSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetRetainBackupsEnabled">resetRetainBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetVersionReleaseSystem">resetVersionReleaseSystem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAdvancedConfiguration` <a name="putAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration"></a>

```java
public void putAdvancedConfiguration(IResolvable OR java.util.List<ClusterAdvancedConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>>

---

##### `putBiConnectorConfig` <a name="putBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig"></a>

```java
public void putBiConnectorConfig(IResolvable OR java.util.List<ClusterBiConnectorConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<ClusterLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>>

---

##### `putReplicationSpecs` <a name="putReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs"></a>

```java
public void putReplicationSpecs(IResolvable OR java.util.List<ClusterReplicationSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<ClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts"></a>

```java
public void putTimeouts(ClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `resetAcceptDataRisksAndForceReplicaSetReconfig` <a name="resetAcceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAcceptDataRisksAndForceReplicaSetReconfig"></a>

```java
public void resetAcceptDataRisksAndForceReplicaSetReconfig()
```

##### `resetAdvancedConfiguration` <a name="resetAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAdvancedConfiguration"></a>

```java
public void resetAdvancedConfiguration()
```

##### `resetAutoScalingComputeEnabled` <a name="resetAutoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeEnabled"></a>

```java
public void resetAutoScalingComputeEnabled()
```

##### `resetAutoScalingComputeScaleDownEnabled` <a name="resetAutoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeScaleDownEnabled"></a>

```java
public void resetAutoScalingComputeScaleDownEnabled()
```

##### `resetAutoScalingDiskGbEnabled` <a name="resetAutoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingDiskGbEnabled"></a>

```java
public void resetAutoScalingDiskGbEnabled()
```

##### `resetBackingProviderName` <a name="resetBackingProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackingProviderName"></a>

```java
public void resetBackingProviderName()
```

##### `resetBackupEnabled` <a name="resetBackupEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackupEnabled"></a>

```java
public void resetBackupEnabled()
```

##### `resetBiConnectorConfig` <a name="resetBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBiConnectorConfig"></a>

```java
public void resetBiConnectorConfig()
```

##### `resetCloudBackup` <a name="resetCloudBackup" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetCloudBackup"></a>

```java
public void resetCloudBackup()
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetClusterType"></a>

```java
public void resetClusterType()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetEncryptionAtRestProvider` <a name="resetEncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetEncryptionAtRestProvider"></a>

```java
public void resetEncryptionAtRestProvider()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMongoDbMajorVersion` <a name="resetMongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetMongoDbMajorVersion"></a>

```java
public void resetMongoDbMajorVersion()
```

##### `resetNumShards` <a name="resetNumShards" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetNumShards"></a>

```java
public void resetNumShards()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetPitEnabled` <a name="resetPitEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetPitEnabled"></a>

```java
public void resetPitEnabled()
```

##### `resetProviderAutoScalingComputeMaxInstanceSize` <a name="resetProviderAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMaxInstanceSize"></a>

```java
public void resetProviderAutoScalingComputeMaxInstanceSize()
```

##### `resetProviderAutoScalingComputeMinInstanceSize` <a name="resetProviderAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMinInstanceSize"></a>

```java
public void resetProviderAutoScalingComputeMinInstanceSize()
```

##### `resetProviderDiskIops` <a name="resetProviderDiskIops" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskIops"></a>

```java
public void resetProviderDiskIops()
```

##### `resetProviderDiskTypeName` <a name="resetProviderDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskTypeName"></a>

```java
public void resetProviderDiskTypeName()
```

##### `resetProviderEncryptEbsVolume` <a name="resetProviderEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderEncryptEbsVolume"></a>

```java
public void resetProviderEncryptEbsVolume()
```

##### `resetProviderRegionName` <a name="resetProviderRegionName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderRegionName"></a>

```java
public void resetProviderRegionName()
```

##### `resetProviderVolumeType` <a name="resetProviderVolumeType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderVolumeType"></a>

```java
public void resetProviderVolumeType()
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationFactor"></a>

```java
public void resetReplicationFactor()
```

##### `resetReplicationSpecs` <a name="resetReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationSpecs"></a>

```java
public void resetReplicationSpecs()
```

##### `resetRetainBackupsEnabled` <a name="resetRetainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetRetainBackupsEnabled"></a>

```java
public void resetRetainBackupsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTerminationProtectionEnabled"></a>

```java
public void resetTerminationProtectionEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionReleaseSystem` <a name="resetVersionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetVersionReleaseSystem"></a>

```java
public void resetVersionReleaseSystem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.Cluster;

Cluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.Cluster;

Cluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.Cluster;

Cluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.Cluster;

Cluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Cluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Cluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList">ClusterAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList">ClusterBiConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList">ClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList">ClusterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbVersion">mongoDbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUri">mongoUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriUpdated">mongoUriUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriWithOptions">mongoUriWithOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeFlag">providerEncryptEbsVolumeFlag</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList">ClusterReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.snapshotBackupPolicy">snapshotBackupPolicy</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList">ClusterSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.srvAddress">srvAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.stateName">stateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList">ClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfigInput">acceptDataRisksAndForceReplicaSetReconfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfigurationInput">advancedConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabledInput">autoScalingComputeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabledInput">autoScalingComputeScaleDownEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabledInput">autoScalingDiskGbEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderNameInput">backingProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabledInput">backupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfigInput">biConnectorConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackupInput">cloudBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProviderInput">encryptionAtRestProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersionInput">mongoDbMajorVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShardsInput">numShardsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabledInput">pitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSizeInput">providerAutoScalingComputeMaxInstanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSizeInput">providerAutoScalingComputeMinInstanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIopsInput">providerDiskIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeNameInput">providerDiskTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeInput">providerEncryptEbsVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeNameInput">providerInstanceSizeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionNameInput">providerRegionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeTypeInput">providerVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecsInput">replicationSpecsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabledInput">retainBackupsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystemInput">versionReleaseSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfig">acceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabled">autoScalingComputeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabled">autoScalingComputeScaleDownEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabled">autoScalingDiskGbEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderName">backingProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabled">backupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackup">cloudBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSize">providerAutoScalingComputeMaxInstanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSize">providerAutoScalingComputeMinInstanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIops">providerDiskIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeName">providerDiskTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolume">providerEncryptEbsVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeName">providerInstanceSizeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionName">providerRegionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeType">providerVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabled">retainBackupsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfiguration"></a>

```java
public ClusterAdvancedConfigurationList getAdvancedConfiguration();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList">ClusterAdvancedConfigurationList</a>

---

##### `biConnectorConfig`<sup>Required</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfig"></a>

```java
public ClusterBiConnectorConfigList getBiConnectorConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList">ClusterBiConnectorConfigList</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.connectionStrings"></a>

```java
public ClusterConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList">ClusterConnectionStringsList</a>

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.labels"></a>

```java
public ClusterLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList">ClusterLabelsList</a>

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbVersion"></a>

```java
public java.lang.String getMongoDbVersion();
```

- *Type:* java.lang.String

---

##### `mongoUri`<sup>Required</sup> <a name="mongoUri" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUri"></a>

```java
public java.lang.String getMongoUri();
```

- *Type:* java.lang.String

---

##### `mongoUriUpdated`<sup>Required</sup> <a name="mongoUriUpdated" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriUpdated"></a>

```java
public java.lang.String getMongoUriUpdated();
```

- *Type:* java.lang.String

---

##### `mongoUriWithOptions`<sup>Required</sup> <a name="mongoUriWithOptions" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriWithOptions"></a>

```java
public java.lang.String getMongoUriWithOptions();
```

- *Type:* java.lang.String

---

##### `providerEncryptEbsVolumeFlag`<sup>Required</sup> <a name="providerEncryptEbsVolumeFlag" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeFlag"></a>

```java
public IResolvable getProviderEncryptEbsVolumeFlag();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecs"></a>

```java
public ClusterReplicationSpecsList getReplicationSpecs();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList">ClusterReplicationSpecsList</a>

---

##### `snapshotBackupPolicy`<sup>Required</sup> <a name="snapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.snapshotBackupPolicy"></a>

```java
public ClusterSnapshotBackupPolicyList getSnapshotBackupPolicy();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList">ClusterSnapshotBackupPolicyList</a>

---

##### `srvAddress`<sup>Required</sup> <a name="srvAddress" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.srvAddress"></a>

```java
public java.lang.String getSrvAddress();
```

- *Type:* java.lang.String

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.stateName"></a>

```java
public java.lang.String getStateName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tags"></a>

```java
public ClusterTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList">ClusterTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeouts"></a>

```java
public ClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `acceptDataRisksAndForceReplicaSetReconfigInput`<sup>Optional</sup> <a name="acceptDataRisksAndForceReplicaSetReconfigInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfigInput"></a>

```java
public java.lang.String getAcceptDataRisksAndForceReplicaSetReconfigInput();
```

- *Type:* java.lang.String

---

##### `advancedConfigurationInput`<sup>Optional</sup> <a name="advancedConfigurationInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfigurationInput"></a>

```java
public java.lang.Object getAdvancedConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>>

---

##### `autoScalingComputeEnabledInput`<sup>Optional</sup> <a name="autoScalingComputeEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabledInput"></a>

```java
public java.lang.Object getAutoScalingComputeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoScalingComputeScaleDownEnabledInput`<sup>Optional</sup> <a name="autoScalingComputeScaleDownEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabledInput"></a>

```java
public java.lang.Object getAutoScalingComputeScaleDownEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoScalingDiskGbEnabledInput`<sup>Optional</sup> <a name="autoScalingDiskGbEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabledInput"></a>

```java
public java.lang.Object getAutoScalingDiskGbEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backingProviderNameInput`<sup>Optional</sup> <a name="backingProviderNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderNameInput"></a>

```java
public java.lang.String getBackingProviderNameInput();
```

- *Type:* java.lang.String

---

##### `backupEnabledInput`<sup>Optional</sup> <a name="backupEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabledInput"></a>

```java
public java.lang.Object getBackupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `biConnectorConfigInput`<sup>Optional</sup> <a name="biConnectorConfigInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfigInput"></a>

```java
public java.lang.Object getBiConnectorConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>>

---

##### `cloudBackupInput`<sup>Optional</sup> <a name="cloudBackupInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackupInput"></a>

```java
public java.lang.Object getCloudBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `encryptionAtRestProviderInput`<sup>Optional</sup> <a name="encryptionAtRestProviderInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProviderInput"></a>

```java
public java.lang.String getEncryptionAtRestProviderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>>

---

##### `mongoDbMajorVersionInput`<sup>Optional</sup> <a name="mongoDbMajorVersionInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersionInput"></a>

```java
public java.lang.String getMongoDbMajorVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShardsInput"></a>

```java
public java.lang.Number getNumShardsInput();
```

- *Type:* java.lang.Number

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pitEnabledInput`<sup>Optional</sup> <a name="pitEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabledInput"></a>

```java
public java.lang.Object getPitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerAutoScalingComputeMaxInstanceSizeInput`<sup>Optional</sup> <a name="providerAutoScalingComputeMaxInstanceSizeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSizeInput"></a>

```java
public java.lang.String getProviderAutoScalingComputeMaxInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `providerAutoScalingComputeMinInstanceSizeInput`<sup>Optional</sup> <a name="providerAutoScalingComputeMinInstanceSizeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSizeInput"></a>

```java
public java.lang.String getProviderAutoScalingComputeMinInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `providerDiskIopsInput`<sup>Optional</sup> <a name="providerDiskIopsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIopsInput"></a>

```java
public java.lang.Number getProviderDiskIopsInput();
```

- *Type:* java.lang.Number

---

##### `providerDiskTypeNameInput`<sup>Optional</sup> <a name="providerDiskTypeNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeNameInput"></a>

```java
public java.lang.String getProviderDiskTypeNameInput();
```

- *Type:* java.lang.String

---

##### `providerEncryptEbsVolumeInput`<sup>Optional</sup> <a name="providerEncryptEbsVolumeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeInput"></a>

```java
public java.lang.Object getProviderEncryptEbsVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `providerInstanceSizeNameInput`<sup>Optional</sup> <a name="providerInstanceSizeNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeNameInput"></a>

```java
public java.lang.String getProviderInstanceSizeNameInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `providerRegionNameInput`<sup>Optional</sup> <a name="providerRegionNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionNameInput"></a>

```java
public java.lang.String getProviderRegionNameInput();
```

- *Type:* java.lang.String

---

##### `providerVolumeTypeInput`<sup>Optional</sup> <a name="providerVolumeTypeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeTypeInput"></a>

```java
public java.lang.String getProviderVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `replicationSpecsInput`<sup>Optional</sup> <a name="replicationSpecsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecsInput"></a>

```java
public java.lang.Object getReplicationSpecsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>>

---

##### `retainBackupsEnabledInput`<sup>Optional</sup> <a name="retainBackupsEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabledInput"></a>

```java
public java.lang.Object getRetainBackupsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>>

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabledInput"></a>

```java
public java.lang.Object getTerminationProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `versionReleaseSystemInput`<sup>Optional</sup> <a name="versionReleaseSystemInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystemInput"></a>

```java
public java.lang.String getVersionReleaseSystemInput();
```

- *Type:* java.lang.String

---

##### `acceptDataRisksAndForceReplicaSetReconfig`<sup>Required</sup> <a name="acceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```java
public java.lang.String getAcceptDataRisksAndForceReplicaSetReconfig();
```

- *Type:* java.lang.String

---

##### `autoScalingComputeEnabled`<sup>Required</sup> <a name="autoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabled"></a>

```java
public java.lang.Object getAutoScalingComputeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoScalingComputeScaleDownEnabled`<sup>Required</sup> <a name="autoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabled"></a>

```java
public java.lang.Object getAutoScalingComputeScaleDownEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoScalingDiskGbEnabled`<sup>Required</sup> <a name="autoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabled"></a>

```java
public java.lang.Object getAutoScalingDiskGbEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backingProviderName`<sup>Required</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderName"></a>

```java
public java.lang.String getBackingProviderName();
```

- *Type:* java.lang.String

---

##### `backupEnabled`<sup>Required</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabled"></a>

```java
public java.lang.Object getBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudBackup`<sup>Required</sup> <a name="cloudBackup" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackup"></a>

```java
public java.lang.Object getCloudBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `encryptionAtRestProvider`<sup>Required</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProvider"></a>

```java
public java.lang.String getEncryptionAtRestProvider();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mongoDbMajorVersion`<sup>Required</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersion"></a>

```java
public java.lang.String getMongoDbMajorVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabled"></a>

```java
public java.lang.Object getPitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerAutoScalingComputeMaxInstanceSize`<sup>Required</sup> <a name="providerAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSize"></a>

```java
public java.lang.String getProviderAutoScalingComputeMaxInstanceSize();
```

- *Type:* java.lang.String

---

##### `providerAutoScalingComputeMinInstanceSize`<sup>Required</sup> <a name="providerAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSize"></a>

```java
public java.lang.String getProviderAutoScalingComputeMinInstanceSize();
```

- *Type:* java.lang.String

---

##### `providerDiskIops`<sup>Required</sup> <a name="providerDiskIops" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIops"></a>

```java
public java.lang.Number getProviderDiskIops();
```

- *Type:* java.lang.Number

---

##### `providerDiskTypeName`<sup>Required</sup> <a name="providerDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeName"></a>

```java
public java.lang.String getProviderDiskTypeName();
```

- *Type:* java.lang.String

---

##### `providerEncryptEbsVolume`<sup>Required</sup> <a name="providerEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolume"></a>

```java
public java.lang.Object getProviderEncryptEbsVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `providerInstanceSizeName`<sup>Required</sup> <a name="providerInstanceSizeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeName"></a>

```java
public java.lang.String getProviderInstanceSizeName();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `providerRegionName`<sup>Required</sup> <a name="providerRegionName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionName"></a>

```java
public java.lang.String getProviderRegionName();
```

- *Type:* java.lang.String

---

##### `providerVolumeType`<sup>Required</sup> <a name="providerVolumeType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeType"></a>

```java
public java.lang.String getProviderVolumeType();
```

- *Type:* java.lang.String

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `retainBackupsEnabled`<sup>Required</sup> <a name="retainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabled"></a>

```java
public java.lang.Object getRetainBackupsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabled"></a>

```java
public java.lang.Object getTerminationProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionReleaseSystem`<sup>Required</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystem"></a>

```java
public java.lang.String getVersionReleaseSystem();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAdvancedConfiguration <a name="ClusterAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterAdvancedConfiguration;

ClusterAdvancedConfiguration.builder()
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
//  .transactionLifetimeLimitSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultReadConcern">defaultReadConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#default_read_concern Cluster#default_read_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#default_write_concern Cluster#default_write_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#fail_index_key_too_long Cluster#fail_index_key_too_long}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.javascriptEnabled">javascriptEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#javascript_enabled Cluster#javascript_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#minimum_enabled_tls_protocol Cluster#minimum_enabled_tls_protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.noTableScan">noTableScan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#no_table_scan Cluster#no_table_scan}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#oplog_min_retention_hours Cluster#oplog_min_retention_hours}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogSizeMb">oplogSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#oplog_size_mb Cluster#oplog_size_mb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#sample_refresh_interval_bi_connector Cluster#sample_refresh_interval_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#sample_size_bi_connector Cluster#sample_size_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#transaction_lifetime_limit_seconds Cluster#transaction_lifetime_limit_seconds}. |

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultReadConcern"></a>

```java
public java.lang.String getDefaultReadConcern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#default_read_concern Cluster#default_read_concern}.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultWriteConcern"></a>

```java
public java.lang.String getDefaultWriteConcern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#default_write_concern Cluster#default_write_concern}.

---

##### `failIndexKeyTooLong`<sup>Optional</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.failIndexKeyTooLong"></a>

```java
public java.lang.Object getFailIndexKeyTooLong();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#fail_index_key_too_long Cluster#fail_index_key_too_long}.

---

##### `javascriptEnabled`<sup>Optional</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.javascriptEnabled"></a>

```java
public java.lang.Object getJavascriptEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#javascript_enabled Cluster#javascript_enabled}.

---

##### `minimumEnabledTlsProtocol`<sup>Optional</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol"></a>

```java
public java.lang.String getMinimumEnabledTlsProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#minimum_enabled_tls_protocol Cluster#minimum_enabled_tls_protocol}.

---

##### `noTableScan`<sup>Optional</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.noTableScan"></a>

```java
public java.lang.Object getNoTableScan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#no_table_scan Cluster#no_table_scan}.

---

##### `oplogMinRetentionHours`<sup>Optional</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogMinRetentionHours"></a>

```java
public java.lang.Number getOplogMinRetentionHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#oplog_min_retention_hours Cluster#oplog_min_retention_hours}.

---

##### `oplogSizeMb`<sup>Optional</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogSizeMb"></a>

```java
public java.lang.Number getOplogSizeMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#oplog_size_mb Cluster#oplog_size_mb}.

---

##### `sampleRefreshIntervalBiConnector`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector"></a>

```java
public java.lang.Number getSampleRefreshIntervalBiConnector();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#sample_refresh_interval_bi_connector Cluster#sample_refresh_interval_bi_connector}.

---

##### `sampleSizeBiConnector`<sup>Optional</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleSizeBiConnector"></a>

```java
public java.lang.Number getSampleSizeBiConnector();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#sample_size_bi_connector Cluster#sample_size_bi_connector}.

---

##### `transactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds"></a>

```java
public java.lang.Number getTransactionLifetimeLimitSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#transaction_lifetime_limit_seconds Cluster#transaction_lifetime_limit_seconds}.

---

### ClusterBiConnectorConfig <a name="ClusterBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterBiConnectorConfig;

ClusterBiConnectorConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .readPreference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#enabled Cluster#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.readPreference">readPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#read_preference Cluster#read_preference}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#enabled Cluster#enabled}.

---

##### `readPreference`<sup>Optional</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.readPreference"></a>

```java
public java.lang.String getReadPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#read_preference Cluster#read_preference}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConfig;

ClusterConfig.builder()
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
    .name(java.lang.String)
    .projectId(java.lang.String)
    .providerInstanceSizeName(java.lang.String)
    .providerName(java.lang.String)
//  .acceptDataRisksAndForceReplicaSetReconfig(java.lang.String)
//  .advancedConfiguration(IResolvable)
//  .advancedConfiguration(java.util.List<ClusterAdvancedConfiguration>)
//  .autoScalingComputeEnabled(java.lang.Boolean)
//  .autoScalingComputeEnabled(IResolvable)
//  .autoScalingComputeScaleDownEnabled(java.lang.Boolean)
//  .autoScalingComputeScaleDownEnabled(IResolvable)
//  .autoScalingDiskGbEnabled(java.lang.Boolean)
//  .autoScalingDiskGbEnabled(IResolvable)
//  .backingProviderName(java.lang.String)
//  .backupEnabled(java.lang.Boolean)
//  .backupEnabled(IResolvable)
//  .biConnectorConfig(IResolvable)
//  .biConnectorConfig(java.util.List<ClusterBiConnectorConfig>)
//  .cloudBackup(java.lang.Boolean)
//  .cloudBackup(IResolvable)
//  .clusterType(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .encryptionAtRestProvider(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<ClusterLabels>)
//  .mongoDbMajorVersion(java.lang.String)
//  .numShards(java.lang.Number)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .pitEnabled(java.lang.Boolean)
//  .pitEnabled(IResolvable)
//  .providerAutoScalingComputeMaxInstanceSize(java.lang.String)
//  .providerAutoScalingComputeMinInstanceSize(java.lang.String)
//  .providerDiskIops(java.lang.Number)
//  .providerDiskTypeName(java.lang.String)
//  .providerEncryptEbsVolume(java.lang.Boolean)
//  .providerEncryptEbsVolume(IResolvable)
//  .providerRegionName(java.lang.String)
//  .providerVolumeType(java.lang.String)
//  .replicationFactor(java.lang.Number)
//  .replicationSpecs(IResolvable)
//  .replicationSpecs(java.util.List<ClusterReplicationSpecs>)
//  .retainBackupsEnabled(java.lang.Boolean)
//  .retainBackupsEnabled(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<ClusterTags>)
//  .terminationProtectionEnabled(java.lang.Boolean)
//  .terminationProtectionEnabled(IResolvable)
//  .timeouts(ClusterTimeouts)
//  .versionReleaseSystem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#name Cluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#project_id Cluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerInstanceSizeName">providerInstanceSizeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_name Cluster#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig">acceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>java.lang.String</code> | Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.advancedConfiguration">advancedConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#advanced_configuration Cluster#advanced_configuration}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeEnabled">autoScalingComputeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeScaleDownEnabled">autoScalingComputeScaleDownEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingDiskGbEnabled">autoScalingDiskGbEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backingProviderName">backingProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backupEnabled">backupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.biConnectorConfig">biConnectorConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#bi_connector_config Cluster#bi_connector_config}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.cloudBackup">cloudBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cloud_backup Cluster#cloud_backup}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cluster_type Cluster#cluster_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#num_shards Cluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#paused Cluster#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#pit_enabled Cluster#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMaxInstanceSize">providerAutoScalingComputeMaxInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMinInstanceSize">providerAutoScalingComputeMinInstanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskIops">providerDiskIops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskTypeName">providerDiskTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerEncryptEbsVolume">providerEncryptEbsVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerRegionName">providerRegionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_region_name Cluster#provider_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerVolumeType">providerVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#replication_factor Cluster#replication_factor}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationSpecs">replicationSpecs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>></code> | replication_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.retainBackupsEnabled">retainBackupsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#version_release_system Cluster#version_release_system}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#name Cluster#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#project_id Cluster#project_id}.

---

##### `providerInstanceSizeName`<sup>Required</sup> <a name="providerInstanceSizeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerInstanceSizeName"></a>

```java
public java.lang.String getProviderInstanceSizeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_name Cluster#provider_name}.

---

##### `acceptDataRisksAndForceReplicaSetReconfig`<sup>Optional</sup> <a name="acceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```java
public java.lang.String getAcceptDataRisksAndForceReplicaSetReconfig();
```

- *Type:* java.lang.String

Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#accept_data_risks_and_force_replica_set_reconfig Cluster#accept_data_risks_and_force_replica_set_reconfig}

---

##### `advancedConfiguration`<sup>Optional</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.advancedConfiguration"></a>

```java
public java.lang.Object getAdvancedConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#advanced_configuration Cluster#advanced_configuration}.

---

##### `autoScalingComputeEnabled`<sup>Optional</sup> <a name="autoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeEnabled"></a>

```java
public java.lang.Object getAutoScalingComputeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}.

---

##### `autoScalingComputeScaleDownEnabled`<sup>Optional</sup> <a name="autoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeScaleDownEnabled"></a>

```java
public java.lang.Object getAutoScalingComputeScaleDownEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}.

---

##### `autoScalingDiskGbEnabled`<sup>Optional</sup> <a name="autoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingDiskGbEnabled"></a>

```java
public java.lang.Object getAutoScalingDiskGbEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}.

---

##### `backingProviderName`<sup>Optional</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backingProviderName"></a>

```java
public java.lang.String getBackingProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}.

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backupEnabled"></a>

```java
public java.lang.Object getBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#backup_enabled Cluster#backup_enabled}

---

##### `biConnectorConfig`<sup>Optional</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.biConnectorConfig"></a>

```java
public java.lang.Object getBiConnectorConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#bi_connector_config Cluster#bi_connector_config}.

---

##### `cloudBackup`<sup>Optional</sup> <a name="cloudBackup" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.cloudBackup"></a>

```java
public java.lang.Object getCloudBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cloud_backup Cluster#cloud_backup}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#cluster_type Cluster#cluster_type}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.encryptionAtRestProvider"></a>

```java
public java.lang.String getEncryptionAtRestProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#labels Cluster#labels}

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.mongoDbMajorVersion"></a>

```java
public java.lang.String getMongoDbMajorVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}.

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#num_shards Cluster#num_shards}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#paused Cluster#paused}.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pitEnabled"></a>

```java
public java.lang.Object getPitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#pit_enabled Cluster#pit_enabled}.

---

##### `providerAutoScalingComputeMaxInstanceSize`<sup>Optional</sup> <a name="providerAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMaxInstanceSize"></a>

```java
public java.lang.String getProviderAutoScalingComputeMaxInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}.

---

##### `providerAutoScalingComputeMinInstanceSize`<sup>Optional</sup> <a name="providerAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMinInstanceSize"></a>

```java
public java.lang.String getProviderAutoScalingComputeMinInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}.

---

##### `providerDiskIops`<sup>Optional</sup> <a name="providerDiskIops" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskIops"></a>

```java
public java.lang.Number getProviderDiskIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}.

---

##### `providerDiskTypeName`<sup>Optional</sup> <a name="providerDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskTypeName"></a>

```java
public java.lang.String getProviderDiskTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}.

---

##### `providerEncryptEbsVolume`<sup>Optional</sup> <a name="providerEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerEncryptEbsVolume"></a>

```java
public java.lang.Object getProviderEncryptEbsVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}.

---

##### `providerRegionName`<sup>Optional</sup> <a name="providerRegionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerRegionName"></a>

```java
public java.lang.String getProviderRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_region_name Cluster#provider_region_name}.

---

##### `providerVolumeType`<sup>Optional</sup> <a name="providerVolumeType" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerVolumeType"></a>

```java
public java.lang.String getProviderVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#replication_factor Cluster#replication_factor}.

---

##### `replicationSpecs`<sup>Optional</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationSpecs"></a>

```java
public java.lang.Object getReplicationSpecs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>>

replication_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#replication_specs Cluster#replication_specs}

---

##### `retainBackupsEnabled`<sup>Optional</sup> <a name="retainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.retainBackupsEnabled"></a>

```java
public java.lang.Object getRetainBackupsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#retain_backups_enabled Cluster#retain_backups_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#tags Cluster#tags}

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.terminationProtectionEnabled"></a>

```java
public java.lang.Object getTerminationProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.timeouts"></a>

```java
public ClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.versionReleaseSystem"></a>

```java
public java.lang.String getVersionReleaseSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#version_release_system Cluster#version_release_system}.

---

### ClusterConnectionStrings <a name="ClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStrings;

ClusterConnectionStrings.builder()
    .build();
```


### ClusterConnectionStringsPrivateEndpoint <a name="ClusterConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint;

ClusterConnectionStringsPrivateEndpoint.builder()
    .build();
```


### ClusterConnectionStringsPrivateEndpointEndpoints <a name="ClusterConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints;

ClusterConnectionStringsPrivateEndpointEndpoints.builder()
    .build();
```


### ClusterLabels <a name="ClusterLabels" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterLabels;

ClusterLabels.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#key Cluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#value Cluster#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#key Cluster#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#value Cluster#value}.

---

### ClusterReplicationSpecs <a name="ClusterReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterReplicationSpecs;

ClusterReplicationSpecs.builder()
    .numShards(java.lang.Number)
//  .id(java.lang.String)
//  .regionsConfig(IResolvable)
//  .regionsConfig(java.util.List<ClusterReplicationSpecsRegionsConfig>)
//  .zoneName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#num_shards Cluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.regionsConfig">regionsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>></code> | regions_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#zone_name Cluster#zone_name}. |

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#num_shards Cluster#num_shards}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regionsConfig`<sup>Optional</sup> <a name="regionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.regionsConfig"></a>

```java
public java.lang.Object getRegionsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>>

regions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#regions_config Cluster#regions_config}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#zone_name Cluster#zone_name}.

---

### ClusterReplicationSpecsRegionsConfig <a name="ClusterReplicationSpecsRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig;

ClusterReplicationSpecsRegionsConfig.builder()
    .regionName(java.lang.String)
//  .analyticsNodes(java.lang.Number)
//  .electableNodes(java.lang.Number)
//  .priority(java.lang.Number)
//  .readOnlyNodes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#region_name Cluster#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.analyticsNodes">analyticsNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#analytics_nodes Cluster#analytics_nodes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.electableNodes">electableNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#electable_nodes Cluster#electable_nodes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#priority Cluster#priority}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.readOnlyNodes">readOnlyNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#read_only_nodes Cluster#read_only_nodes}. |

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#region_name Cluster#region_name}.

---

##### `analyticsNodes`<sup>Optional</sup> <a name="analyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.analyticsNodes"></a>

```java
public java.lang.Number getAnalyticsNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#analytics_nodes Cluster#analytics_nodes}.

---

##### `electableNodes`<sup>Optional</sup> <a name="electableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.electableNodes"></a>

```java
public java.lang.Number getElectableNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#electable_nodes Cluster#electable_nodes}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#priority Cluster#priority}.

---

##### `readOnlyNodes`<sup>Optional</sup> <a name="readOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.readOnlyNodes"></a>

```java
public java.lang.Number getReadOnlyNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#read_only_nodes Cluster#read_only_nodes}.

---

### ClusterSnapshotBackupPolicy <a name="ClusterSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicy;

ClusterSnapshotBackupPolicy.builder()
    .build();
```


### ClusterSnapshotBackupPolicyPolicies <a name="ClusterSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies;

ClusterSnapshotBackupPolicyPolicies.builder()
    .build();
```


### ClusterSnapshotBackupPolicyPoliciesPolicyItem <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem;

ClusterSnapshotBackupPolicyPoliciesPolicyItem.builder()
    .build();
```


### ClusterTags <a name="ClusterTags" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterTags;

ClusterTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#key Cluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#value Cluster#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#key Cluster#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#value Cluster#value}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterTimeouts;

ClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#update Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#create Cluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#delete Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/cluster#update Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAdvancedConfigurationList <a name="ClusterAdvancedConfigurationList" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterAdvancedConfigurationList;

new ClusterAdvancedConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.get"></a>

```java
public ClusterAdvancedConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>>

---


### ClusterAdvancedConfigurationOutputReference <a name="ClusterAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference;

new ClusterAdvancedConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern">resetDefaultReadConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern">resetDefaultWriteConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong">resetFailIndexKeyTooLong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled">resetJavascriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol">resetMinimumEnabledTlsProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetNoTableScan">resetNoTableScan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours">resetOplogMinRetentionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogSizeMb">resetOplogSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector">resetSampleRefreshIntervalBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector">resetSampleSizeBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetTransactionLifetimeLimitSeconds">resetTransactionLifetimeLimitSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultReadConcern` <a name="resetDefaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern"></a>

```java
public void resetDefaultReadConcern()
```

##### `resetDefaultWriteConcern` <a name="resetDefaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern"></a>

```java
public void resetDefaultWriteConcern()
```

##### `resetFailIndexKeyTooLong` <a name="resetFailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong"></a>

```java
public void resetFailIndexKeyTooLong()
```

##### `resetJavascriptEnabled` <a name="resetJavascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled"></a>

```java
public void resetJavascriptEnabled()
```

##### `resetMinimumEnabledTlsProtocol` <a name="resetMinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol"></a>

```java
public void resetMinimumEnabledTlsProtocol()
```

##### `resetNoTableScan` <a name="resetNoTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetNoTableScan"></a>

```java
public void resetNoTableScan()
```

##### `resetOplogMinRetentionHours` <a name="resetOplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours"></a>

```java
public void resetOplogMinRetentionHours()
```

##### `resetOplogSizeMb` <a name="resetOplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogSizeMb"></a>

```java
public void resetOplogSizeMb()
```

##### `resetSampleRefreshIntervalBiConnector` <a name="resetSampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector"></a>

```java
public void resetSampleRefreshIntervalBiConnector()
```

##### `resetSampleSizeBiConnector` <a name="resetSampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector"></a>

```java
public void resetSampleSizeBiConnector()
```

##### `resetTransactionLifetimeLimitSeconds` <a name="resetTransactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetTransactionLifetimeLimitSeconds"></a>

```java
public void resetTransactionLifetimeLimitSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput">defaultReadConcernInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput">defaultWriteConcernInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput">failIndexKeyTooLongInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput">javascriptEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput">minimumEnabledTlsProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScanInput">noTableScanInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput">oplogMinRetentionHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput">oplogSizeMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput">sampleRefreshIntervalBiConnectorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput">sampleSizeBiConnectorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput">transactionLifetimeLimitSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcern">defaultReadConcern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabled">javascriptEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScan">noTableScan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMb">oplogSizeMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultReadConcernInput`<sup>Optional</sup> <a name="defaultReadConcernInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput"></a>

```java
public java.lang.String getDefaultReadConcernInput();
```

- *Type:* java.lang.String

---

##### `defaultWriteConcernInput`<sup>Optional</sup> <a name="defaultWriteConcernInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput"></a>

```java
public java.lang.String getDefaultWriteConcernInput();
```

- *Type:* java.lang.String

---

##### `failIndexKeyTooLongInput`<sup>Optional</sup> <a name="failIndexKeyTooLongInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput"></a>

```java
public java.lang.Object getFailIndexKeyTooLongInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javascriptEnabledInput`<sup>Optional</sup> <a name="javascriptEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput"></a>

```java
public java.lang.Object getJavascriptEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minimumEnabledTlsProtocolInput`<sup>Optional</sup> <a name="minimumEnabledTlsProtocolInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput"></a>

```java
public java.lang.String getMinimumEnabledTlsProtocolInput();
```

- *Type:* java.lang.String

---

##### `noTableScanInput`<sup>Optional</sup> <a name="noTableScanInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScanInput"></a>

```java
public java.lang.Object getNoTableScanInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oplogMinRetentionHoursInput`<sup>Optional</sup> <a name="oplogMinRetentionHoursInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput"></a>

```java
public java.lang.Number getOplogMinRetentionHoursInput();
```

- *Type:* java.lang.Number

---

##### `oplogSizeMbInput`<sup>Optional</sup> <a name="oplogSizeMbInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput"></a>

```java
public java.lang.Number getOplogSizeMbInput();
```

- *Type:* java.lang.Number

---

##### `sampleRefreshIntervalBiConnectorInput`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnectorInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput"></a>

```java
public java.lang.Number getSampleRefreshIntervalBiConnectorInput();
```

- *Type:* java.lang.Number

---

##### `sampleSizeBiConnectorInput`<sup>Optional</sup> <a name="sampleSizeBiConnectorInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput"></a>

```java
public java.lang.Number getSampleSizeBiConnectorInput();
```

- *Type:* java.lang.Number

---

##### `transactionLifetimeLimitSecondsInput`<sup>Optional</sup> <a name="transactionLifetimeLimitSecondsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput"></a>

```java
public java.lang.Number getTransactionLifetimeLimitSecondsInput();
```

- *Type:* java.lang.Number

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```java
public java.lang.String getDefaultReadConcern();
```

- *Type:* java.lang.String

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```java
public java.lang.String getDefaultWriteConcern();
```

- *Type:* java.lang.String

---

##### `failIndexKeyTooLong`<sup>Required</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```java
public java.lang.Object getFailIndexKeyTooLong();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javascriptEnabled`<sup>Required</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```java
public java.lang.Object getJavascriptEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minimumEnabledTlsProtocol`<sup>Required</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```java
public java.lang.String getMinimumEnabledTlsProtocol();
```

- *Type:* java.lang.String

---

##### `noTableScan`<sup>Required</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScan"></a>

```java
public java.lang.Object getNoTableScan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oplogMinRetentionHours`<sup>Required</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```java
public java.lang.Number getOplogMinRetentionHours();
```

- *Type:* java.lang.Number

---

##### `oplogSizeMb`<sup>Required</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```java
public java.lang.Number getOplogSizeMb();
```

- *Type:* java.lang.Number

---

##### `sampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```java
public java.lang.Number getSampleRefreshIntervalBiConnector();
```

- *Type:* java.lang.Number

---

##### `sampleSizeBiConnector`<sup>Required</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```java
public java.lang.Number getSampleSizeBiConnector();
```

- *Type:* java.lang.Number

---

##### `transactionLifetimeLimitSeconds`<sup>Required</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds"></a>

```java
public java.lang.Number getTransactionLifetimeLimitSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

---


### ClusterBiConnectorConfigList <a name="ClusterBiConnectorConfigList" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterBiConnectorConfigList;

new ClusterBiConnectorConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.get"></a>

```java
public ClusterBiConnectorConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>>

---


### ClusterBiConnectorConfigOutputReference <a name="ClusterBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference;

new ClusterBiConnectorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetReadPreference">resetReadPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetReadPreference` <a name="resetReadPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetReadPreference"></a>

```java
public void resetReadPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreferenceInput">readPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreference">readPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readPreferenceInput`<sup>Optional</sup> <a name="readPreferenceInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreferenceInput"></a>

```java
public java.lang.String getReadPreferenceInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreference"></a>

```java
public java.lang.String getReadPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

---


### ClusterConnectionStringsList <a name="ClusterConnectionStringsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsList;

new ClusterConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get"></a>

```java
public ClusterConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ClusterConnectionStringsOutputReference <a name="ClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsOutputReference;

new ClusterConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.private">private</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList">ClusterConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateSrv">privateSrv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standard">standard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standardSrv">standardSrv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings">ClusterConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.private"></a>

```java
public java.lang.String getPrivate();
```

- *Type:* java.lang.String

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateEndpoint"></a>

```java
public ClusterConnectionStringsPrivateEndpointList getPrivateEndpoint();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList">ClusterConnectionStringsPrivateEndpointList</a>

---

##### `privateSrv`<sup>Required</sup> <a name="privateSrv" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateSrv"></a>

```java
public java.lang.String getPrivateSrv();
```

- *Type:* java.lang.String

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standard"></a>

```java
public java.lang.String getStandard();
```

- *Type:* java.lang.String

---

##### `standardSrv`<sup>Required</sup> <a name="standardSrv" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standardSrv"></a>

```java
public java.lang.String getStandardSrv();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.internalValue"></a>

```java
public ClusterConnectionStrings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings">ClusterConnectionStrings</a>

---


### ClusterConnectionStringsPrivateEndpointEndpointsList <a name="ClusterConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList;

new ClusterConnectionStringsPrivateEndpointEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get"></a>

```java
public ClusterConnectionStringsPrivateEndpointEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ClusterConnectionStringsPrivateEndpointEndpointsOutputReference <a name="ClusterConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference;

new ClusterConnectionStringsPrivateEndpointEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints">ClusterConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```java
public ClusterConnectionStringsPrivateEndpointEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints">ClusterConnectionStringsPrivateEndpointEndpoints</a>

---


### ClusterConnectionStringsPrivateEndpointList <a name="ClusterConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList;

new ClusterConnectionStringsPrivateEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get"></a>

```java
public ClusterConnectionStringsPrivateEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ClusterConnectionStringsPrivateEndpointOutputReference <a name="ClusterConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference;

new ClusterConnectionStringsPrivateEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList">ClusterConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">srvConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString">srvShardOptimizedConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint">ClusterConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```java
public ClusterConnectionStringsPrivateEndpointEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList">ClusterConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `srvConnectionString`<sup>Required</sup> <a name="srvConnectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```java
public java.lang.String getSrvConnectionString();
```

- *Type:* java.lang.String

---

##### `srvShardOptimizedConnectionString`<sup>Required</sup> <a name="srvShardOptimizedConnectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString"></a>

```java
public java.lang.String getSrvShardOptimizedConnectionString();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```java
public ClusterConnectionStringsPrivateEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint">ClusterConnectionStringsPrivateEndpoint</a>

---


### ClusterLabelsList <a name="ClusterLabelsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterLabelsList;

new ClusterLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get"></a>

```java
public ClusterLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>>

---


### ClusterLabelsOutputReference <a name="ClusterLabelsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterLabelsOutputReference;

new ClusterLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>

---


### ClusterReplicationSpecsList <a name="ClusterReplicationSpecsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterReplicationSpecsList;

new ClusterReplicationSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get"></a>

```java
public ClusterReplicationSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>>

---


### ClusterReplicationSpecsOutputReference <a name="ClusterReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterReplicationSpecsOutputReference;

new ClusterReplicationSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig">putRegionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetRegionsConfig">resetRegionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionsConfig` <a name="putRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig"></a>

```java
public void putRegionsConfig(IResolvable OR java.util.List<ClusterReplicationSpecsRegionsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetRegionsConfig` <a name="resetRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetRegionsConfig"></a>

```java
public void resetRegionsConfig()
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetZoneName"></a>

```java
public void resetZoneName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfig">regionsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList">ClusterReplicationSpecsRegionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShardsInput">numShardsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfigInput">regionsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionsConfig`<sup>Required</sup> <a name="regionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfig"></a>

```java
public ClusterReplicationSpecsRegionsConfigList getRegionsConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList">ClusterReplicationSpecsRegionsConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShardsInput"></a>

```java
public java.lang.Number getNumShardsInput();
```

- *Type:* java.lang.Number

---

##### `regionsConfigInput`<sup>Optional</sup> <a name="regionsConfigInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfigInput"></a>

```java
public java.lang.Object getRegionsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>>

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>

---


### ClusterReplicationSpecsRegionsConfigList <a name="ClusterReplicationSpecsRegionsConfigList" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList;

new ClusterReplicationSpecsRegionsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get"></a>

```java
public ClusterReplicationSpecsRegionsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>>

---


### ClusterReplicationSpecsRegionsConfigOutputReference <a name="ClusterReplicationSpecsRegionsConfigOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference;

new ClusterReplicationSpecsRegionsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetAnalyticsNodes">resetAnalyticsNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetElectableNodes">resetElectableNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetReadOnlyNodes">resetReadOnlyNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalyticsNodes` <a name="resetAnalyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetAnalyticsNodes"></a>

```java
public void resetAnalyticsNodes()
```

##### `resetElectableNodes` <a name="resetElectableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetElectableNodes"></a>

```java
public void resetElectableNodes()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetReadOnlyNodes` <a name="resetReadOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetReadOnlyNodes"></a>

```java
public void resetReadOnlyNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodesInput">analyticsNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodesInput">electableNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodesInput">readOnlyNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodes">analyticsNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodes">electableNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodes">readOnlyNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `analyticsNodesInput`<sup>Optional</sup> <a name="analyticsNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodesInput"></a>

```java
public java.lang.Number getAnalyticsNodesInput();
```

- *Type:* java.lang.Number

---

##### `electableNodesInput`<sup>Optional</sup> <a name="electableNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodesInput"></a>

```java
public java.lang.Number getElectableNodesInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `readOnlyNodesInput`<sup>Optional</sup> <a name="readOnlyNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodesInput"></a>

```java
public java.lang.Number getReadOnlyNodesInput();
```

- *Type:* java.lang.Number

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `analyticsNodes`<sup>Required</sup> <a name="analyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodes"></a>

```java
public java.lang.Number getAnalyticsNodes();
```

- *Type:* java.lang.Number

---

##### `electableNodes`<sup>Required</sup> <a name="electableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodes"></a>

```java
public java.lang.Number getElectableNodes();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `readOnlyNodes`<sup>Required</sup> <a name="readOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodes"></a>

```java
public java.lang.Number getReadOnlyNodes();
```

- *Type:* java.lang.Number

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>

---


### ClusterSnapshotBackupPolicyList <a name="ClusterSnapshotBackupPolicyList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyList;

new ClusterSnapshotBackupPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get"></a>

```java
public ClusterSnapshotBackupPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ClusterSnapshotBackupPolicyOutputReference <a name="ClusterSnapshotBackupPolicyOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference;

new ClusterSnapshotBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.nextSnapshot">nextSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList">ClusterSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.updateSnapshots">updateSnapshots</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy">ClusterSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `nextSnapshot`<sup>Required</sup> <a name="nextSnapshot" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.nextSnapshot"></a>

```java
public java.lang.String getNextSnapshot();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.policies"></a>

```java
public ClusterSnapshotBackupPolicyPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList">ClusterSnapshotBackupPolicyPoliciesList</a>

---

##### `referenceHourOfDay`<sup>Required</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceHourOfDay"></a>

```java
public java.lang.Number getReferenceHourOfDay();
```

- *Type:* java.lang.Number

---

##### `referenceMinuteOfHour`<sup>Required</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceMinuteOfHour"></a>

```java
public java.lang.Number getReferenceMinuteOfHour();
```

- *Type:* java.lang.Number

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

---

##### `updateSnapshots`<sup>Required</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.updateSnapshots"></a>

```java
public IResolvable getUpdateSnapshots();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```java
public ClusterSnapshotBackupPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy">ClusterSnapshotBackupPolicy</a>

---


### ClusterSnapshotBackupPolicyPoliciesList <a name="ClusterSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList;

new ClusterSnapshotBackupPolicyPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get"></a>

```java
public ClusterSnapshotBackupPolicyPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ClusterSnapshotBackupPolicyPoliciesOutputReference <a name="ClusterSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference;

new ClusterSnapshotBackupPolicyPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">policyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList">ClusterSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies">ClusterSnapshotBackupPolicyPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyItem`<sup>Required</sup> <a name="policyItem" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```java
public ClusterSnapshotBackupPolicyPoliciesPolicyItemList getPolicyItem();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList">ClusterSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```java
public ClusterSnapshotBackupPolicyPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies">ClusterSnapshotBackupPolicyPolicies</a>

---


### ClusterSnapshotBackupPolicyPoliciesPolicyItemList <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList;

new ClusterSnapshotBackupPolicyPoliciesPolicyItemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```java
public ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference;

new ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem">ClusterSnapshotBackupPolicyPoliciesPolicyItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```java
public ClusterSnapshotBackupPolicyPoliciesPolicyItem getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem">ClusterSnapshotBackupPolicyPoliciesPolicyItem</a>

---


### ClusterTagsList <a name="ClusterTagsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterTagsList;

new ClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get"></a>

```java
public ClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>>

---


### ClusterTagsOutputReference <a name="ClusterTagsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterTagsOutputReference;

new ClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster.ClusterTimeoutsOutputReference;

new ClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

---



