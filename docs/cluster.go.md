# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-mongodbatlas.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-mongodbatlas.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster mongodbatlas_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewCluster(scope Construct, id *string, config ClusterConfig) Cluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig">ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration">PutAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig">PutBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putPinnedFcv">PutPinnedFcv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs">PutReplicationSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAcceptDataRisksAndForceReplicaSetReconfig">ResetAcceptDataRisksAndForceReplicaSetReconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAdvancedConfiguration">ResetAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeEnabled">ResetAutoScalingComputeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeScaleDownEnabled">ResetAutoScalingComputeScaleDownEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingDiskGbEnabled">ResetAutoScalingDiskGbEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackingProviderName">ResetBackingProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackupEnabled">ResetBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetBiConnectorConfig">ResetBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetCloudBackup">ResetCloudBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetEncryptionAtRestProvider">ResetEncryptionAtRestProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetMongoDbMajorVersion">ResetMongoDbMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetNumShards">ResetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetPinnedFcv">ResetPinnedFcv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetPitEnabled">ResetPitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMaxInstanceSize">ResetProviderAutoScalingComputeMaxInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMinInstanceSize">ResetProviderAutoScalingComputeMinInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskIops">ResetProviderDiskIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskTypeName">ResetProviderDiskTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderEncryptEbsVolume">ResetProviderEncryptEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderRegionName">ResetProviderRegionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderVolumeType">ResetProviderVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetRedactClientLogData">ResetRedactClientLogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationFactor">ResetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationSpecs">ResetReplicationSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetRetainBackupsEnabled">ResetRetainBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetTerminationProtectionEnabled">ResetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetVersionReleaseSystem">ResetVersionReleaseSystem</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.cluster.Cluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedConfiguration` <a name="PutAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration"></a>

