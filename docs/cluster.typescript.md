# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-mongodbatlas.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-mongodbatlas.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster mongodbatlas_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.Cluster(scope: Construct, id: string, config: ClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cluster.Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig">ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cluster.Cluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.cluster.Cluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedConfiguration` <a name="putAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration"></a>

```typescript
public putAdvancedConfiguration(value: ClusterAdvancedConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putAdvancedConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

---

##### `putBiConnectorConfig` <a name="putBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig"></a>

```typescript
public putBiConnectorConfig(value: ClusterBiConnectorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putBiConnectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ClusterLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>[]

---

##### `putReplicationSpecs` <a name="putReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs"></a>

```typescript
public putReplicationSpecs(value: IResolvable | ClusterReplicationSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putReplicationSpecs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTags"></a>

```typescript
public putTags(value: IResolvable | ClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `resetAcceptDataRisksAndForceReplicaSetReconfig` <a name="resetAcceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAcceptDataRisksAndForceReplicaSetReconfig"></a>

```typescript
public resetAcceptDataRisksAndForceReplicaSetReconfig(): void
```

##### `resetAdvancedConfiguration` <a name="resetAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAdvancedConfiguration"></a>

```typescript
public resetAdvancedConfiguration(): void
```

##### `resetAutoScalingComputeEnabled` <a name="resetAutoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeEnabled"></a>

```typescript
public resetAutoScalingComputeEnabled(): void
```

##### `resetAutoScalingComputeScaleDownEnabled` <a name="resetAutoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingComputeScaleDownEnabled"></a>

```typescript
public resetAutoScalingComputeScaleDownEnabled(): void
```

##### `resetAutoScalingDiskGbEnabled` <a name="resetAutoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetAutoScalingDiskGbEnabled"></a>

```typescript
public resetAutoScalingDiskGbEnabled(): void
```

##### `resetBackingProviderName` <a name="resetBackingProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackingProviderName"></a>

```typescript
public resetBackingProviderName(): void
```

##### `resetBackupEnabled` <a name="resetBackupEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBackupEnabled"></a>

```typescript
public resetBackupEnabled(): void
```

##### `resetBiConnectorConfig` <a name="resetBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetBiConnectorConfig"></a>

```typescript
public resetBiConnectorConfig(): void
```

##### `resetCloudBackup` <a name="resetCloudBackup" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetCloudBackup"></a>

```typescript
public resetCloudBackup(): void
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetEncryptionAtRestProvider` <a name="resetEncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetEncryptionAtRestProvider"></a>

```typescript
public resetEncryptionAtRestProvider(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMongoDbMajorVersion` <a name="resetMongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetMongoDbMajorVersion"></a>

```typescript
public resetMongoDbMajorVersion(): void
```

##### `resetNumShards` <a name="resetNumShards" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetNumShards"></a>

```typescript
public resetNumShards(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetPitEnabled` <a name="resetPitEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetPitEnabled"></a>

```typescript
public resetPitEnabled(): void
```

##### `resetProviderAutoScalingComputeMaxInstanceSize` <a name="resetProviderAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMaxInstanceSize"></a>

```typescript
public resetProviderAutoScalingComputeMaxInstanceSize(): void
```

##### `resetProviderAutoScalingComputeMinInstanceSize` <a name="resetProviderAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderAutoScalingComputeMinInstanceSize"></a>

```typescript
public resetProviderAutoScalingComputeMinInstanceSize(): void
```

##### `resetProviderDiskIops` <a name="resetProviderDiskIops" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskIops"></a>

```typescript
public resetProviderDiskIops(): void
```

##### `resetProviderDiskTypeName` <a name="resetProviderDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderDiskTypeName"></a>

```typescript
public resetProviderDiskTypeName(): void
```

##### `resetProviderEncryptEbsVolume` <a name="resetProviderEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderEncryptEbsVolume"></a>

```typescript
public resetProviderEncryptEbsVolume(): void
```

##### `resetProviderRegionName` <a name="resetProviderRegionName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderRegionName"></a>

```typescript
public resetProviderRegionName(): void
```

##### `resetProviderVolumeType` <a name="resetProviderVolumeType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetProviderVolumeType"></a>

```typescript
public resetProviderVolumeType(): void
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationFactor"></a>

```typescript
public resetReplicationFactor(): void
```

##### `resetReplicationSpecs` <a name="resetReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetReplicationSpecs"></a>

```typescript
public resetReplicationSpecs(): void
```

##### `resetRetainBackupsEnabled` <a name="resetRetainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetRetainBackupsEnabled"></a>

```typescript
public resetRetainBackupsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTerminationProtectionEnabled"></a>

```typescript
public resetTerminationProtectionEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionReleaseSystem` <a name="resetVersionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.Cluster.resetVersionReleaseSystem"></a>

```typescript
public resetVersionReleaseSystem(): void
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

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

cluster.Cluster.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

cluster.Cluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

cluster.Cluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

cluster.Cluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference">ClusterAdvancedConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference">ClusterBiConnectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList">ClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList">ClusterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUri">mongoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriUpdated">mongoUriUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriWithOptions">mongoUriWithOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeFlag">providerEncryptEbsVolumeFlag</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList">ClusterReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.snapshotBackupPolicy">snapshotBackupPolicy</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList">ClusterSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.srvAddress">srvAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.stateName">stateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList">ClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfigInput">acceptDataRisksAndForceReplicaSetReconfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfigurationInput">advancedConfigurationInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabledInput">autoScalingComputeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabledInput">autoScalingComputeScaleDownEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabledInput">autoScalingDiskGbEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderNameInput">backingProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabledInput">backupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfigInput">biConnectorConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackupInput">cloudBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProviderInput">encryptionAtRestProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersionInput">mongoDbMajorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShardsInput">numShardsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabledInput">pitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSizeInput">providerAutoScalingComputeMaxInstanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSizeInput">providerAutoScalingComputeMinInstanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIopsInput">providerDiskIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeNameInput">providerDiskTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeInput">providerEncryptEbsVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeNameInput">providerInstanceSizeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionNameInput">providerRegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeTypeInput">providerVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecsInput">replicationSpecsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabledInput">retainBackupsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystemInput">versionReleaseSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfig">acceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabled">autoScalingComputeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabled">autoScalingComputeScaleDownEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabled">autoScalingDiskGbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderName">backingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabled">backupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackup">cloudBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSize">providerAutoScalingComputeMaxInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSize">providerAutoScalingComputeMinInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIops">providerDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeName">providerDiskTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolume">providerEncryptEbsVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeName">providerInstanceSizeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionName">providerRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeType">providerVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabled">retainBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: ClusterAdvancedConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference">ClusterAdvancedConfigurationOutputReference</a>

---

##### `biConnectorConfig`<sup>Required</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfig"></a>

```typescript
public readonly biConnectorConfig: ClusterBiConnectorConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference">ClusterBiConnectorConfigOutputReference</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: ClusterConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList">ClusterConnectionStringsList</a>

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.labels"></a>

```typescript
public readonly labels: ClusterLabelsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList">ClusterLabelsList</a>

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `mongoUri`<sup>Required</sup> <a name="mongoUri" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUri"></a>

```typescript
public readonly mongoUri: string;
```

- *Type:* string

---

##### `mongoUriUpdated`<sup>Required</sup> <a name="mongoUriUpdated" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriUpdated"></a>

```typescript
public readonly mongoUriUpdated: string;
```

- *Type:* string

---

##### `mongoUriWithOptions`<sup>Required</sup> <a name="mongoUriWithOptions" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoUriWithOptions"></a>

```typescript
public readonly mongoUriWithOptions: string;
```

- *Type:* string

---

##### `providerEncryptEbsVolumeFlag`<sup>Required</sup> <a name="providerEncryptEbsVolumeFlag" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeFlag"></a>

```typescript
public readonly providerEncryptEbsVolumeFlag: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: ClusterReplicationSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList">ClusterReplicationSpecsList</a>

---

##### `snapshotBackupPolicy`<sup>Required</sup> <a name="snapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.snapshotBackupPolicy"></a>

```typescript
public readonly snapshotBackupPolicy: ClusterSnapshotBackupPolicyList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList">ClusterSnapshotBackupPolicyList</a>

---

##### `srvAddress`<sup>Required</sup> <a name="srvAddress" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.srvAddress"></a>

```typescript
public readonly srvAddress: string;
```

- *Type:* string

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tags"></a>

```typescript
public readonly tags: ClusterTagsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList">ClusterTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeouts"></a>

```typescript
public readonly timeouts: ClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `acceptDataRisksAndForceReplicaSetReconfigInput`<sup>Optional</sup> <a name="acceptDataRisksAndForceReplicaSetReconfigInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfigInput"></a>

```typescript
public readonly acceptDataRisksAndForceReplicaSetReconfigInput: string;
```

- *Type:* string

---

##### `advancedConfigurationInput`<sup>Optional</sup> <a name="advancedConfigurationInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.advancedConfigurationInput"></a>

```typescript
public readonly advancedConfigurationInput: ClusterAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

---

##### `autoScalingComputeEnabledInput`<sup>Optional</sup> <a name="autoScalingComputeEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabledInput"></a>

```typescript
public readonly autoScalingComputeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoScalingComputeScaleDownEnabledInput`<sup>Optional</sup> <a name="autoScalingComputeScaleDownEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabledInput"></a>

```typescript
public readonly autoScalingComputeScaleDownEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoScalingDiskGbEnabledInput`<sup>Optional</sup> <a name="autoScalingDiskGbEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabledInput"></a>

```typescript
public readonly autoScalingDiskGbEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backingProviderNameInput`<sup>Optional</sup> <a name="backingProviderNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderNameInput"></a>

```typescript
public readonly backingProviderNameInput: string;
```

- *Type:* string

---

##### `backupEnabledInput`<sup>Optional</sup> <a name="backupEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabledInput"></a>

```typescript
public readonly backupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `biConnectorConfigInput`<sup>Optional</sup> <a name="biConnectorConfigInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.biConnectorConfigInput"></a>

```typescript
public readonly biConnectorConfigInput: ClusterBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

---

##### `cloudBackupInput`<sup>Optional</sup> <a name="cloudBackupInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackupInput"></a>

```typescript
public readonly cloudBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `encryptionAtRestProviderInput`<sup>Optional</sup> <a name="encryptionAtRestProviderInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProviderInput"></a>

```typescript
public readonly encryptionAtRestProviderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ClusterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>[]

---

##### `mongoDbMajorVersionInput`<sup>Optional</sup> <a name="mongoDbMajorVersionInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersionInput"></a>

```typescript
public readonly mongoDbMajorVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShardsInput"></a>

```typescript
public readonly numShardsInput: number;
```

- *Type:* number

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pitEnabledInput`<sup>Optional</sup> <a name="pitEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabledInput"></a>

```typescript
public readonly pitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerAutoScalingComputeMaxInstanceSizeInput`<sup>Optional</sup> <a name="providerAutoScalingComputeMaxInstanceSizeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSizeInput"></a>

```typescript
public readonly providerAutoScalingComputeMaxInstanceSizeInput: string;
```

- *Type:* string

---

##### `providerAutoScalingComputeMinInstanceSizeInput`<sup>Optional</sup> <a name="providerAutoScalingComputeMinInstanceSizeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSizeInput"></a>

```typescript
public readonly providerAutoScalingComputeMinInstanceSizeInput: string;
```

- *Type:* string

---

##### `providerDiskIopsInput`<sup>Optional</sup> <a name="providerDiskIopsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIopsInput"></a>

```typescript
public readonly providerDiskIopsInput: number;
```

- *Type:* number

---

##### `providerDiskTypeNameInput`<sup>Optional</sup> <a name="providerDiskTypeNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeNameInput"></a>

```typescript
public readonly providerDiskTypeNameInput: string;
```

- *Type:* string

---

##### `providerEncryptEbsVolumeInput`<sup>Optional</sup> <a name="providerEncryptEbsVolumeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolumeInput"></a>

```typescript
public readonly providerEncryptEbsVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `providerInstanceSizeNameInput`<sup>Optional</sup> <a name="providerInstanceSizeNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeNameInput"></a>

```typescript
public readonly providerInstanceSizeNameInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `providerRegionNameInput`<sup>Optional</sup> <a name="providerRegionNameInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionNameInput"></a>

```typescript
public readonly providerRegionNameInput: string;
```

- *Type:* string

---

##### `providerVolumeTypeInput`<sup>Optional</sup> <a name="providerVolumeTypeInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeTypeInput"></a>

```typescript
public readonly providerVolumeTypeInput: string;
```

- *Type:* string

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `replicationSpecsInput`<sup>Optional</sup> <a name="replicationSpecsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationSpecsInput"></a>

```typescript
public readonly replicationSpecsInput: IResolvable | ClusterReplicationSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>[]

---

##### `retainBackupsEnabledInput`<sup>Optional</sup> <a name="retainBackupsEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabledInput"></a>

```typescript
public readonly retainBackupsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ClusterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>[]

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabledInput"></a>

```typescript
public readonly terminationProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `versionReleaseSystemInput`<sup>Optional</sup> <a name="versionReleaseSystemInput" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystemInput"></a>

```typescript
public readonly versionReleaseSystemInput: string;
```

- *Type:* string

---

##### `acceptDataRisksAndForceReplicaSetReconfig`<sup>Required</sup> <a name="acceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```typescript
public readonly acceptDataRisksAndForceReplicaSetReconfig: string;
```

- *Type:* string

---

##### `autoScalingComputeEnabled`<sup>Required</sup> <a name="autoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeEnabled"></a>

```typescript
public readonly autoScalingComputeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoScalingComputeScaleDownEnabled`<sup>Required</sup> <a name="autoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingComputeScaleDownEnabled"></a>

```typescript
public readonly autoScalingComputeScaleDownEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoScalingDiskGbEnabled`<sup>Required</sup> <a name="autoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.autoScalingDiskGbEnabled"></a>

```typescript
public readonly autoScalingDiskGbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backingProviderName`<sup>Required</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backingProviderName"></a>

```typescript
public readonly backingProviderName: string;
```

- *Type:* string

---

##### `backupEnabled`<sup>Required</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudBackup`<sup>Required</sup> <a name="cloudBackup" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.cloudBackup"></a>

```typescript
public readonly cloudBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `encryptionAtRestProvider`<sup>Required</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mongoDbMajorVersion`<sup>Required</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerAutoScalingComputeMaxInstanceSize`<sup>Required</sup> <a name="providerAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMaxInstanceSize"></a>

```typescript
public readonly providerAutoScalingComputeMaxInstanceSize: string;
```

- *Type:* string

---

##### `providerAutoScalingComputeMinInstanceSize`<sup>Required</sup> <a name="providerAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerAutoScalingComputeMinInstanceSize"></a>

```typescript
public readonly providerAutoScalingComputeMinInstanceSize: string;
```

- *Type:* string

---

##### `providerDiskIops`<sup>Required</sup> <a name="providerDiskIops" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskIops"></a>

```typescript
public readonly providerDiskIops: number;
```

- *Type:* number

---

##### `providerDiskTypeName`<sup>Required</sup> <a name="providerDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerDiskTypeName"></a>

```typescript
public readonly providerDiskTypeName: string;
```

- *Type:* string

---

##### `providerEncryptEbsVolume`<sup>Required</sup> <a name="providerEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerEncryptEbsVolume"></a>

```typescript
public readonly providerEncryptEbsVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `providerInstanceSizeName`<sup>Required</sup> <a name="providerInstanceSizeName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerInstanceSizeName"></a>

```typescript
public readonly providerInstanceSizeName: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `providerRegionName`<sup>Required</sup> <a name="providerRegionName" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerRegionName"></a>

```typescript
public readonly providerRegionName: string;
```

- *Type:* string

---

##### `providerVolumeType`<sup>Required</sup> <a name="providerVolumeType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.providerVolumeType"></a>

```typescript
public readonly providerVolumeType: string;
```

- *Type:* string

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `retainBackupsEnabled`<sup>Required</sup> <a name="retainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.retainBackupsEnabled"></a>

```typescript
public readonly retainBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionReleaseSystem`<sup>Required</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.Cluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cluster.Cluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAdvancedConfiguration <a name="ClusterAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterAdvancedConfiguration: cluster.ClusterAdvancedConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#default_read_concern Cluster#default_read_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#default_write_concern Cluster#default_write_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#fail_index_key_too_long Cluster#fail_index_key_too_long}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.javascriptEnabled">javascriptEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#javascript_enabled Cluster#javascript_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#minimum_enabled_tls_protocol Cluster#minimum_enabled_tls_protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.noTableScan">noTableScan</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#no_table_scan Cluster#no_table_scan}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#oplog_min_retention_hours Cluster#oplog_min_retention_hours}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#oplog_size_mb Cluster#oplog_size_mb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#sample_refresh_interval_bi_connector Cluster#sample_refresh_interval_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#sample_size_bi_connector Cluster#sample_size_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#transaction_lifetime_limit_seconds Cluster#transaction_lifetime_limit_seconds}. |

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#default_read_concern Cluster#default_read_concern}.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#default_write_concern Cluster#default_write_concern}.

---

##### `failIndexKeyTooLong`<sup>Optional</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#fail_index_key_too_long Cluster#fail_index_key_too_long}.

---

##### `javascriptEnabled`<sup>Optional</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#javascript_enabled Cluster#javascript_enabled}.

---

##### `minimumEnabledTlsProtocol`<sup>Optional</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#minimum_enabled_tls_protocol Cluster#minimum_enabled_tls_protocol}.

---

##### `noTableScan`<sup>Optional</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.noTableScan"></a>

```typescript
public readonly noTableScan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#no_table_scan Cluster#no_table_scan}.

---

##### `oplogMinRetentionHours`<sup>Optional</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogMinRetentionHours"></a>

```typescript
public readonly oplogMinRetentionHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#oplog_min_retention_hours Cluster#oplog_min_retention_hours}.

---

##### `oplogSizeMb`<sup>Optional</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#oplog_size_mb Cluster#oplog_size_mb}.

---

##### `sampleRefreshIntervalBiConnector`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#sample_refresh_interval_bi_connector Cluster#sample_refresh_interval_bi_connector}.

---

##### `sampleSizeBiConnector`<sup>Optional</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#sample_size_bi_connector Cluster#sample_size_bi_connector}.

---

##### `transactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds"></a>

```typescript
public readonly transactionLifetimeLimitSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#transaction_lifetime_limit_seconds Cluster#transaction_lifetime_limit_seconds}.

---

### ClusterBiConnectorConfig <a name="ClusterBiConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterBiConnectorConfig: cluster.ClusterBiConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#enabled Cluster#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.readPreference">readPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#read_preference Cluster#read_preference}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#enabled Cluster#enabled}.

---

##### `readPreference`<sup>Optional</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#read_preference Cluster#read_preference}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterConfig: cluster.ClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#name Cluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#project_id Cluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerInstanceSizeName">providerInstanceSizeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_name Cluster#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig">acceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>string</code> | Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a></code> | advanced_configuration block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeEnabled">autoScalingComputeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeScaleDownEnabled">autoScalingComputeScaleDownEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingDiskGbEnabled">autoScalingDiskGbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backingProviderName">backingProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backupEnabled">backupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a></code> | bi_connector_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.cloudBackup">cloudBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#cloud_backup Cluster#cloud_backup}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.clusterType">clusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#cluster_type Cluster#cluster_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.numShards">numShards</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#num_shards Cluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#paused Cluster#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#pit_enabled Cluster#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMaxInstanceSize">providerAutoScalingComputeMaxInstanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMinInstanceSize">providerAutoScalingComputeMinInstanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskIops">providerDiskIops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskTypeName">providerDiskTypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerEncryptEbsVolume">providerEncryptEbsVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerRegionName">providerRegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_region_name Cluster#provider_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerVolumeType">providerVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#replication_factor Cluster#replication_factor}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationSpecs">replicationSpecs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>[]</code> | replication_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.retainBackupsEnabled">retainBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#version_release_system Cluster#version_release_system}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#name Cluster#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#project_id Cluster#project_id}.

---

##### `providerInstanceSizeName`<sup>Required</sup> <a name="providerInstanceSizeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerInstanceSizeName"></a>

```typescript
public readonly providerInstanceSizeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_name Cluster#provider_name}.

---

##### `acceptDataRisksAndForceReplicaSetReconfig`<sup>Optional</sup> <a name="acceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```typescript
public readonly acceptDataRisksAndForceReplicaSetReconfig: string;
```

- *Type:* string

Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#accept_data_risks_and_force_replica_set_reconfig Cluster#accept_data_risks_and_force_replica_set_reconfig}

---

##### `advancedConfiguration`<sup>Optional</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: ClusterAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

advanced_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#advanced_configuration Cluster#advanced_configuration}

---

##### `autoScalingComputeEnabled`<sup>Optional</sup> <a name="autoScalingComputeEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeEnabled"></a>

```typescript
public readonly autoScalingComputeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}.

---

##### `autoScalingComputeScaleDownEnabled`<sup>Optional</sup> <a name="autoScalingComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingComputeScaleDownEnabled"></a>

```typescript
public readonly autoScalingComputeScaleDownEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}.

---

##### `autoScalingDiskGbEnabled`<sup>Optional</sup> <a name="autoScalingDiskGbEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.autoScalingDiskGbEnabled"></a>

```typescript
public readonly autoScalingDiskGbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}.

