# `cloudBackupSnapshotRestoreJob` Submodule <a name="`cloudBackupSnapshotRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSnapshotRestoreJob <a name="CloudBackupSnapshotRestoreJob" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job mongodbatlas_cloud_backup_snapshot_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob(scope: Construct, id: string, config: CloudBackupSnapshotRestoreJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig">CloudBackupSnapshotRestoreJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig">CloudBackupSnapshotRestoreJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig">putDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryTypeConfig">resetDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryTypeConfig` <a name="putDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig"></a>

```typescript
public putDeliveryTypeConfig(value: CloudBackupSnapshotRestoreJobDeliveryTypeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.putDeliveryTypeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `resetDeliveryTypeConfig` <a name="resetDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetDeliveryTypeConfig"></a>

```typescript
public resetDeliveryTypeConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBackupSnapshotRestoreJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.generateConfigForImport"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudBackupSnapshotRestoreJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudBackupSnapshotRestoreJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudBackupSnapshotRestoreJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBackupSnapshotRestoreJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cancelled">cancelled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfig">deliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryUrl">deliveryUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expired">expired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.failed">failed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId">snapshotRestoreJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfigInput">deliveryTypeConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cancelled`<sup>Required</sup> <a name="cancelled" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.cancelled"></a>

```typescript
public readonly cancelled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deliveryTypeConfig`<sup>Required</sup> <a name="deliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfig"></a>

```typescript
public readonly deliveryTypeConfig: CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference</a>

---

##### `deliveryUrl`<sup>Required</sup> <a name="deliveryUrl" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryUrl"></a>

```typescript
public readonly deliveryUrl: string[];
```

- *Type:* string[]

---

##### `expired`<sup>Required</sup> <a name="expired" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expired"></a>

```typescript
public readonly expired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `failed`<sup>Required</sup> <a name="failed" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.failed"></a>

```typescript
public readonly failed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `snapshotRestoreJobId`<sup>Required</sup> <a name="snapshotRestoreJobId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId"></a>

```typescript
public readonly snapshotRestoreJobId: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `deliveryTypeConfigInput`<sup>Optional</sup> <a name="deliveryTypeConfigInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.deliveryTypeConfigInput"></a>

```typescript
public readonly deliveryTypeConfigInput: CloudBackupSnapshotRestoreJobDeliveryTypeConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupSnapshotRestoreJobConfig <a name="CloudBackupSnapshotRestoreJobConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.Initializer"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

const cloudBackupSnapshotRestoreJobConfig: cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryTypeConfig">deliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | delivery_type_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}.

---

##### `deliveryTypeConfig`<sup>Optional</sup> <a name="deliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.deliveryTypeConfig"></a>

```typescript
public readonly deliveryTypeConfig: CloudBackupSnapshotRestoreJobDeliveryTypeConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

delivery_type_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#delivery_type_config CloudBackupSnapshotRestoreJob#delivery_type_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}.

---

### CloudBackupSnapshotRestoreJobDeliveryTypeConfig <a name="CloudBackupSnapshotRestoreJobDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.Initializer"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

const cloudBackupSnapshotRestoreJobDeliveryTypeConfig: cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.automated">automated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#automated CloudBackupSnapshotRestoreJob#automated}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#download CloudBackupSnapshotRestoreJob#download}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc">oplogInc</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#oplog_inc CloudBackupSnapshotRestoreJob#oplog_inc}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs">oplogTs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#oplog_ts CloudBackupSnapshotRestoreJob#oplog_ts}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime">pointInTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#point_in_time CloudBackupSnapshotRestoreJob#point_in_time}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds">pointInTimeUtcSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#point_in_time_utc_seconds CloudBackupSnapshotRestoreJob#point_in_time_utc_seconds}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName">targetClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#target_cluster_name CloudBackupSnapshotRestoreJob#target_cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId">targetProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#target_project_id CloudBackupSnapshotRestoreJob#target_project_id}. |

---

##### `automated`<sup>Optional</sup> <a name="automated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.automated"></a>

```typescript
public readonly automated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#automated CloudBackupSnapshotRestoreJob#automated}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#download CloudBackupSnapshotRestoreJob#download}.

---

##### `oplogInc`<sup>Optional</sup> <a name="oplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc"></a>

```typescript
public readonly oplogInc: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#oplog_inc CloudBackupSnapshotRestoreJob#oplog_inc}.

---

##### `oplogTs`<sup>Optional</sup> <a name="oplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs"></a>

```typescript
public readonly oplogTs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#oplog_ts CloudBackupSnapshotRestoreJob#oplog_ts}.

---

##### `pointInTime`<sup>Optional</sup> <a name="pointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime"></a>