```go
func PutAdvancedConfiguration(value ClusterAdvancedConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

---

##### `PutBiConnectorConfig` <a name="PutBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig"></a>

```go
func PutBiConnectorConfig(value ClusterBiConnectorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPinnedFcv` <a name="PutPinnedFcv" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putPinnedFcv"></a>

```go
func PutPinnedFcv(value ClusterPinnedFcv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putPinnedFcv.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv">ClusterPinnedFcv</a>

---

##### `PutReplicationSpecs` <a name="PutReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs"></a>

```go
func PutReplicationSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts"></a>

```go
func PutTimeouts(value ClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `ResetAcceptDataRisksAndForceReplicaSetReconfig` <a name="ResetAcceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAcceptDataRisksAndForceReplicaSetReconfig"></a>

```go
func ResetAcceptDataRisksAndForceReplicaSetReconfig()
```

##### `ResetAdvancedConfiguration` <a name="ResetAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAdvancedConfiguration"></a>

```go
func ResetAdvancedConfiguration()
```

##### `ResetAutoScalingComputeEnabled` <a name="ResetAutoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeEnabled"></a>

```go
func ResetAutoScalingComputeEnabled()
```

##### `ResetAutoScalingComputeScaleDownEnabled` <a name="ResetAutoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeScaleDownEnabled"></a>

```go
func ResetAutoScalingComputeScaleDownEnabled()
```

##### `ResetAutoScalingDiskGbEnabled` <a name="ResetAutoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingDiskGbEnabled"></a>

```go
func ResetAutoScalingDiskGbEnabled()
```

##### `ResetBackingProviderName` <a name="ResetBackingProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackingProviderName"></a>

```go
func ResetBackingProviderName()
```

##### `ResetBackupEnabled` <a name="ResetBackupEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackupEnabled"></a>

```go
func ResetBackupEnabled()
```

##### `ResetBiConnectorConfig` <a name="ResetBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBiConnectorConfig"></a>

```go
func ResetBiConnectorConfig()
```

##### `ResetCloudBackup` <a name="ResetCloudBackup" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetCloudBackup"></a>

```go
func ResetCloudBackup()
```

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetClusterType"></a>

```go
func ResetClusterType()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetEncryptionAtRestProvider` <a name="ResetEncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetEncryptionAtRestProvider"></a>

```go
func ResetEncryptionAtRestProvider()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMongoDbMajorVersion` <a name="ResetMongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetMongoDbMajorVersion"></a>

```go
func ResetMongoDbMajorVersion()
```

##### `ResetNumShards` <a name="ResetNumShards" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetNumShards"></a>

```go
func ResetNumShards()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetPinnedFcv` <a name="ResetPinnedFcv" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetPinnedFcv"></a>

```go
func ResetPinnedFcv()
```

##### `ResetPitEnabled` <a name="ResetPitEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetPitEnabled"></a>

```go
func ResetPitEnabled()
```

##### `ResetProviderAutoScalingComputeMaxInstanceSize` <a name="ResetProviderAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMaxInstanceSize"></a>

```go
func ResetProviderAutoScalingComputeMaxInstanceSize()
```

##### `ResetProviderAutoScalingComputeMinInstanceSize` <a name="ResetProviderAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMinInstanceSize"></a>

```go
func ResetProviderAutoScalingComputeMinInstanceSize()
```

##### `ResetProviderDiskIops` <a name="ResetProviderDiskIops" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskIops"></a>

```go
func ResetProviderDiskIops()
```

##### `ResetProviderDiskTypeName` <a name="ResetProviderDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskTypeName"></a>

```go
func ResetProviderDiskTypeName()
```

##### `ResetProviderEncryptEbsVolume` <a name="ResetProviderEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderEncryptEbsVolume"></a>

```go
func ResetProviderEncryptEbsVolume()
```

##### `ResetProviderRegionName` <a name="ResetProviderRegionName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderRegionName"></a>

```go
func ResetProviderRegionName()
```

##### `ResetProviderVolumeType` <a name="ResetProviderVolumeType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderVolumeType"></a>

```go
func ResetProviderVolumeType()
```

##### `ResetRedactClientLogData` <a name="ResetRedactClientLogData" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetRedactClientLogData"></a>

```go
func ResetRedactClientLogData()
```

##### `ResetReplicationFactor` <a name="ResetReplicationFactor" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationFactor"></a>

```go
func ResetReplicationFactor()
```

##### `ResetReplicationSpecs` <a name="ResetReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationSpecs"></a>

```go
func ResetReplicationSpecs()
```

##### `ResetRetainBackupsEnabled` <a name="ResetRetainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetRetainBackupsEnabled"></a>

```go
func ResetRetainBackupsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTerminationProtectionEnabled` <a name="ResetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTerminationProtectionEnabled"></a>

```go
func ResetTerminationProtectionEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionReleaseSystem` <a name="ResetVersionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetVersionReleaseSystem"></a>

```go
func ResetVersionReleaseSystem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.Cluster_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.Cluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.Cluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.Cluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Cluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfiguration">AdvancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference">ClusterAdvancedConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfig">BiConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference">ClusterBiConnectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList">ClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList">ClusterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbVersion">MongoDbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUri">MongoUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriUpdated">MongoUriUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriWithOptions">MongoUriWithOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pinnedFcv">PinnedFcv</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference">ClusterPinnedFcvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeFlag">ProviderEncryptEbsVolumeFlag</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecs">ReplicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList">ClusterReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.snapshotBackupPolicy">SnapshotBackupPolicy</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList">ClusterSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.srvAddress">SrvAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.stateName">StateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList">ClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfigInput">AcceptDataRisksAndForceReplicaSetReconfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfigurationInput">AdvancedConfigurationInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabledInput">AutoScalingComputeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabledInput">AutoScalingComputeScaleDownEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabledInput">AutoScalingDiskGbEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderNameInput">BackingProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabledInput">BackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfigInput">BiConnectorConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackupInput">CloudBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProviderInput">EncryptionAtRestProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersionInput">MongoDbMajorVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShardsInput">NumShardsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pinnedFcvInput">PinnedFcvInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv">ClusterPinnedFcv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabledInput">PitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSizeInput">ProviderAutoScalingComputeMaxInstanceSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSizeInput">ProviderAutoScalingComputeMinInstanceSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIopsInput">ProviderDiskIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeNameInput">ProviderDiskTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeInput">ProviderEncryptEbsVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeNameInput">ProviderInstanceSizeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionNameInput">ProviderRegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeTypeInput">ProviderVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.redactClientLogDataInput">RedactClientLogDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecsInput">ReplicationSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabledInput">RetainBackupsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabledInput">TerminationProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystemInput">VersionReleaseSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfig">AcceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabled">AutoScalingComputeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabled">AutoScalingComputeScaleDownEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabled">AutoScalingDiskGbEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderName">BackingProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabled">BackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackup">CloudBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProvider">EncryptionAtRestProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersion">MongoDbMajorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShards">NumShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabled">PitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSize">ProviderAutoScalingComputeMaxInstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSize">ProviderAutoScalingComputeMinInstanceSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIops">ProviderDiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeName">ProviderDiskTypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolume">ProviderEncryptEbsVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeName">ProviderInstanceSizeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionName">ProviderRegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeType">ProviderVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.redactClientLogData">RedactClientLogData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabled">RetainBackupsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystem">VersionReleaseSystem</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedConfiguration`<sup>Required</sup> <a name="AdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfiguration"></a>

```go
func AdvancedConfiguration() ClusterAdvancedConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference">ClusterAdvancedConfigurationOutputReference</a>

---

##### `BiConnectorConfig`<sup>Required</sup> <a name="BiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfig"></a>

```go
func BiConnectorConfig() ClusterBiConnectorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference">ClusterBiConnectorConfigOutputReference</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.connectionStrings"></a>

```go
func ConnectionStrings() ClusterConnectionStringsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList">ClusterConnectionStringsList</a>

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.labels"></a>

```go
func Labels() ClusterLabelsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList">ClusterLabelsList</a>

---

##### `MongoDbVersion`<sup>Required</sup> <a name="MongoDbVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbVersion"></a>

```go
func MongoDbVersion() *string
```

- *Type:* *string

---

##### `MongoUri`<sup>Required</sup> <a name="MongoUri" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUri"></a>

```go
func MongoUri() *string
```

- *Type:* *string

---

##### `MongoUriUpdated`<sup>Required</sup> <a name="MongoUriUpdated" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriUpdated"></a>

```go
func MongoUriUpdated() *string
```

- *Type:* *string

---

##### `MongoUriWithOptions`<sup>Required</sup> <a name="MongoUriWithOptions" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriWithOptions"></a>

```go
func MongoUriWithOptions() *string
```

- *Type:* *string

---

##### `PinnedFcv`<sup>Required</sup> <a name="PinnedFcv" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pinnedFcv"></a>

```go
func PinnedFcv() ClusterPinnedFcvOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference">ClusterPinnedFcvOutputReference</a>

---

##### `ProviderEncryptEbsVolumeFlag`<sup>Required</sup> <a name="ProviderEncryptEbsVolumeFlag" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeFlag"></a>

```go
func ProviderEncryptEbsVolumeFlag() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReplicationSpecs`<sup>Required</sup> <a name="ReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecs"></a>

```go
func ReplicationSpecs() ClusterReplicationSpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList">ClusterReplicationSpecsList</a>

---

##### `SnapshotBackupPolicy`<sup>Required</sup> <a name="SnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.snapshotBackupPolicy"></a>

```go
func SnapshotBackupPolicy() ClusterSnapshotBackupPolicyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList">ClusterSnapshotBackupPolicyList</a>

---

##### `SrvAddress`<sup>Required</sup> <a name="SrvAddress" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.srvAddress"></a>

```go
func SrvAddress() *string
```

- *Type:* *string

---

##### `StateName`<sup>Required</sup> <a name="StateName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.stateName"></a>

```go
func StateName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tags"></a>

```go
func Tags() ClusterTagsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList">ClusterTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeouts"></a>

```go
func Timeouts() ClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `AcceptDataRisksAndForceReplicaSetReconfigInput`<sup>Optional</sup> <a name="AcceptDataRisksAndForceReplicaSetReconfigInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfigInput"></a>

```go
func AcceptDataRisksAndForceReplicaSetReconfigInput() *string
```

- *Type:* *string

---

##### `AdvancedConfigurationInput`<sup>Optional</sup> <a name="AdvancedConfigurationInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfigurationInput"></a>

```go
func AdvancedConfigurationInput() ClusterAdvancedConfiguration
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

---

##### `AutoScalingComputeEnabledInput`<sup>Optional</sup> <a name="AutoScalingComputeEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabledInput"></a>

```go
func AutoScalingComputeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingComputeScaleDownEnabledInput`<sup>Optional</sup> <a name="AutoScalingComputeScaleDownEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabledInput"></a>

```go
func AutoScalingComputeScaleDownEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingDiskGbEnabledInput`<sup>Optional</sup> <a name="AutoScalingDiskGbEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabledInput"></a>

```go
func AutoScalingDiskGbEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackingProviderNameInput`<sup>Optional</sup> <a name="BackingProviderNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderNameInput"></a>

```go
func BackingProviderNameInput() *string
```

- *Type:* *string

---

##### `BackupEnabledInput`<sup>Optional</sup> <a name="BackupEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabledInput"></a>

```go
func BackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BiConnectorConfigInput`<sup>Optional</sup> <a name="BiConnectorConfigInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfigInput"></a>

```go
func BiConnectorConfigInput() ClusterBiConnectorConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

---

##### `CloudBackupInput`<sup>Optional</sup> <a name="CloudBackupInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackupInput"></a>

```go
func CloudBackupInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `EncryptionAtRestProviderInput`<sup>Optional</sup> <a name="EncryptionAtRestProviderInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProviderInput"></a>

```go
func EncryptionAtRestProviderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `MongoDbMajorVersionInput`<sup>Optional</sup> <a name="MongoDbMajorVersionInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersionInput"></a>

```go
func MongoDbMajorVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumShardsInput`<sup>Optional</sup> <a name="NumShardsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShardsInput"></a>

```go
func NumShardsInput() *f64
```

- *Type:* *f64

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `PinnedFcvInput`<sup>Optional</sup> <a name="PinnedFcvInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pinnedFcvInput"></a>

```go
func PinnedFcvInput() ClusterPinnedFcv
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv">ClusterPinnedFcv</a>

---

##### `PitEnabledInput`<sup>Optional</sup> <a name="PitEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabledInput"></a>

```go
func PitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderAutoScalingComputeMaxInstanceSizeInput`<sup>Optional</sup> <a name="ProviderAutoScalingComputeMaxInstanceSizeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSizeInput"></a>

```go
func ProviderAutoScalingComputeMaxInstanceSizeInput() *string
```

- *Type:* *string

---

##### `ProviderAutoScalingComputeMinInstanceSizeInput`<sup>Optional</sup> <a name="ProviderAutoScalingComputeMinInstanceSizeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSizeInput"></a>

```go
func ProviderAutoScalingComputeMinInstanceSizeInput() *string
```

- *Type:* *string

---

##### `ProviderDiskIopsInput`<sup>Optional</sup> <a name="ProviderDiskIopsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIopsInput"></a>

```go
func ProviderDiskIopsInput() *f64
```

- *Type:* *f64

---

##### `ProviderDiskTypeNameInput`<sup>Optional</sup> <a name="ProviderDiskTypeNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeNameInput"></a>

```go
func ProviderDiskTypeNameInput() *string
```

- *Type:* *string

---

##### `ProviderEncryptEbsVolumeInput`<sup>Optional</sup> <a name="ProviderEncryptEbsVolumeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeInput"></a>

```go
func ProviderEncryptEbsVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderInstanceSizeNameInput`<sup>Optional</sup> <a name="ProviderInstanceSizeNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeNameInput"></a>

```go
func ProviderInstanceSizeNameInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `ProviderRegionNameInput`<sup>Optional</sup> <a name="ProviderRegionNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionNameInput"></a>

```go
func ProviderRegionNameInput() *string
```

- *Type:* *string

---

##### `ProviderVolumeTypeInput`<sup>Optional</sup> <a name="ProviderVolumeTypeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeTypeInput"></a>

```go
func ProviderVolumeTypeInput() *string
```

- *Type:* *string

---

##### `RedactClientLogDataInput`<sup>Optional</sup> <a name="RedactClientLogDataInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.redactClientLogDataInput"></a>

```go
func RedactClientLogDataInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactorInput"></a>

```go
func ReplicationFactorInput() *f64
```

- *Type:* *f64

---

##### `ReplicationSpecsInput`<sup>Optional</sup> <a name="ReplicationSpecsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecsInput"></a>

```go
func ReplicationSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `RetainBackupsEnabledInput`<sup>Optional</sup> <a name="RetainBackupsEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabledInput"></a>

```go
func RetainBackupsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TerminationProtectionEnabledInput`<sup>Optional</sup> <a name="TerminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabledInput"></a>

```go
func TerminationProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionReleaseSystemInput`<sup>Optional</sup> <a name="VersionReleaseSystemInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystemInput"></a>

```go
func VersionReleaseSystemInput() *string
```

- *Type:* *string

---

##### `AcceptDataRisksAndForceReplicaSetReconfig`<sup>Required</sup> <a name="AcceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```go
func AcceptDataRisksAndForceReplicaSetReconfig() *string
```

- *Type:* *string

---

##### `AutoScalingComputeEnabled`<sup>Required</sup> <a name="AutoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabled"></a>

```go
func AutoScalingComputeEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingComputeScaleDownEnabled`<sup>Required</sup> <a name="AutoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabled"></a>

```go
func AutoScalingComputeScaleDownEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingDiskGbEnabled`<sup>Required</sup> <a name="AutoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabled"></a>

```go
func AutoScalingDiskGbEnabled() interface{}
```

- *Type:* interface{}

---

##### `BackingProviderName`<sup>Required</sup> <a name="BackingProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderName"></a>

```go
func BackingProviderName() *string
```

- *Type:* *string

---

##### `BackupEnabled`<sup>Required</sup> <a name="BackupEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabled"></a>

```go
func BackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `CloudBackup`<sup>Required</sup> <a name="CloudBackup" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackup"></a>

```go
func CloudBackup() interface{}
```

- *Type:* interface{}

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EncryptionAtRestProvider`<sup>Required</sup> <a name="EncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProvider"></a>

```go
func EncryptionAtRestProvider() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MongoDbMajorVersion`<sup>Required</sup> <a name="MongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersion"></a>

```go
func MongoDbMajorVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShards"></a>

```go
func NumShards() *f64
```

- *Type:* *f64

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `PitEnabled`<sup>Required</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabled"></a>

```go
func PitEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderAutoScalingComputeMaxInstanceSize`<sup>Required</sup> <a name="ProviderAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSize"></a>

```go
func ProviderAutoScalingComputeMaxInstanceSize() *string
```

- *Type:* *string

---

##### `ProviderAutoScalingComputeMinInstanceSize`<sup>Required</sup> <a name="ProviderAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSize"></a>

```go
func ProviderAutoScalingComputeMinInstanceSize() *string
```

- *Type:* *string

---

##### `ProviderDiskIops`<sup>Required</sup> <a name="ProviderDiskIops" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIops"></a>

```go
func ProviderDiskIops() *f64
```

- *Type:* *f64

---

##### `ProviderDiskTypeName`<sup>Required</sup> <a name="ProviderDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeName"></a>

```go
func ProviderDiskTypeName() *string
```

- *Type:* *string

---

##### `ProviderEncryptEbsVolume`<sup>Required</sup> <a name="ProviderEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolume"></a>

```go
func ProviderEncryptEbsVolume() interface{}
```

- *Type:* interface{}

---

##### `ProviderInstanceSizeName`<sup>Required</sup> <a name="ProviderInstanceSizeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeName"></a>

```go
func ProviderInstanceSizeName() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ProviderRegionName`<sup>Required</sup> <a name="ProviderRegionName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionName"></a>

```go
func ProviderRegionName() *string
```

- *Type:* *string

---

##### `ProviderVolumeType`<sup>Required</sup> <a name="ProviderVolumeType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeType"></a>

```go
func ProviderVolumeType() *string
```

- *Type:* *string

---

##### `RedactClientLogData`<sup>Required</sup> <a name="RedactClientLogData" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.redactClientLogData"></a>

```go
func RedactClientLogData() interface{}
```

- *Type:* interface{}

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactor"></a>

```go
func ReplicationFactor() *f64
```

- *Type:* *f64

---

##### `RetainBackupsEnabled`<sup>Required</sup> <a name="RetainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabled"></a>

```go
func RetainBackupsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TerminationProtectionEnabled`<sup>Required</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabled"></a>

```go
func TerminationProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `VersionReleaseSystem`<sup>Required</sup> <a name="VersionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystem"></a>

```go
func VersionReleaseSystem() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAdvancedConfiguration <a name="ClusterAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterAdvancedConfiguration {
	ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds: *f64,
	CustomOpensslCipherConfigTls12: *[]*string,
	DefaultMaxTimeMs: *f64,
	DefaultReadConcern: *string,
	DefaultWriteConcern: *string,
	FailIndexKeyTooLong: interface{},
	JavascriptEnabled: interface{},
	MinimumEnabledTlsProtocol: *string,
	NoTableScan: interface{},
	OplogMinRetentionHours: *f64,
	OplogSizeMb: *f64,
	SampleRefreshIntervalBiConnector: *f64,
	SampleSizeBiConnector: *f64,
	TlsCipherConfigMode: *string,
	TransactionLifetimeLimitSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds">ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#change_stream_options_pre_and_post_images_expire_after_seconds Cluster#change_stream_options_pre_and_post_images_expire_after_seconds}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.customOpensslCipherConfigTls12">CustomOpensslCipherConfigTls12</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#custom_openssl_cipher_config_tls12 Cluster#custom_openssl_cipher_config_tls12}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultMaxTimeMs">DefaultMaxTimeMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#default_max_time_ms Cluster#default_max_time_ms}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultReadConcern">DefaultReadConcern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#default_read_concern Cluster#default_read_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultWriteConcern">DefaultWriteConcern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#default_write_concern Cluster#default_write_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.failIndexKeyTooLong">FailIndexKeyTooLong</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#fail_index_key_too_long Cluster#fail_index_key_too_long}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.javascriptEnabled">JavascriptEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#javascript_enabled Cluster#javascript_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol">MinimumEnabledTlsProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#minimum_enabled_tls_protocol Cluster#minimum_enabled_tls_protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.noTableScan">NoTableScan</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#no_table_scan Cluster#no_table_scan}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogMinRetentionHours">OplogMinRetentionHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#oplog_min_retention_hours Cluster#oplog_min_retention_hours}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogSizeMb">OplogSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#oplog_size_mb Cluster#oplog_size_mb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector">SampleRefreshIntervalBiConnector</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#sample_refresh_interval_bi_connector Cluster#sample_refresh_interval_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleSizeBiConnector">SampleSizeBiConnector</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#sample_size_bi_connector Cluster#sample_size_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.tlsCipherConfigMode">TlsCipherConfigMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#tls_cipher_config_mode Cluster#tls_cipher_config_mode}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds">TransactionLifetimeLimitSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#transaction_lifetime_limit_seconds Cluster#transaction_lifetime_limit_seconds}. |

---

##### `ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds`<sup>Optional</sup> <a name="ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds"></a>

```go
ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#change_stream_options_pre_and_post_images_expire_after_seconds Cluster#change_stream_options_pre_and_post_images_expire_after_seconds}.

---

##### `CustomOpensslCipherConfigTls12`<sup>Optional</sup> <a name="CustomOpensslCipherConfigTls12" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.customOpensslCipherConfigTls12"></a>

```go
CustomOpensslCipherConfigTls12 *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#custom_openssl_cipher_config_tls12 Cluster#custom_openssl_cipher_config_tls12}.

---

##### `DefaultMaxTimeMs`<sup>Optional</sup> <a name="DefaultMaxTimeMs" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultMaxTimeMs"></a>

```go
DefaultMaxTimeMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#default_max_time_ms Cluster#default_max_time_ms}.

---

##### `DefaultReadConcern`<sup>Optional</sup> <a name="DefaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultReadConcern"></a>

```go
DefaultReadConcern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#default_read_concern Cluster#default_read_concern}.

---

##### `DefaultWriteConcern`<sup>Optional</sup> <a name="DefaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultWriteConcern"></a>

```go
DefaultWriteConcern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#default_write_concern Cluster#default_write_concern}.

---

##### `FailIndexKeyTooLong`<sup>Optional</sup> <a name="FailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.failIndexKeyTooLong"></a>

```go
FailIndexKeyTooLong interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#fail_index_key_too_long Cluster#fail_index_key_too_long}.

---

##### `JavascriptEnabled`<sup>Optional</sup> <a name="JavascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.javascriptEnabled"></a>

```go
JavascriptEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#javascript_enabled Cluster#javascript_enabled}.

---

##### `MinimumEnabledTlsProtocol`<sup>Optional</sup> <a name="MinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol"></a>

```go
MinimumEnabledTlsProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#minimum_enabled_tls_protocol Cluster#minimum_enabled_tls_protocol}.

---

##### `NoTableScan`<sup>Optional</sup> <a name="NoTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.noTableScan"></a>

```go
NoTableScan interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#no_table_scan Cluster#no_table_scan}.

---

##### `OplogMinRetentionHours`<sup>Optional</sup> <a name="OplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogMinRetentionHours"></a>

```go
OplogMinRetentionHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#oplog_min_retention_hours Cluster#oplog_min_retention_hours}.

---

##### `OplogSizeMb`<sup>Optional</sup> <a name="OplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogSizeMb"></a>

```go
OplogSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#oplog_size_mb Cluster#oplog_size_mb}.

---

##### `SampleRefreshIntervalBiConnector`<sup>Optional</sup> <a name="SampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector"></a>

```go
SampleRefreshIntervalBiConnector *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#sample_refresh_interval_bi_connector Cluster#sample_refresh_interval_bi_connector}.

---

##### `SampleSizeBiConnector`<sup>Optional</sup> <a name="SampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleSizeBiConnector"></a>

```go
SampleSizeBiConnector *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#sample_size_bi_connector Cluster#sample_size_bi_connector}.

---

##### `TlsCipherConfigMode`<sup>Optional</sup> <a name="TlsCipherConfigMode" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.tlsCipherConfigMode"></a>

```go
TlsCipherConfigMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#tls_cipher_config_mode Cluster#tls_cipher_config_mode}.

---

##### `TransactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="TransactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds"></a>

```go
TransactionLifetimeLimitSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#transaction_lifetime_limit_seconds Cluster#transaction_lifetime_limit_seconds}.

---

### ClusterBiConnectorConfig <a name="ClusterBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterBiConnectorConfig {
	Enabled: interface{},
	ReadPreference: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#enabled Cluster#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.readPreference">ReadPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#read_preference Cluster#read_preference}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#enabled Cluster#enabled}.

---

##### `ReadPreference`<sup>Optional</sup> <a name="ReadPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.readPreference"></a>

```go
ReadPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#read_preference Cluster#read_preference}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProjectId: *string,
	ProviderInstanceSizeName: *string,
	ProviderName: *string,
	AcceptDataRisksAndForceReplicaSetReconfig: *string,
	AdvancedConfiguration: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.cluster.ClusterAdvancedConfiguration,
	AutoScalingComputeEnabled: interface{},
	AutoScalingComputeScaleDownEnabled: interface{},
	AutoScalingDiskGbEnabled: interface{},
	BackingProviderName: *string,
	BackupEnabled: interface{},
	BiConnectorConfig: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.cluster.ClusterBiConnectorConfig,
	CloudBackup: interface{},
	ClusterType: *string,
	DiskSizeGb: *f64,
	EncryptionAtRestProvider: *string,
	Id: *string,
	Labels: interface{},
	MongoDbMajorVersion: *string,
	NumShards: *f64,
	Paused: interface{},
	PinnedFcv: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.cluster.ClusterPinnedFcv,
	PitEnabled: interface{},
	ProviderAutoScalingComputeMaxInstanceSize: *string,
	ProviderAutoScalingComputeMinInstanceSize: *string,
	ProviderDiskIops: *f64,
	ProviderDiskTypeName: *string,
	ProviderEncryptEbsVolume: interface{},
	ProviderRegionName: *string,
	ProviderVolumeType: *string,
	RedactClientLogData: interface{},
	ReplicationFactor: *f64,
	ReplicationSpecs: interface{},
	RetainBackupsEnabled: interface{},
	Tags: interface{},
	TerminationProtectionEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.cluster.ClusterTimeouts,
	VersionReleaseSystem: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#name Cluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#project_id Cluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerInstanceSizeName">ProviderInstanceSizeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_name Cluster#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig">AcceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>*string</code> | Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.advancedConfiguration">AdvancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a></code> | advanced_configuration block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeEnabled">AutoScalingComputeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeScaleDownEnabled">AutoScalingComputeScaleDownEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingDiskGbEnabled">AutoScalingDiskGbEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backingProviderName">BackingProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backupEnabled">BackupEnabled</a></code> | <code>interface{}</code> | Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.biConnectorConfig">BiConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a></code> | bi_connector_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.cloudBackup">CloudBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#cloud_backup Cluster#cloud_backup}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.clusterType">ClusterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#cluster_type Cluster#cluster_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.encryptionAtRestProvider">EncryptionAtRestProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.mongoDbMajorVersion">MongoDbMajorVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.numShards">NumShards</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#num_shards Cluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.paused">Paused</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#paused Cluster#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pinnedFcv">PinnedFcv</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv">ClusterPinnedFcv</a></code> | pinned_fcv block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pitEnabled">PitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#pit_enabled Cluster#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMaxInstanceSize">ProviderAutoScalingComputeMaxInstanceSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMinInstanceSize">ProviderAutoScalingComputeMinInstanceSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskIops">ProviderDiskIops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskTypeName">ProviderDiskTypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerEncryptEbsVolume">ProviderEncryptEbsVolume</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerRegionName">ProviderRegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_region_name Cluster#provider_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerVolumeType">ProviderVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.redactClientLogData">RedactClientLogData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#redact_client_log_data Cluster#redact_client_log_data}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#replication_factor Cluster#replication_factor}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationSpecs">ReplicationSpecs</a></code> | <code>interface{}</code> | replication_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.retainBackupsEnabled">RetainBackupsEnabled</a></code> | <code>interface{}</code> | Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.versionReleaseSystem">VersionReleaseSystem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#version_release_system Cluster#version_release_system}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#name Cluster#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#project_id Cluster#project_id}.

---

##### `ProviderInstanceSizeName`<sup>Required</sup> <a name="ProviderInstanceSizeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerInstanceSizeName"></a>

```go
ProviderInstanceSizeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_name Cluster#provider_name}.

---

##### `AcceptDataRisksAndForceReplicaSetReconfig`<sup>Optional</sup> <a name="AcceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```go
AcceptDataRisksAndForceReplicaSetReconfig *string
```

- *Type:* *string

Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#accept_data_risks_and_force_replica_set_reconfig Cluster#accept_data_risks_and_force_replica_set_reconfig}

---

##### `AdvancedConfiguration`<sup>Optional</sup> <a name="AdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.advancedConfiguration"></a>

```go
AdvancedConfiguration ClusterAdvancedConfiguration
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

advanced_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#advanced_configuration Cluster#advanced_configuration}

---

##### `AutoScalingComputeEnabled`<sup>Optional</sup> <a name="AutoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeEnabled"></a>

```go
AutoScalingComputeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}.

---

##### `AutoScalingComputeScaleDownEnabled`<sup>Optional</sup> <a name="AutoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeScaleDownEnabled"></a>

```go
AutoScalingComputeScaleDownEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}.

---

##### `AutoScalingDiskGbEnabled`<sup>Optional</sup> <a name="AutoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingDiskGbEnabled"></a>

```go
AutoScalingDiskGbEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}.

---

##### `BackingProviderName`<sup>Optional</sup> <a name="BackingProviderName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backingProviderName"></a>

```go
BackingProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}.

---

##### `BackupEnabled`<sup>Optional</sup> <a name="BackupEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backupEnabled"></a>

```go
BackupEnabled interface{}
```

- *Type:* interface{}

Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#backup_enabled Cluster#backup_enabled}

---

##### `BiConnectorConfig`<sup>Optional</sup> <a name="BiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.biConnectorConfig"></a>

```go
BiConnectorConfig ClusterBiConnectorConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

bi_connector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#bi_connector_config Cluster#bi_connector_config}

---

##### `CloudBackup`<sup>Optional</sup> <a name="CloudBackup" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.cloudBackup"></a>

```go
CloudBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#cloud_backup Cluster#cloud_backup}.

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.clusterType"></a>

```go
ClusterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#cluster_type Cluster#cluster_type}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}.

---

##### `EncryptionAtRestProvider`<sup>Optional</sup> <a name="EncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.encryptionAtRestProvider"></a>

```go
EncryptionAtRestProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#labels Cluster#labels}

---

##### `MongoDbMajorVersion`<sup>Optional</sup> <a name="MongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.mongoDbMajorVersion"></a>

```go
MongoDbMajorVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}.

---

##### `NumShards`<sup>Optional</sup> <a name="NumShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.numShards"></a>

```go
NumShards *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#num_shards Cluster#num_shards}.

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#paused Cluster#paused}.

---

##### `PinnedFcv`<sup>Optional</sup> <a name="PinnedFcv" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pinnedFcv"></a>

```go
PinnedFcv ClusterPinnedFcv
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv">ClusterPinnedFcv</a>

pinned_fcv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#pinned_fcv Cluster#pinned_fcv}

---

##### `PitEnabled`<sup>Optional</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pitEnabled"></a>

```go
PitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#pit_enabled Cluster#pit_enabled}.

---

##### `ProviderAutoScalingComputeMaxInstanceSize`<sup>Optional</sup> <a name="ProviderAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMaxInstanceSize"></a>

```go
ProviderAutoScalingComputeMaxInstanceSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}.

---

##### `ProviderAutoScalingComputeMinInstanceSize`<sup>Optional</sup> <a name="ProviderAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMinInstanceSize"></a>

```go
ProviderAutoScalingComputeMinInstanceSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}.