---

##### `backingProviderName`<sup>Optional</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backingProviderName"></a>

```typescript
public readonly backingProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}.

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#backup_enabled Cluster#backup_enabled}

---

##### `biConnectorConfig`<sup>Optional</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.biConnectorConfig"></a>

```typescript
public readonly biConnectorConfig: ClusterBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

bi_connector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#bi_connector_config Cluster#bi_connector_config}

---

##### `cloudBackup`<sup>Optional</sup> <a name="cloudBackup" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.cloudBackup"></a>

```typescript
public readonly cloudBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#cloud_backup Cluster#cloud_backup}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#cluster_type Cluster#cluster_type}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | ClusterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#labels Cluster#labels}

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}.

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#num_shards Cluster#num_shards}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#paused Cluster#paused}.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#pit_enabled Cluster#pit_enabled}.

---

##### `providerAutoScalingComputeMaxInstanceSize`<sup>Optional</sup> <a name="providerAutoScalingComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMaxInstanceSize"></a>

```typescript
public readonly providerAutoScalingComputeMaxInstanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}.

---

##### `providerAutoScalingComputeMinInstanceSize`<sup>Optional</sup> <a name="providerAutoScalingComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerAutoScalingComputeMinInstanceSize"></a>

```typescript
public readonly providerAutoScalingComputeMinInstanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}.

---

##### `providerDiskIops`<sup>Optional</sup> <a name="providerDiskIops" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskIops"></a>

```typescript
public readonly providerDiskIops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}.