```typescript
public readonly pointInTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#point_in_time CloudBackupSnapshotRestoreJob#point_in_time}.

---

##### `pointInTimeUtcSeconds`<sup>Optional</sup> <a name="pointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds"></a>

```typescript
public readonly pointInTimeUtcSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#point_in_time_utc_seconds CloudBackupSnapshotRestoreJob#point_in_time_utc_seconds}.

---

##### `targetClusterName`<sup>Optional</sup> <a name="targetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName"></a>

```typescript
public readonly targetClusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#target_cluster_name CloudBackupSnapshotRestoreJob#target_cluster_name}.

---

##### `targetProjectId`<sup>Optional</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId"></a>

```typescript
public readonly targetProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/cloud_backup_snapshot_restore_job#target_project_id CloudBackupSnapshotRestoreJob#target_project_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference <a name="CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer"></a>

```typescript
import { cloudBackupSnapshotRestoreJob } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated">resetAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc">resetOplogInc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs">resetOplogTs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime">resetPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds">resetPointInTimeUtcSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName">resetTargetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId">resetTargetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomated` <a name="resetAutomated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated"></a>

```typescript
public resetAutomated(): void
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload"></a>

```typescript
public resetDownload(): void
```

##### `resetOplogInc` <a name="resetOplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc"></a>

```typescript
public resetOplogInc(): void
```

##### `resetOplogTs` <a name="resetOplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs"></a>

```typescript
public resetOplogTs(): void
```

##### `resetPointInTime` <a name="resetPointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime"></a>

```typescript
public resetPointInTime(): void
```

##### `resetPointInTimeUtcSeconds` <a name="resetPointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds"></a>

```typescript
public resetPointInTimeUtcSeconds(): void
```

##### `resetTargetClusterName` <a name="resetTargetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName"></a>

```typescript
public resetTargetClusterName(): void
```

##### `resetTargetProjectId` <a name="resetTargetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId"></a>

```typescript
public resetTargetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput">automatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput">downloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput">oplogIncInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput">oplogTsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput">pointInTimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput">pointInTimeUtcSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput">targetClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput">targetProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated">automated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc">oplogInc</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs">oplogTs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime">pointInTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds">pointInTimeUtcSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName">targetClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId">targetProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatedInput`<sup>Optional</sup> <a name="automatedInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput"></a>

```typescript
public readonly automatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput"></a>

```typescript
public readonly downloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oplogIncInput`<sup>Optional</sup> <a name="oplogIncInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput"></a>

```typescript
public readonly oplogIncInput: number;
```

- *Type:* number

---

##### `oplogTsInput`<sup>Optional</sup> <a name="oplogTsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput"></a>

```typescript
public readonly oplogTsInput: number;
```

- *Type:* number

---

##### `pointInTimeInput`<sup>Optional</sup> <a name="pointInTimeInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput"></a>

```typescript
public readonly pointInTimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pointInTimeUtcSecondsInput`<sup>Optional</sup> <a name="pointInTimeUtcSecondsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput"></a>

```typescript
public readonly pointInTimeUtcSecondsInput: number;
```

- *Type:* number

---

##### `targetClusterNameInput`<sup>Optional</sup> <a name="targetClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput"></a>

```typescript
public readonly targetClusterNameInput: string;
```

- *Type:* string

---

##### `targetProjectIdInput`<sup>Optional</sup> <a name="targetProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput"></a>

```typescript
public readonly targetProjectIdInput: string;
```

- *Type:* string

---

##### `automated`<sup>Required</sup> <a name="automated" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated"></a>

```typescript
public readonly automated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oplogInc`<sup>Required</sup> <a name="oplogInc" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc"></a>

```typescript
public readonly oplogInc: number;
```

- *Type:* number

---

##### `oplogTs`<sup>Required</sup> <a name="oplogTs" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs"></a>

```typescript
public readonly oplogTs: number;
```

- *Type:* number

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime"></a>

```typescript
public readonly pointInTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pointInTimeUtcSeconds`<sup>Required</sup> <a name="pointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds"></a>

```typescript
public readonly pointInTimeUtcSeconds: number;
```

- *Type:* number

---

##### `targetClusterName`<sup>Required</sup> <a name="targetClusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName"></a>

```typescript
public readonly targetClusterName: string;
```

- *Type:* string

---

##### `targetProjectId`<sup>Required</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId"></a>

```typescript
public readonly targetProjectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBackupSnapshotRestoreJobDeliveryTypeConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotRestoreJob.CloudBackupSnapshotRestoreJobDeliveryTypeConfig">CloudBackupSnapshotRestoreJobDeliveryTypeConfig</a>

---