---

##### `ProviderDiskIops`<sup>Optional</sup> <a name="ProviderDiskIops" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskIops"></a>

```go
ProviderDiskIops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}.

---

##### `ProviderDiskTypeName`<sup>Optional</sup> <a name="ProviderDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskTypeName"></a>

```go
ProviderDiskTypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}.

---

##### `ProviderEncryptEbsVolume`<sup>Optional</sup> <a name="ProviderEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerEncryptEbsVolume"></a>

```go
ProviderEncryptEbsVolume interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}.

---

##### `ProviderRegionName`<sup>Optional</sup> <a name="ProviderRegionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerRegionName"></a>

```go
ProviderRegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_region_name Cluster#provider_region_name}.

---

##### `ProviderVolumeType`<sup>Optional</sup> <a name="ProviderVolumeType" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerVolumeType"></a>

```go
ProviderVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}.

---

##### `RedactClientLogData`<sup>Optional</sup> <a name="RedactClientLogData" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.redactClientLogData"></a>

```go
RedactClientLogData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#redact_client_log_data Cluster#redact_client_log_data}.

---

##### `ReplicationFactor`<sup>Optional</sup> <a name="ReplicationFactor" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationFactor"></a>

```go
ReplicationFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#replication_factor Cluster#replication_factor}.

---

##### `ReplicationSpecs`<sup>Optional</sup> <a name="ReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationSpecs"></a>

```go
ReplicationSpecs interface{}
```

- *Type:* interface{}

replication_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#replication_specs Cluster#replication_specs}

---

##### `RetainBackupsEnabled`<sup>Optional</sup> <a name="RetainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.retainBackupsEnabled"></a>

```go
RetainBackupsEnabled interface{}
```

- *Type:* interface{}

Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#retain_backups_enabled Cluster#retain_backups_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#tags Cluster#tags}

---

##### `TerminationProtectionEnabled`<sup>Optional</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.terminationProtectionEnabled"></a>

```go
TerminationProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.timeouts"></a>