---

##### `providerDiskTypeName`<sup>Optional</sup> <a name="providerDiskTypeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerDiskTypeName"></a>

```typescript
public readonly providerDiskTypeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}.

---

##### `providerEncryptEbsVolume`<sup>Optional</sup> <a name="providerEncryptEbsVolume" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerEncryptEbsVolume"></a>

```typescript
public readonly providerEncryptEbsVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}.

---

##### `providerRegionName`<sup>Optional</sup> <a name="providerRegionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerRegionName"></a>

```typescript
public readonly providerRegionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_region_name Cluster#provider_region_name}.

---

##### `providerVolumeType`<sup>Optional</sup> <a name="providerVolumeType" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.providerVolumeType"></a>

```typescript
public readonly providerVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#replication_factor Cluster#replication_factor}.

---

##### `replicationSpecs`<sup>Optional</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: IResolvable | ClusterReplicationSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>[]

replication_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#replication_specs Cluster#replication_specs}

---

##### `retainBackupsEnabled`<sup>Optional</sup> <a name="retainBackupsEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.retainBackupsEnabled"></a>

```typescript
public readonly retainBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#retain_backups_enabled Cluster#retain_backups_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ClusterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#tags Cluster#tags}

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.cluster.ClusterConfig.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#version_release_system Cluster#version_release_system}.

---

### ClusterConnectionStrings <a name="ClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterConnectionStrings: cluster.ClusterConnectionStrings = { ... }
```


