# `cloudBackupSnapshotExportBucket` Submodule <a name="`cloudBackupSnapshotExportBucket` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSnapshotExportBucket <a name="CloudBackupSnapshotExportBucket" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportBucket } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket(scope: Construct, id: string, config: CloudBackupSnapshotExportBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig">CloudBackupSnapshotExportBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig">CloudBackupSnapshotExportBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetIamRoleId">resetIamRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetRoleId">resetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetServiceUrl">resetServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetIamRoleId` <a name="resetIamRoleId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetIamRoleId"></a>

```typescript
public resetIamRoleId(): void
```

##### `resetRoleId` <a name="resetRoleId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetRoleId"></a>

```typescript
public resetRoleId(): void
```

##### `resetServiceUrl` <a name="resetServiceUrl" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetServiceUrl"></a>

```typescript
public resetServiceUrl(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBackupSnapshotExportBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isConstruct"></a>

```typescript
import { cloudBackupSnapshotExportBucket } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformElement"></a>

```typescript
import { cloudBackupSnapshotExportBucket } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformResource"></a>

```typescript
import { cloudBackupSnapshotExportBucket } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.generateConfigForImport"></a>

```typescript
import { cloudBackupSnapshotExportBucket } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudBackupSnapshotExportBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudBackupSnapshotExportBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudBackupSnapshotExportBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBackupSnapshotExportBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.exportBucketId">exportBucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.iamRoleIdInput">iamRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.serviceUrlInput">serviceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.serviceUrl">serviceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportBucketId`<sup>Required</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.exportBucketId"></a>

```typescript
public readonly exportBucketId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string;
```

- *Type:* string

---

##### `iamRoleIdInput`<sup>Optional</sup> <a name="iamRoleIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.iamRoleIdInput"></a>

```typescript
public readonly iamRoleIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `serviceUrlInput`<sup>Optional</sup> <a name="serviceUrlInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.serviceUrlInput"></a>

```typescript
public readonly serviceUrlInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.serviceUrl"></a>

```typescript
public readonly serviceUrl: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupSnapshotExportBucketConfig <a name="CloudBackupSnapshotExportBucketConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportBucket } from '@cdktf/provider-mongodbatlas'

const cloudBackupSnapshotExportBucketConfig: cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#bucket_name CloudBackupSnapshotExportBucket#bucket_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#cloud_provider CloudBackupSnapshotExportBucket#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#project_id CloudBackupSnapshotExportBucket#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#iam_role_id CloudBackupSnapshotExportBucket#iam_role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.roleId">roleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#role_id CloudBackupSnapshotExportBucket#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.serviceUrl">serviceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#service_url CloudBackupSnapshotExportBucket#service_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#tenant_id CloudBackupSnapshotExportBucket#tenant_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#bucket_name CloudBackupSnapshotExportBucket#bucket_name}.

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#cloud_provider CloudBackupSnapshotExportBucket#cloud_provider}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#project_id CloudBackupSnapshotExportBucket#project_id}.

---

##### `iamRoleId`<sup>Optional</sup> <a name="iamRoleId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#iam_role_id CloudBackupSnapshotExportBucket#iam_role_id}.

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#role_id CloudBackupSnapshotExportBucket#role_id}.

---

##### `serviceUrl`<sup>Optional</sup> <a name="serviceUrl" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.serviceUrl"></a>

```typescript
public readonly serviceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#service_url CloudBackupSnapshotExportBucket#service_url}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportBucket.CloudBackupSnapshotExportBucketConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/cloud_backup_snapshot_export_bucket#tenant_id CloudBackupSnapshotExportBucket#tenant_id}.

---