```go
Timeouts ClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `VersionReleaseSystem`<sup>Optional</sup> <a name="VersionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.versionReleaseSystem"></a>

```go
VersionReleaseSystem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#version_release_system Cluster#version_release_system}.

---

### ClusterConnectionStrings <a name="ClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterConnectionStrings {

}
```


### ClusterConnectionStringsPrivateEndpoint <a name="ClusterConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterConnectionStringsPrivateEndpoint {

}
```


### ClusterConnectionStringsPrivateEndpointEndpoints <a name="ClusterConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterConnectionStringsPrivateEndpointEndpoints {

}
```


### ClusterLabels <a name="ClusterLabels" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterLabels {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#key Cluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#value Cluster#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#key Cluster#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#value Cluster#value}.

---

### ClusterPinnedFcv <a name="ClusterPinnedFcv" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterPinnedFcv {
	ExpirationDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#expiration_date Cluster#expiration_date}. |

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv.property.expirationDate"></a>

```go
ExpirationDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#expiration_date Cluster#expiration_date}.

---

### ClusterReplicationSpecs <a name="ClusterReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterReplicationSpecs {
	NumShards: *f64,
	Id: *string,
	RegionsConfig: interface{},
	ZoneName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.numShards">NumShards</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#num_shards Cluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.regionsConfig">RegionsConfig</a></code> | <code>interface{}</code> | regions_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.zoneName">ZoneName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#zone_name Cluster#zone_name}. |

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.numShards"></a>