### ClusterConnectionStringsPrivateEndpoint <a name="ClusterConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterConnectionStringsPrivateEndpoint: cluster.ClusterConnectionStringsPrivateEndpoint = { ... }
```


### ClusterConnectionStringsPrivateEndpointEndpoints <a name="ClusterConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterConnectionStringsPrivateEndpointEndpoints: cluster.ClusterConnectionStringsPrivateEndpointEndpoints = { ... }
```


### ClusterLabels <a name="ClusterLabels" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterLabels: cluster.ClusterLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#key Cluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#value Cluster#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#key Cluster#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#value Cluster#value}.

---

### ClusterReplicationSpecs <a name="ClusterReplicationSpecs" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterReplicationSpecs: cluster.ClusterReplicationSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.numShards">numShards</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#num_shards Cluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.regionsConfig">regionsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>[]</code> | regions_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.zoneName">zoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#zone_name Cluster#zone_name}. |

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#num_shards Cluster#num_shards}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regionsConfig`<sup>Optional</sup> <a name="regionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.regionsConfig"></a>

```typescript
public readonly regionsConfig: IResolvable | ClusterReplicationSpecsRegionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>[]

regions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#regions_config Cluster#regions_config}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#zone_name Cluster#zone_name}.

---

### ClusterReplicationSpecsRegionsConfig <a name="ClusterReplicationSpecsRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterReplicationSpecsRegionsConfig: cluster.ClusterReplicationSpecsRegionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.regionName">regionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#region_name Cluster#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.analyticsNodes">analyticsNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#analytics_nodes Cluster#analytics_nodes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.electableNodes">electableNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#electable_nodes Cluster#electable_nodes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#priority Cluster#priority}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.readOnlyNodes">readOnlyNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#read_only_nodes Cluster#read_only_nodes}. |

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#region_name Cluster#region_name}.

---

##### `analyticsNodes`<sup>Optional</sup> <a name="analyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.analyticsNodes"></a>

```typescript
public readonly analyticsNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#analytics_nodes Cluster#analytics_nodes}.

