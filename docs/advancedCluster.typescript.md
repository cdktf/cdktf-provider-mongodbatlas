# `advancedCluster` Submodule <a name="`advancedCluster` Submodule" id="@cdktf/provider-mongodbatlas.advancedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdvancedCluster <a name="AdvancedCluster" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster mongodbatlas_advanced_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedCluster(scope: Construct, id: string, config: AdvancedClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig">AdvancedClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig">AdvancedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putAdvancedConfiguration">putAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnectorConfig">putBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putReplicationSpecs">putReplicationSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetAcceptDataRisksAndForceReplicaSetReconfig">resetAcceptDataRisksAndForceReplicaSetReconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetAdvancedConfiguration">resetAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBackupEnabled">resetBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBiConnectorConfig">resetBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetEncryptionAtRestProvider">resetEncryptionAtRestProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetGlobalClusterSelfManagedSharding">resetGlobalClusterSelfManagedSharding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetMongoDbMajorVersion">resetMongoDbMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPitEnabled">resetPitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetReplicaSetScalingStrategy">resetReplicaSetScalingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetRetainBackupsEnabled">resetRetainBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetRootCertType">resetRootCertType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetVersionReleaseSystem">resetVersionReleaseSystem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedConfiguration` <a name="putAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putAdvancedConfiguration"></a>