```go
NumShards *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#num_shards Cluster#num_shards}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RegionsConfig`<sup>Optional</sup> <a name="RegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.regionsConfig"></a>

```go
RegionsConfig interface{}
```

- *Type:* interface{}

regions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#regions_config Cluster#regions_config}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#zone_name Cluster#zone_name}.

---

### ClusterReplicationSpecsRegionsConfig <a name="ClusterReplicationSpecsRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterReplicationSpecsRegionsConfig {
	RegionName: *string,
	AnalyticsNodes: *f64,
	ElectableNodes: *f64,
	Priority: *f64,
	ReadOnlyNodes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.regionName">RegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#region_name Cluster#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.analyticsNodes">AnalyticsNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#analytics_nodes Cluster#analytics_nodes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.electableNodes">ElectableNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#electable_nodes Cluster#electable_nodes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#priority Cluster#priority}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.readOnlyNodes">ReadOnlyNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#read_only_nodes Cluster#read_only_nodes}. |

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#region_name Cluster#region_name}.

---

##### `AnalyticsNodes`<sup>Optional</sup> <a name="AnalyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.analyticsNodes"></a>

```go
AnalyticsNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#analytics_nodes Cluster#analytics_nodes}.

---

##### `ElectableNodes`<sup>Optional</sup> <a name="ElectableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.electableNodes"></a>

```go
ElectableNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#electable_nodes Cluster#electable_nodes}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#priority Cluster#priority}.