---

##### `electableNodes`<sup>Optional</sup> <a name="electableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.electableNodes"></a>

```typescript
public readonly electableNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#electable_nodes Cluster#electable_nodes}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#priority Cluster#priority}.

---

##### `readOnlyNodes`<sup>Optional</sup> <a name="readOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig.property.readOnlyNodes"></a>

```typescript
public readonly readOnlyNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#read_only_nodes Cluster#read_only_nodes}.

---

### ClusterSnapshotBackupPolicy <a name="ClusterSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterSnapshotBackupPolicy: cluster.ClusterSnapshotBackupPolicy = { ... }
```


### ClusterSnapshotBackupPolicyPolicies <a name="ClusterSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterSnapshotBackupPolicyPolicies: cluster.ClusterSnapshotBackupPolicyPolicies = { ... }
```


### ClusterSnapshotBackupPolicyPoliciesPolicyItem <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterSnapshotBackupPolicyPoliciesPolicyItem: cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem = { ... }
```


### ClusterTags <a name="ClusterTags" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterTags: cluster.ClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#key Cluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#value Cluster#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#key Cluster#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#value Cluster#value}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

const clusterTimeouts: cluster.ClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#update Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#create Cluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#delete Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/cluster#update Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAdvancedConfigurationOutputReference <a name="ClusterAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterAdvancedConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultReadConcern` <a name="resetDefaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern"></a>