```typescript
public putAdvancedConfiguration(value: AdvancedClusterAdvancedConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putAdvancedConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

---

##### `putBiConnectorConfig` <a name="putBiConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnectorConfig"></a>

```typescript
public putBiConnectorConfig(value: AdvancedClusterBiConnectorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putBiConnectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putLabels"></a>

```typescript
public putLabels(value: IResolvable | AdvancedClusterLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>[]

---

##### `putReplicationSpecs` <a name="putReplicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putReplicationSpecs"></a>

```typescript
public putReplicationSpecs(value: IResolvable | AdvancedClusterReplicationSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putReplicationSpecs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | AdvancedClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: AdvancedClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a>

---

##### `resetAcceptDataRisksAndForceReplicaSetReconfig` <a name="resetAcceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetAcceptDataRisksAndForceReplicaSetReconfig"></a>

```typescript
public resetAcceptDataRisksAndForceReplicaSetReconfig(): void
```

##### `resetAdvancedConfiguration` <a name="resetAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetAdvancedConfiguration"></a>

```typescript
public resetAdvancedConfiguration(): void
```

##### `resetBackupEnabled` <a name="resetBackupEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBackupEnabled"></a>

```typescript
public resetBackupEnabled(): void
```

##### `resetBiConnectorConfig` <a name="resetBiConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetBiConnectorConfig"></a>

```typescript
public resetBiConnectorConfig(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetEncryptionAtRestProvider` <a name="resetEncryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetEncryptionAtRestProvider"></a>

```typescript
public resetEncryptionAtRestProvider(): void
```

##### `resetGlobalClusterSelfManagedSharding` <a name="resetGlobalClusterSelfManagedSharding" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetGlobalClusterSelfManagedSharding"></a>

```typescript
public resetGlobalClusterSelfManagedSharding(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMongoDbMajorVersion` <a name="resetMongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetMongoDbMajorVersion"></a>

```typescript
public resetMongoDbMajorVersion(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetPitEnabled` <a name="resetPitEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetPitEnabled"></a>

```typescript
public resetPitEnabled(): void
```

##### `resetReplicaSetScalingStrategy` <a name="resetReplicaSetScalingStrategy" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetReplicaSetScalingStrategy"></a>

```typescript
public resetReplicaSetScalingStrategy(): void
```

##### `resetRetainBackupsEnabled` <a name="resetRetainBackupsEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetRetainBackupsEnabled"></a>

```typescript
public resetRetainBackupsEnabled(): void
```

##### `resetRootCertType` <a name="resetRootCertType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetRootCertType"></a>

```typescript
public resetRootCertType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTerminationProtectionEnabled"></a>

```typescript
public resetTerminationProtectionEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionReleaseSystem` <a name="resetVersionReleaseSystem" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.resetVersionReleaseSystem"></a>

```typescript
public resetVersionReleaseSystem(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdvancedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isConstruct"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

advancedCluster.AdvancedCluster.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformElement"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

advancedCluster.AdvancedCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformResource"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

advancedCluster.AdvancedCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.generateConfigForImport"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

advancedCluster.AdvancedCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AdvancedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdvancedCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdvancedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdvancedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference">AdvancedClusterAdvancedConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference">AdvancedClusterBiConnectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList">AdvancedClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList">AdvancedClusterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList">AdvancedClusterReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.stateName">stateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList">AdvancedClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference">AdvancedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.acceptDataRisksAndForceReplicaSetReconfigInput">acceptDataRisksAndForceReplicaSetReconfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfigurationInput">advancedConfigurationInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabledInput">backupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfigInput">biConnectorConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProviderInput">encryptionAtRestProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.globalClusterSelfManagedShardingInput">globalClusterSelfManagedShardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersionInput">mongoDbMajorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabledInput">pitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicaSetScalingStrategyInput">replicaSetScalingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecsInput">replicationSpecsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.retainBackupsEnabledInput">retainBackupsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertTypeInput">rootCertTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystemInput">versionReleaseSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.acceptDataRisksAndForceReplicaSetReconfig">acceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabled">backupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.globalClusterSelfManagedSharding">globalClusterSelfManagedSharding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicaSetScalingStrategy">replicaSetScalingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.retainBackupsEnabled">retainBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertType">rootCertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: AdvancedClusterAdvancedConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference">AdvancedClusterAdvancedConfigurationOutputReference</a>

---

##### `biConnectorConfig`<sup>Required</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfig"></a>

```typescript
public readonly biConnectorConfig: AdvancedClusterBiConnectorConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference">AdvancedClusterBiConnectorConfigOutputReference</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: AdvancedClusterConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList">AdvancedClusterConnectionStringsList</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labels"></a>

```typescript
public readonly labels: AdvancedClusterLabelsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList">AdvancedClusterLabelsList</a>

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: AdvancedClusterReplicationSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList">AdvancedClusterReplicationSpecsList</a>

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tags"></a>

```typescript
public readonly tags: AdvancedClusterTagsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList">AdvancedClusterTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeouts"></a>

```typescript
public readonly timeouts: AdvancedClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference">AdvancedClusterTimeoutsOutputReference</a>

---

##### `acceptDataRisksAndForceReplicaSetReconfigInput`<sup>Optional</sup> <a name="acceptDataRisksAndForceReplicaSetReconfigInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.acceptDataRisksAndForceReplicaSetReconfigInput"></a>

```typescript
public readonly acceptDataRisksAndForceReplicaSetReconfigInput: string;
```

- *Type:* string

---

##### `advancedConfigurationInput`<sup>Optional</sup> <a name="advancedConfigurationInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.advancedConfigurationInput"></a>

```typescript
public readonly advancedConfigurationInput: AdvancedClusterAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

---

##### `backupEnabledInput`<sup>Optional</sup> <a name="backupEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabledInput"></a>

```typescript
public readonly backupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `biConnectorConfigInput`<sup>Optional</sup> <a name="biConnectorConfigInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.biConnectorConfigInput"></a>

```typescript
public readonly biConnectorConfigInput: AdvancedClusterBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `encryptionAtRestProviderInput`<sup>Optional</sup> <a name="encryptionAtRestProviderInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProviderInput"></a>

```typescript
public readonly encryptionAtRestProviderInput: string;
```

- *Type:* string

---

##### `globalClusterSelfManagedShardingInput`<sup>Optional</sup> <a name="globalClusterSelfManagedShardingInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.globalClusterSelfManagedShardingInput"></a>

```typescript
public readonly globalClusterSelfManagedShardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | AdvancedClusterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>[]

---

##### `mongoDbMajorVersionInput`<sup>Optional</sup> <a name="mongoDbMajorVersionInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersionInput"></a>

```typescript
public readonly mongoDbMajorVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pitEnabledInput`<sup>Optional</sup> <a name="pitEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabledInput"></a>

```typescript
public readonly pitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `replicaSetScalingStrategyInput`<sup>Optional</sup> <a name="replicaSetScalingStrategyInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicaSetScalingStrategyInput"></a>

```typescript
public readonly replicaSetScalingStrategyInput: string;
```

- *Type:* string

---

##### `replicationSpecsInput`<sup>Optional</sup> <a name="replicationSpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicationSpecsInput"></a>

```typescript
public readonly replicationSpecsInput: IResolvable | AdvancedClusterReplicationSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>[]

---

##### `retainBackupsEnabledInput`<sup>Optional</sup> <a name="retainBackupsEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.retainBackupsEnabledInput"></a>

```typescript
public readonly retainBackupsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootCertTypeInput`<sup>Optional</sup> <a name="rootCertTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertTypeInput"></a>

```typescript
public readonly rootCertTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AdvancedClusterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>[]

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabledInput"></a>

```typescript
public readonly terminationProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AdvancedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a>

---

##### `versionReleaseSystemInput`<sup>Optional</sup> <a name="versionReleaseSystemInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystemInput"></a>

```typescript
public readonly versionReleaseSystemInput: string;
```

- *Type:* string

---

##### `acceptDataRisksAndForceReplicaSetReconfig`<sup>Required</sup> <a name="acceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```typescript
public readonly acceptDataRisksAndForceReplicaSetReconfig: string;
```

- *Type:* string

---

##### `backupEnabled`<sup>Required</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `encryptionAtRestProvider`<sup>Required</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: string;
```

- *Type:* string

---

##### `globalClusterSelfManagedSharding`<sup>Required</sup> <a name="globalClusterSelfManagedSharding" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.globalClusterSelfManagedSharding"></a>

```typescript
public readonly globalClusterSelfManagedSharding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mongoDbMajorVersion`<sup>Required</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `replicaSetScalingStrategy`<sup>Required</sup> <a name="replicaSetScalingStrategy" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.replicaSetScalingStrategy"></a>

```typescript
public readonly replicaSetScalingStrategy: string;
```

- *Type:* string

---

##### `retainBackupsEnabled`<sup>Required</sup> <a name="retainBackupsEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.retainBackupsEnabled"></a>

```typescript
public readonly retainBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootCertType`<sup>Required</sup> <a name="rootCertType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionReleaseSystem`<sup>Required</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdvancedClusterAdvancedConfiguration <a name="AdvancedClusterAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterAdvancedConfiguration: advancedCluster.AdvancedClusterAdvancedConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds">changeStreamOptionsPreAndPostImagesExpireAfterSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#change_stream_options_pre_and_post_images_expire_after_seconds AdvancedCluster#change_stream_options_pre_and_post_images_expire_after_seconds}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#default_read_concern AdvancedCluster#default_read_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#default_write_concern AdvancedCluster#default_write_concern}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#fail_index_key_too_long AdvancedCluster#fail_index_key_too_long}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.javascriptEnabled">javascriptEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#javascript_enabled AdvancedCluster#javascript_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#minimum_enabled_tls_protocol AdvancedCluster#minimum_enabled_tls_protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.noTableScan">noTableScan</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#no_table_scan AdvancedCluster#no_table_scan}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#oplog_min_retention_hours AdvancedCluster#oplog_min_retention_hours}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#oplog_size_mb AdvancedCluster#oplog_size_mb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#sample_refresh_interval_bi_connector AdvancedCluster#sample_refresh_interval_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#sample_size_bi_connector AdvancedCluster#sample_size_bi_connector}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#transaction_lifetime_limit_seconds AdvancedCluster#transaction_lifetime_limit_seconds}. |

---

##### `changeStreamOptionsPreAndPostImagesExpireAfterSeconds`<sup>Optional</sup> <a name="changeStreamOptionsPreAndPostImagesExpireAfterSeconds" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds"></a>

```typescript
public readonly changeStreamOptionsPreAndPostImagesExpireAfterSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#change_stream_options_pre_and_post_images_expire_after_seconds AdvancedCluster#change_stream_options_pre_and_post_images_expire_after_seconds}.

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#default_read_concern AdvancedCluster#default_read_concern}.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#default_write_concern AdvancedCluster#default_write_concern}.

---

##### `failIndexKeyTooLong`<sup>Optional</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#fail_index_key_too_long AdvancedCluster#fail_index_key_too_long}.

---

##### `javascriptEnabled`<sup>Optional</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#javascript_enabled AdvancedCluster#javascript_enabled}.

---

##### `minimumEnabledTlsProtocol`<sup>Optional</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#minimum_enabled_tls_protocol AdvancedCluster#minimum_enabled_tls_protocol}.

---

##### `noTableScan`<sup>Optional</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.noTableScan"></a>

```typescript
public readonly noTableScan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#no_table_scan AdvancedCluster#no_table_scan}.

---

##### `oplogMinRetentionHours`<sup>Optional</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogMinRetentionHours"></a>

```typescript
public readonly oplogMinRetentionHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#oplog_min_retention_hours AdvancedCluster#oplog_min_retention_hours}.

---

##### `oplogSizeMb`<sup>Optional</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#oplog_size_mb AdvancedCluster#oplog_size_mb}.

---

##### `sampleRefreshIntervalBiConnector`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#sample_refresh_interval_bi_connector AdvancedCluster#sample_refresh_interval_bi_connector}.

---

##### `sampleSizeBiConnector`<sup>Optional</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#sample_size_bi_connector AdvancedCluster#sample_size_bi_connector}.

---

##### `transactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration.property.transactionLifetimeLimitSeconds"></a>

```typescript
public readonly transactionLifetimeLimitSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#transaction_lifetime_limit_seconds AdvancedCluster#transaction_lifetime_limit_seconds}.

---

### AdvancedClusterBiConnectorConfig <a name="AdvancedClusterBiConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterBiConnectorConfig: advancedCluster.AdvancedClusterBiConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.readPreference">readPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}.

---

##### `readPreference`<sup>Optional</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}.

---

### AdvancedClusterConfig <a name="AdvancedClusterConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterConfig: advancedCluster.AdvancedClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.clusterType">clusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#name AdvancedCluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.replicationSpecs">replicationSpecs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>[]</code> | replication_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig">acceptDataRisksAndForceReplicaSetReconfig</a></code> | <code>string</code> | Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a></code> | advanced_configuration block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.backupEnabled">backupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a></code> | bi_connector_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.globalClusterSelfManagedSharding">globalClusterSelfManagedSharding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#global_cluster_self_managed_sharding AdvancedCluster#global_cluster_self_managed_sharding}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#id AdvancedCluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#paused AdvancedCluster#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.replicaSetScalingStrategy">replicaSetScalingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#replica_set_scaling_strategy AdvancedCluster#replica_set_scaling_strategy}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.retainBackupsEnabled">retainBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.rootCertType">rootCertType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#name AdvancedCluster#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}.

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: IResolvable | AdvancedClusterReplicationSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>[]

replication_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#replication_specs AdvancedCluster#replication_specs}

---

##### `acceptDataRisksAndForceReplicaSetReconfig`<sup>Optional</sup> <a name="acceptDataRisksAndForceReplicaSetReconfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.acceptDataRisksAndForceReplicaSetReconfig"></a>

```typescript
public readonly acceptDataRisksAndForceReplicaSetReconfig: string;
```

- *Type:* string

Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#accept_data_risks_and_force_replica_set_reconfig AdvancedCluster#accept_data_risks_and_force_replica_set_reconfig}

---

##### `advancedConfiguration`<sup>Optional</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: AdvancedClusterAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

advanced_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#advanced_configuration AdvancedCluster#advanced_configuration}

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}.

---

##### `biConnectorConfig`<sup>Optional</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.biConnectorConfig"></a>

```typescript
public readonly biConnectorConfig: AdvancedClusterBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

bi_connector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#bi_connector_config AdvancedCluster#bi_connector_config}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}.

---

##### `globalClusterSelfManagedSharding`<sup>Optional</sup> <a name="globalClusterSelfManagedSharding" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.globalClusterSelfManagedSharding"></a>

```typescript
public readonly globalClusterSelfManagedSharding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#global_cluster_self_managed_sharding AdvancedCluster#global_cluster_self_managed_sharding}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#id AdvancedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | AdvancedClusterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#labels AdvancedCluster#labels}

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#paused AdvancedCluster#paused}.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}.

---

##### `replicaSetScalingStrategy`<sup>Optional</sup> <a name="replicaSetScalingStrategy" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.replicaSetScalingStrategy"></a>

```typescript
public readonly replicaSetScalingStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#replica_set_scaling_strategy AdvancedCluster#replica_set_scaling_strategy}.

---

##### `retainBackupsEnabled`<sup>Optional</sup> <a name="retainBackupsEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.retainBackupsEnabled"></a>

```typescript
public readonly retainBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#retain_backups_enabled AdvancedCluster#retain_backups_enabled}

---

##### `rootCertType`<sup>Optional</sup> <a name="rootCertType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AdvancedClusterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#tags AdvancedCluster#tags}

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AdvancedClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#timeouts AdvancedCluster#timeouts}

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConfig.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}.

---

### AdvancedClusterConnectionStrings <a name="AdvancedClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterConnectionStrings: advancedCluster.AdvancedClusterConnectionStrings = { ... }
```


### AdvancedClusterConnectionStringsPrivateEndpoint <a name="AdvancedClusterConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterConnectionStringsPrivateEndpoint: advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint = { ... }
```


### AdvancedClusterConnectionStringsPrivateEndpointEndpoints <a name="AdvancedClusterConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterConnectionStringsPrivateEndpointEndpoints: advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints = { ... }
```


### AdvancedClusterLabels <a name="AdvancedClusterLabels" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterLabels: advancedCluster.AdvancedClusterLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#key AdvancedCluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#value AdvancedCluster#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#key AdvancedCluster#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#value AdvancedCluster#value}.

---

### AdvancedClusterReplicationSpecs <a name="AdvancedClusterReplicationSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterReplicationSpecs: advancedCluster.AdvancedClusterReplicationSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.regionConfigs">regionConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>[]</code> | region_configs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.numShards">numShards</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#num_shards AdvancedCluster#num_shards}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.zoneName">zoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#zone_name AdvancedCluster#zone_name}. |

---

##### `regionConfigs`<sup>Required</sup> <a name="regionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.regionConfigs"></a>

```typescript
public readonly regionConfigs: IResolvable | AdvancedClusterReplicationSpecsRegionConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>[]

region_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#region_configs AdvancedCluster#region_configs}

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#num_shards AdvancedCluster#num_shards}.

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#zone_name AdvancedCluster#zone_name}.

---

### AdvancedClusterReplicationSpecsRegionConfigs <a name="AdvancedClusterReplicationSpecsRegionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterReplicationSpecsRegionConfigs: advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#priority AdvancedCluster#priority}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#provider_name AdvancedCluster#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.regionName">regionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#region_name AdvancedCluster#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | analytics_auto_scaling block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsSpecs">analyticsSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | analytics_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.backingProviderName">backingProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#backing_provider_name AdvancedCluster#backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.electableSpecs">electableSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | electable_specs block. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.readOnlySpecs">readOnlySpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | read_only_specs block. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#priority AdvancedCluster#priority}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#provider_name AdvancedCluster#provider_name}.

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#region_name AdvancedCluster#region_name}.

---

##### `analyticsAutoScaling`<sup>Optional</sup> <a name="analyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsAutoScaling"></a>

```typescript
public readonly analyticsAutoScaling: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

analytics_auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#analytics_auto_scaling AdvancedCluster#analytics_auto_scaling}

---

##### `analyticsSpecs`<sup>Optional</sup> <a name="analyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.analyticsSpecs"></a>

```typescript
public readonly analyticsSpecs: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

analytics_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#analytics_specs AdvancedCluster#analytics_specs}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.autoScaling"></a>

```typescript
public readonly autoScaling: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#auto_scaling AdvancedCluster#auto_scaling}

---

##### `backingProviderName`<sup>Optional</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.backingProviderName"></a>

```typescript
public readonly backingProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#backing_provider_name AdvancedCluster#backing_provider_name}.

---

##### `electableSpecs`<sup>Optional</sup> <a name="electableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.electableSpecs"></a>

```typescript
public readonly electableSpecs: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

electable_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#electable_specs AdvancedCluster#electable_specs}

---

##### `readOnlySpecs`<sup>Optional</sup> <a name="readOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs.property.readOnlySpecs"></a>

```typescript
public readonly readOnlySpecs: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

read_only_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#read_only_specs AdvancedCluster#read_only_specs}

---

### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling: advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeEnabled">computeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.diskGbEnabled">diskGbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}. |

---

##### `computeEnabled`<sup>Optional</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}.

---

##### `computeMaxInstanceSize`<sup>Optional</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}.

---

##### `computeMinInstanceSize`<sup>Optional</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}.

---

##### `computeScaleDownEnabled`<sup>Optional</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}.

---

##### `diskGbEnabled`<sup>Optional</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}.

---

### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs: advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.instanceSize">instanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.diskIops">diskIops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}. |

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}.

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}.

---

### AdvancedClusterReplicationSpecsRegionConfigsAutoScaling <a name="AdvancedClusterReplicationSpecsRegionConfigsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterReplicationSpecsRegionConfigsAutoScaling: advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeEnabled">computeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.diskGbEnabled">diskGbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}. |

---

##### `computeEnabled`<sup>Optional</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}.

---

##### `computeMaxInstanceSize`<sup>Optional</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}.

---

##### `computeMinInstanceSize`<sup>Optional</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}.

---

##### `computeScaleDownEnabled`<sup>Optional</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}.

---

##### `diskGbEnabled`<sup>Optional</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}.

---

### AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs <a name="AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterReplicationSpecsRegionConfigsElectableSpecs: advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.instanceSize">instanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.diskIops">diskIops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}. |

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}.

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}.

---

### AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs <a name="AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterReplicationSpecsRegionConfigsReadOnlySpecs: advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.instanceSize">instanceSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.diskIops">diskIops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}. |

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}.

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}.

---

### AdvancedClusterTags <a name="AdvancedClusterTags" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterTags: advancedCluster.AdvancedClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#key AdvancedCluster#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#value AdvancedCluster#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#key AdvancedCluster#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#value AdvancedCluster#value}.

---

### AdvancedClusterTimeouts <a name="AdvancedClusterTimeouts" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

const advancedClusterTimeouts: advancedCluster.AdvancedClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#create AdvancedCluster#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#delete AdvancedCluster#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#update AdvancedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#create AdvancedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#delete AdvancedCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/advanced_cluster#update AdvancedCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdvancedClusterAdvancedConfigurationOutputReference <a name="AdvancedClusterAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds">resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetTransactionLifetimeLimitSeconds">resetTransactionLifetimeLimitSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds` <a name="resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds"></a>

```typescript
public resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds(): void
```

##### `resetDefaultReadConcern` <a name="resetDefaultReadConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetDefaultReadConcern"></a>

```typescript
public resetDefaultReadConcern(): void
```

##### `resetDefaultWriteConcern` <a name="resetDefaultWriteConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetDefaultWriteConcern"></a>

```typescript
public resetDefaultWriteConcern(): void
```

##### `resetFailIndexKeyTooLong` <a name="resetFailIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetFailIndexKeyTooLong"></a>

```typescript
public resetFailIndexKeyTooLong(): void
```

##### `resetJavascriptEnabled` <a name="resetJavascriptEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetJavascriptEnabled"></a>

```typescript
public resetJavascriptEnabled(): void
```

##### `resetMinimumEnabledTlsProtocol` <a name="resetMinimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetMinimumEnabledTlsProtocol"></a>

```typescript
public resetMinimumEnabledTlsProtocol(): void
```

##### `resetNoTableScan` <a name="resetNoTableScan" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetNoTableScan"></a>

```typescript
public resetNoTableScan(): void
```

##### `resetOplogMinRetentionHours` <a name="resetOplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetOplogMinRetentionHours"></a>

```typescript
public resetOplogMinRetentionHours(): void
```

##### `resetOplogSizeMb` <a name="resetOplogSizeMb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetOplogSizeMb"></a>

```typescript
public resetOplogSizeMb(): void
```

##### `resetSampleRefreshIntervalBiConnector` <a name="resetSampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetSampleRefreshIntervalBiConnector"></a>

```typescript
public resetSampleRefreshIntervalBiConnector(): void
```

##### `resetSampleSizeBiConnector` <a name="resetSampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetSampleSizeBiConnector"></a>

```typescript
public resetSampleSizeBiConnector(): void
```

##### `resetTransactionLifetimeLimitSeconds` <a name="resetTransactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.resetTransactionLifetimeLimitSeconds"></a>

```typescript
public resetTransactionLifetimeLimitSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput">changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput">defaultReadConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput">defaultWriteConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput">failIndexKeyTooLongInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput">javascriptEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput">minimumEnabledTlsProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScanInput">noTableScanInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput">oplogMinRetentionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput">oplogSizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput">sampleRefreshIntervalBiConnectorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput">sampleSizeBiConnectorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput">transactionLifetimeLimitSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds">changeStreamOptionsPreAndPostImagesExpireAfterSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled">javascriptEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan">noTableScan</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput`<sup>Optional</sup> <a name="changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput"></a>

```typescript
public readonly changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput: number;
```

- *Type:* number

---

##### `defaultReadConcernInput`<sup>Optional</sup> <a name="defaultReadConcernInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcernInput"></a>

```typescript
public readonly defaultReadConcernInput: string;
```

- *Type:* string

---

##### `defaultWriteConcernInput`<sup>Optional</sup> <a name="defaultWriteConcernInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcernInput"></a>

```typescript
public readonly defaultWriteConcernInput: string;
```

- *Type:* string

---

##### `failIndexKeyTooLongInput`<sup>Optional</sup> <a name="failIndexKeyTooLongInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLongInput"></a>

```typescript
public readonly failIndexKeyTooLongInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javascriptEnabledInput`<sup>Optional</sup> <a name="javascriptEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabledInput"></a>

```typescript
public readonly javascriptEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumEnabledTlsProtocolInput`<sup>Optional</sup> <a name="minimumEnabledTlsProtocolInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocolInput"></a>

```typescript
public readonly minimumEnabledTlsProtocolInput: string;
```

- *Type:* string

---

##### `noTableScanInput`<sup>Optional</sup> <a name="noTableScanInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScanInput"></a>

```typescript
public readonly noTableScanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oplogMinRetentionHoursInput`<sup>Optional</sup> <a name="oplogMinRetentionHoursInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHoursInput"></a>

```typescript
public readonly oplogMinRetentionHoursInput: number;
```

- *Type:* number

---

##### `oplogSizeMbInput`<sup>Optional</sup> <a name="oplogSizeMbInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMbInput"></a>

```typescript
public readonly oplogSizeMbInput: number;
```

- *Type:* number

---

##### `sampleRefreshIntervalBiConnectorInput`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnectorInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnectorInput"></a>

```typescript
public readonly sampleRefreshIntervalBiConnectorInput: number;
```

- *Type:* number

---

##### `sampleSizeBiConnectorInput`<sup>Optional</sup> <a name="sampleSizeBiConnectorInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnectorInput"></a>

```typescript
public readonly sampleSizeBiConnectorInput: number;
```

- *Type:* number

---

##### `transactionLifetimeLimitSecondsInput`<sup>Optional</sup> <a name="transactionLifetimeLimitSecondsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSecondsInput"></a>

```typescript
public readonly transactionLifetimeLimitSecondsInput: number;
```

- *Type:* number

---

##### `changeStreamOptionsPreAndPostImagesExpireAfterSeconds`<sup>Required</sup> <a name="changeStreamOptionsPreAndPostImagesExpireAfterSeconds" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds"></a>

```typescript
public readonly changeStreamOptionsPreAndPostImagesExpireAfterSeconds: number;
```

- *Type:* number

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

---

##### `failIndexKeyTooLong`<sup>Required</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javascriptEnabled`<sup>Required</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumEnabledTlsProtocol`<sup>Required</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

---

##### `noTableScan`<sup>Required</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan"></a>

```typescript
public readonly noTableScan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oplogMinRetentionHours`<sup>Required</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```typescript
public readonly oplogMinRetentionHours: number;
```

- *Type:* number

---

##### `oplogSizeMb`<sup>Required</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

---

##### `sampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

---

##### `sampleSizeBiConnector`<sup>Required</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

---

##### `transactionLifetimeLimitSeconds`<sup>Required</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds"></a>

```typescript
public readonly transactionLifetimeLimitSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterAdvancedConfiguration">AdvancedClusterAdvancedConfiguration</a>

---


### AdvancedClusterBiConnectorConfigOutputReference <a name="AdvancedClusterBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterBiConnectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetReadPreference` <a name="resetReadPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.resetReadPreference"></a>

```typescript
public resetReadPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreferenceInput">readPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreference">readPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readPreferenceInput`<sup>Optional</sup> <a name="readPreferenceInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreferenceInput"></a>

```typescript
public readonly readPreferenceInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterBiConnectorConfig">AdvancedClusterBiConnectorConfig</a>

---


### AdvancedClusterConnectionStringsList <a name="AdvancedClusterConnectionStringsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.get"></a>

```typescript
public get(index: number): AdvancedClusterConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AdvancedClusterConnectionStringsOutputReference <a name="AdvancedClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.private">private</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList">AdvancedClusterConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateSrv">privateSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standard">standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standardSrv">standardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings">AdvancedClusterConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.private"></a>

```typescript
public readonly private: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: AdvancedClusterConnectionStringsPrivateEndpointList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList">AdvancedClusterConnectionStringsPrivateEndpointList</a>

---

##### `privateSrv`<sup>Required</sup> <a name="privateSrv" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.privateSrv"></a>

```typescript
public readonly privateSrv: string;
```

- *Type:* string

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

---

##### `standardSrv`<sup>Required</sup> <a name="standardSrv" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.standardSrv"></a>

```typescript
public readonly standardSrv: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStrings">AdvancedClusterConnectionStrings</a>

---


### AdvancedClusterConnectionStringsPrivateEndpointEndpointsList <a name="AdvancedClusterConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get"></a>

```typescript
public get(index: number): AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference <a name="AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints">AdvancedClusterConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterConnectionStringsPrivateEndpointEndpoints;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpoints">AdvancedClusterConnectionStringsPrivateEndpointEndpoints</a>

---


### AdvancedClusterConnectionStringsPrivateEndpointList <a name="AdvancedClusterConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.get"></a>

```typescript
public get(index: number): AdvancedClusterConnectionStringsPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AdvancedClusterConnectionStringsPrivateEndpointOutputReference <a name="AdvancedClusterConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList">AdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">srvConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString">srvShardOptimizedConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint">AdvancedClusterConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: AdvancedClusterConnectionStringsPrivateEndpointEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointEndpointsList">AdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `srvConnectionString`<sup>Required</sup> <a name="srvConnectionString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```typescript
public readonly srvConnectionString: string;
```

- *Type:* string

---

##### `srvShardOptimizedConnectionString`<sup>Required</sup> <a name="srvShardOptimizedConnectionString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString"></a>

```typescript
public readonly srvShardOptimizedConnectionString: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterConnectionStringsPrivateEndpoint;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterConnectionStringsPrivateEndpoint">AdvancedClusterConnectionStringsPrivateEndpoint</a>

---


### AdvancedClusterLabelsList <a name="AdvancedClusterLabelsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.get"></a>

```typescript
public get(index: number): AdvancedClusterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>[]

---


### AdvancedClusterLabelsOutputReference <a name="AdvancedClusterLabelsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterLabels">AdvancedClusterLabels</a>

---


### AdvancedClusterReplicationSpecsList <a name="AdvancedClusterReplicationSpecsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.get"></a>

```typescript
public get(index: number): AdvancedClusterReplicationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterReplicationSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>[]

---


### AdvancedClusterReplicationSpecsOutputReference <a name="AdvancedClusterReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionConfigs` <a name="putRegionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.putRegionConfigs"></a>

```typescript
public putRegionConfigs(value: IResolvable | AdvancedClusterReplicationSpecsRegionConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.putRegionConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>[]

---

##### `resetNumShards` <a name="resetNumShards" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resetNumShards"></a>

```typescript
public resetNumShards(): void
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.resetZoneName"></a>

```typescript
public resetZoneName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.containerId">containerId</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigs">regionConfigs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList">AdvancedClusterReplicationSpecsRegionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShardsInput">numShardsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigsInput">regionConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.containerId"></a>

```typescript
public readonly containerId: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regionConfigs`<sup>Required</sup> <a name="regionConfigs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigs"></a>

```typescript
public readonly regionConfigs: AdvancedClusterReplicationSpecsRegionConfigsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList">AdvancedClusterReplicationSpecsRegionConfigsList</a>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShardsInput"></a>

```typescript
public readonly numShardsInput: number;
```

- *Type:* number

---

##### `regionConfigsInput`<sup>Optional</sup> <a name="regionConfigsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.regionConfigsInput"></a>

```typescript
public readonly regionConfigsInput: IResolvable | AdvancedClusterReplicationSpecsRegionConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>[]

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterReplicationSpecs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecs">AdvancedClusterReplicationSpecs</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeEnabled` <a name="resetComputeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeEnabled"></a>

```typescript
public resetComputeEnabled(): void
```

##### `resetComputeMaxInstanceSize` <a name="resetComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeMaxInstanceSize"></a>

```typescript
public resetComputeMaxInstanceSize(): void
```

##### `resetComputeMinInstanceSize` <a name="resetComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeMinInstanceSize"></a>

```typescript
public resetComputeMinInstanceSize(): void
```

##### `resetComputeScaleDownEnabled` <a name="resetComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetComputeScaleDownEnabled"></a>

```typescript
public resetComputeScaleDownEnabled(): void
```

##### `resetDiskGbEnabled` <a name="resetDiskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resetDiskGbEnabled"></a>

```typescript
public resetDiskGbEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabledInput">computeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSizeInput">computeMaxInstanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSizeInput">computeMinInstanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabledInput">computeScaleDownEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabledInput">diskGbEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnabledInput`<sup>Optional</sup> <a name="computeEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabledInput"></a>

```typescript
public readonly computeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeMaxInstanceSizeInput`<sup>Optional</sup> <a name="computeMaxInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSizeInput"></a>

```typescript
public readonly computeMaxInstanceSizeInput: string;
```

- *Type:* string

---

##### `computeMinInstanceSizeInput`<sup>Optional</sup> <a name="computeMinInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSizeInput"></a>

```typescript
public readonly computeMinInstanceSizeInput: string;
```

- *Type:* string

---

##### `computeScaleDownEnabledInput`<sup>Optional</sup> <a name="computeScaleDownEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabledInput"></a>

```typescript
public readonly computeScaleDownEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskGbEnabledInput`<sup>Optional</sup> <a name="diskGbEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabledInput"></a>

```typescript
public readonly diskGbEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskIops` <a name="resetDiskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetDiskIops"></a>

```typescript
public resetDiskIops(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetEbsVolumeType"></a>

```typescript
public resetEbsVolumeType(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIopsInput">diskIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIopsInput`<sup>Optional</sup> <a name="diskIopsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIopsInput"></a>

```typescript
public readonly diskIopsInput: number;
```

- *Type:* number

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeTypeInput"></a>

```typescript
public readonly ebsVolumeTypeInput: string;
```

- *Type:* string

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSizeInput"></a>

```typescript
public readonly instanceSizeInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeEnabled` <a name="resetComputeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeEnabled"></a>

```typescript
public resetComputeEnabled(): void
```

##### `resetComputeMaxInstanceSize` <a name="resetComputeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeMaxInstanceSize"></a>

```typescript
public resetComputeMaxInstanceSize(): void
```

##### `resetComputeMinInstanceSize` <a name="resetComputeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeMinInstanceSize"></a>

```typescript
public resetComputeMinInstanceSize(): void
```

##### `resetComputeScaleDownEnabled` <a name="resetComputeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetComputeScaleDownEnabled"></a>

```typescript
public resetComputeScaleDownEnabled(): void
```

##### `resetDiskGbEnabled` <a name="resetDiskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resetDiskGbEnabled"></a>

```typescript
public resetDiskGbEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabledInput">computeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSizeInput">computeMaxInstanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSizeInput">computeMinInstanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabledInput">computeScaleDownEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabledInput">diskGbEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnabledInput`<sup>Optional</sup> <a name="computeEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabledInput"></a>

```typescript
public readonly computeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeMaxInstanceSizeInput`<sup>Optional</sup> <a name="computeMaxInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSizeInput"></a>

```typescript
public readonly computeMaxInstanceSizeInput: string;
```

- *Type:* string

---

##### `computeMinInstanceSizeInput`<sup>Optional</sup> <a name="computeMinInstanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSizeInput"></a>

```typescript
public readonly computeMinInstanceSizeInput: string;
```

- *Type:* string

---

##### `computeScaleDownEnabledInput`<sup>Optional</sup> <a name="computeScaleDownEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabledInput"></a>

```typescript
public readonly computeScaleDownEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskGbEnabledInput`<sup>Optional</sup> <a name="diskGbEnabledInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabledInput"></a>

```typescript
public readonly diskGbEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskIops` <a name="resetDiskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetDiskIops"></a>

```typescript
public resetDiskIops(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetEbsVolumeType"></a>

```typescript
public resetEbsVolumeType(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIopsInput">diskIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIopsInput`<sup>Optional</sup> <a name="diskIopsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIopsInput"></a>

```typescript
public readonly diskIopsInput: number;
```

- *Type:* number

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeTypeInput"></a>

```typescript
public readonly ebsVolumeTypeInput: string;
```

- *Type:* string

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSizeInput"></a>

```typescript
public readonly instanceSizeInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsList <a name="AdvancedClusterReplicationSpecsRegionConfigsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.get"></a>

```typescript
public get(index: number): AdvancedClusterReplicationSpecsRegionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterReplicationSpecsRegionConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>[]

---


### AdvancedClusterReplicationSpecsRegionConfigsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalyticsAutoScaling` <a name="putAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsAutoScaling"></a>

```typescript
public putAnalyticsAutoScaling(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---

##### `putAnalyticsSpecs` <a name="putAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsSpecs"></a>

```typescript
public putAnalyticsSpecs(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAnalyticsSpecs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAutoScaling"></a>

```typescript
public putAutoScaling(value: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---

##### `putElectableSpecs` <a name="putElectableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putElectableSpecs"></a>

```typescript
public putElectableSpecs(value: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putElectableSpecs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---

##### `putReadOnlySpecs` <a name="putReadOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putReadOnlySpecs"></a>

```typescript
public putReadOnlySpecs(value: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.putReadOnlySpecs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---

##### `resetAnalyticsAutoScaling` <a name="resetAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAnalyticsAutoScaling"></a>

```typescript
public resetAnalyticsAutoScaling(): void
```

##### `resetAnalyticsSpecs` <a name="resetAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAnalyticsSpecs"></a>

```typescript
public resetAnalyticsSpecs(): void
```

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetAutoScaling"></a>

```typescript
public resetAutoScaling(): void
```

##### `resetBackingProviderName` <a name="resetBackingProviderName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetBackingProviderName"></a>

```typescript
public resetBackingProviderName(): void
```

##### `resetElectableSpecs` <a name="resetElectableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetElectableSpecs"></a>

```typescript
public resetElectableSpecs(): void
```

##### `resetReadOnlySpecs` <a name="resetReadOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.resetReadOnlySpecs"></a>

```typescript
public resetReadOnlySpecs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs">analyticsSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs">electableSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs">readOnlySpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScalingInput">analyticsAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecsInput">analyticsSpecsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderNameInput">backingProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecsInput">electableSpecsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecsInput">readOnlySpecsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName">backingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyticsAutoScaling`<sup>Required</sup> <a name="analyticsAutoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling"></a>

```typescript
public readonly analyticsAutoScaling: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference</a>

---

##### `analyticsSpecs`<sup>Required</sup> <a name="analyticsSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs"></a>

```typescript
public readonly analyticsSpecs: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling"></a>

```typescript
public readonly autoScaling: AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference">AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference</a>

---

##### `electableSpecs`<sup>Required</sup> <a name="electableSpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs"></a>

```typescript
public readonly electableSpecs: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference</a>

---

##### `readOnlySpecs`<sup>Required</sup> <a name="readOnlySpecs" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs"></a>

```typescript
public readonly readOnlySpecs: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference</a>

---

##### `analyticsAutoScalingInput`<sup>Optional</sup> <a name="analyticsAutoScalingInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScalingInput"></a>

```typescript
public readonly analyticsAutoScalingInput: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---

##### `analyticsSpecsInput`<sup>Optional</sup> <a name="analyticsSpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecsInput"></a>

```typescript
public readonly analyticsSpecsInput: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScalingInput"></a>

```typescript
public readonly autoScalingInput: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsAutoScaling">AdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---

##### `backingProviderNameInput`<sup>Optional</sup> <a name="backingProviderNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderNameInput"></a>

```typescript
public readonly backingProviderNameInput: string;
```

- *Type:* string

---

##### `electableSpecsInput`<sup>Optional</sup> <a name="electableSpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecsInput"></a>

```typescript
public readonly electableSpecsInput: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `readOnlySpecsInput`<sup>Optional</sup> <a name="readOnlySpecsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecsInput"></a>

```typescript
public readonly readOnlySpecsInput: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionNameInput"></a>

```typescript
public readonly regionNameInput: string;
```

- *Type:* string

---

##### `backingProviderName`<sup>Required</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName"></a>

```typescript
public readonly backingProviderName: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterReplicationSpecsRegionConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigs">AdvancedClusterReplicationSpecsRegionConfigs</a>

---


### AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference <a name="AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskIops` <a name="resetDiskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetDiskIops"></a>

```typescript
public resetDiskIops(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetEbsVolumeType"></a>

```typescript
public resetEbsVolumeType(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIopsInput">diskIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIopsInput`<sup>Optional</sup> <a name="diskIopsInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIopsInput"></a>

```typescript
public readonly diskIopsInput: number;
```

- *Type:* number

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeTypeInput"></a>

```typescript
public readonly ebsVolumeTypeInput: string;
```

- *Type:* string

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSizeInput"></a>

```typescript
public readonly instanceSizeInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---


### AdvancedClusterTagsList <a name="AdvancedClusterTagsList" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.get"></a>

```typescript
public get(index: number): AdvancedClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>[]

---


### AdvancedClusterTagsOutputReference <a name="AdvancedClusterTagsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTags">AdvancedClusterTags</a>

---


### AdvancedClusterTimeoutsOutputReference <a name="AdvancedClusterTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { advancedCluster } from '@cdktf/provider-mongodbatlas'

new advancedCluster.AdvancedClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdvancedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.advancedCluster.AdvancedClusterTimeouts">AdvancedClusterTimeouts</a>

---