---

##### `ReadOnlyNodes`<sup>Optional</sup> <a name="ReadOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.readOnlyNodes"></a>

```go
ReadOnlyNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#read_only_nodes Cluster#read_only_nodes}.

---

### ClusterSnapshotBackupPolicy <a name="ClusterSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterSnapshotBackupPolicy {

}
```


### ClusterSnapshotBackupPolicyPolicies <a name="ClusterSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterSnapshotBackupPolicyPolicies {

}
```


### ClusterSnapshotBackupPolicyPoliciesPolicyItem <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem {

}
```


### ClusterTags <a name="ClusterTags" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#key Cluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#value Cluster#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#key Cluster#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#value Cluster#value}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

&cluster.ClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#update Cluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#create Cluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#delete Cluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/cluster#update Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAdvancedConfigurationOutputReference <a name="ClusterAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterAdvancedConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterAdvancedConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds">ResetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetCustomOpensslCipherConfigTls12">ResetCustomOpensslCipherConfigTls12</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultMaxTimeMs">ResetDefaultMaxTimeMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern">ResetDefaultReadConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern">ResetDefaultWriteConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong">ResetFailIndexKeyTooLong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled">ResetJavascriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol">ResetMinimumEnabledTlsProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetNoTableScan">ResetNoTableScan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours">ResetOplogMinRetentionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogSizeMb">ResetOplogSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector">ResetSampleRefreshIntervalBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector">ResetSampleSizeBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetTlsCipherConfigMode">ResetTlsCipherConfigMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetTransactionLifetimeLimitSeconds">ResetTransactionLifetimeLimitSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds` <a name="ResetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds"></a>

```go
func ResetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds()
```

##### `ResetCustomOpensslCipherConfigTls12` <a name="ResetCustomOpensslCipherConfigTls12" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetCustomOpensslCipherConfigTls12"></a>

```go
func ResetCustomOpensslCipherConfigTls12()
```

##### `ResetDefaultMaxTimeMs` <a name="ResetDefaultMaxTimeMs" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultMaxTimeMs"></a>

```go
func ResetDefaultMaxTimeMs()
```

##### `ResetDefaultReadConcern` <a name="ResetDefaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern"></a>

```go
func ResetDefaultReadConcern()
```

##### `ResetDefaultWriteConcern` <a name="ResetDefaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern"></a>

```go
func ResetDefaultWriteConcern()
```

##### `ResetFailIndexKeyTooLong` <a name="ResetFailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong"></a>

```go
func ResetFailIndexKeyTooLong()
```

##### `ResetJavascriptEnabled` <a name="ResetJavascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled"></a>

```go
func ResetJavascriptEnabled()
```

##### `ResetMinimumEnabledTlsProtocol` <a name="ResetMinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol"></a>

```go
func ResetMinimumEnabledTlsProtocol()
```

##### `ResetNoTableScan` <a name="ResetNoTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetNoTableScan"></a>

```go
func ResetNoTableScan()
```

##### `ResetOplogMinRetentionHours` <a name="ResetOplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours"></a>

```go
func ResetOplogMinRetentionHours()
```

##### `ResetOplogSizeMb` <a name="ResetOplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogSizeMb"></a>

```go
func ResetOplogSizeMb()
```

##### `ResetSampleRefreshIntervalBiConnector` <a name="ResetSampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector"></a>

```go
func ResetSampleRefreshIntervalBiConnector()
```

##### `ResetSampleSizeBiConnector` <a name="ResetSampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector"></a>

```go
func ResetSampleSizeBiConnector()
```

##### `ResetTlsCipherConfigMode` <a name="ResetTlsCipherConfigMode" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetTlsCipherConfigMode"></a>

```go
func ResetTlsCipherConfigMode()
```

##### `ResetTransactionLifetimeLimitSeconds` <a name="ResetTransactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetTransactionLifetimeLimitSeconds"></a>

```go
func ResetTransactionLifetimeLimitSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput">ChangeStreamOptionsPreAndPostImagesExpireAfterSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.customOpensslCipherConfigTls12Input">CustomOpensslCipherConfigTls12Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultMaxTimeMsInput">DefaultMaxTimeMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput">DefaultReadConcernInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput">DefaultWriteConcernInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput">FailIndexKeyTooLongInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput">JavascriptEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput">MinimumEnabledTlsProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScanInput">NoTableScanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput">OplogMinRetentionHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput">OplogSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput">SampleRefreshIntervalBiConnectorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput">SampleSizeBiConnectorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.tlsCipherConfigModeInput">TlsCipherConfigModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput">TransactionLifetimeLimitSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds">ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.customOpensslCipherConfigTls12">CustomOpensslCipherConfigTls12</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultMaxTimeMs">DefaultMaxTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcern">DefaultReadConcern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern">DefaultWriteConcern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">FailIndexKeyTooLong</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabled">JavascriptEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">MinimumEnabledTlsProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScan">NoTableScan</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">OplogMinRetentionHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMb">OplogSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">SampleRefreshIntervalBiConnector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">SampleSizeBiConnector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.tlsCipherConfigMode">TlsCipherConfigMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds">TransactionLifetimeLimitSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeStreamOptionsPreAndPostImagesExpireAfterSecondsInput`<sup>Optional</sup> <a name="ChangeStreamOptionsPreAndPostImagesExpireAfterSecondsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput"></a>

```go
func ChangeStreamOptionsPreAndPostImagesExpireAfterSecondsInput() *f64
```

- *Type:* *f64

---

##### `CustomOpensslCipherConfigTls12Input`<sup>Optional</sup> <a name="CustomOpensslCipherConfigTls12Input" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.customOpensslCipherConfigTls12Input"></a>

```go
func CustomOpensslCipherConfigTls12Input() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultMaxTimeMsInput`<sup>Optional</sup> <a name="DefaultMaxTimeMsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultMaxTimeMsInput"></a>

```go
func DefaultMaxTimeMsInput() *f64
```

- *Type:* *f64

---

##### `DefaultReadConcernInput`<sup>Optional</sup> <a name="DefaultReadConcernInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput"></a>

```go
func DefaultReadConcernInput() *string
```

- *Type:* *string

---

##### `DefaultWriteConcernInput`<sup>Optional</sup> <a name="DefaultWriteConcernInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput"></a>