```typescript
public resetDefaultReadConcern(): void
```

##### `resetDefaultWriteConcern` <a name="resetDefaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern"></a>

```typescript
public resetDefaultWriteConcern(): void
```

##### `resetFailIndexKeyTooLong` <a name="resetFailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong"></a>

```typescript
public resetFailIndexKeyTooLong(): void
```

##### `resetJavascriptEnabled` <a name="resetJavascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled"></a>

```typescript
public resetJavascriptEnabled(): void
```

##### `resetMinimumEnabledTlsProtocol` <a name="resetMinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol"></a>

```typescript
public resetMinimumEnabledTlsProtocol(): void
```

##### `resetNoTableScan` <a name="resetNoTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetNoTableScan"></a>

```typescript
public resetNoTableScan(): void
```

##### `resetOplogMinRetentionHours` <a name="resetOplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours"></a>

```typescript
public resetOplogMinRetentionHours(): void
```

##### `resetOplogSizeMb` <a name="resetOplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetOplogSizeMb"></a>

```typescript
public resetOplogSizeMb(): void
```

##### `resetSampleRefreshIntervalBiConnector` <a name="resetSampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector"></a>

```typescript
public resetSampleRefreshIntervalBiConnector(): void
```

##### `resetSampleSizeBiConnector` <a name="resetSampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector"></a>

```typescript
public resetSampleSizeBiConnector(): void
```

##### `resetTransactionLifetimeLimitSeconds` <a name="resetTransactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.resetTransactionLifetimeLimitSeconds"></a>

```typescript
public resetTransactionLifetimeLimitSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput">defaultReadConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput">defaultWriteConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput">failIndexKeyTooLongInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput">javascriptEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput">minimumEnabledTlsProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScanInput">noTableScanInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput">oplogMinRetentionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput">oplogSizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput">sampleRefreshIntervalBiConnectorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput">sampleSizeBiConnectorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput">transactionLifetimeLimitSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabled">javascriptEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScan">noTableScan</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultReadConcernInput`<sup>Optional</sup> <a name="defaultReadConcernInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput"></a>

```typescript
public readonly defaultReadConcernInput: string;
```

- *Type:* string

---

##### `defaultWriteConcernInput`<sup>Optional</sup> <a name="defaultWriteConcernInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput"></a>

```typescript
public readonly defaultWriteConcernInput: string;
```

- *Type:* string

---

##### `failIndexKeyTooLongInput`<sup>Optional</sup> <a name="failIndexKeyTooLongInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput"></a>

```typescript
public readonly failIndexKeyTooLongInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javascriptEnabledInput`<sup>Optional</sup> <a name="javascriptEnabledInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput"></a>

```typescript
public readonly javascriptEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumEnabledTlsProtocolInput`<sup>Optional</sup> <a name="minimumEnabledTlsProtocolInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput"></a>

```typescript
public readonly minimumEnabledTlsProtocolInput: string;
```

- *Type:* string

---

##### `noTableScanInput`<sup>Optional</sup> <a name="noTableScanInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScanInput"></a>

```typescript
public readonly noTableScanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oplogMinRetentionHoursInput`<sup>Optional</sup> <a name="oplogMinRetentionHoursInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput"></a>

```typescript
public readonly oplogMinRetentionHoursInput: number;
```

- *Type:* number

---

##### `oplogSizeMbInput`<sup>Optional</sup> <a name="oplogSizeMbInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput"></a>

```typescript
public readonly oplogSizeMbInput: number;
```

- *Type:* number

---

##### `sampleRefreshIntervalBiConnectorInput`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnectorInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput"></a>

```typescript
public readonly sampleRefreshIntervalBiConnectorInput: number;
```

- *Type:* number

---

##### `sampleSizeBiConnectorInput`<sup>Optional</sup> <a name="sampleSizeBiConnectorInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput"></a>

```typescript
public readonly sampleSizeBiConnectorInput: number;
```

- *Type:* number