```go
func DefaultWriteConcernInput() *string
```

- *Type:* *string

---

##### `FailIndexKeyTooLongInput`<sup>Optional</sup> <a name="FailIndexKeyTooLongInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput"></a>

```go
func FailIndexKeyTooLongInput() interface{}
```

- *Type:* interface{}

---

##### `JavascriptEnabledInput`<sup>Optional</sup> <a name="JavascriptEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput"></a>

```go
func JavascriptEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumEnabledTlsProtocolInput`<sup>Optional</sup> <a name="MinimumEnabledTlsProtocolInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput"></a>

```go
func MinimumEnabledTlsProtocolInput() *string
```

- *Type:* *string

---

##### `NoTableScanInput`<sup>Optional</sup> <a name="NoTableScanInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScanInput"></a>

```go
func NoTableScanInput() interface{}
```

- *Type:* interface{}

---

##### `OplogMinRetentionHoursInput`<sup>Optional</sup> <a name="OplogMinRetentionHoursInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput"></a>

```go
func OplogMinRetentionHoursInput() *f64
```

- *Type:* *f64

---

##### `OplogSizeMbInput`<sup>Optional</sup> <a name="OplogSizeMbInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput"></a>

```go
func OplogSizeMbInput() *f64
```

- *Type:* *f64

---

##### `SampleRefreshIntervalBiConnectorInput`<sup>Optional</sup> <a name="SampleRefreshIntervalBiConnectorInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput"></a>

```go
func SampleRefreshIntervalBiConnectorInput() *f64
```

- *Type:* *f64

---

##### `SampleSizeBiConnectorInput`<sup>Optional</sup> <a name="SampleSizeBiConnectorInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput"></a>

```go
func SampleSizeBiConnectorInput() *f64
```

- *Type:* *f64

---

##### `TlsCipherConfigModeInput`<sup>Optional</sup> <a name="TlsCipherConfigModeInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.tlsCipherConfigModeInput"></a>

```go
func TlsCipherConfigModeInput() *string
```

- *Type:* *string

---

##### `TransactionLifetimeLimitSecondsInput`<sup>Optional</sup> <a name="TransactionLifetimeLimitSecondsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput"></a>

```go
func TransactionLifetimeLimitSecondsInput() *f64
```

- *Type:* *f64

---

##### `ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds`<sup>Required</sup> <a name="ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds"></a>

```go
func ChangeStreamOptionsPreAndPostImagesExpireAfterSeconds() *f64
```

- *Type:* *f64

---

##### `CustomOpensslCipherConfigTls12`<sup>Required</sup> <a name="CustomOpensslCipherConfigTls12" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.customOpensslCipherConfigTls12"></a>

```go
func CustomOpensslCipherConfigTls12() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultMaxTimeMs`<sup>Required</sup> <a name="DefaultMaxTimeMs" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultMaxTimeMs"></a>

```go
func DefaultMaxTimeMs() *f64
```

- *Type:* *f64

---

##### `DefaultReadConcern`<sup>Required</sup> <a name="DefaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```go
func DefaultReadConcern() *string
```

- *Type:* *string

---

##### `DefaultWriteConcern`<sup>Required</sup> <a name="DefaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```go
func DefaultWriteConcern() *string
```

- *Type:* *string

---

##### `FailIndexKeyTooLong`<sup>Required</sup> <a name="FailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```go
func FailIndexKeyTooLong() interface{}
```

- *Type:* interface{}

---

##### `JavascriptEnabled`<sup>Required</sup> <a name="JavascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```go
func JavascriptEnabled() interface{}
```

- *Type:* interface{}

---

##### `MinimumEnabledTlsProtocol`<sup>Required</sup> <a name="MinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```go
func MinimumEnabledTlsProtocol() *string
```

- *Type:* *string

---

##### `NoTableScan`<sup>Required</sup> <a name="NoTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScan"></a>

```go
func NoTableScan() interface{}
```

- *Type:* interface{}

---

##### `OplogMinRetentionHours`<sup>Required</sup> <a name="OplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```go
func OplogMinRetentionHours() *f64
```

- *Type:* *f64

---

##### `OplogSizeMb`<sup>Required</sup> <a name="OplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```go
func OplogSizeMb() *f64
```

- *Type:* *f64

---

##### `SampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="SampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```go
func SampleRefreshIntervalBiConnector() *f64
```

- *Type:* *f64

---

##### `SampleSizeBiConnector`<sup>Required</sup> <a name="SampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```go
func SampleSizeBiConnector() *f64
```

- *Type:* *f64

---

##### `TlsCipherConfigMode`<sup>Required</sup> <a name="TlsCipherConfigMode" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.tlsCipherConfigMode"></a>

```go
func TlsCipherConfigMode() *string
```

- *Type:* *string

---

##### `TransactionLifetimeLimitSeconds`<sup>Required</sup> <a name="TransactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds"></a>

```go
func TransactionLifetimeLimitSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterAdvancedConfiguration
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

---


### ClusterBiConnectorConfigOutputReference <a name="ClusterBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterBiConnectorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterBiConnectorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetReadPreference">ResetReadPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetReadPreference` <a name="ResetReadPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetReadPreference"></a>

```go
func ResetReadPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreferenceInput">ReadPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreference">ReadPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReadPreferenceInput`<sup>Optional</sup> <a name="ReadPreferenceInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreferenceInput"></a>

```go
func ReadPreferenceInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ReadPreference`<sup>Required</sup> <a name="ReadPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreference"></a>

```go
func ReadPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterBiConnectorConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

---


### ClusterConnectionStringsList <a name="ClusterConnectionStringsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get"></a>

```go
func Get(index *f64) ClusterConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClusterConnectionStringsOutputReference <a name="ClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.private">Private</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList">ClusterConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateSrv">PrivateSrv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standard">Standard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standardSrv">StandardSrv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings">ClusterConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Private`<sup>Required</sup> <a name="Private" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.private"></a>

```go
func Private() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() ClusterConnectionStringsPrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList">ClusterConnectionStringsPrivateEndpointList</a>

---

##### `PrivateSrv`<sup>Required</sup> <a name="PrivateSrv" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateSrv"></a>

```go
func PrivateSrv() *string
```

- *Type:* *string

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standard"></a>

```go
func Standard() *string
```

- *Type:* *string

---

##### `StandardSrv`<sup>Required</sup> <a name="StandardSrv" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standardSrv"></a>

```go
func StandardSrv() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings">ClusterConnectionStrings</a>

---


### ClusterConnectionStringsPrivateEndpointEndpointsList <a name="ClusterConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterConnectionStringsPrivateEndpointEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterConnectionStringsPrivateEndpointEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get"></a>

```go
func Get(index *f64) ClusterConnectionStringsPrivateEndpointEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClusterConnectionStringsPrivateEndpointEndpointsOutputReference <a name="ClusterConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterConnectionStringsPrivateEndpointEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterConnectionStringsPrivateEndpointEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints">ClusterConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterConnectionStringsPrivateEndpointEndpoints
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints">ClusterConnectionStringsPrivateEndpointEndpoints</a>

---


### ClusterConnectionStringsPrivateEndpointList <a name="ClusterConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterConnectionStringsPrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterConnectionStringsPrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get"></a>

```go
func Get(index *f64) ClusterConnectionStringsPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClusterConnectionStringsPrivateEndpointOutputReference <a name="ClusterConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterConnectionStringsPrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterConnectionStringsPrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList">ClusterConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">SrvConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString">SrvShardOptimizedConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint">ClusterConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```go
func Endpoints() ClusterConnectionStringsPrivateEndpointEndpointsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList">ClusterConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `SrvConnectionString`<sup>Required</sup> <a name="SrvConnectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```go
func SrvConnectionString() *string
```

- *Type:* *string

---

##### `SrvShardOptimizedConnectionString`<sup>Required</sup> <a name="SrvShardOptimizedConnectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString"></a>

```go
func SrvShardOptimizedConnectionString() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterConnectionStringsPrivateEndpoint
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint">ClusterConnectionStringsPrivateEndpoint</a>

---


### ClusterLabelsList <a name="ClusterLabelsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get"></a>

```go
func Get(index *f64) ClusterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterLabelsOutputReference <a name="ClusterLabelsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterPinnedFcvOutputReference <a name="ClusterPinnedFcvOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterPinnedFcvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterPinnedFcvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.expirationDateInput">ExpirationDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv">ClusterPinnedFcv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.expirationDateInput"></a>

```go
func ExpirationDateInput() *string
```

- *Type:* *string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcvOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterPinnedFcv
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterPinnedFcv">ClusterPinnedFcv</a>

---


### ClusterReplicationSpecsList <a name="ClusterReplicationSpecsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterReplicationSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterReplicationSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get"></a>

```go
func Get(index *f64) ClusterReplicationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterReplicationSpecsOutputReference <a name="ClusterReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterReplicationSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterReplicationSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig">PutRegionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetRegionsConfig">ResetRegionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRegionsConfig` <a name="PutRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig"></a>

```go
func PutRegionsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetRegionsConfig` <a name="ResetRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetRegionsConfig"></a>

```go
func ResetRegionsConfig()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetZoneName"></a>

```go
func ResetZoneName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfig">RegionsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList">ClusterReplicationSpecsRegionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShardsInput">NumShardsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfigInput">RegionsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShards">NumShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionsConfig`<sup>Required</sup> <a name="RegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfig"></a>

```go
func RegionsConfig() ClusterReplicationSpecsRegionsConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList">ClusterReplicationSpecsRegionsConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NumShardsInput`<sup>Optional</sup> <a name="NumShardsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShardsInput"></a>

```go
func NumShardsInput() *f64
```

- *Type:* *f64

---

##### `RegionsConfigInput`<sup>Optional</sup> <a name="RegionsConfigInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfigInput"></a>

```go
func RegionsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShards"></a>

```go
func NumShards() *f64
```

- *Type:* *f64

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterReplicationSpecsRegionsConfigList <a name="ClusterReplicationSpecsRegionsConfigList" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterReplicationSpecsRegionsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterReplicationSpecsRegionsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get"></a>

```go
func Get(index *f64) ClusterReplicationSpecsRegionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterReplicationSpecsRegionsConfigOutputReference <a name="ClusterReplicationSpecsRegionsConfigOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterReplicationSpecsRegionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterReplicationSpecsRegionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetAnalyticsNodes">ResetAnalyticsNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetElectableNodes">ResetElectableNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetReadOnlyNodes">ResetReadOnlyNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalyticsNodes` <a name="ResetAnalyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetAnalyticsNodes"></a>

```go
func ResetAnalyticsNodes()
```

##### `ResetElectableNodes` <a name="ResetElectableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetElectableNodes"></a>

```go
func ResetElectableNodes()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetReadOnlyNodes` <a name="ResetReadOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetReadOnlyNodes"></a>

```go
func ResetReadOnlyNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodesInput">AnalyticsNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodesInput">ElectableNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodesInput">ReadOnlyNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodes">AnalyticsNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodes">ElectableNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodes">ReadOnlyNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnalyticsNodesInput`<sup>Optional</sup> <a name="AnalyticsNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodesInput"></a>

```go
func AnalyticsNodesInput() *f64
```

- *Type:* *f64

---

##### `ElectableNodesInput`<sup>Optional</sup> <a name="ElectableNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodesInput"></a>

```go
func ElectableNodesInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ReadOnlyNodesInput`<sup>Optional</sup> <a name="ReadOnlyNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodesInput"></a>

```go
func ReadOnlyNodesInput() *f64
```

- *Type:* *f64

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `AnalyticsNodes`<sup>Required</sup> <a name="AnalyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodes"></a>

```go
func AnalyticsNodes() *f64
```

- *Type:* *f64

---

##### `ElectableNodes`<sup>Required</sup> <a name="ElectableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodes"></a>

```go
func ElectableNodes() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ReadOnlyNodes`<sup>Required</sup> <a name="ReadOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodes"></a>

```go
func ReadOnlyNodes() *f64
```

- *Type:* *f64

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterSnapshotBackupPolicyList <a name="ClusterSnapshotBackupPolicyList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterSnapshotBackupPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterSnapshotBackupPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get"></a>

```go
func Get(index *f64) ClusterSnapshotBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClusterSnapshotBackupPolicyOutputReference <a name="ClusterSnapshotBackupPolicyOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterSnapshotBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterSnapshotBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.nextSnapshot">NextSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList">ClusterSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceHourOfDay">ReferenceHourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceMinuteOfHour">ReferenceMinuteOfHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.updateSnapshots">UpdateSnapshots</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy">ClusterSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `NextSnapshot`<sup>Required</sup> <a name="NextSnapshot" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.nextSnapshot"></a>

```go
func NextSnapshot() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.policies"></a>

```go
func Policies() ClusterSnapshotBackupPolicyPoliciesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList">ClusterSnapshotBackupPolicyPoliciesList</a>

---

##### `ReferenceHourOfDay`<sup>Required</sup> <a name="ReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceHourOfDay"></a>

```go
func ReferenceHourOfDay() *f64
```

- *Type:* *f64

---

##### `ReferenceMinuteOfHour`<sup>Required</sup> <a name="ReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceMinuteOfHour"></a>

```go
func ReferenceMinuteOfHour() *f64
```

- *Type:* *f64

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.restoreWindowDays"></a>

```go
func RestoreWindowDays() *f64
```

- *Type:* *f64

---

##### `UpdateSnapshots`<sup>Required</sup> <a name="UpdateSnapshots" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.updateSnapshots"></a>

```go
func UpdateSnapshots() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterSnapshotBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy">ClusterSnapshotBackupPolicy</a>

---


### ClusterSnapshotBackupPolicyPoliciesList <a name="ClusterSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterSnapshotBackupPolicyPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterSnapshotBackupPolicyPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get"></a>

```go
func Get(index *f64) ClusterSnapshotBackupPolicyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClusterSnapshotBackupPolicyPoliciesOutputReference <a name="ClusterSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterSnapshotBackupPolicyPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterSnapshotBackupPolicyPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">PolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList">ClusterSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies">ClusterSnapshotBackupPolicyPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyItem`<sup>Required</sup> <a name="PolicyItem" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```go
func PolicyItem() ClusterSnapshotBackupPolicyPoliciesPolicyItemList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList">ClusterSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterSnapshotBackupPolicyPolicies
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies">ClusterSnapshotBackupPolicyPolicies</a>

---


### ClusterSnapshotBackupPolicyPoliciesPolicyItemList <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterSnapshotBackupPolicyPoliciesPolicyItemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterSnapshotBackupPolicyPoliciesPolicyItemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```go
func Get(index *f64) ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem">ClusterSnapshotBackupPolicyPoliciesPolicyItem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterSnapshotBackupPolicyPoliciesPolicyItem
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem">ClusterSnapshotBackupPolicyPoliciesPolicyItem</a>

---


### ClusterTagsList <a name="ClusterTagsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get"></a>

```go
func Get(index *f64) ClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterTagsOutputReference <a name="ClusterTagsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cluster"

cluster.NewClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