---

##### `transactionLifetimeLimitSecondsInput`<sup>Optional</sup> <a name="transactionLifetimeLimitSecondsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput"></a>

```typescript
public readonly transactionLifetimeLimitSecondsInput: number;
```

- *Type:* number

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

---

##### `failIndexKeyTooLong`<sup>Required</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javascriptEnabled`<sup>Required</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumEnabledTlsProtocol`<sup>Required</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

---

##### `noTableScan`<sup>Required</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.noTableScan"></a>

```typescript
public readonly noTableScan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oplogMinRetentionHours`<sup>Required</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```typescript
public readonly oplogMinRetentionHours: number;
```

- *Type:* number

---

##### `oplogSizeMb`<sup>Required</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

---

##### `sampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

---

##### `sampleSizeBiConnector`<sup>Required</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

---

##### `transactionLifetimeLimitSeconds`<sup>Required</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds"></a>

```typescript
public readonly transactionLifetimeLimitSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterAdvancedConfiguration">ClusterAdvancedConfiguration</a>

---


### ClusterBiConnectorConfigOutputReference <a name="ClusterBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterBiConnectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetReadPreference` <a name="resetReadPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.resetReadPreference"></a>

```typescript
public resetReadPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreferenceInput">readPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreference">readPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readPreferenceInput`<sup>Optional</sup> <a name="readPreferenceInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreferenceInput"></a>

```typescript
public readonly readPreferenceInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterBiConnectorConfig">ClusterBiConnectorConfig</a>

---


### ClusterConnectionStringsList <a name="ClusterConnectionStringsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get"></a>

```typescript
public get(index: number): ClusterConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClusterConnectionStringsOutputReference <a name="ClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.private">private</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList">ClusterConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateSrv">privateSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standard">standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standardSrv">standardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings">ClusterConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.private"></a>

```typescript
public readonly private: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: ClusterConnectionStringsPrivateEndpointList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList">ClusterConnectionStringsPrivateEndpointList</a>

---

##### `privateSrv`<sup>Required</sup> <a name="privateSrv" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.privateSrv"></a>

```typescript
public readonly privateSrv: string;
```

- *Type:* string

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

---

##### `standardSrv`<sup>Required</sup> <a name="standardSrv" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.standardSrv"></a>

```typescript
public readonly standardSrv: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStrings">ClusterConnectionStrings</a>

---


### ClusterConnectionStringsPrivateEndpointEndpointsList <a name="ClusterConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterConnectionStringsPrivateEndpointEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get"></a>

```typescript
public get(index: number): ClusterConnectionStringsPrivateEndpointEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClusterConnectionStringsPrivateEndpointEndpointsOutputReference <a name="ClusterConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints">ClusterConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterConnectionStringsPrivateEndpointEndpoints;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpoints">ClusterConnectionStringsPrivateEndpointEndpoints</a>

---


### ClusterConnectionStringsPrivateEndpointList <a name="ClusterConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterConnectionStringsPrivateEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get"></a>

```typescript
public get(index: number): ClusterConnectionStringsPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClusterConnectionStringsPrivateEndpointOutputReference <a name="ClusterConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterConnectionStringsPrivateEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList">ClusterConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">srvConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString">srvShardOptimizedConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint">ClusterConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: ClusterConnectionStringsPrivateEndpointEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointEndpointsList">ClusterConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `srvConnectionString`<sup>Required</sup> <a name="srvConnectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```typescript
public readonly srvConnectionString: string;
```

- *Type:* string

---

##### `srvShardOptimizedConnectionString`<sup>Required</sup> <a name="srvShardOptimizedConnectionString" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString"></a>

```typescript
public readonly srvShardOptimizedConnectionString: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterConnectionStringsPrivateEndpoint;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterConnectionStringsPrivateEndpoint">ClusterConnectionStringsPrivateEndpoint</a>

---


### ClusterLabelsList <a name="ClusterLabelsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get"></a>

```typescript
public get(index: number): ClusterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>[]

---


### ClusterLabelsOutputReference <a name="ClusterLabelsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterLabels">ClusterLabels</a>

---


### ClusterReplicationSpecsList <a name="ClusterReplicationSpecsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterReplicationSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get"></a>

```typescript
public get(index: number): ClusterReplicationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterReplicationSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>[]

---


### ClusterReplicationSpecsOutputReference <a name="ClusterReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterReplicationSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionsConfig` <a name="putRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig"></a>

```typescript
public putRegionsConfig(value: IResolvable | ClusterReplicationSpecsRegionsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.putRegionsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegionsConfig` <a name="resetRegionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetRegionsConfig"></a>

```typescript
public resetRegionsConfig(): void
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.resetZoneName"></a>

```typescript
public resetZoneName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfig">regionsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList">ClusterReplicationSpecsRegionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShardsInput">numShardsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfigInput">regionsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionsConfig`<sup>Required</sup> <a name="regionsConfig" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfig"></a>

```typescript
public readonly regionsConfig: ClusterReplicationSpecsRegionsConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList">ClusterReplicationSpecsRegionsConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShardsInput"></a>

```typescript
public readonly numShardsInput: number;
```

- *Type:* number

---

##### `regionsConfigInput`<sup>Optional</sup> <a name="regionsConfigInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.regionsConfigInput"></a>

```typescript
public readonly regionsConfigInput: IResolvable | ClusterReplicationSpecsRegionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>[]

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterReplicationSpecs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecs">ClusterReplicationSpecs</a>

---


### ClusterReplicationSpecsRegionsConfigList <a name="ClusterReplicationSpecsRegionsConfigList" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterReplicationSpecsRegionsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get"></a>

```typescript
public get(index: number): ClusterReplicationSpecsRegionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterReplicationSpecsRegionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>[]

---


### ClusterReplicationSpecsRegionsConfigOutputReference <a name="ClusterReplicationSpecsRegionsConfigOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterReplicationSpecsRegionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalyticsNodes` <a name="resetAnalyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetAnalyticsNodes"></a>

```typescript
public resetAnalyticsNodes(): void
```

##### `resetElectableNodes` <a name="resetElectableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetElectableNodes"></a>

```typescript
public resetElectableNodes(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetReadOnlyNodes` <a name="resetReadOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.resetReadOnlyNodes"></a>

```typescript
public resetReadOnlyNodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodesInput">analyticsNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodesInput">electableNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodesInput">readOnlyNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodes">analyticsNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodes">electableNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodes">readOnlyNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyticsNodesInput`<sup>Optional</sup> <a name="analyticsNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodesInput"></a>

```typescript
public readonly analyticsNodesInput: number;
```

- *Type:* number

---

##### `electableNodesInput`<sup>Optional</sup> <a name="electableNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodesInput"></a>

```typescript
public readonly electableNodesInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `readOnlyNodesInput`<sup>Optional</sup> <a name="readOnlyNodesInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodesInput"></a>

```typescript
public readonly readOnlyNodesInput: number;
```

- *Type:* number

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionNameInput"></a>

```typescript
public readonly regionNameInput: string;
```

- *Type:* string

---

##### `analyticsNodes`<sup>Required</sup> <a name="analyticsNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.analyticsNodes"></a>

```typescript
public readonly analyticsNodes: number;
```

- *Type:* number

---

##### `electableNodes`<sup>Required</sup> <a name="electableNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.electableNodes"></a>

```typescript
public readonly electableNodes: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `readOnlyNodes`<sup>Required</sup> <a name="readOnlyNodes" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.readOnlyNodes"></a>

```typescript
public readonly readOnlyNodes: number;
```

- *Type:* number

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterReplicationSpecsRegionsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterReplicationSpecsRegionsConfig">ClusterReplicationSpecsRegionsConfig</a>

---


### ClusterSnapshotBackupPolicyList <a name="ClusterSnapshotBackupPolicyList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterSnapshotBackupPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get"></a>

```typescript
public get(index: number): ClusterSnapshotBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClusterSnapshotBackupPolicyOutputReference <a name="ClusterSnapshotBackupPolicyOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterSnapshotBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.nextSnapshot">nextSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList">ClusterSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceHourOfDay">referenceHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.restoreWindowDays">restoreWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.updateSnapshots">updateSnapshots</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy">ClusterSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `nextSnapshot`<sup>Required</sup> <a name="nextSnapshot" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.nextSnapshot"></a>

```typescript
public readonly nextSnapshot: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.policies"></a>

```typescript
public readonly policies: ClusterSnapshotBackupPolicyPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList">ClusterSnapshotBackupPolicyPoliciesList</a>

---

##### `referenceHourOfDay`<sup>Required</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceHourOfDay"></a>

```typescript
public readonly referenceHourOfDay: number;
```

- *Type:* number

---

##### `referenceMinuteOfHour`<sup>Required</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.referenceMinuteOfHour"></a>

```typescript
public readonly referenceMinuteOfHour: number;
```

- *Type:* number

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.restoreWindowDays"></a>

```typescript
public readonly restoreWindowDays: number;
```

- *Type:* number

---

##### `updateSnapshots`<sup>Required</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.updateSnapshots"></a>

```typescript
public readonly updateSnapshots: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterSnapshotBackupPolicy;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicy">ClusterSnapshotBackupPolicy</a>

---


### ClusterSnapshotBackupPolicyPoliciesList <a name="ClusterSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterSnapshotBackupPolicyPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get"></a>

```typescript
public get(index: number): ClusterSnapshotBackupPolicyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClusterSnapshotBackupPolicyPoliciesOutputReference <a name="ClusterSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">policyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList">ClusterSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies">ClusterSnapshotBackupPolicyPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyItem`<sup>Required</sup> <a name="policyItem" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```typescript
public readonly policyItem: ClusterSnapshotBackupPolicyPoliciesPolicyItemList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList">ClusterSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterSnapshotBackupPolicyPolicies;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPolicies">ClusterSnapshotBackupPolicyPolicies</a>

---


### ClusterSnapshotBackupPolicyPoliciesPolicyItemList <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```typescript
public get(index: number): ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem">ClusterSnapshotBackupPolicyPoliciesPolicyItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterSnapshotBackupPolicyPoliciesPolicyItem;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterSnapshotBackupPolicyPoliciesPolicyItem">ClusterSnapshotBackupPolicyPoliciesPolicyItem</a>

---


### ClusterTagsList <a name="ClusterTagsList" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get"></a>

```typescript
public get(index: number): ClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>[]

---


### ClusterTagsOutputReference <a name="ClusterTagsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTags">ClusterTags</a>

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-mongodbatlas'

new cluster.ClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cluster.ClusterTimeouts">ClusterTimeouts</a>

---



